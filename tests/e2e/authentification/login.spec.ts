import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';
import { userEmail, userPassword } from '../../../utils/data_variables';

// Test case for successful login

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(userEmail, userPassword);
  await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
});