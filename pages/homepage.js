const { BasePage } = require('/basepage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginButton = 'button#login'; // Update this with the actual selector
  }

  async clickLoginButton() {
    await this.click(this.loginButton);
  }
}

module.exports = { HomePage };
