import { test } from "@base-page";
import Allure from "@allure";
import ExcelUtil from "@excelUtils";
import { state } from "@state-manager";
import { ConfigReader } from "@config-reader";

//test.skip();

const SHEET = "LoginTest";

test.beforeEach(async ({ reusable, context }) => {
    context.clearCookies();
    state.stepCounter = 1;
    await reusable.goto(ConfigReader.LOGIN_URL);
});

const data1 = ExcelUtil.getTestData(SHEET, "TC01_ValidCredentials");
test(`${data1.TestID} - ${data1.Description}`, async ({ loginPage }) => {
    Allure.attachDetails(data1.Description, data1.Issue);
    await loginPage.loginToFrontEnd(data1.Username, data1.Password);
    await loginPage.assertHomePageLaunchedSuccessfully();
});

const data2 = ExcelUtil.getTestData(SHEET, "TC02_InvalidUsernameValidPassword");
test(`${data2.TestID} - ${data2.Description}`, async ({ loginPage }) => {
    Allure.attachDetails(data2.Description, data2.Issue);
    await loginPage.loginToFrontEnd(data2.Username, data2.Password);
    await loginPage.assertInvalidLoginMessageIsVisible();
});

const data3 = ExcelUtil.getTestData(SHEET, "TC03_ValidUsernameInvalidPassword");
test(`${data3.TestID} - ${data3.Description}`, async ({ loginPage }) => {
    Allure.attachDetails(data3.Description, data3.Issue);
    await loginPage.loginToFrontEnd(data3.Username, data3.Password);
    await loginPage.assertInvalidLoginMessageIsVisible();
});

const data4 = ExcelUtil.getTestData(SHEET, "TC04_InvalidUsernameInvalidPassword");
test(`${data4.TestID} - ${data4.Description}`, async ({ loginPage }) => {
    Allure.attachDetails(data4.Description, data4.Issue);
    await loginPage.loginToFrontEnd(data4.Username, data4.Password);
    await loginPage.assertInvalidLoginMessageIsVisible();
});

