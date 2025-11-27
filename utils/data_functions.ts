import { expect, type Page } from '@playwright/test';
import { userEmail, userPassword } from './data_variables';

// Functions used for the tests

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