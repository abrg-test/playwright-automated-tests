// Data and variables used for the tests

const userEmail = 'pepubotidosibes@bugbug-inbox.com';
const userPassword = 'azerty1234';

export function generateRandomFirstName(): string {
 const timestamp = Date.now();
 return `firstname_${timestamp}`;
}

export function generateRandomLastName(): string {
 const timestamp = Date.now();
 return `lastname_${timestamp}`;
}