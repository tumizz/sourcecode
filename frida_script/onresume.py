import frida, sys

def on_message(message, data):
    if message['type'] == 'send':
        print(message['payload'])
    else:
        print(message)

jscode = """
setImmediate(function(){
	Java.perform(function(){
		var Activity=Java.use("android.app.Activity")
		Activity.onResume.implementation = function(){
			send("[*] onResume() got called!");
			this.onResume();
		};
	});
});
"""
session = frida.get_usb_device().attach("package.name")
script = session.create_script(jscode)
script.on('message', on_message)
script.load()
sys.stdin.read()