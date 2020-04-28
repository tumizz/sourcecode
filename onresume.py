import frida, sys

jscode = """
setImmediate(function(){
	Java.perform(function(){
		var Activity=Java.use("android.app.Activity")
		Activity.onResume.implementation = function(){
			console.log("[*] onResume() got called!");
			this.onResume();
		};
	});
});
"""
process = frida.get_usb_device().attach("com.android.chrome")
script = process.create_script(jscode)
script.load()
sys.stdin.read()