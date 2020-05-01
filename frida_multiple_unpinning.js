/*  Android ssl certificate pinning bypass script for various methods
    by Maurizio Siddu
    
    Run with:
    frida -U -f [APP_ID] -l frida_multiple_unpinning.js --no-pause
*/

setTimeout(function() {
    Java.perform(function () {
        console.log('')
        console.log('======')
        console.log('[#] Android Bypass for various Certificate Pinning methods [#]')
        console.log('======')
    
        var X509TrustManager = Java.use('javax.net.ssl.X509TrustManager');
        var SSLContext = Java.use('javax.net.ssl.SSLContext');
    
    
        // TrustManager (Android < 7)
        var TrustManager = Java.registerClass({
            // Implement a custom TrustManager
            name: 'com.sensepost.test.TrustManager',
            implements: [X509TrustManager],
            methods: {
                checkClientTrusted: function (chain, authType) {},
                checkServerTrusted: function (chain, authType) {},
                getAcceptedIssuers: function () {return []; }
            }
        });
    
       // OpenSSLSocketImpl
        try {
            var OpenSSLSocketImpl = Java.use('com.android.org.conscrypt.OpenSSLSocketImpl');
            OpenSSLSocketImpl.verifyCertificateChain.implementation = function (certRefs, authMethod) {
                console.log('[+] Intercepted OpenSSLSocketImpl');
            }

            console.log('[+] Setup OpenSSLSocketImpl pinning')
        } catch (err) {
            console.log('[-] OpenSSLSocketImpl pinner not found');


       }
    });
}, 0);