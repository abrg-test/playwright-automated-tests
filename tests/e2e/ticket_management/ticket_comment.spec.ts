import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';
import { DashboardPage } from '../../../pages/dashboard_page';
import { userEmail, userPassword } from '../../../utils/data_variables';
import { generateRandomFirstName, generateRandomTicketDescription, generateRandomComment } from '../../../utils/data_functions';

// This test adds a comment to a sample ticket

test('Ticket Comment', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

    // Generate random data for the sample ticket
    const newFirstName = generateRandomFirstName();
    const newDescription = generateRandomTicketDescription();

    // Create sample ticket with the random data and title "sample_ticket"
    await dashboardPage.createTicket(newFirstName, 'sample_ticket', newDescription);
    await expect(dashboardPage.ticketStatusSelect).toBeVisible();

    // Generate random comment
    const randomComment = generateRandomComment();

    // Add a random comment to the sample ticket
    await dashboardPage.addCommentToTicket(randomComment);
    await expect(page.getByText(randomComment)).toBeVisible();
});