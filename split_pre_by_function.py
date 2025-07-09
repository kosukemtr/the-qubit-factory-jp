import os
import re

src_file = os.path.join('scripts', 'pre.js')
out_dir = os.path.join('scripts', 'pre_parts')
os.makedirs(out_dir, exist_ok=True)

with open(src_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# find lines that start with 'function ' at the beginning of line
positions = []
pattern = re.compile(r'^function\s+(\w+)')
for idx, line in enumerate(lines):
    m = pattern.match(line)
    if m:
        positions.append((idx, m.group(1)))

# nothing to do if no functions found
if not positions:
    raise SystemExit('No functions found in pre.js')

# iterate over functions and write to separate files
for (start, name), (end, _) in zip(positions, positions[1:] + [(len(lines), 'END')]):
    chunk = lines[start:end]
    out_path = os.path.join(out_dir, f'{name}.js')
    with open(out_path, 'w', encoding='utf-8') as out:
        out.writelines(chunk)

print(f'Split {len(positions)} functions into {out_dir}')
