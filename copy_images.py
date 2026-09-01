import os
import glob
import shutil

source_dir = r"C:\Users\786\.gemini\antigravity-ide\brain\341c74d8-86ea-439f-871c-c862bf6f4898"
dest_dir = r"c:\Users\786\Desktop\Cava menu\images"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

files_to_copy = {
    "cava_chicken_rice_bowl_*.jpg": "chicken_bowl.jpg",
    "cava_spicy_lamb_bowl_*.jpg": "lamb_bowl.jpg",
    "cava_salmon_bowl_*.jpg": "salmon_bowl.jpg",
    "cava_falafel_bowl_*.jpg": "falafel_bowl.jpg"
}

for pattern, new_name in files_to_copy.items():
    matches = glob.glob(os.path.join(source_dir, pattern))
    if matches:
        shutil.copy(matches[0], os.path.join(dest_dir, new_name))
        print(f"Copied {new_name}")
