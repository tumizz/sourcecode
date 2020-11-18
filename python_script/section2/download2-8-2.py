from bs4 import BeautifulSoup
import urllib.request as req
import urllib.parse as rep
import sys
import io
import os

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

base = "https://www.inflearn.com"
quote = rep.quote_plus("추천-강좌")
url = base + quote
print(url)

res = req.urlopen(url)
savePath = "C:\\imagedown\\" #C:\imagedown\

try:
    if not (os.path.isdir(savePath)):
        os.makedirs(os.path.join(savePath))
except OSError as e:
    if e.errno != errno.EEXIST:
        print("폴더 만들기 실패!")
        raise

soup =BeautifulSoup(res, "html.parser")

img_list = soup.select("ul.slides")[0]
#print("test", img_list)
for i, e in enumerate(img_list,1):
    with open(savePath+"text_"+str(i)+".txt","wt") as f:
        f.write(e.select_one("h4.block_title > a").string)
    #print(img_list['data-source'])
    fullFileName = os.path.join(savePath, savePath+str(i)+'.png') #jpg
    print(fullFileName)
    req.urlretrieve(e.select_one("div.block_media > a > img")['src'],fullFileName)

print("다운로드 완료")
