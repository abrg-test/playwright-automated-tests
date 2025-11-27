import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';
import { DashboardPage } from '../../../pages/dashboard_page';
import { userEmail, userPassword } from '../../../utils/data_variables';
import { generateRandomOrganizationName } from '../../../utils/data_functions';

// This test creates a new organization with a randomized name

test('Create Organization', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

// Login
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

// Generate random data for organization name
    const randomOrganizationName = generateRandomOrganizationName();

// Create a new organization using the random name
    await dashboardPage.organizationPicker.click();
    await dashboardPage.createOrganizationLink.click();
    await dashboardPage.organizationNameTextbox.fill(randomOrganizationName);
    await dashboardPage.createButton.click();

// Assert that the new organization is created
    await expect(page.getByRole('button', { name: 'Open dashboard' })).toBeVisible();
    await expect(page.getByText(randomOrganizationName)).toBeVisible();
});