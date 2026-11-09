"""
BookExtractor - Εξαγωγή κειμένου, σχημάτων και διαγραμμάτων από σχολικά βιβλία PDF (ΕΠΑ.Λ.).
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any

import fitz  # PyMuPDF


class BookExtractor:
    """
    Διαχειρίζεται την εξαγωγή κειμένου και εικόνων/διαγραμμάτων από ένα σχολικό βιβλίο PDF.
    """

    def __init__(self, pdf_path: str | Path) -> None:
        self.pdf_path = Path(pdf_path)
        if not self.pdf_path.exists():
            raise FileNotFoundError(f"Το βιβλίο PDF δεν βρέθηκε: {self.pdf_path}")
        self.doc = fitz.open(str(self.pdf_path))

    @property
    def page_count(self) -> int:
        """Συνολικός αριθμός σελίδων του PDF."""
        return len(self.doc)

    def get_page_text(self, page_index: int) -> str:
        """
        Επιστρέφει το κείμενο μιας σελίδας (0-based index).
        """
        if page_index < 0 or page_index >= len(self.doc):
            return ""
        return self.doc[page_index].get_text()

    def get_range_text(self, start_page: int, end_page: int) -> str:
        """
        Επιστρέφει το συνδυασμένο κείμενο ενός εύρους σελίδων (0-based, inclusive).
        """
        texts = []
        for p in range(max(0, start_page), min(len(self.doc), end_page + 1)):
            t = self.doc[p].get_text().strip()
            if t:
                texts.append(f"--- [Σελίδα PDF {p + 1}] ---\n{t}")
        return "\n\n".join(texts)

    def extract_images(
        self,
        page_index: int,
        output_dir: Path,
        prefix: str = "fig",
        min_width: int = 80,
        min_height: int = 80,
    ) -> list[Path]:
        """
        Εξάγει τις ενσωματωμένες εικόνες μιας σελίδας, αγνοώντας πολύ μικρά εικονίδια.
        """
        output_dir.mkdir(parents=True, exist_ok=True)
        if page_index < 0 or page_index >= len(self.doc):
            return []

        page = self.doc[page_index]
        saved_paths: list[Path] = []
        image_list = page.get_images(full=True)

        for idx, img_info in enumerate(image_list):
            xref = img_info[0]
            base_image = self.doc.extract_image(xref)
            width = base_image.get("width", 0)
            height = base_image.get("height", 0)

            # Φιλτράρισμα μικρών διακοσμητικών γραφικών
            if width < min_width or height < min_height:
                continue

            filename = f"{prefix}_p{page_index + 1:03d}_{idx + 1:02d}.png"
            out_path = output_dir / filename

            # Χρήση pixmap για διασφάλιση συμβατού sRGB colorspace για web
            saved = False
            try:
                pix = fitz.Pixmap(self.doc, xref)
                if pix.n >= 4 or (pix.colorspace and pix.colorspace.name not in (fitz.csRGB.name, fitz.csGRAY.name)):
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                pix.save(str(out_path))
                saved_paths.append(out_path)
                saved = True
            except Exception:
                saved = False

            if not saved:
                # Fallback μέσω PIL για JPX (JPEG2000), CMYK ή ειδικά format
                image_bytes = base_image.get("image")
                if image_bytes:
                    try:
                        import io
                        from PIL import Image
                        with Image.open(io.BytesIO(image_bytes)) as pil_img:
                            if pil_img.mode not in ("RGB", "L"):
                                pil_img = pil_img.convert("RGB")
                            pil_img.save(str(out_path), "PNG")
                        saved_paths.append(out_path)
                    except Exception:
                        ext = base_image.get("ext", "png").lower()
                        raw_path = output_dir / f"{prefix}_p{page_index + 1:03d}_{idx + 1:02d}.{ext}"
                        raw_path.write_bytes(image_bytes)
                        saved_paths.append(raw_path)

        return saved_paths

    def render_page_region(
        self,
        page_index: int,
        rect: tuple[float, float, float, float] | fitz.Rect,
        output_path: Path,
        dpi: int = 150,
    ) -> Path:
        """
        Αποδίδει ένα συγκεκριμένο παραλληλόγραμμο (clip) της σελίδας ως εικόνα υψηλής ανάλυσης.
        Χρήσιμο για διαγράμματα διανυσματικά (vector shapes/text).
        """
        output_path.parent.mkdir(parents=True, exist_ok=True)
        page = self.doc[page_index]
        clip = fitz.Rect(rect)
        pix = page.get_pixmap(dpi=dpi, clip=clip)
        pix.save(str(output_path))
        return output_path

    def render_full_page(
        self,
        page_index: int,
        output_path: Path,
        dpi: int = 150,
    ) -> Path:
        """
        Αποδίδει ολόκληρη τη σελίδα ως εικόνα PNG.
        """
        output_path.parent.mkdir(parents=True, exist_ok=True)
        page = self.doc[page_index]
        pix = page.get_pixmap(dpi=dpi)
        pix.save(str(output_path))
        return output_path

    def close(self) -> None:
        """Κλείνει το έγγραφο."""
        if hasattr(self, "doc") and self.doc:
            self.doc.close()

    def __enter__(self) -> BookExtractor:
        return self

    def __exit__(self, exc_type, exc_val, exc_tb) -> None:
        self.close()
