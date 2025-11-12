import { test, expect } from '@playwright/test';
import { login } from '../../../utils/data_functions';

test.beforeEach(async ({ page }) => {
  await login(page);
});

// Test case for successful logout

test('Logout', async ({ page }) => {

  await page.getByTestId('user-settings').click();
  await page.getByRole('menuitem', { name: 'Sign out' }).click();
  await expect(page.locator('header').getByRole('button', { name: 'Log in' })).toBeVisible();
});