import { test, expect } from '@playwright/test';
import { login, createSampleTicket } from '../../utils/data_functions';

test.beforeEach(async ({ page }) => {
    await login(page);
    await createSampleTicket(page);
});

// This test checks the status change functionality of a ticket

test('Status Change', async ({ page }) => {
    // Search for the sample ticket
    await page.getByTestId('ticket-name-search').click();
    await page.getByTestId('ticket-name-search').fill('sample');

    // Open ticket details
    await page.getByText('sample_ticket').first().click();
    await expect(page.getByRole('button', { name: 'New' })).toBeVisible();

    // Change the ticket status through all options and back to 'New'
    await page.getByRole('button', { name: 'New' }).click();
    await page.getByRole('option', { name: 'In Progress' }).click();
    await expect(page.getByRole('button', { name: 'In Progress' })).toBeVisible();
    await page.getByRole('button', { name: 'In Progress' }).click();
    await page.getByRole('option', { name: 'Resolved' }).click();
    await expect(page.getByRole('button', { name: 'Resolved' })).toBeVisible();
    await page.getByRole('button', { name: 'Resolved' }).click();
    await page.getByRole('option', { name: 'Closed' }).click();
    await expect(page.getByRole('button', { name: 'Closed' })).toBeVisible();
    await page.getByRole('button', { name: 'Closed' }).click();
    await page.getByRole('option', { name: 'New' }).click();
    await expect(page.getByRole('button', { name: 'New' })).toBeVisible();
});