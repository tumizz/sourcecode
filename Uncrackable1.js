setImmediate(function(){
	Java.perform(function(){
		var exit_bypass = Java.use("java.lang.System");
		exit_bypass.exit.implementation = function(arg){
			console.log("[*] Exit Bypass");
		}
		/* 함수 리턴값을 트루로 바꿔서 점프
		var trueClass = Java.use("sg.vantagepoint.uncrackable1.a");
		trueClass.a.implementation = function(arg){
			console.log("\n[*] True");
			return true;
		}
		*/
		var decrypteClass = Java.use("sg.vantagepoint.a.a");
		decrypteClass.a.implementation = function(arg1, arg2){
			var secret_string = this.a(arg1, arg2);
			var secret_S = ''
			for(var i=0; i<secret_string.length; i++){
				secret_S += String.fromCharCode(secret_string[i])
				//String.fromCharCode() ascii코드를 문자로 반환
			}
			console.log("[*] Decrypted : " +secret_S);
			return secret_string;
		}
		
		
	})
})










