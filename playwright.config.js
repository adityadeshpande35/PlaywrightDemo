// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { worker } = require('node:cluster');
const { retries } = require('./playwright.config1');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  workers:5,
  retries:2,
  meout:30000,
  expect:{
    timeout:5000
  },
  reporter: 'html',
  
  use: {
    actionTimeout:10*1000,
    navigationTimeout:30*1000,
    browserName:'chromium',
    headless:true,
    screenshot:'on',
    trace:'on',
  },

  /* Configure projects for major browsers */
  
});
module.exports = config;
