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