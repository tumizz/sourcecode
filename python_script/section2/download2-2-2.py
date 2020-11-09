import sys
import io
import urllib.request as dw

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

imgUrl = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150823_231%2Fcodn9_14403263840439uB4A_JPEG%2Ftumblr_n0forjSMuW1qgyg6yo1_540.jpg&type=sc960_832"
htmlURL = "http://google.com"

savePath1 = "c:/test1.jpg"
savePath2 = "c:/index.html"

f = dw.urlopen(imgUrl).read()
f2 = dw.urlopen(htmlURL).read() #

saveFile1 = open(savePath1, 'wb') #w : write, r: read, a : add
saveFile1.write(f)
saveFile1.close()

with open(savePath2, 'wb') as saveFile2: ##with문은 close문이 자동으로 실행됨
    saveFile2.write(f2)


print("다운로드 완료!")
