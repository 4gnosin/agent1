"""
scripts/build_scripts_catalog.py
Δημιουργεί το αρχείο site/content/scripts_catalog.js με τη λίστα των scripts
ανά μάθημα, επιτρέποντας lazy loading χωρίς fetch (πλήρης συμβατότητα με file:/// και web).
"""

from __future__ import annotations

import json
from pathlib import Path


def natural_sort_key(s: str):
    import re
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]


def build_catalog():
    base_dir = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == "scripts" else Path(__file__).resolve().parent
    site_dir = base_dir / "site"

    catalog_path = site_dir / "content" / "catalog.js"
    if not catalog_path.is_file():
        raise FileNotFoundError(f"Δεν βρέθηκε το catalog.js: {catalog_path}")

    # Χαρτογράφηση subject id -> folder
    # Για το thermo: route id "thermo" αντιστοιχεί στο φάκελο "thermod"
    # Για το thermo-lab: route id "thermo-lab" αντιστοιχεί στο φάκελο "thermo-lab"
    subject_map: dict[str, tuple[str, str]] = {}
    
    # 1. Βρες όλα τα subjects από τα περιεχόμενα
    # b grade
    for p in (site_dir / "exercises" / "b").glob("*"):
        if p.is_dir():
            subj_id = "thermo" if p.name == "thermod" else p.name
            subject_map[subj_id] = ("b", p.name)
    # c grade
    for p in (site_dir / "exercises" / "c").glob("*"):
        if p.is_dir():
            subject_map[p.name] = ("c", p.name)

    # Έλεγχος και για thermo-lab (μόνο content)
    if (site_dir / "content" / "b" / "thermo-lab").is_dir():
        subject_map["thermo-lab"] = ("b", "thermo-lab")

    scripts_by_subject: dict[str, list[str]] = {}

    for subj_id, (grade, folder_name) in sorted(subject_map.items()):
        scripts: list[str] = []
        
        # 1. Content scripts (θεωρία)
        content_subj_dir = site_dir / "content" / grade / folder_name
        if content_subj_dir.is_dir():
            all_content = sorted(
                content_subj_dir.glob("chapter-*/*.js"),
                key=lambda p: natural_sort_key(p.as_posix())
            )
            for cp in all_content:
                rel = cp.relative_to(site_dir).as_posix()
                scripts.append(rel)

        # 2. Exercise scripts (ασκήσεις)
        ex_subj_dir = site_dir / "exercises" / grade / folder_name
        if ex_subj_dir.is_dir():
            # Πρώτα τα groups.js κάθε κεφαλαίου, μετά τα επιμέρους θέματα
            all_ex = sorted(
                ex_subj_dir.glob("chapter-*/*.js"),
                key=lambda p: (natural_sort_key(p.parent.as_posix()), 0 if p.name == "groups.js" else 1, natural_sort_key(p.name))
            )
            for ep in all_ex:
                rel = ep.relative_to(site_dir).as_posix()
                scripts.append(rel)

        scripts_by_subject[subj_id] = scripts

    out_file = site_dir / "content" / "scripts_catalog.js"
    js_content = (
        "// Αυτόματα παραγόμενος κατάλογος scripts ανά μάθημα για On-Demand Lazy Loading (χωρίς fetch)\n"
        "// Υποστηρίζει άμεση εκτέλεση σε file:/// και GitHub Pages.\n"
        "window.SUBJECT_SCRIPTS = " + json.dumps(scripts_by_subject, ensure_ascii=False, indent=2) + ";\n"
    )
    out_file.write_text(js_content, encoding="utf-8")
    print(f"✅ Δημιουργήθηκε επιτυχώς το {out_file} με {len(scripts_by_subject)} μαθήματα.")
    for s_id, s_list in sorted(scripts_by_subject.items()):
        print(f"   • {s_id}: {len(s_list)} scripts")


if __name__ == "__main__":
    build_catalog()
