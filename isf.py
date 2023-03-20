import urllib3
from bs4 import BeautifulSoup
import re

http = urllib3.PoolManager()

icon_names = []

response = http.request('GET', "https://icon-sets.iconify.design/ph/")
html = response.data.decode('utf-8')

soup = BeautifulSoup(html, 'lxml')

for element in soup.select('li.iif-icon-grid > a'):
    elmRef = element['href']
    icon_names.append(elmRef[4:][:len(elmRef)-5])

for i in range(2,157):
    print(f"crawling: {i}")
    response = http.request('GET', f"https://icon-sets.iconify.design/ph/page-{i}.html")
    html = response.data.decode('utf-8')

    soup = BeautifulSoup(html, 'lxml')

    for element in soup.select('li.iif-icon-grid > a'):
        elmRef = element['href']
        icon_names.append(elmRef[4:][:len(elmRef)-5])

css = ''

def doit(names):
    ph_temp_css = http.request('GET', "https://api.iconify.design/ph.css?iconSelector=.Icon.{name}&icons="+",".join(names))
    ph_temp_css = ph_temp_css.data.decode('utf-8')

    return re.sub(r"^\.Icon.+(\n.+)+", '', ph_temp_css, 1)

i = 0
while i<len(icon_names):
    print(f"putting together: {i}, len: {len(icon_names)}")
    if i+50 > len(icon_names):
        css+=doit(icon_names[i:len(icon_names)])+"\n"
        break
    else:
        css+=doit(icon_names[i:i+50])+"\n"
        i += 50

with open('./src/ph.css', 'w') as f:
    f.write(css)

f.close()