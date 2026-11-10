"""
scripts/migrate_remove_image_hash.py
Μαζική μετονομασία αρχείων εικόνων και ενημέρωση αναφορών ώστε να εξαλειφθεί
το σύμβολο '#' από τα ονόματα αρχείων εικόνας στο 4gnosin.github.io.
"""

from __future__ import annotations

import glob
import os
import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")


def run_migration():
    base_dir = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == "scripts" else Path(__file__).resolve().parent
    os.chdir(str(base_dir))

    print("=" * 68)
    print("  4GNOSIN: ΜΕΤΑΝΑΣΤΕΥΣΗ ΟΝΟΜΑΤΩΝ ΕΙΚΟΝΩΝ (ΑΦΑΙΡΕΣΗ '#')")
    print("=" * 68)

    # 1. Rename files on disk in site/images
    images_dir = Path("site/images")
    renamed_images = 0
    all_image_files = [f for f in images_dir.rglob("*") if f.is_file() and "#" in f.name]

    print(f"1. Εντοπίστηκαν {len(all_image_files)} αρχεία εικόνων με '#' προς μετονομασία...")
    for f in all_image_files:
        new_name = f.name.replace("_#", "_").replace("#", "")
        target = f.with_name(new_name)
        if target.exists() and target != f:
            print(f"   ⚠️ Προσοχή: Το αρχείο {target} υπάρχει ήδη. Παράκαμψη: {f}")
            continue
        f.rename(target)
        renamed_images += 1

    print(f"   ✅ Μετονομάστηκαν επιτυχώς {renamed_images} αρχεία εικόνων.")

    # 2. Update manifest.json files
    manifest_files = list(images_dir.rglob("manifest.json"))
    updated_manifests = 0
    for mf in manifest_files:
        text = mf.read_text(encoding="utf-8")
        if "_#" in text or "#" in text:
            # Replace file entries: _#12345_ -> _12345_
            new_text = re.sub(r'_#(?=\d+)', '_', text)
            if new_text != text:
                mf.write_text(new_text, encoding="utf-8")
                updated_manifests += 1

    print(f"2. Ενημερώθηκαν {updated_manifests} αρχεία manifest.json.")

    # 3. Update exercise .js files
    exercises_dir = Path("site/exercises")
    exercise_files = list(exercises_dir.rglob("*.js"))
    updated_exercises = 0
    total_replacements = 0

    for ef in exercise_files:
        text = ef.read_text(encoding="utf-8")
        if "_#" in text:
            new_text, count = re.subn(r'_#(?=\d+)', '_', text)
            if count > 0:
                ef.write_text(new_text, encoding="utf-8")
                updated_exercises += 1
                total_replacements += count

    print(f"3. Ενημερώθηκαν {total_replacements} αναφορές σε {updated_exercises} αρχεία ασκήσεων (.js).")

    # 4. Update data/chapters/*.md files
    chapters_dir = Path("data/chapters")
    updated_chapters = 0
    if chapters_dir.exists():
        for cf in chapters_dir.glob("*.md"):
            text = cf.read_text(encoding="utf-8")
            if "_#" in text:
                new_text, count = re.subn(r'_#(?=\d+)', '_', text)
                if count > 0:
                    cf.write_text(new_text, encoding="utf-8")
                    updated_chapters += 1

    print(f"4. Ενημερώθηκαν {updated_chapters} αρχεία κεφαλαίων (.md).")

    # 5. Update README.md if needed
    readme_path = Path("README.md")
    if readme_path.exists():
        text = readme_path.read_text(encoding="utf-8")
        new_text = text.replace("b_antoxi_ch01_%2318826_fig01.webp", "b_antoxi_ch01_18826_fig01.webp")
        new_text = new_text.replace("b_antoxi_ch01_#18826_fig01.webp", "b_antoxi_ch01_18826_fig01.webp")
        if new_text != text:
            readme_path.write_text(new_text, encoding="utf-8")
            print("5. Ενημερώθηκε το README.md.")

    print("=" * 68)
    print("  Η ΜΕΤΑΝΑΣΤΕΥΣΗ ΟΛΟΚΛΗΡΩΘΗΚΕ ΕΠΙΤΥΧΩΣ!")
    print("=" * 68)


if __name__ == "__main__":
    run_migration()
