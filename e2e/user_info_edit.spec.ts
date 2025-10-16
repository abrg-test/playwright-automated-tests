import { test, expect } from '@playwright/test';
import { generateRandomFirstName } from '../utils/data_functions';
import { generateRandomLastName } from '../utils/data_functions';
const newFirstName = generateRandomFirstName();
const newLastName = generateRandomLastName();

// Updates user information with randomized data

test('User info edit', async ({ page }) => {

    // Log in

    await page.goto('https://demo-saas.bugbug.io/sign-in');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('pepubotidosibes@bugbug-inbox.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('azerty1234');
    await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();

    //  Edit user information with random first name and last name

    await page.getByTestId('user-settings').click();
    await page.getByRole('menuitem', { name: 'Manage account' }).click();
    await page.getByRole('textbox', { name: 'First name' }).click();
    await page.getByRole('textbox', { name: 'First name' }).fill(newFirstName);
    await page.getByRole('textbox', { name: 'Last name' }).click();
    await page.getByRole('textbox', { name: 'Last name' }).fill(newLastName);
    await page.getByRole('button', { name: 'Save' }).click();

    // Assert that the new first name and last name are displayed in the user settings and in the input fields
    
    await expect(page.getByTestId('user-settings')).toContainText(newFirstName);
    await expect(page.getByTestId('user-settings')).toContainText(newLastName);
    await expect(page.getByRole('textbox', { name: 'First name' })).toHaveValue(newFirstName);
    await expect(page.getByRole('textbox', { name: 'Last name' })).toHaveValue(newLastName);
});