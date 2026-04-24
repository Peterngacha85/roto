import os

def process_file(filename):
    if not os.path.exists(filename):
        print(f"Skipping {filename}, not found.")
        return
        
    print(f"Processing {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Asset folder replacements
    new_asset_folders = {
        "home page_files": "index_files",
        "contact page_files": "contact_files",
        "faq page_files": "faq_files",
        "size guide_files": "size-guide_files",
        "tank page or product page_files": "products_files",
        "use cases page_files": "use-cases_files",
        "why roto page_files": "benefits_files",
    }
    for old_folder, new_folder in new_asset_folders.items():
        content = content.replace("./" + old_folder + "/", "./" + new_folder + "/")
        content = content.replace(old_folder + "/", new_folder + "/")

    # 2. Internal link replacements (specific to general)
    # Note: Using quotes to ensure we don't break favicons or sub-paths
    link_replacements = {
        "https://www.rototankonline.com/products": "products.html",
        "https://www.rototankonline.com/benefits": "benefits.html",
        "https://www.rototankonline.com/use-cases": "use-cases.html",
        "https://www.rototankonline.com/size-guide": "size-guide.html",
        "https://www.rototankonline.com/faq": "faq.html",
        "https://www.rototankonline.com/contact": "contact.html",
        "https://www.rototankonline.com/\"": "index.html\"",
        "https://www.rototankonline.com/'": "index.html'",
        "https://www.rototankonline.com/ ": "index.html ",
    }
    for old, new in link_replacements.items():
        content = content.replace(old, new)
    
    # Also handle rototankssales.com which appears in some places
    content = content.replace("https://www.rototankssales.com/\"", "index.html\"")
    content = content.replace("https://www.rototankssales.com/ ", "index.html ")

    # 3. Phone number replacements
    # Old number: 254782222745
    # New number: 254750600235
    content = content.replace("254782222745", "254750600235")
    
    # Visible text formatting for the new number as requested: +254 750 600235
    # We'll look for the new digits and format them if they are in a visible context
    content = content.replace(">254750600235<", ">+254 750 600235<")
    content = content.replace(" 254750600235", " +254 750 600235")
    # Also handle common phone formats if any
    content = content.replace("+254 782 222 745", "+254 750 600235")
    content = content.replace("+254 782 222745", "+254 750 600235")
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

files_to_process = [
    "index.html",
    "contact.html",
    "faq.html",
    "size-guide.html",
    "products.html",
    "use-cases.html",
    "benefits.html"
]

for f in files_to_process:
    process_file(f)

print("Processing complete.")
