import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';
import { DashboardPage } from '../../../pages/dashboard_page';
import { userEmail, userPassword } from '../../../utils/data_variables';
import { generateRandomFirstName, generateRandomTicketDescription } from '../../../utils/data_functions';


// This test checks the status change functionality of a ticket

test('Status Change', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

    // Generate random data for the ticket
    const newFirstName = generateRandomFirstName();
    const newDescription = generateRandomTicketDescription();

    // Create sample ticket with the random data and title "sample_ticket"
    await dashboardPage.createTicket(newFirstName, 'sample_ticket', newDescription);
    await expect(dashboardPage.ticketStatusSelect).toBeVisible();

    // Change the ticket status through all options and back to 'New'
    await dashboardPage.ticketStatusNew.click();
    await dashboardPage.ticketStatusInProgress.click();
    await dashboardPage.ticketStatusSelect.click();
    await dashboardPage.ticketStatusResolved.click();
    await dashboardPage.ticketStatusSelect.click();
    await dashboardPage.ticketStatusClosed.click();
    await dashboardPage.ticketStatusSelect.click();
    await dashboardPage.ticketStatusNew.click();
    await expect(dashboardPage.ticketStatusNew).toBeVisible();
});