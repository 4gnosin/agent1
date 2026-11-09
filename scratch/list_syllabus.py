import json, sys
sys.stdout.reconfigure(encoding="utf-8")

with open("data/syllabus/syllabus_epal_mech.json", encoding="utf-8") as f:
    syl = json.load(f)

for k, v in syl.get("subjects", {}).items():
    print(f"{k}: {v.get('title')} ({len(v.get('chapters', []))} κεφάλαια)")
