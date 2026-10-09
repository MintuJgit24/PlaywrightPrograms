// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 40 * 1000,
  expect: {
    timeout: 60 * 1000
  },

  //fullyParallel: true, //to run the tests in parallel, we can use this property. need to add only if needed, by default it is false. Here we are running the tests in parallel

  projects: [{
    name: 'chrome_project',
    use: {
      browserName: 'chromium',
      headless: false,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
      //viewport: { width: 500, height: 500 } //to customise the viewport size for the browser, we can use this property. By default, it is 1280x720. Here we are changing it to 500x500
      //permissions: ['geolocation','camera','microphone','notifications'], //to give permission to the browser to access geolocation, we can use this property. need to add only if needed, by default it is denied. Here we are giving permission to access geolocation
      //geolocation: { longitude: 80.2707, latitude: 13.0827 }, //to set the geolocation for the browser, we can use this property. need to add only if needed, by default it is 0,0. Here we are setting it to Chennai, India
      //ignoreHTTPSErrors: true, //for SSL certificate errors //to ignore the https errors for the browser, we can use this property. need to add only if needed, by default it is false. Here we are ignoring the https errors

    },
  },
  {
    name: 'firefox_project',
    use: {
      browserName: 'firefox',
      headless: false,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
    },
  },
  {
    name: 'safari_project',
    use: {
      browserName: 'webkit',
      headless: false,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
      //...devices['Desktop Safari'] //this need to be added only if needed to run the test in desktop safari, if we want to run in mobile safari then we can use devices['iPhone 13 Pro'] or any other device from the list of devices available in playwright
    },
  }
  ]
  /* Configure projects for major browsers */

})