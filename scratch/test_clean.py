import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src.generators.theory_generator import TheoryGenerator

test_str = r'''items: ["(\(\sigma\))", "\(F\)", "\(A_{\text{απ}}\}"]'''
res = TheoryGenerator.clean_js_output(test_str)
print("INPUT: ", repr(test_str))
print("OUTPUT:", repr(res))
