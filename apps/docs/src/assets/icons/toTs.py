import os
import re

# --- Config ---
input_dir = "./solid"
output_dir = "./output"

# Créer le dossier de sortie s'il n'existe pas
os.makedirs(output_dir, exist_ok=True)

def minify_svg(svg_content: str) -> str:
    svg = re.sub(r"\s{2,}", " ", svg_content)
    svg = re.sub(r"\n", "", svg)
    svg = re.sub(r">\s+<", "><", svg)
    svg = re.sub(r"\s*=\s*", "=", svg)
    return svg.strip()

def to_camel_case(name: str) -> str:
    parts = re.split(r"[^a-zA-Z0-9]+", name)
    return parts[0].lower() + ''.join(p.capitalize() for p in parts[1:]) if parts else "icon"

def sanitize_ts_filename(name: str) -> str:
    return name.replace("_", "-") + ".ts"

# --- Parcours des dossiers ---
for root, _, files in os.walk(input_dir):
    svg_files = [f for f in files if f.endswith(".svg")]
    if not svg_files:
        continue

    relative_path = os.path.relpath(root, input_dir)
    folder_name = os.path.basename(relative_path)
    ts_filename = sanitize_ts_filename(folder_name)
    ts_path = os.path.join(output_dir, ts_filename)

    with open(ts_path, "w", encoding="utf-8") as out:
        for svg_file in svg_files:
            svg_path = os.path.join(root, svg_file)
            with open(svg_path, "r", encoding="utf-8") as f:
                content = f.read()
                minimized = minify_svg(content)
                var_name = to_camel_case(os.path.splitext(svg_file)[0])
                out.write(f"export const {var_name} = `{minimized}`;\n")

    print(f"✅ Généré : {ts_path}")