import { test, expect } from '@playwright/test';
import { generateRandomFirstName } from './data_variables';
import { generateRandomLastName } from './data_variables';

// Updates user information with randomized data

test('User info edit', async ({ page }) => {
    const newFirstName = generateRandomFirstName();
    const newLastName = generateRandomLastName();
    await page.goto('https://demo-saas.bugbug.io/sign-in');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('pepubotidosibes@bugbug-inbox.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('azerty1234');
    await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
    await page.getByTestId('user-settings').click();
    await page.getByRole('menuitem', { name: 'Manage account' }).click();
    await page.getByRole('textbox', { name: 'First name' }).click();
    await page.getByRole('textbox', { name: 'First name' }).fill(newFirstName);
    await page.getByRole('textbox', { name: 'Last name' }).click();
    await page.getByRole('textbox', { name: 'Last name' }).fill(newLastName);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Successfully updated your')).toBeVisible();
});