# Playwright automated tests
This repository is a collection of automated tests using Playwright.

All the tests can be found in the e2e folder.

Data variables and Functions used for the tests can be found in the utils folder.
## About me
🙌 I am a beginner QA tester passionate about improving products and user experience. 
### [Linkedin](https://www.linkedin.com/in/audrey-borrego-08a52095/)

Find here a Portfolio with an example of a project and its test plan, as well as ticket reports:

[Portolio EN](https://github.com/abrg-test/abrgportfolioEN)

[Portfolio FR](https://github.com/abrg-test/abrgportfolioFR)
## How to set-up the test environment
The tests use hidden credentials as variables. Update the credentials with your own using the following steps:
1. Navigate to https://demo-saas.bugbug.io/sign-up and create an account.
2. Clone this project in an IDE like Visual Studio Code.
3. Install Playwright for Visual Studio Code.
4. Navigate to the data_variables file: utils\data_variables.ts
5. Replace "hiddenEmail" with your account's email address.
6. Replace "hiddenPassword" with your account's password.
## Resources
[Playwright's Installation documentation](https://playwright.dev/docs/intro)

[Playwright's Running Tests documentation](https://playwright.dev/docs/running-tests)
