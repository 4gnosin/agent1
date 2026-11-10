import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('site/js/app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines[880:970], 881):
    print(f'{i}: {l}', end='')
