class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async fillInput(selector, value) {
      await this.page.fill(selector, value);
    }
  
    async click(selector) {
      await this.page.click(selector);
    }
  }
  
  module.exports = { BasePage };
  