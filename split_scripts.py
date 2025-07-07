import re, os, sys

srcfile = 'scripts.js'
outdir = 'scripts'
os.makedirs(outdir, exist_ok=True)

with open(srcfile, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# find all class definitions
positions = []
for idx, line in enumerate(lines):
    m = re.match(r'\s*class\s+(\w+)', line)
    if m:
        positions.append((idx, m.group(1)))

# add start and end
if not positions:
    sys.exit('No classes found')

pre_start = 0

# lines before first class
first_start, first_name = positions[0]
pre_lines = lines[:first_start]
with open(os.path.join(outdir, 'pre.js'), 'w', encoding='utf-8') as f:
    f.writelines(pre_lines)

# iterate over classes
for (start, name), (end, _) in zip(positions, positions[1:] + [(len(lines), 'END')]):
    chunk = lines[start:end]
    with open(os.path.join(outdir, f'{name}.js'), 'w', encoding='utf-8') as f:
        f.writelines(chunk)
