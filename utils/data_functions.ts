import { expect, type Page } from '@playwright/test';
import { userEmail, userPassword } from './data_variables';

// Functions used for the tests

export async function login(page: Page) {
  await page.goto('https://demo-saas.bugbug.io/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(userPassword);
  await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
}

export async function createsampleticket(page: Page) {
  await page.goto('https://demo-saas.bugbug.io/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(userPassword);
  await page.getByRole('group').getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Demo SaaS' })).toBeVisible();
  await page.getByRole('link', { name: 'New' }).click();
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page loads
  await page.getByRole('textbox', { name: 'Your name' }).click();
  await page.getByRole('textbox', { name: 'Your name' }).fill('Name');
  await expect(page.getByRole('textbox', { name: 'Your name' })).toHaveValue('Name');
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('sample_ticket');
  await expect(page.getByRole('textbox', { name: 'Title' })).toHaveValue('sample_ticket');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Description');
  await expect(page.getByRole('textbox', { name: 'Description' })).toHaveValue('Description');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByTestId('ticket-status-select')).toBeVisible();
  await page.getByRole('tab', { name: 'Tickets' }).click();
}

export function generateRandomFirstName(): string {
  const timestamp = Date.now();
  return `firstname_${timestamp}`;
}

export function generateRandomLastName(): string {
  const timestamp = Date.now();
  return `lastname_${timestamp}`;
}

export function generateRandomOrganizationName(): string {
  const timestamp = Date.now();
  return `organization_${timestamp}`;
}

export function generateRandomTicketTitle(): string {
  const timestamp = Date.now();
  return `ticket_title${timestamp}`;
}

export function generateRandomTicketDescription(): string {
  const timestamp = Date.now();
  return `ticket_description${timestamp}`;
}

export function generateRandomComment(): string {
  const timestamp = Date.now();
  return `ticket_comment_${timestamp}`;
}