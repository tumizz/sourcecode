#!/system/bin/sh

src=/data/data/com.hyundai.mymenu/.69f94831
des=/data/local/kst/dex

count=0

while [ $count -lt 100000 ]
do
	list=`find $src -name *.dex`
	for file in $list
	do
		cp $file $des
	done
	
	count=$(($count+1))
done