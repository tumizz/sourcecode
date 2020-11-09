import sys
import io
import urllib.request as req
from urllib.parse import urlencode

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

imgUrl1 = "https://ssl.pstatic.net/tveta/libs/1311/1311344/c02560221c983e2321b7_20201109161830482.jpg"
savePath1 = "c:/practice1.jpg"

imgUrl2 = "https://tvetamovie.pstatic.net/libs/1311/1311420/f8ee154bffcf1b92a508_20201109185132527.mp4-pBASE-v0-f118426-20201109185151860.mp4"
savePath2 = "c:/practice1-2.mp4"

req.urlretrieve(imgUrl1, savePath1)

f2 = req.urlopen(imgUrl2).read()

with open(savePath2, 'wb') as saveFile2:
    saveFile2.write(f2)

print("다운로드 완료")
