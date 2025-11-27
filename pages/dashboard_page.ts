import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;

    // Locators
    readonly userSettingsButton: Locator;
    readonly signOutLink: Locator;
    readonly manageAccountLink: Locator;
    readonly firstnameTextbox: Locator;
    readonly lastnameTextbox: Locator;
    readonly saveButton: Locator;
    readonly organizationPicker: Locator;
    readonly createOrganizationLink: Locator;
    readonly organizationNameTextbox: Locator;
    readonly createButton: Locator;
    readonly openDashboardButton: Locator;
    readonly newTicketLink: Locator;
    readonly ticketAuthorNameTextbox: Locator;
    readonly ticketTitleTextbox: Locator;
    readonly ticketDescriptionTextbox: Locator;
    readonly submitTicketButton: Locator;
    readonly ticketStatusSelect: Locator;
    readonly ticketSearch: Locator;
    readonly sampleTicket: Locator;
    readonly ticketStatusNew: Locator;
    readonly ticketStatusInProgress: Locator;
    readonly ticketStatusResolved: Locator;
    readonly ticketStatusClosed: Locator;
    readonly ticketCommentTextbox: Locator;
    readonly sendCommentButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // User settings
        this.userSettingsButton = page.getByTestId('user-settings');
        this.signOutLink = page.getByRole('menuitem', { name: 'Sign out' });
        this.manageAccountLink = page.getByRole('menuitem', { name: 'Manage account' });
        this.firstnameTextbox = page.getByRole('textbox', { name: 'First name' });
        this.lastnameTextbox = page.getByRole('textbox', { name: 'Last name' });
        this.saveButton = page.getByRole('button', { name: 'Save' });

        // Organization management
        this.organizationPicker = page.getByTestId('organization-picker').first();
        this.createOrganizationLink = page.getByRole('menuitem', { name: 'Create organization' });
        this.organizationNameTextbox = page.getByRole('textbox', { name: 'Name' });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.openDashboardButton = page.getByRole('button', { name: 'Open dashboard' });

        // Ticket management
        this.newTicketLink = page.getByRole('link', { name: 'New' });
        this.ticketAuthorNameTextbox = page.getByRole('textbox', { name: 'Your name' });
        this.ticketTitleTextbox = page.getByRole('textbox', { name: 'Title' });
        this.ticketDescriptionTextbox = page.getByRole('textbox', { name: 'Description' });
        this.submitTicketButton = page.getByRole('button', { name: 'Submit' });
        this.ticketStatusSelect = page.getByTestId('ticket-status-select');
        this.ticketSearch = page.getByTestId('ticket-name-search');
        this.sampleTicket = page.getByText('sample_ticket').first();
        this.ticketStatusNew = page.getByRole('button', { name: 'New' });
        this.ticketStatusInProgress = page.getByRole('option', { name: 'In Progress' });
        this.ticketStatusResolved = page.getByRole('option', { name: 'Resolved' });
        this.ticketStatusClosed = page.getByRole('option', { name: 'Closed' });
        this.ticketCommentTextbox = page.getByRole('textbox', { name: 'Add a comment...' });
        this.sendCommentButton = page.getByRole('button', { name: 'Send' });
    }

    // Logout method
    async logout() {
        await this.userSettingsButton.click();
        await this.signOutLink.click();
    }

    // Create Organization method
    async createOrganization(organizationName: string) {
        await this.organizationPicker.click();
        await this.createOrganizationLink.click();
        await this.organizationNameTextbox.fill(organizationName);
        await this.createButton.click();
    }

    // Create new ticket method
    async createTicket(authorName: string, title: string, description: string) {
        await this.newTicketLink.click();
        await this.page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page loads
        await this.ticketAuthorNameTextbox.fill(authorName);
        await this.ticketTitleTextbox.fill(title);
        await this.ticketDescriptionTextbox.fill(description);
        await this.submitTicketButton.click();
    }

    // Create sample ticket method
    async createSampleTicket(authorName: string, description: string) {
        await this.newTicketLink.click();
        await this.page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page loads
        await this.ticketAuthorNameTextbox.fill(authorName);
        await this.ticketTitleTextbox.fill('sample_ticket');
        await this.ticketDescriptionTextbox.fill(description);
        await this.submitTicketButton.click();
    }

    // Create ticket comment method
    async addCommentToTicket(comment: string) {
        await this.ticketCommentTextbox.click();
        await this.ticketCommentTextbox.fill(comment);
        await this.sendCommentButton.click();
    }
}