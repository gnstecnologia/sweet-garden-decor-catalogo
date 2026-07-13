import re

with open('src/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# For ID 25
content = re.sub(r"(id: '25',.*?imageUrls: )\[.*?\]", r"\1['/img_conico_slim_bambu.jpeg']", content, flags=re.DOTALL)
# For ID 26
content = re.sub(r"(id: '26',.*?imageUrls: )\[.*?\]", r"\1['/img_conico_slim_ficus.jpeg']", content, flags=re.DOTALL)
# For ID 27
content = re.sub(r"(id: '27',.*?imageUrls: )\[.*?\]", r"\1['/img_conico_slim_japones.jpeg']", content, flags=re.DOTALL)
# For ID 28
content = re.sub(r"(id: '28',.*?imageUrls: )\[.*?\]", r"\1['/img_conico_slim_ravenala.jpeg']", content, flags=re.DOTALL)

with open('src/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

