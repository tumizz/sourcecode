setImmediate(function(){
	Java.perform(function(){
		var exit_bypass = Java.use("java.lang.System");
		exit_bypass.exit.implementation = function(arg){
			console.log("[*] Exit Bypass");
		}
	})
})