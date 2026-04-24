import os
import shutil

# Copy CSS
src_css = r'c:\code project\rototank\legacy_static\index_files\index-Bj97ZEHt.css'
dest_css = r'c:\code project\rototank\src\index.css'
if os.path.exists(src_css):
    shutil.copy(src_css, dest_css)
    print(f"Copied CSS to {dest_css}")

# Copy images and other assets to public/assets
public_assets = r'c:\code project\rototank\public\assets'
if not os.path.exists(public_assets):
    os.makedirs(public_assets)

legacy_dir = r'c:\code project\rototank\legacy_static'
for folder in os.listdir(legacy_dir):
    if folder.endswith('_files'):
        folder_path = os.path.join(legacy_dir, folder)
        for file in os.listdir(folder_path):
            if file.endswith(('.png', '.jpg', '.jpeg', '.svg', '.gif', '.ico', '.webp')):
                shutil.copy(os.path.join(folder_path, file), os.path.join(public_assets, file))
                print(f"Copied {file} to {public_assets}")
