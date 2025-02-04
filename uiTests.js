// uiTest.js

const { chromium } = require('playwright');

// Reusable login function
async function login(page, username, password) {
  await page.fill('input[name="user-name"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('input[type="submit"]');
}

// Reusable function to run tests
async function runTest(username, password, expectedSelector, testName) {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await login(page, username, password);
  
  try {
    await page.waitForSelector(expectedSelector, { timeout: 5000 });
    console.log(`${testName} Passed`);
  } catch (error) {
    console.error(`${testName} Failed: ${error.message}`);
  }

  await browser.close();
}

// Test Cases
(async () => {
  // Test Case 1: Valid Login Test
  await runTest('standard_user', 'secret_sauce', '.inventory_list', 'Valid Login Test');

  // Test Case 2: Locked Out User Test
  await runTest('locked_out_user', 'secret_sauce', '.error-message-container', 'Locked Out User Test');

  // Test Case 3: Invalid Login Test
  await runTest('invalid_user', 'wrong_password', '.error-message-container', 'Invalid Login Test');
})();
