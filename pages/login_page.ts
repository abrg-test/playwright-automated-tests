import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('group').getByRole('button', { name: 'Log in' });
  }

  // Go to the Login Page
  async goto() {
    await this.page.goto('https://demo-saas.bugbug.io/sign-in');
  }

  // Login method
  async login(userEmail: string, userPassword: string) {
    await this.emailInput.fill(userEmail);
    await this.passwordInput.fill(userPassword);
    await this.loginButton.click();
  }
}
