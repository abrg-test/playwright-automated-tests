import { test, expect } from '@playwright/test';

// Test case for successful login

test('Login Flow', async ({ page }) => {
  await page.goto('https://demo-saas.bugbug.io/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pepubotidosibes@bugbug-inbox.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('azerty1234');
  await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
});

// Test case for failed login attempt with wrong credentials

test('Failed Login', async ({ page }) => {
  await page.goto('https://demo-saas.bugbug.io/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('invalid_email@bugbug-inbox.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
  await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('alert')).toBeVisible();
});