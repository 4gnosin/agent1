import os
import json
import sys
from dotenv import load_dotenv
load_dotenv()
from google import genai
from google.genai import types

sys.stdout.reconfigure(encoding='utf-8')

client = genai.Client()
pdf_path = r'C:/Users/konst/.gemini/antigravity/brain/ae0f8bce-c78b-4a75-be46-f3106ec62ed5/.user_uploaded/media_1793748575007_94e25c0e.pdf'
uploaded = client.files.upload(file=pdf_path)

prompt = """
Διάβασε από το επίσημο έγγραφο του ΙΕΠ (ΑΔΑ: 6ΣΝΠ46ΝΚΠΔ-ΘΨΥ, σχ. έτος 2026-2027) την αναλυτική διδακτέα ύλη για τα παρακάτω μαθήματα:
1. Β' Τάξη: Τεχνολογία Μηχανολογικών Κατασκευών - Εφαρμογές (σελίδες 13-16)
2. Γ' Τάξη: Στοιχεία Μηχανών (σελίδα 18 & σχετική αναφορά)
3. Γ' Τάξη: Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων (σελίδα 19)
4. Γ' Τάξη: Στοιχεία Ψύξης - Κλιματισμού (σελίδες 26-29)

Επέστρεψε ΑΠΟΚΛΕΙΣΤΙΚΑ έγκυρο JSON (χωρίς markdown backticks ή εισαγωγικά κείμενα) με τη δομή:
{
  "b_kataskevon": {
    "taxi": "Β",
    "slug": "texnologia-michanologikon-kataskevon",
    "title": "Τεχνολογία Μηχανολογικών Κατασκευών - Εφαρμογές",
    "textbooks": ["..."],
    "chapters": [
      {
        "chapter": 1,
        "title": "...",
        "sections": [
          {"num": "1.1", "title": "..."}
        ],
        "notes": "..."
      }
    ]
  },
  "c_stoixeia_mixanon": {
    "taxi": "Γ",
    "slug": "stoixeia-michanon",
    "title": "Στοιχεία Μηχανών",
    "textbooks": ["..."],
    "chapters": [...]
  },
  "c_kentrikes_thermanseis": {
    "taxi": "Γ",
    "slug": "stoixeia-kentrikon-thermanseon",
    "title": "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων",
    "textbooks": ["..."],
    "chapters": [...]
  },
  "c_psyxis_klimatismou": {
    "taxi": "Γ",
    "slug": "stoixeia-psyxis-klimatismou",
    "title": "Στοιχεία Ψύξης - Κλιματισμού",
    "textbooks": ["..."],
    "chapters": [...]
  }
}
Συμπερίλαβε ΑΥΣΤΗΡΑ τυχόν υποσημειώσεις, παραγράφους εκτός ύλης ή υποδείξεις λαθών στα "notes".
"""

models_to_try = ['gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.8-flash']
response = None
for m in models_to_try:
    try:
        print(f"Trying model {m}...")
        response = client.models.generate_content(
            model=m,
            contents=[uploaded, prompt],
            config=types.GenerateContentConfig(
                response_mime_type='application/json',
                temperature=0.1
            )
        )
        if response and response.text:
            print(f"Success with model {m}!")
            break
    except Exception as e:
        print(f"Failed with {m}: {e}")

if not response or not response.text:
    raise RuntimeError("All models failed!")

out_path = r'data/syllabus/additional_subjects_syllabus.json'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(response.text)
print(f'Saved additional syllabus to {out_path}!')
