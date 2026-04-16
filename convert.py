import csv
import json

data = []
try:
    with open('raw_data.csv', 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        headers = next(reader)
        for row in reader:
            if not row or not row[0] or row[0].strip() == 'Totales':
                continue
            obj = {headers[i].strip(): row[i].strip() for i in range(min(len(headers), len(row)))}
            data.append(obj)
    
    js_content = 'const INITIAL_DATA = ' + json.dumps({'global': data}, ensure_ascii=False, indent=2) + ';'
    with open('data_store.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
