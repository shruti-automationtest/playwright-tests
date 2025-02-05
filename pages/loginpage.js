// pages/loginPage.js
const { BasePage } = require('./basepage');
// const userCredentials = require('./usercredentials');
import { userCredentials } from '../fixtures/fixture.js';

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = 'input#user-name';
    this.passwordInput = 'input#password';
    this.loginButton = 'input#login-button';
    this.errorMessage = 'div.error-message-container';
  }

  // Function to perform login with specified user credentials
  async login(userType) {
    console.log('get user creds')
    const user = userType;
    if (!user) {
      throw new Error(`User type '${userType}' not defined in userCredentials.`);
    }
    await this.page.waitForTimeout(1000);
    await this.click(this.usernameInput);
    await this.fillInput(this.usernameInput, userType.username);
    await this.click(this.passwordInput);
    await this.fillInput(this.passwordInput, userType.password);
    await this.page.waitForTimeout(1000);
    await this.click(this.loginButton);
  }

  // Function to get the error message text
  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = { LoginPage };
