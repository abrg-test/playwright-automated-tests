import { test, expect } from '@playwright/test';

test('Login Flow', async ({ page }) => {
  await page.goto('https://demo-saas.bugbug.io/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pepubotidosibes@bugbug-inbox.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('azerty1234');
  await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
});