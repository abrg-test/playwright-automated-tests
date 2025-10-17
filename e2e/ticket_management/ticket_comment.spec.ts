import { test, expect } from '@playwright/test';
import { login, generateRandomComment, createSampleTicket } from '../../utils/data_functions';

test.beforeEach(async ({ page }) => {
    await login(page);
    await createSampleTicket(page);
});

// This test adds a comment to an existing ticket

test('Ticket Comment', async ({ page }) => {
    // Generate random comment
    const randomComment = generateRandomComment();

    // Search for a specific ticket by name
    await page.getByTestId('ticket-name-search').click();
    await page.getByTestId('ticket-name-search').fill('sample');

    // Open ticket details and add a random comment
    await page.getByText('sample_ticket').first().click();
    await page.getByRole('textbox', { name: 'Add a comment...' }).click();
    await page.getByRole('textbox', { name: 'Add a comment...' }).fill(randomComment);
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.getByText(randomComment)).toBeVisible();
});