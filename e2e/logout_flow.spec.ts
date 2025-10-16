import { test, expect } from '@playwright/test';

// Test case for successful logout

test('Logout Flow', async ({ page }) => {
  await page.goto('https://demo-saas.bugbug.io/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pepubotidosibes@bugbug-inbox.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('azerty1234');
  await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
  await page.getByTestId('user-settings').click();
  await page.getByRole('menuitem', { name: 'Sign out' }).click();
  await expect(page.locator('header').getByRole('button', { name: 'Log in' })).toBeVisible();
});