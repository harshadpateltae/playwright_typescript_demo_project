import { test as base } from "@playwright/test";
import { LoginPage } from "@loginpage";
import { HomePage } from "@homepage";
import { Reusable } from "@reusable";
import { ConfigReader } from "@config-reader";


export const test = base.extend<{ loginPage: LoginPage, homePage: HomePage, reusable: Reusable, configReader: ConfigReader, stepCounter: { current: number }; }>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    reusable: async ({ page }, use) => {
        await use(new Reusable(page));
    },
    configReader: async ({ page }, use) => {
        await use(new ConfigReader())
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    stepCounter: async ({}, use) => {
        // Initialize the step counter at the start of each test
        const stepCounter = { current: 1 };
        await use(stepCounter);
    },
});
