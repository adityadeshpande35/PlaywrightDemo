// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { worker } = require('node:cluster');
const { permission } = require('node:process');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries:1,

  timeout:30000,
  expect:{
    timeout:5000
  },
  reporter: 'html',

  projects:[

    {
      name:'safari',
    
  use: {
    browserName:'webkit',
    headless:true,
    screenshot:'off',
    trace:'on',
    ...devices['iPhone 16']
  }
    },
    {
      name:'chrome',
      use:{
        browserName:'chromium',
        headless:false,
        screenshot:'on',
        ignoreHttpSErrors:true,
        permissions:['geolocation'],
        trace:'on',
        //...devices['Moto Edge 50 fusion']
        video:"retain-on-failure",
      //  viewport:{width:720,height:720}
      }
    }
  ]
  


  /* Configure projects for major browsers */
  
});
module.exports = config;
