Java.perform(function(){
	var Activity = Java.use("android.app.Activity")
	Activity.onResume.implementation = function(){
		console.log("[*] onResume() got called!"); //console log 출력
		this.onResume(); //기존 함수 로직 실행
	}
})