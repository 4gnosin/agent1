"""
optimize_images_to_webp.py
Βελτιστοποίηση εικόνων σε WebP & Αυτόματη ενημέρωση αναφορών στο 4gnosin.github.io
"""

from __future__ import annotations

import os
import sys
import glob
import re
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == "scripts" else Path(__file__).resolve().parent
try:
    os.chdir(str(BASE_DIR))
except Exception:
    pass

try:
    from PIL import Image
except ImportError:
    print("⚠️ Η βιβλιοθήκη Pillow δεν είναι εγκατεστημένη.")
    print("Εγκατάσταση μέσω pip...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image


def optimize_images():
    start_time = time.time()
    images_dir = os.path.join("site", "images")
    
    print("=" * 68)
    print("       4GNOSIN - ΒΕΛΤΙΣΤΟΠΟΙΗΣΗ ΕΙΚΟΝΩΝ ΣΕ WEBP (PIL / METHOD 6)")
    print("=" * 68)
    print("1. ΣΑΡΩΣΗ ΦΑΚΕΛΟΥ ΕΙΚΟΝΩΝ (site/images)...")
    
    png_files = glob.glob(os.path.join(images_dir, "**", "*.png"), recursive=True)
    jpg_files = glob.glob(os.path.join(images_dir, "**", "*.jpg"), recursive=True)
    all_files = png_files + jpg_files
    
    total_files = len(all_files)
    if total_files == 0:
        print("✅ Δεν βρέθηκαν ασυμπίεστες εικόνες PNG/JPG. Όλες είναι ήδη σε WebP!")
        webp_files = glob.glob(os.path.join(images_dir, "**", "*.webp"), recursive=True)
        total_webp_mb = sum(os.path.getsize(f) for f in webp_files) / (1024 * 1024)
        print(f"📊 Σύνολο βελτιστοποιημένων εικόνων WebP: {len(webp_files)} ({total_webp_mb:.2f} MB)")
        print("=" * 68)
        return
        
    initial_bytes = sum(os.path.getsize(f) for f in all_files)
    initial_mb = initial_bytes / (1024 * 1024)
    print(f"   Βρέθηκαν {total_files} εικόνες PNG/JPG προς μετατροπή (Συνολικός όγκος: {initial_mb:.2f} MB).\n")

    print("2. ΜΕΤΑΤΡΟΠΗ ΣΕ WEBP (Ποιότητα=85, Μέθοδος=6)...")
    
    converted_count = 0
    errors = []
    
    for idx, img_path in enumerate(all_files, 1):
        base, ext = os.path.splitext(img_path)
        webp_path = base + ".webp"
        
        try:
            with Image.open(img_path) as img:
                img.save(webp_path, "WEBP", quality=85, method=6)
            
            if os.path.exists(webp_path) and os.path.getsize(webp_path) > 0:
                os.remove(img_path)
                converted_count += 1
            else:
                errors.append((img_path, "Το αρχείο WebP δεν δημιουργήθηκε σωστά"))
        except Exception as e:
            errors.append((img_path, str(e)))
            
        if idx % 100 == 0 or idx == total_files:
            print(f"   • Ολοκληρώθηκαν {idx}/{total_files} εικόνες...")
            
    print(f"\n   ✅ Επιτυχής μετατροπή & καθαρισμός: {converted_count}/{total_files} εικόνες.")
    if errors:
        print(f"   ⚠️ Εμφανίστηκαν {len(errors)} σφάλματα κατά τη μετατροπή.")

    # Μέτρηση νέου μεγέθους
    webp_files = glob.glob(os.path.join(images_dir, "**", "*.webp"), recursive=True)
    final_bytes = sum(os.path.getsize(f) for f in webp_files)
    final_mb = final_bytes / (1024 * 1024)
    saved_mb = initial_mb - (initial_bytes - sum(os.path.getsize(os.path.splitext(f)[0] + ".webp") for f in all_files if os.path.exists(os.path.splitext(f)[0] + ".webp"))) / (1024 * 1024)

    print("\n3. ΕΝΗΜΕΡΩΣΗ ΑΝΑΦΟΡΩΝ ΣΤΑ ΑΡΧΕΙΑ ΑΣΚΗΣΕΩΝ (.png -> .webp)...")
    
    exercise_files = glob.glob(os.path.join("site", "exercises", "**", "*.js"), recursive=True)
    updated_ex_files = 0
    total_replacements = 0
    
    for ex_path in exercise_files:
        try:
            with open(ex_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            if ".png" in content or ".jpg" in content:
                new_content, count1 = re.subn(r'images/([^"\']+?)\.png', r'images/\1.webp', content)
                new_content, count2 = re.subn(r'images/([^"\']+?)\.jpg', r'images/\1.webp', new_content)
                repls = count1 + count2
                if repls > 0:
                    with open(ex_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    updated_ex_files += 1
                    total_replacements += repls
        except Exception as e:
            print(f"   ⚠️ Σφάλμα στο {ex_path}: {e}")
            
    print(f"   ✅ Ενημερώθηκαν {total_replacements} αναφορές σε {updated_ex_files} αρχεία ασκήσεων.")

    print("\n4. ΕΛΕΓΧΟΣ AUTOMATIC WEBP FALLBACK ΣΤΟ APP.JS...")
    app_js_path = os.path.join("site", "js", "app.js")
    if os.path.exists(app_js_path):
        try:
            with open(app_js_path, "r", encoding="utf-8") as f:
                app_content = f.read()
                
            if "replace(/\\.(png|jpg|jpeg)$/i, \".webp\")" not in app_content:
                app_content = re.sub(
                    r'function imgUrl\(src\)\s*\{\s*if\s*\(!src\)\s*return\s*""\s*;\s*return\s*String\(src\)',
                    'function imgUrl(src) {\n    if (!src) return "";\n    src = String(src).replace(/\\.(png|jpg|jpeg)$/i, ".webp");\n    return String(src)',
                    app_content
                )
                with open(app_js_path, "w", encoding="utf-8") as f:
                    f.write(app_content)
                print("   ✅ Το app.js ρυθμίστηκε ώστε να επιλύει αυτόματα κάθε εικόνα σε .webp.")
            else:
                print("   ✅ Το app.js διαθέτει ήδη αυτόματη επίλυση σε .webp.")
        except Exception as e:
            print(f"   ⚠️ Σφάλμα ενημέρωσης app.js: {e}")

    elapsed = time.time() - start_time
    print("\n" + "=" * 68)
    print("                    ΣΥΝΟΨΗ ΒΕΛΤΙΣΤΟΠΟΙΗΣΗΣ")
    print("=" * 68)
    print(f"  Αρχικός Όγκος Εικόνων:    {initial_mb:.2f} MB")
    print(f"  Νέος Συνολικός Όγκος:     {final_mb:.2f} MB")
    print(f"  Συνολικός Χρόνος:         {elapsed:.1f} δευτερόλεπτα")
    print("=" * 68)


if __name__ == "__main__":
    optimize_images()
