import os
import re
from bs4 import BeautifulSoup

def convert_html_to_jsx(html_content, component_name):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Target the main content area (div with id="root")
    root = soup.find('div', id='root')
    if not root:
        root = soup.body
        
    # Remove script tags and style tags within the root
    for tag in root.find_all(['script', 'style']):
        tag.decompose()

    # Convert internal <a> to <Link> using BeautifulSoup
    for a in root.find_all('a'):
        href = a.get('href', '')
        if href.endswith('.html') or href == 'index.html' or href == '/':
            internal_path = href.replace('.html', '')
            if internal_path == 'index': internal_path = ''
            if not internal_path.startswith('/'): internal_path = '/' + internal_path
            
            a.name = 'routerlink'
            a['to'] = internal_path
            if 'href' in a.attrs:
                del a['href']

    # Convert to string
    jsx_content = str(root)

    # 1. Replace class with className
    jsx_content = jsx_content.replace('class=', 'className=')

    # 2. Fix self-closing tags
    for tag in ['img', 'br', 'hr', 'input']:
        jsx_content = re.sub(f'<{tag}([^>]*)>', f'<{tag}\\1 />', jsx_content)
    jsx_content = jsx_content.replace('//>', '/>')

    # 3. Update WhatsApp number (+254 750 600235)
    jsx_content = re.sub(r'254\d{9}', '254750600235', jsx_content)
    jsx_content = re.sub(r'\+254\d{9}', '+254750600235', jsx_content)
    jsx_content = jsx_content.replace('254 782 222 745', '+254 750 600 235')

    # 4. Final tag swaps
    jsx_content = jsx_content.replace('<routerlink', '<Link').replace('</routerlink>', '</Link>')

    # 5. Asset paths
    jsx_content = re.sub(r'\./[^_]+_files/', '/assets/', jsx_content)

    # 6. Inline styles
    def style_replacer(match):
        style_str = match.group(1)
        styles = style_str.split(';')
        style_dict = []
        for s in styles:
            if ':' in s:
                try:
                    k, v = s.split(':', 1)
                    k = re.sub(r'-([a-z])', lambda x: x.group(1).upper(), k.strip())
                    style_dict.append(f'{k}: "{v.strip()}"')
                except: continue
        return 'style={{' + ', '.join(style_dict) + '}}'

    jsx_content = re.sub(r'style="([^"]+)"', style_replacer, jsx_content)
    
    # 7. Inputs
    jsx_content = jsx_content.replace('value=', 'defaultValue=')
    
    # 8. Remove the outer <div id="root">
    inner_match = re.search(r'<div[^>]*id="root"[^>]*>(.*)</div>', jsx_content, re.DOTALL)
    if inner_match:
        jsx_content = inner_match.group(1)

    component_code = f"""
import React from 'react';
import {{ Link }} from 'react-router-dom';

const {component_name} = () => {{
  return (
    <div className="page-wrapper">
      {jsx_content}
    </div>
  );
}}

export default {component_name};
"""
    return component_code

files = {
    'index.html': 'Home',
    'products.html': 'Products',
    'contact.html': 'Contact',
    'faq.html': 'FAQ',
    'size-guide.html': 'SizeGuide',
    'use-cases.html': 'UseCases',
    'benefits.html': 'Benefits'
}

legacy_dir = 'legacy_static'
output_dir = 'src/pages'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for filename, comp_name in files.items():
    path = os.path.join(legacy_dir, filename)
    if os.path.exists(path):
        print(f"Converting {filename}...")
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            jsx = convert_html_to_jsx(content, comp_name)
            with open(os.path.join(output_dir, f"{comp_name}.jsx"), 'w', encoding='utf-8') as out:
                out.write(jsx)

print("Conversion complete!")
