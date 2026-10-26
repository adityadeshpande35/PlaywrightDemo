import { Page, Locator, expect } from '@playwright/test';

export class UPSLoginPage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  continueButton: Locator;
  signInButton: Locator;
  errorMessage: Locator;
  forgotPasswordLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('input[type="password"]');
    this.continueButton = page.locator('button:has-text("Continue")').first();
    this.signInButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('[role="alert"]');
    this.forgotPasswordLink = page.locator('a:has-text("Forgot password")');
  }

  async goto() {
    await this.page.goto('https://www.ups.com/ship/advanced');
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async performLogin(username: string, password: string) {
    await this.enterUsername(username);
    await this.clickContinue();
    await this.page.waitForTimeout(1000); // wait for password field to appear
    await this.enterPassword(password);
    await this.clickSignIn();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isErrorMessageVisible() {
    return await this.errorMessage.isVisible().catch(() => false);
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }
}

export default UPSLoginPage;
