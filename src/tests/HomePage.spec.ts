import { test } from "@base-page";
import { ConfigReader } from "@config-reader";
import { state } from "@state-manager";

test.beforeEach(async ({ reusable }) => {
    state.stepCounter = 1;
    await reusable.log(`Open URL : ${ConfigReader.HOMEPAGE_URL}`);
    await reusable.goto(ConfigReader.HOMEPAGE_URL);
});

test.describe("HomePage feature tests", async () => {

    test("Verify all home page elements are present on page.", async ({ homePage }) => {
        await homePage.verifyAllHomePageElementsArePresent();
    });

    test("Verify side-panel menu hide by clicking on toggle button.", async ({ homePage }) => {
        await homePage.hideSideMainMenu();
    });

    test("Verify add user page all fields validations.", async ({ homePage }) => {
        await homePage.verifyAddUserSaveButtonWithoutFillingData();
        await homePage.verifyAddUserPageFieldsValidations();
        await homePage.verifyAddUserCancelButton();
    });

    test("Verify add user functionality and verify it is added successfully.", async ({ homePage }) => {
        await homePage.verifyAddUserSaveButtonWithFillingData();
        await homePage.verifyNewlyAddedUserPresentInRecords();
    });

    test("Verify edit and delete functionality of user records.", async ({ homePage }) => {
        await homePage.verifyNewlyAddedUserEditedFromRecords();
        await homePage.verifyNewlyAddedUserDeletedFromRecords();
    });
});