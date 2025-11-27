import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';

// Test case for failed login attempt with wrong credentials

test('Failed Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('invalid_email@bugbug-inbox.com', 'wrongpassword');
  await expect(page.getByRole('alert')).toBeVisible();
  await expect(page.getByText('Invalid email or password')).toBeVisible();
});