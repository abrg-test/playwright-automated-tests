import { test, expect } from '@playwright/test';
import { generateRandomOrganizationName } from './data_variables';

// Creates a new organization

test('Create Organization', async ({ page }) => {
    await page.goto('https://demo-saas.bugbug.io/sign-in');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('pepubotidosibes@bugbug-inbox.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('azerty1234');
    await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
    await page.locator('path').first().click();
    await page.getByRole('menuitem', { name: 'Create organization' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill(generateRandomOrganizationName());
    await page.getByRole('button', { name: 'Create' }).click();
    await expect(page.getByRole('button', { name: 'Open dashboard' })).toBeVisible();
});