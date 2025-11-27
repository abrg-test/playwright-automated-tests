import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';
import { DashboardPage } from '../../../pages/dashboard_page';
import { userEmail, userPassword } from '../../../utils/data_variables';

// Test case for successful logout

test('Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login(userEmail, userPassword);
  await dashboardPage.logout();
  await expect(page.locator('header').getByRole('button', { name: 'Log in' })).toBeVisible();
});