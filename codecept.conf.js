const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  path: '/wd/hub/',
  tests: './src/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      waitForTimeout: 20000,
      smartWait: 20000,
      port: 4723,
      desiredCapabilities: {
        autoGrantPermissions: true,
        automationName: "UiAutomator1",
        appWaitPackage: "com.cencosud.pe.wong",
        appPackage: "com.cencosud.pe.wong",
        appWaitActivity: "com.cencosud.pe.wong.registration.RegistrationActivity",
        appActivity: "com.cencosud.pe.wong.registration.RegistrationActivity",
        deviceName: '19f7ad26',
        platformVersion: "9",
        noReset: false
      }
    },
    
    AssertWrapper:{
      require: 'codeceptjs-assert'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'APPIUM',
  gherkin: {
    features: './src/features/*.feature',
    steps: './src/steps/*.js'
  },
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}