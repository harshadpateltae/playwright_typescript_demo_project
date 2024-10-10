# Playwright TypeScript Project

This project is an automated testing suite using Playwright with TypeScript. It is designed to test web applications across different browsers, ensuring that functionalities behave as expected. The project includes custom test fixtures, data handling, and reporting.


## Project Setup 

### Prerequisites

Make sure you have the following installed:

- Node.js (v16 or later)

- TypeScript (v4 or later)

- Playwright (latest version)

- Git (optional but recommended for version control)


### Installation 

1. Clone the repository:

git clone https://github.com/harshadpateltae/playwright_typescript_demo_project.git

 
2. Navigate to the project directory:

   cd playwright-typescript-project
 

3. Install dependencies:

   npm install
 

4. Install Playwright browsers:  

   npx playwright install


### Run All Tests

To run all the tests in the project, execute:

npx playwright test


### Run Specific Test Files

To run a specific test file:
 

npx playwright test src/tests/Homepage.spec.ts

 
### Run Tests in Different Browsers

To run tests in all supported browsers (Chromium, Firefox, WebKit):

 
npx playwright test --project=all


To run tests in a specific browser (e.g., Chromium):
 

npx playwright test --project=chromium

### Headless and Headed Mode

By default, Playwright runs in headless mode. To run tests in headed mode:

 
npx playwright test --headed


## Reporting 

The project is integrated with [Allure Reporting](https://docs.qameta.io/allure/). After running tests, reports are generated in the `reports/` directory.

 
To view the reports:

1. Run tests with Allure:


   npx playwright test --reporter=line,allure-playwright

  
2. Generate the Allure report:


   allure generate reports/allure-results --clean

  
3. Open the report in a browser:


   allure open
  

This README provides a comprehensive guide to getting started with your Playwright TypeScript project. You can customize sections as needed to match your specific project details.