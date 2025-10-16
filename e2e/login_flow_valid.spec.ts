import { test, expect } from '@playwright/test';
import { userEmail, userPassword } from '../utils/data_variables';

// Test case for successful login

test('Login Flow', async ({ page }) => {
  await page.goto('https://demo-saas.bugbug.io/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(userPassword);
  await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
});