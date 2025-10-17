import { test, expect } from '@playwright/test';
import { login, generateRandomFirstName, generateRandomTicketTitle, generateRandomTicketDescription } from '../../utils/data_functions';

test.beforeEach(async ({ page }) => {
    await login(page);
});

// This test creates a new ticket with randomized data

test('Create Ticket', async ({ page }) => {
    // Generate random data for the ticket
    const newTitle = generateRandomTicketTitle();
    const newFirstName = generateRandomFirstName();
    const newDescription = generateRandomTicketDescription();

    // Create a new ticket using the random data
    await page.getByRole('link', { name: 'New' }).click();
    await page.pause();
    await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page loads
    await page.getByRole('textbox', { name: 'Your name' }).click();
    await page.getByRole('textbox', { name: 'Your name' }).fill(newFirstName);
    await expect(page.getByRole('textbox', { name: 'Your name' })).toHaveValue(newFirstName);
    await page.getByRole('textbox', { name: 'Title' }).click();
    await page.getByRole('textbox', { name: 'Title' }).fill(newTitle);
    await expect(page.getByRole('textbox', { name: 'Title' })).toHaveValue(newTitle);
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill(newDescription);
    await expect(page.getByRole('textbox', { name: 'Description' })).toHaveValue(newDescription);
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assert that the new ticket is created
    await expect(page.getByTestId('ticket-status-select')).toBeVisible();
});