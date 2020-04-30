setImmediate(function() {
	Java.perform(function(){
		//Challenge 01
		var chall_01 = Java.use("uk.rossmarks.fridalab.challenge_01")
		chall_01.chall01.value = 1; //value는 속성이라는 뜻 js에서 객체내부의 속성
		console.log("\nSolved Challenge 01");
		
		//Challenge 02
		//instance 메소드는 Java.choose를 사용해야함
		Java.choose("uk.rossmarks.fridalab.MainActivity", {
			onMatch : function(chall_02){
				chall_02.chall02();
			},
			onComplete : function(){
			console.log("\nSolved Challenge 02");
			}
		})
		
		//Challenge 03
		var chall_03 = Java.use("uk.rossmarks.fridalab.MainActivity")
		chall_03.chall03.implementation = function(){
			console.log("\nSolved Challenge 03");
			return true;
		}
		
		//Challenge 04
		Java.choose("uk.rossmarks.fridalab.MainActivity",{
			onMatch : function(chall_04){
				console.log("\nfrida string send");
				chall_04.chall04("frida");
			},
			onComplete : function(){
				console.log("\nSolved Challenge 04");
			}
		})
		
		//Challenge 05
		var chall_05 = Java.use("uk.rossmarks.fridalab.MainActivity");
		chall_05.chall05.overload("java.lang.String").implementation = 
		 function(arg){
			 this.chall05("frida");
			 console.log("\nSolved Challenge 05");
		 }
		 
		 //Challenge 07
		 var chall_07 = Java.use("uk.rossmarks.fridalab.challenge_07");
		 Java.choose("uk.rossmarks.fridalab.MainActivity",{
			 onMatch : function(instance){
				 for(var i=9999; i>=1000; i--){
					 var boanproject = String(i);
					 console.log("chall07 random : "+boanproject);
					if(chall_07.check07Pin(boanproject)){
						console.log("random! : "+boanproject);
						instance.chall07(boanproject);
						break;
					}
				 }
			},
			 onComplete : function(){
				 console.log("\nSolved Challenge 07");
			}
		 })
		 
		 //Challenge 08
		 var klass = Java.use("android.widget.Button");
		 Java.choose("uk.rossmarks.fridalab.MainActivity",{
			onMatch : function(instance){
				var checkid = instance.findViewById(2131165231);
				var check = Java.cast(checkid, klass);
				var string = Java.use("java.lang.String");
				check.setText(string.$new("Confirm")); //$new : 인스턴스화 
				console.log("Challenge 08");
			},
			onComplete : function(){
				console.log("\nSolved Challenge 08");
			}
		})
		
	})
})
	 //Challenge 06
setTimeout(function(){
	console.log("10sec Challenge 06!");
	setImmediate(function() {
		Java.perform(function(){
			var chall_06 = Java.use("uk.rossmarks.fridalab.challenge_06");
			chall_06.addChall06.overload("int").implementation = function(arg){
				Java.choose("uk.rossmarks.fridalab.MainActivity", {
					onMatch : function(instance) {
						instance.chall06(chall_06.chall06.value);
				},
				onComplete : function(){
					console.log("Solved Challenge 06");
					}
				})
			}
		})
	})
}, 10000);		 
		 
 



















































