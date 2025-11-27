import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login_page';
import { DashboardPage } from '../../../pages/dashboard_page';
import { userEmail, userPassword } from '../../../utils/data_variables';
import { generateRandomFirstName } from '../../../utils/data_functions';
import { generateRandomLastName } from '../../../utils/data_functions';

// Updates user information with randomized data

test('User info edit', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Generate random data for first name and last name
    const newFirstName = generateRandomFirstName();
    const newLastName = generateRandomLastName();

    // Login
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

    //  Edit user information with random first name and last name
    await dashboardPage.userSettingsButton.click();
    await dashboardPage.manageAccountLink.click();
    await dashboardPage.firstnameTextbox.fill(newFirstName);
    await dashboardPage.lastnameTextbox.fill(newLastName);
    await dashboardPage.saveButton.click();

    // Assert that the new first name and last name are displayed in the user settings and in the input fields

    await expect(dashboardPage.userSettingsButton).toContainText(newFirstName);
    await expect(dashboardPage.userSettingsButton).toContainText(newLastName);
    await expect(dashboardPage.firstnameTextbox).toHaveValue(newFirstName);
    await expect(dashboardPage.lastnameTextbox).toHaveValue(newLastName);
});