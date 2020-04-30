setImmediate(function() {
	Java.perform(function(){
		chall_01 = Java.use("uk.rossmarks.fridalab.challenge_01")
		chall_01.chall01.value = 1; //value는 속성이라는 뜻 js에서 객체내부의 속성
	})
})