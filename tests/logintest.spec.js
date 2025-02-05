// tests/loginTest.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
import { userCredentials } from '../fixtures/fixture.js';

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page , baseURL}) => {
    loginPage = new LoginPage(page);
    await page.goto(baseURL);
  });

  test('Valid user login', async () => {
    await loginPage.login(userCredentials.validUser);
    // Add assertions to verify successful login, e.g., check for a specific element on the homepage
    // await expect(page.locator('selector-for-homepage-element')).toBeVisible();
  });

  test('Invalid user login', async ({baseURL}) => {
    await loginPage.login(userCredentials.invalidUser);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
  });

  test('Locked user login', async () => {
    await loginPage.login(userCredentials.lockedUser);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
  });
});
