"""
scripts/build_bundles.py
========================
Δημιουργεί αυτόματα ενιαία αρχεία bundle ανά μάθημα (site/bundles/<subject>.bundle.js)
και ενημερώνει το site/content/scripts_catalog.js για αστραπιαίο On-Demand Lazy Loading.

Πλεονεκτήματα:
1. Η αρχική σελίδα παραμένει ελαφριά και ταχύτατη (δεν φορτώνει κανένα μάθημα).
2. Κάθε μάθημα φορτώνεται με 1 μόνο αίτημα HTTP (αντί για 80-110 μεμονωμένα αρχεία),
   ελαχιστοποιώντας την καθυστέρηση σε κλάσματα δευτερολέπτου.
3. Πλήρης συμβατότητα τόσο με file:/// (χωρίς web server) όσο και με GitHub Pages / Web.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path


def natural_sort_key(s: str):
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r"(\d+)", s)]


def collect_subject_scripts(site_dir: Path) -> dict[str, list[str]]:
    """Εντοπίζει και ταξινομεί όλα τα αρχεία scripts ανά μάθημα."""
    subject_map: dict[str, tuple[str, str]] = {}

    # Εντοπισμός μαθημάτων από exercises και content
    for grade in ("b", "c"):
        for subfolder in ("exercises", "content"):
            base = site_dir / subfolder / grade
            if not base.is_dir():
                continue
            for p in base.glob("*"):
                if p.is_dir():
                    subj_id = "thermo" if p.name == "thermod" else p.name
                    subject_map[subj_id] = (grade, p.name)

    scripts_by_subject: dict[str, list[str]] = {}

    for subj_id, (grade, folder_name) in sorted(subject_map.items()):
        scripts: list[str] = []

        # 1. Content scripts (θεωρία)
        content_subj_dir = site_dir / "content" / grade / folder_name
        if content_subj_dir.is_dir():
            all_content = sorted(
                content_subj_dir.glob("chapter-*/*.js"),
                key=lambda p: natural_sort_key(p.as_posix()),
            )
            for cp in all_content:
                rel = cp.relative_to(site_dir).as_posix()
                scripts.append(rel)

        # 2. Exercise scripts (ασκήσεις - πρώτα groups.js ανά κεφάλαιο, μετά θέματα)
        ex_subj_dir = site_dir / "exercises" / grade / folder_name
        if ex_subj_dir.is_dir():
            all_ex = sorted(
                ex_subj_dir.glob("chapter-*/*.js"),
                key=lambda p: (
                    natural_sort_key(p.parent.as_posix()),
                    0 if p.name == "groups.js" else 1,
                    natural_sort_key(p.name),
                ),
            )
            for ep in all_ex:
                rel = ep.relative_to(site_dir).as_posix()
                scripts.append(rel)

        # 3. Animation scripts (προσομοιώσεις & animations)
        anim_subj_dir = site_dir / "animations" / grade / folder_name
        if anim_subj_dir.is_dir():
            all_anim = sorted(
                anim_subj_dir.glob("**/*.js"),
                key=lambda p: natural_sort_key(p.name),
            )
            for ap in all_anim:
                rel = ap.relative_to(site_dir).as_posix()
                scripts.append(rel)

        scripts_by_subject[subj_id] = scripts

    return scripts_by_subject


def build_bundles(use_raw: bool = False) -> None:
    base_dir = (
        Path(__file__).resolve().parent.parent
        if Path(__file__).resolve().parent.name == "scripts"
        else Path(__file__).resolve().parent
    )
    site_dir = base_dir / "site"
    bundles_dir = site_dir / "bundles"
    bundles_dir.mkdir(parents=True, exist_ok=True)

    catalog_path = site_dir / "content" / "catalog.js"
    if not catalog_path.is_file():
        raise FileNotFoundError(f"Δεν βρέθηκε το catalog.js: {catalog_path}")

    raw_scripts_by_subject = collect_subject_scripts(site_dir)
    bundled_scripts_by_subject: dict[str, list[str]] = {}

    print("=" * 72)
    print("  4gnosin - Κατασκευή Bundles Μαθημάτων (High-Speed Lazy Loading)")
    print("=" * 72)

    total_orig_files = 0
    total_bundle_size = 0

    for subj_id, script_list in sorted(raw_scripts_by_subject.items()):
        total_orig_files += len(script_list)
        bundle_file = bundles_dir / f"{subj_id}.bundle.js"

        chunks: list[str] = [
            f"// ============================================================================",
            f"// 4gnosin - Auto-generated Bundle for: {subj_id}",
            f"// Συνενώνει {len(script_list)} αρχεία (θεωρία, ομάδες, ασκήσεις, animations)",
            f"// Υποστηρίζει file:/// και web.",
            f"// ============================================================================",
            ";",
        ]

        for rel_p in script_list:
            src_p = site_dir / rel_p
            if not src_p.is_file():
                print(f"⚠️ Προειδοποίηση: Το αρχείο {rel_p} δεν βρέθηκε.")
                continue
            code = src_p.read_text(encoding="utf-8").strip()
            chunks.append(f"\n// --- Source: {rel_p} ---\n;\n{code}\n;")

        bundle_code = "\n".join(chunks) + "\n"
        bundle_file.write_text(bundle_code, encoding="utf-8")
        sz_kb = bundle_file.stat().st_size / 1024
        total_bundle_size += bundle_file.stat().st_size

        rel_bundle_path = f"bundles/{subj_id}.bundle.js"
        bundled_scripts_by_subject[subj_id] = [rel_bundle_path]
        print(f"  • {subj_id:<45} : {len(script_list):>3} αρχεία -> {sz_kb:>6.1f} KB")

    out_file = site_dir / "content" / "scripts_catalog.js"
    active_scripts = raw_scripts_by_subject if use_raw else bundled_scripts_by_subject

    js_lines = [
        "// Αυτόματα παραγόμενος κατάλογος scripts ανά μάθημα για On-Demand Lazy Loading (χωρίς fetch)",
        "// Υποστηρίζει άμεση εκτέλεση σε file:/// και GitHub Pages.",
        "// Παράγεται από το scripts/build_bundles.py",
        f"window.SUBJECT_SCRIPTS = {json.dumps(active_scripts, ensure_ascii=False, indent=2)};",
        "",
        "// Πλήρης κατάλογος αρχικών πηγαίων αρχείων (για αναφορά & development)",
        f"window.SUBJECT_RAW_SCRIPTS = {json.dumps(raw_scripts_by_subject, ensure_ascii=False, indent=2)};",
        "",
    ]
    out_file.write_text("\n".join(js_lines), encoding="utf-8")

    print("-" * 72)
    mode_text = "RAW (μεμονωμένα αρχεία)" if use_raw else "BUNDLED (1 αρχείο/μάθημα)"
    print(f"✅ Ενημερώθηκε το {out_file.name} σε λειτουργία: {mode_text}")
    print(
        f"📊 Συνολικά: {len(raw_scripts_by_subject)} μαθήματα, {total_orig_files} αρχεία -> "
        f"{len(bundled_scripts_by_subject)} bundles ({total_bundle_size / (1024 * 1024):.2f} MB σύνολο)"
    )
    print("=" * 72)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Build subject JS bundles for 4gnosin.")
    parser.add_argument(
        "--raw",
        action="store_true",
        help="Ρύθμιση του scripts_catalog.js να φορτώνει τα μεμονωμένα αρχεία αντί των bundles.",
    )
    args = parser.parse_args()
    build_bundles(use_raw=args.raw)
