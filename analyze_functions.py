import re, sys, os

pattern_func = re.compile(r'\bfunction\s+([A-Za-z0-9_\$]+)\s*\(')
pattern_class = re.compile(r'\bclass\s+([A-Za-z0-9_\$]+)\b')


def extract(path):
    with open(path, 'r', encoding='utf-8') as f:
        code = f.read()
    results = []
    pos = 0
    while True:
        m_func = pattern_func.search(code, pos)
        m_class = pattern_class.search(code, pos)
        if not m_func and not m_class:
            break
        if m_func and (not m_class or m_func.start() < m_class.start()):
            results.append(('function', m_func.group(1)))
            pos = m_func.end()
        else:
            results.append(('class', m_class.group(1)))
            pos = m_class.end()
    return results

# Mode: analyze scripts.min.js
if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: python analyze_functions.py mode output.txt [files...]')
        sys.exit(1)
    mode = sys.argv[1]
    outfile = sys.argv[2]
    all_results = []
    if mode == 'single':
        # expecting one file path
        path = sys.argv[3]
        all_results = extract(path)
    elif mode == 'multi':
        files = sys.argv[3:]
        for path in files:
            all_results.extend(extract(path))
    else:
        print('Unknown mode')
        sys.exit(1)

    with open(outfile, 'w', encoding='utf-8') as out:
        for kind, name in all_results:
            out.write(f'{kind} {name}\n')
