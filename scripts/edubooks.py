"""
Ψηφιακά Βιβλία ΕΠΑΛ (ebooks.edu.gr) – Agent Θεωρίας
===================================================
Κατεβάζει τα επίσημα σχολικά βιβλία (PDF) από το ebooks.edu.gr (ΙΤΥΕ «ΔΙΟΦΑΝΤΟΣ»)
για όλα τα μαθήματα του Τομέα Μηχανολογίας που υποστηρίζονται στον ιστότοπο.

Προορισμός: data/books/{b|c}/{subject_slug}/

Χρήση:
    python edubooks.py                (Διαδραστικό μενού)
    python edubooks.py --all          (Κατέβασμα όλων των βιβλίων όλων των τάξεων)
    python edubooks.py --taxi b       (Κατέβασμα όλων των βιβλίων Β' Τάξης)
    python edubooks.py --taxi c       (Κατέβασμα όλων των βιβλίων Γ' Τάξης)
    python edubooks.py --subject antoxi
"""

import argparse
import os
import sys
import time
import urllib.request
from pathlib import Path

# Ρύθμιση κονσόλας Windows για UTF-8
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# ============================================================
#  ΚΑΤΑΛΟΓΟΣ ΒΙΒΛΙΩΝ EBOOKS.EDU.GR ΑΝΑ ΤΑΞΗ & ΜΑΘΗΜΑ
# ============================================================

BOOKS_CATALOG = {
    "Β": {
        "thermo": {
            "title": "Στοιχεία Τεχνικής Θερμοδυναμικής – Εφαρμογές / Θερμοδυναμική Θεωρία",
            "books": [
                {
                    "name": "Εισαγωγή στη Μηχανολογία (Βιβλίο Μαθητή - Θερμοδυναμική)",
                    "filename": "b_thermo_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4498/24-0468-02-V1_Eisagogi-sti-Michanologia_A-B-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "thermo-lab": {
            "title": "Θερμοδυναμική Εργαστήριο",
            "books": [
                {
                    "name": "Εισαγωγή στη Μηχανολογία (Βιβλίο Μαθητή - Εργαστηριακό)",
                    "filename": "b_thermo_lab_vivlio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4498/24-0468-02-V1_Eisagogi-sti-Michanologia_A-B-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "antoxi": {
            "title": "Μηχανική Αντοχή Υλικών / Αντοχή Υλικών",
            "books": [
                {
                    "name": "Τεχνική Μηχανική - Αντοχή των Υλικών (Βιβλίο Μαθητή)",
                    "filename": "b_antoxi_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5244/24-0026-02-V1_Techniki-Michaniki_Antochi-ton-Ylikon_B-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Τεχνική Μηχανική - Αντοχή των Υλικών (Λύσεις Ασκήσεων)",
                    "filename": "b_antoxi_lyseis_askiseon.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4028/24-0027-03-V1_Techniki-Michaniki-Antochi-ton-Ylikon_B-EPAL_Lyseis-Askiseon.pdf"
                }
            ]
        },
        "texnologia-michanologikon-kataskevon": {
            "title": "Τεχνολογία Μηχανολογικών Κατασκευών Θεωρία",
            "books": [
                {
                    "name": "Τεχνολογία Μηχανολογικών Κατασκευών (Βιβλίο Μαθητή)",
                    "filename": "b_texnologia_kataskevon_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4036/24-0032-02-V1_Technologia-Michanologikon-Kataskeuon_B-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Μηχανολογικό Σχέδιο (Βιβλίο Μαθητή)",
                    "filename": "b_michanologiko_schedio_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5260/24-0045-02-V1_Michanologiko-Schedio_B-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "naftiki-michanologia": {
            "title": "Ναυτική Μηχανολογία Εφαρμογές",
            "books": [
                {
                    "name": "Ναυτική Μετεωρολογία (Βιβλίο Μαθητή)",
                    "filename": "b_naftiki_meteorologia_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4452/24-0363-02-V1_Naytiki-Meteorologia_B-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        }
    },
    "Γ": {
        "stoixeia-michanon": {
            "title": "Στοιχεία Μηχανών",
            "books": [
                {
                    "name": "Στοιχεία Μηχανών - Σχέδιο (Βιβλίο Μαθητή)",
                    "filename": "c_stoixeia_michanon_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4034/24-0031-02-V1_Stoicheia-Michanon-Schedio_B-G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "stoixeia-psyxis-klimatismou": {
            "title": "Στοιχεία Ψύξης – Κλιματισμού Θεωρία",
            "books": [
                {
                    "name": "Ψύξη - Κλιματισμός (Βιβλίο Μαθητή)",
                    "filename": "c_psyksi_klimatismos_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4112/24-0087-02-V1_Psyksi-Klimatismos_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Ψύξης Ι (Βιβλίο Μαθητή)",
                    "filename": "c_egkatastaseis_psyksis_1_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4110/24-0085-02-V1_Egkatastaseis-Psyksis-I_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Ψύξης Ι (Εργαστηριακός Οδηγός)",
                    "filename": "c_egkatastaseis_psyksis_1_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4066/24-0060-02-V1_Egkatastaseis-Psyksis-I_G-EPAL_Ergastiriakos-Odigos.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Ψύξης ΙΙ (Βιβλίο Μαθητή)",
                    "filename": "c_egkatastaseis_psyksis_2_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4068/24-0061-02-V1_Egkatastaseis-Psyksis-II_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Ψύξης ΙΙ (Εργαστηριακός Οδηγός)",
                    "filename": "c_egkatastaseis_psyksis_2_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4070/24-0062-02-V1_Egkatastaseis-Psyksis-II_G-EPAL_Ergastiriakos-Odigos.pdf"
                }
            ]
        },
        "egkatastaseis-klimatismou": {
            "title": "Εγκαταστάσεις Κλιματισμού Θεωρία",
            "books": [
                {
                    "name": "Εγκαταστάσεις Κλιματισμού Ι (Βιβλίο Μαθητή)",
                    "filename": "c_egkatastaseis_klimatismou_1_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5313/24-0084-02-V1_Egkatastaseis-Klimatismou-I_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Κλιματισμού ΙΙ (Βιβλίο Μαθητή)",
                    "filename": "c_egkatastaseis_klimatismou_2_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4062/24-0058-02-V1_Egkatastaseis-Klimatismou-II_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Κλιματισμού (Εργαστηριακός Οδηγός)",
                    "filename": "c_egkatastaseis_klimatismou_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4060/24-0057-02-V1_Egkatastaseis-Klimatismou_G-EPAL_Ergastiriakos-Odigos.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Κλιματισμού ΙΙ (Εργαστηριακός Οδηγός)",
                    "filename": "c_egkatastaseis_klimatismou_2_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4064/24-0059-02-V1_Egkatastaseis-Klimatismou-II_G-EPAL_Ergastiriakos-Odigos.pdf"
                }
            ]
        },
        "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou": {
            "title": "Συστήματα Ελέγχου, Ρύθμισης και Αυτοματισμού Εγκαταστάσεων Ψύξης και Κλιματισμού Θεωρία",
            "books": [
                {
                    "name": "Ηλεκτρολογία - Αυτοματισμοί (Βιβλίο Μαθητή)",
                    "filename": "c_ilektrologia_automatismoi_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4072/24-0063-02-V1_Ilektrologia-Automatismoi_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Ηλεκτρολογία - Αυτοματισμοί (Εργαστηριακός Οδηγός)",
                    "filename": "c_ilektrologia_automatismoi_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4074/24-0064-02-V1_Ilektrologia-Automatismoi_G-EPAL_Ergastiriakos-Odigos.pdf"
                },
                {
                    "name": "Συστήματα Αυτοματισμών Β' Τόμος (Βιβλίο Μαθητή)",
                    "filename": "c_systimata_automatismon_b_tomos_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5317/24-0346-02-V1_Systimata-Automatismon_B-Tomos_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "michanes-esoterikis-kafsis-2": {
            "title": "Μηχανές Εσωτερικής Καύσης ΙΙ Θεωρία",
            "books": [
                {
                    "name": "Μηχανές Εσωτερικής Καύσης ΙΙ (Βιβλίο Μαθητή)",
                    "filename": "c_mek_2_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4082/24-0068-02-V1_Michanes-Esoterikis-Kausis-II_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Μηχανές Εσωτερικής Καύσης ΙΙ (Εργαστηριακός Οδηγός)",
                    "filename": "c_mek_2_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4084/24-0069-02-V1_Michanes-Esoterikis-Kausis-II_G-EPAL_Ergastiriakos-Odigos.pdf"
                },
                {
                    "name": "Μηχανές Εσωτερικής Καύσης Ι (Βιβλίο Μαθητή)",
                    "filename": "c_mek_1_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4018/24-0022-02-V1_Michanes-Esoterikis-Kausis-I_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "systimata-aftokinitou": {
            "title": "Συστήματα Αυτοκινήτου Θεωρία",
            "books": [
                {
                    "name": "Συστήματα Αυτοκινήτου Ι (Βιβλίο Μαθητή)",
                    "filename": "c_systimata_aftokinitou_1_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4022/24-0024-02-V1_Systimata-Autokinitou-I_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Συστήματα Αυτοκινήτου Ι (Εργαστηριακός Οδηγός)",
                    "filename": "c_systimata_aftokinitou_1_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5297/24-0025-02-V1_Systimata-Autokinitou-I_G-EPAL_Ergastirakos-Odigos.pdf"
                },
                {
                    "name": "Συστήματα Αυτοκινήτου ΙΙ (Βιβλίο Μαθητή)",
                    "filename": "c_systimata_aftokinitou_2_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5261/24-0070-02-V1_Systimata-Autokinitou-II_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Συστήματα Αυτοκινήτου ΙΙ (Εργαστηριακός Οδηγός)",
                    "filename": "c_systimata_aftokinitou_2_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5312/24-0071-02-V1_Systimata-Autokinitou-II_G-EPAL_Ergastiriakos-Odigos.pdf"
                },
                {
                    "name": "Ηλεκτρικό Σύστημα Αυτοκινήτου & Σχέδιο (Βιβλίο Μαθητή)",
                    "filename": "c_ilektriko_systima_aftokinitou_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4014/24-0019-03-V1_Ilektriko-Systima-Autokinitou_Schedio-Ilektrikou-Systimatos-Autokinitou_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "texnologia-elegxou-diagnoseon": {
            "title": "Τεχνολογία Ελέγχου και Διαγνώσεων Θεωρία",
            "books": [
                {
                    "name": "Τεχνολογία Ελέγχων & Διαγνώσεων (Βιβλίο Μαθητή)",
                    "filename": "c_diagnoseon_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5262/24-0073-02-V1_Technologia-Elegchon-kai-Diagnoseon_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Τεχνολογία Ελέγχων & Διαγνώσεων (Εργαστηριακός Οδηγός)",
                    "filename": "c_diagnoseon_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5298/24-0074-02-V1_Technologia-Elegchon-kai-Diagnoseon_G-EPAL_Ergastiriakos-Odigos.pdf"
                },
                {
                    "name": "Συστήματα Ελέγχου & Αυτοματισμών Αυτοκινήτου (Εργαστήριο)",
                    "filename": "c_aftokinitou_automatismoi_ergastirio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4090/24-0072-02-V1_Systimata-Elegchou-kai-Automatismon-Autokinitou_Ergastirio_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "stoixeia-kentrikon-thermanseon": {
            "title": "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων",
            "books": [
                {
                    "name": "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων (Βιβλίο Μαθητή)",
                    "filename": "c_kentrikon_thermanseon_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4048/24-0041-02-V1_Stoicheia-Schediasmou-Kentrikon-Thermanseon_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Κατασκευή & Λειτουργία Εγκαταστάσεων Κεντρικής Θέρμανσης (Βιβλίο Μαθητή)",
                    "filename": "c_kataskevi_kentrikis_thermansis_vivlio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4046/24-0039-02-V1_Kataskeui-kai-Leitourgia-Egkatastaseon-Kentrikis-Thermansis_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Συντήρηση & Επισκευές Εγκαταστάσεων Κεντρικής Θέρμανσης (Βιβλίο Μαθητή)",
                    "filename": "c_syntirisi_kentrikis_thermansis_vivlio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4050/24-0042-02-V1_Syntirisi-kai-Episkeues-Egkatastaseon-Kentrikis-Thermansis_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Θερμικές Εγκαταστάσεις (Βιβλίο Μαθητή)",
                    "filename": "c_thermikes_egkatastaseis_vivlio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4038/24-0034-02-V1_Thermikes-Egkatastaseis_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "michanourgiki-texnologia": {
            "title": "Μηχανουργική Τεχνολογία – Εργαλειομηχανές",
            "books": [
                {
                    "name": "Μηχανουργική Τεχνολογία Ι - Κατεργασίες Κοπής (Βιβλίο Μαθητή)",
                    "filename": "c_michanourgiki_1_kopi_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4054/24-0046-02-V1_Michanourgiki-Technologia-I_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Μηχανουργική Τεχνολογία ΙΙ - Κατεργασίες Διαμόρφωσης (Βιβλίο Μαθητή)",
                    "filename": "c_michanourgiki_2_diamorfosi_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4056/24-0047-03-V1_Michanourgiki-Technologia-II_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Μηχανολογικό Σχέδιο με Η/Υ (Βιβλίο Μαθητή)",
                    "filename": "c_michanologiko_schedio_hy_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4058/24-0050-02-V1_Michanologiko-Schedio-me-Ilektroniko-Ypologisti_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon": {
            "title": "Στοιχεία Ψύξης – Κλιματισμού (Μηχανολογικών Εγκ/σεων)",
            "books": [
                {
                    "name": "Ψύξη - Κλιματισμός (Βιβλίο Μαθητή)",
                    "filename": "c_psyksi_klimatismos_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4112/24-0087-02-V1_Psyksi-Klimatismos_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Ψύξης Ι (Βιβλίο Μαθητή)",
                    "filename": "c_egkatastaseis_psyksis_1_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4110/24-0085-02-V1_Egkatastaseis-Psyksis-I_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Εγκαταστάσεις Κλιματισμού Ι (Βιβλίο Μαθητή)",
                    "filename": "c_egkatastaseis_klimatismou_1_vivlio_mathiti.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/5313/24-0084-02-V1_Egkatastaseis-Klimatismou-I_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "kinitires-aeroskafon": {
            "title": "Κινητήρες Αεροσκαφών",
            "books": [
                {
                    "name": "Κινητήρες Αεροσκαφών Ι (Βιβλίο Μαθητή)",
                    "filename": "c_kinitires_aeroskafon_1_vivlio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4098/24-0079-02-V1_Kinitires-Aeroskafon-I_G-EPAL_Vivlio-Mathiti.pdf"
                },
                {
                    "name": "Κινητήρες Αεροσκαφών ΙΙ (Βιβλίο Μαθητή)",
                    "filename": "c_kinitires_aeroskafon_2_vivlio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/4102/24-0081-02-V2_Kinitires-Aeroskafon-II_G-EPAL_Vivlio-Mathiti.pdf"
                }
            ]
        },
        "domi-systimata-aeroskafon": {
            "title": "Δομή και Συστήματα Αεροσκαφών",
            "books": [
                {
                    "name": "Τεχνολογία Αεροσκαφών Ι (Βιβλίο Μαθητή)",
                    "filename": "c_technologia_aeroskafon_1_vivlio.pdf",
                    "url": "https://ebooks.edu.gr/ebooks/d/8547/40100/24-0080-02-V1_Technologia-Aeroskafon-I_G-EPAL_Vivlio-Mathiti.pdf".replace("40100", "4100")
                }
            ]
        }
    }
}

BASE_DIR = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == "scripts" else Path(__file__).resolve().parent
DEFAULT_BOOKS_DIR = BASE_DIR / "data" / "books"


def format_size(bytes_num: int) -> str:
    """Επιστρέφει ευανάγνωστη μορφή μεγέθους (MB, KB)."""
    if bytes_num >= 1024 * 1024:
        return f"{bytes_num / (1024 * 1024):.1f} MB"
    elif bytes_num >= 1024:
        return f"{bytes_num / 1024:.1f} KB"
    return f"{bytes_num} B"


def download_pdf(url: str, dest_path: Path, force: bool = False) -> bool:
    """
    Κατεβάζει ένα αρχείο PDF με live progress bar και υποστήριξη επαναλήψεων.
    """
    dest_path.parent.mkdir(parents=True, exist_ok=True)

    if dest_path.exists() and not force:
        size = dest_path.stat().st_size
        if size > 100 * 1024:  # > 100 KB
            print(f"      [Ήδη υπάρχει] {dest_path.name} ({format_size(size)}) - Παράλειψη")
            return True

    print(f"      [Λήψη...] {dest_path.name}")
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            total_size = int(resp.headers.get("Content-Length", 0))
            downloaded = 0
            chunk_size = 64 * 1024  # 64 KB chunks
            start_time = time.time()

            tmp_path = dest_path.with_suffix(".tmp")
            with open(tmp_path, "wb") as f:
                while True:
                    chunk = resp.read(chunk_size)
                    if not chunk:
                        break
                    f.write(chunk)
                    downloaded += len(chunk)

                    if total_size > 0:
                        percent = downloaded / total_size * 100
                        bar_len = 25
                        filled = int(bar_len * downloaded / total_size)
                        bar = "=" * filled + (">" if filled < bar_len else "") + " " * (bar_len - filled - (1 if filled < bar_len else 0))
                        elapsed = time.time() - start_time
                        speed = (downloaded / (1024 * 1024)) / elapsed if elapsed > 0 else 0
                        sys.stdout.write(
                            f"\r        [{bar}] {percent:5.1f}% ({format_size(downloaded)} / {format_size(total_size)}) @ {speed:.1f} MB/s"
                        )
                        sys.stdout.flush()

            sys.stdout.write("\n")
            if tmp_path.exists():
                if dest_path.exists():
                    dest_path.unlink()
                tmp_path.rename(dest_path)
            print(f"        [OK] Ολοκληρώθηκε: {dest_path.name} ({format_size(downloaded)})")
            return True

    except Exception as e:
        sys.stdout.write("\n")
        print(f"        [ERROR] Σφάλμα λήψης ({url}): {e}")
        tmp_path = dest_path.with_suffix(".tmp")
        if tmp_path.exists():
            tmp_path.unlink()
        return False


def download_subject_books(taxi: str, slug: str, force: bool = False, specific_book_idx: int = None):
    """Κατεβάζει τα βιβλία ενός συγκεκριμένου μαθήματος."""
    taxi_data = BOOKS_CATALOG.get(taxi, {})
    if slug not in taxi_data:
        print(f"Σφάλμα: Το μάθημα '{slug}' δεν βρέθηκε στην {taxi}' Τάξη.")
        return

    subject_info = taxi_data[slug]
    books = subject_info["books"]
    taxi_prefix = "b" if taxi == "Β" else "c"
    subject_dir = DEFAULT_BOOKS_DIR / taxi_prefix / slug

    print(f"\n============================================================")
    print(f"  Μάθημα: {subject_info['title']}")
    print(f"  Φάκελος: {subject_dir.relative_to(BASE_DIR)}")
    print(f"============================================================")

    if specific_book_idx is not None:
        target_books = [books[specific_book_idx]]
    else:
        target_books = books

    for i, b in enumerate(target_books, 1):
        print(f"\n  [{i}/{len(target_books)}] {b['name']}")
        dest = subject_dir / b["filename"]
        download_pdf(b["url"], dest, force=force)


def download_all_books(taxi: str = None, force: bool = False):
    """Κατεβάζει όλα τα βιβλία μιας τάξης ή όλων των τάξεων."""
    classes = [taxi] if taxi else ["Β", "Γ"]
    for t in classes:
        for slug in BOOKS_CATALOG.get(t, {}):
            download_subject_books(t, slug, force=force)


def interactive_menu():
    """Διαδραστικό μενού επιλογής μαθήματος και λήψης βιβλίων."""
    print("=" * 60)
    print("  Ψηφιακά Βιβλία ΕΠΑΛ (ebooks.edu.gr) – Agent Θεωρίας")
    print("=" * 60)

    # 1. Επιλογή Τάξης
    print("\nΕπιλογή Τάξης:")
    print("  1. Β' Τάξη")
    print("  2. Γ' Τάξη")
    print("  3. Όλα τα βιβλία όλων των τάξεων")
    t_choice = input("Επιλογή (1/2/3): ").strip()

    if t_choice == "3":
        download_all_books()
        print("\n🎉 Όλα τα βιβλία κατέβηκαν επιτυχώς στο data/books/!")
        return

    taxi = "Β" if t_choice == "1" else "Γ"
    subjects = BOOKS_CATALOG[taxi]
    subject_keys = list(subjects.keys())

    # 2. Επιλογή Μαθήματος
    print(f"\nΜαθήματα {taxi}' Τάξης:")
    for idx, key in enumerate(subject_keys, 1):
        s_title = subjects[key]["title"]
        b_count = len(subjects[key]["books"])
        print(f"  {idx:2d}. {s_title} ({b_count} βιβλί{'ο' if b_count == 1 else 'α'})")
    print(f"  {len(subject_keys) + 1:2d}. [Όλα τα μαθήματα της {taxi}' Τάξης]")

    s_input = input(f"\nΕπιλογή μαθήματος (1-{len(subject_keys) + 1}): ").strip()
    try:
        s_idx = int(s_input) - 1
    except ValueError:
        print("Μη έγκυρη επιλογή.")
        return

    if s_idx == len(subject_keys):
        print(f"\nΚατέβασμα όλων των βιβλίων της {taxi}' Τάξης...")
        for key in subject_keys:
            download_subject_books(taxi, key)
        print(f"\n🎉 Ολοκληρώθηκε η λήψη όλων των βιβλίων της {taxi}' Τάξης!")
        return

    if 0 <= s_idx < len(subject_keys):
        selected_slug = subject_keys[s_idx]
        selected_subject = subjects[selected_slug]
        books = selected_subject["books"]

        print(f"\nΕπιλέχθηκε: {selected_subject['title']}")
        if len(books) > 1:
            print("\nΔιαθέσιμα βιβλία / οδηγοί:")
            for b_idx, b in enumerate(books, 1):
                print(f"  {b_idx}. {b['name']}")
            print(f"  {len(books) + 1}. Όλα τα παραπάνω βιβλία")

            b_input = input(f"Επιλογή (1-{len(books) + 1}, enter για όλα): ").strip()
            if not b_input or b_input == str(len(books) + 1):
                download_subject_books(taxi, selected_slug)
            else:
                try:
                    book_idx = int(b_input) - 1
                    if 0 <= book_idx < len(books):
                        download_subject_books(taxi, selected_slug, specific_book_idx=book_idx)
                    else:
                        download_subject_books(taxi, selected_slug)
                except ValueError:
                    download_subject_books(taxi, selected_slug)
        else:
            download_subject_books(taxi, selected_slug)

        print(f"\n🎉 Ολοκληρώθηκε η λήψη για το μάθημα '{selected_subject['title']}'!")
    else:
        print("Μη έγκυρος αριθμός μαθήματος.")


def main():
    parser = argparse.ArgumentParser(
        description="Κατέβασμα επίσημων σχολικών βιβλίων PDF από το ebooks.edu.gr"
    )
    parser.add_argument("--taxi", choices=["b", "c", "Β", "Γ"], help="Τάξη (Β ή Γ)")
    parser.add_argument("--subject", help="Slug μαθήματος (π.χ. thermo, antoxi, stoixeia-michanon)")
    parser.add_argument("--all", action="store_true", help="Κατέβασμα όλων των βιβλίων")
    parser.add_argument("--force", action="store_true", help="Επανεγγραφή αρχείων ακόμη κι αν υπάρχουν")
    parser.add_argument("--list", action="store_true", help="Προβολή λίστας όλων των διαθέσιμων μαθημάτων και βιβλίων")

    args = parser.parse_args()

    if args.list:
        print("\n=== ΔΙΑΘΕΣΙΜΑ ΒΙΒΛΙΑ ΑΝΑ ΤΑΞΗ (EBOOKS.EDU.GR) ===")
        for t, subjs in BOOKS_CATALOG.items():
            print(f"\n[{t}' Τάξη]")
            for slug, s_data in subjs.items():
                print(f"  • {slug} -> {s_data['title']}")
                for b in s_data["books"]:
                    print(f"      - {b['name']} ({b['filename']})")
        return

    if args.all:
        download_all_books(force=args.force)
        return

    if args.taxi:
        normalized_taxi = "Β" if args.taxi.lower() == "b" else "Γ"
        if args.subject:
            download_subject_books(normalized_taxi, args.subject, force=args.force)
        else:
            download_all_books(taxi=normalized_taxi, force=args.force)
        return

    if args.subject:
        # Αναζήτηση σε Β και Γ
        for t in ["Β", "Γ"]:
            if args.subject in BOOKS_CATALOG[t]:
                download_subject_books(t, args.subject, force=args.force)
                return
        print(f"Το μάθημα '{args.subject}' δεν βρέθηκε.")
        return

    interactive_menu()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nΑκυρώθηκε από τον χρήστη.")
        sys.exit(0)
