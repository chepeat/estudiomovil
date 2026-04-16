import sys

def count_tags(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    stack = []
    lines = content.split('\n')
    for i, line in enumerate(lines):
        line_num = i + 1
        # Very naive tag finding
        import re
        tags = re.findall(r'<(/?div|/?section|/?main|/?aside|/?header|/?footer)\b', line)
        for tag in tags:
            if tag.startswith('/'):
                if not stack:
                    print(f"Error: Extra closing tag {tag} at line {line_num}")
                else:
                    popped = stack.pop()
                    if popped != tag[1:]:
                        print(f"Warn: Closing {tag} but expected {popped} at line {line_num}")
            else:
                stack.append(tag)
    
    if stack:
        print(f"Error: Unclosed tags at end of file: {stack}")
    else:
        print("All div/section/main/aside/header/footer tags balanced.")

if __name__ == "__main__":
    count_tags(sys.argv[1])
