import re

text = r"Καταγράφουμε τα δεδομένα της άσκησης και μετατρέπουμε τη θερμοκρασία σε Kelvin: $T_2 = t_2 + 273 = 127 + 273 = 400 \text{ K}$. Υπολογίζουμε επίσης την ειδική θερμότητα υπό σταθερό όγκο $C_v = C_p - R = 1{,}001 - 0{,}287 = 0{,}714 \text{ kJ}/(\text{kg}\cdot\text{K})$ και την αρχική θερμοκρασία $T_1 = \frac{P \cdot v}{R}$."

mathRegex = re.compile(r"(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\$(?:\\\$|[^$\n])+\$)")
parts = mathRegex.split(text)

print(f"Total parts: {len(parts)}")
for i, p in enumerate(parts):
    is_math = bool(mathRegex.fullmatch(p))
    print(f"[{i}] is_math={is_math}: {repr(p[:60])}")
