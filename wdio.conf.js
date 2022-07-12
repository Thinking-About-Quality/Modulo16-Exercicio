const path = require('path')

exports.config = {

    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    maxInstances: 10,
    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "Nexus4",
        "appium:automationName": "UIAutomator2",
        "appium:app": "./app/android/Android-NativeDemoApp.apk",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        "appium:appPackage": "com.wdiodemoapp"

    }],
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723,
                path: '/wd/hub'
            },
            logPath: './'
        }]
    ],
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000
    }
   
}
