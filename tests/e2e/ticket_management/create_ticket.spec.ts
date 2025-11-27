import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';
import { DashboardPage } from '../../../pages/dashboard_page';
import { userEmail, userPassword } from '../../../utils/data_variables';
import { generateRandomFirstName, generateRandomTicketTitle, generateRandomTicketDescription } from '../../../utils/data_functions';


// This test creates a new ticket with randomized data

test('Create Ticket', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

    // Generate random data for the ticket
    const newTitle = generateRandomTicketTitle();
    const newFirstName = generateRandomFirstName();
    const newDescription = generateRandomTicketDescription();

    // Create a new ticket using the random data
    
    await dashboardPage.createTicket(newFirstName, newTitle, newDescription);

    // Assert that the new ticket is created
    await expect(page.getByTestId('ticket-status-select')).toBeVisible();
});