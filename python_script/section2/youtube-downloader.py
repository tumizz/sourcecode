import pytube
import sys
import io
import os
import subprocess

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')
#다운받을 동영상 URL 지정
#yt = pytube.YouTube("https://youtu.be/wILsPW-crmA?list=RDwILsPW-crmA")
yt = pytube.YouTube(input("url입력 : "))
videos = yt.streams.all()

#print('videos', videos)

for i in range(len(videos)) : #range(1,6) 1~5가 출력됨, range(6) : 0~5
    print(i, ' , ', videos[i])

cNum = int(input("다운 받을 화질은?(0~21 입력)"))

down_dir = "C:\youtube"

videos[cNum].download(down_dir)

newFilename = input("변환 할 mp3 파일명은?")
oriFileName = videos[cNum].default_filename

subprocess.call(['ffmpeg', '-i',
    os.path.join(down_dir, oriFileName),
    os.path.join(down_dir, newFilename)

])

print("동영상 다운로드 및 mp3 변환 완료!")
