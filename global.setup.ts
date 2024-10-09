import { Browser, chromium, Page } from "@playwright/test";
import { ConfigReader } from "@config-reader";
import { LoginPage } from "@loginpage";

async function globalSetup() {
    const storagePath = 'storageState.json';
    const browser: Browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.goto(ConfigReader.LOGIN_URL);
    await loginPage.loginToFrontEnd(ConfigReader.USERNAME, ConfigReader.PASSWORD);
    await loginPage.assertHomePageLaunchedSuccessfully();

    await page.context().storageState({ path: storagePath });
    await browser.close();
}

export default globalSetup;