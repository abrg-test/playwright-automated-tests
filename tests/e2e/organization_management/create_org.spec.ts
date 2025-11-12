import { test, expect } from '@playwright/test';
import { generateRandomOrganizationName } from '../../../utils/data_functions';
import { login } from '../../../utils/data_functions';

test.beforeEach(async ({ page }) => {
    await login(page);
});

// This test creates a new organization with a randomized name

test('Create Organization', async ({ page }) => {
    // Generate random data for organization name
    const randomOrganizationName = generateRandomOrganizationName();

    // Create a new organization using the random name
    await page.getByTestId('organization-picker').first().click();
    await page.getByRole('menuitem', { name: 'Create organization' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill(randomOrganizationName);
    await page.getByRole('button', { name: 'Create' }).click();

    // Assert that the new organization is created
    await expect(page.getByRole('button', { name: 'Open dashboard' })).toBeVisible();
    await expect(page.getByText(randomOrganizationName)).toBeVisible();
});