import { expect, Page } from "@playwright/test";
import { FrontEnd } from "@frontEndLocators";
import { Reusable } from "@reusable";

export class HomePage {

    private page: Page
    private reusable: Reusable;
    private existing_username = "Admin";
    private employee_name = "a";
    private username = "NewAdmin";
    private password = "NewAdmin123";
    private updated_username = "NewUpdatedAdmin";

    constructor(page: Page) {
        this.page = page;
        this.reusable = new Reusable(this.page);
    }

    public async assertHomePageLaunchedSuccessfully() {
        await this.reusable.log("Verify dashboard label visible on homepage to confirm successfull login.");
        await this.reusable.assertElementisVisible(FrontEnd.DASHBOARD_LABEL);
    }
    public async verifyAllHomePageElementsArePresent() {

        await this.reusable.log("Verify brand banner image visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.BRAND_BANNER_IMAGE);

        await this.reusable.log("Verify upgrade button visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.UPGRADE_BUTTON);

        await this.reusable.log("Verify user dropdown tab visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.USER_DD_TAB);

        await this.reusable.log("Verify search icon visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.SEARCH_ICON);

        await this.reusable.log("Verify time at work section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.TIME_AT_WORK_SECTION);

        await this.reusable.log("Verify my action section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.MY_ACTION_SECTION);

        await this.reusable.log("Verify quick launch section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.QUICK_LAUNCH_SECTION);

        await this.reusable.log("Verify help icon section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.HELP_ICON);

        await this.reusable.log("Verify dashboard meny active and visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.ACTIVE_DASHBOARD_MENU);

        await this.reusable.log("Verify sidepanel menu open and visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.OPEN_SIDEPANEL_MENU);

        await this.reusable.log("Verify buzz latest posts section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.BUZZ_LATEST_POSTS_SECTION);

        await this.reusable.log("Verify employees on leave today section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.EMPLOYEES_ON_LEAVE_TODAY_SECTION);

        await this.reusable.log("Verify employee sub unit section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.EMPLOYEE_SUB_UNIT_SECTION);

        await this.reusable.log("Verify employee location section visible on homepage.");
        await this.reusable.assertElementisVisible(FrontEnd.EMPLOYEE_LOCATION_SECTION);
    }
    public async hideSideMainMenu() {
        await this.reusable.log("Click on close side menu arrow icon.");
        await this.reusable.click(FrontEnd.OPEN_SIDEPANEL_MENU);

        await this.reusable.log("Verify side panel menu closed successfully.");
        await this.reusable.assertElementisVisible(FrontEnd.CLOSE_SIDEPANEL_MENU);
    }
    public async verifyAddUserSaveButtonWithoutFillingData() {

        await this.reusable.log("Click on admin menu from side panel.");
        await this.reusable.click(FrontEnd.ADMIN_MENU);

        await this.reusable.log("Click on add user button.");
        await this.reusable.click(FrontEnd.ADD_USER_BUTTON);

        await this.reusable.log("Click on save button from add user pop up.");
        await this.reusable.click(FrontEnd.SAVE_USER_BUTTON);

        await this.reusable.log("Verify error message like 'Required' visible for all required fields.");
        await this.reusable.assertElementisVisible(FrontEnd.USER_ROLE_REQ_MSG);
        await this.reusable.assertElementisVisible(FrontEnd.EMPLOYEE_NAME_REQ_MSG);
        await this.reusable.assertElementisVisible(FrontEnd.STATUS_REQ_MSG);
        await this.reusable.assertElementisVisible(FrontEnd.USERNAME_REQ_MSG);
        await this.reusable.assertElementisVisible(FrontEnd.PASSWORD_REQ_MSG);
        await this.reusable.assertElementisVisible(FrontEnd.CONFIRM_PASSWORD_REQ_MSG);
    }

    public async verifyAddUserPageFieldsValidations() {

        await this.reusable.log("Enter special character in employee name textbox.");
        await this.reusable.fill(FrontEnd.EMPLOYEE_NAME_TEXTBOX, "[");
        await this.reusable.tab();

        await this.reusable.log("Verify validation for employee name, it should display 'Invalid' error message.");
        await this.reusable.assertElementisVisible(FrontEnd.EMPLOYEE_NAME_INVALID_MSG);

        await this.reusable.log("Enter 4 characters username in username textbox.");
        await this.reusable.fill(FrontEnd.USERNAME_TEXTBOX, "abcd");

        await this.reusable.log("Verify validation for username, it should display 'Should be at least 5 characters' error message.");
        await this.reusable.assertElementisVisible(FrontEnd.USERNAME_MINIMUM_CHARS_MSG);

        await this.reusable.log("Enter existing username in username textbox.");
        await this.reusable.fill(FrontEnd.USERNAME_TEXTBOX, this.existing_username);

        await this.reusable.log("Verify validation for username, it should display 'Should be at least 5 characters' error message.");
        await this.reusable.assertElementisVisible(FrontEnd.USERNAME_ALREADY_EXIST_MSG);

        await this.reusable.log("Enter 6 characters password in password textbox.");
        await this.reusable.fill(FrontEnd.PASSWORD_TEXTBOX, "abcdef");

        await this.reusable.log("Verify validation for password, it should display 'Should have at least 7 characters' error message.");
        await this.reusable.assertElementisVisible(FrontEnd.PASSWORD_MINIMUM_LENGTH_MSG);

        await this.reusable.log("Enter 7 upercase characters password in password textbox.");
        await this.reusable.fill(FrontEnd.PASSWORD_TEXTBOX, "ABCDEFG");
        await this.reusable.tab();

        await this.reusable.log("Verify validation for password, it should display 'Your password must contain minimum 1 lower-case letter' error message.");
        await this.reusable.assertElementisVisible(FrontEnd.PASSWORD_MINIMUM_1_LOWERCASE_MSG);

        await this.reusable.log("Enter 7 lowercase characters password in password textbox.");
        await this.reusable.fill(FrontEnd.PASSWORD_TEXTBOX, "abcdefg");
        await this.reusable.tab();

        await this.reusable.log("Verify validation for password, it should display 'Your password must contain minimum 1 number' error message.");
        await this.reusable.assertElementisVisible(FrontEnd.PASSWORD_MINIMUM_1_NUMBER_MSG);

        await this.reusable.log("Enter 7 characters valid password in password textbox.");
        await this.reusable.fill(FrontEnd.PASSWORD_TEXTBOX, "abcd123");
        await this.reusable.tab();

        await this.reusable.log("Enter random password other then entered in password field in confirm password textbox.");
        await this.reusable.fill(FrontEnd.CONFIRM_PASSWROD_TEXTBOX, "123abcd");

        await this.reusable.log("Verify validation for confirm password field, it should display 'Passwords do not match' error message.");
        await this.reusable.assertElementisVisible(FrontEnd.CONFIRM_PASSWORD_REQ_MSG);

    }
    public async verifyAddUserCancelButton() {
        await this.reusable.log("Click on cancel button from add user pop up.");
        await this.reusable.click(FrontEnd.CANCEL_USER_BUTTON);

        await this.reusable.log("Verify add user pop up invisible and add button visible after clicking on cancel button.");
        await this.reusable.assertElementisVisible(FrontEnd.ADD_USER_BUTTON);
    }

    public async verifyAddUserSaveButtonWithFillingData() {

        await this.reusable.log("Click on admin menu from side panel.");
        await this.reusable.click(FrontEnd.ADMIN_MENU);

        await this.reusable.log("Click on add user button.");
        await this.reusable.click(FrontEnd.ADD_USER_BUTTON);

        await this.reusable.log("Select admin from user role dropwon.")
        await this.reusable.selectDropdownOption(FrontEnd.USER_ROLE_DD, 1);

        await this.reusable.log("Enter employee name.")
        await this.reusable.typeAndSelectOption(FrontEnd.EMPLOYEE_NAME_TEXTBOX, this.employee_name, 1);

        await this.reusable.log("Select enabled from status dropdown.");
        await this.reusable.selectDropdownOption(FrontEnd.STATUS_DD, 1);

        await this.reusable.log(`Enter username : ${this.username}`);
        await this.reusable.fill(FrontEnd.USERNAME_TEXTBOX, this.username);

        await this.reusable.log(`Enter password : ${this.password}`);
        await this.reusable.fill(FrontEnd.PASSWORD_TEXTBOX, this.password);

        await this.reusable.log(`Enter confirm password : ${this.password}`);
        await this.reusable.fill(FrontEnd.CONFIRM_PASSWROD_TEXTBOX, this.password);

        await this.reusable.log("Click on save button from add user pop up.");
        await this.reusable.click(FrontEnd.SAVE_USER_BUTTON);

        await this.page.waitForTimeout(2000);
    }

    public async verifyNewlyAddedUserPresentInRecords() {
        await this.reusable.log(`Verify ${this.username} present in user records tabel.`);
        let isUsernamePresent = await this.isUserPresentInUserList(this.username);
        expect(isUsernamePresent).toBe(true);
    }
    public async isUserPresentInUserList(checkThisUser: string): Promise<Boolean> {
        const records = await this.reusable.countElements(FrontEnd.USER_RECORDS_COUNT);
        await this.reusable.log(`Total records in list are : ${records}`);
        let record_Username, username_Selecter;
        let isUsernamePresent = false;

        for (let i = 1; i <= records; i++) {
            username_Selecter = FrontEnd.USER_RECORDS_COUNT + "[" + i + "]//div[@class='oxd-table-cell oxd-padding-cell'][2]";
            record_Username = await this.reusable.getInnerText(username_Selecter);
            if (record_Username === checkThisUser) {
                isUsernamePresent = true;
                break;
            }
        }
        return isUsernamePresent;
    }
    public async verifyNewlyAddedUserEditedFromRecords() {

        await this.reusable.log("Click on admin menu from side panel.");
        await this.reusable.click(FrontEnd.ADMIN_MENU);

        await this.reusable.log(`Click on edit button of record with user name : ${this.username}.`);
        let isUsernamePresent = await this.isUserPresentInUserList(this.username);

        if (isUsernamePresent == true) {
            let edit_Selector = "//div[text()='" + this.username + "']/parent::div/following-sibling::div//div//button[2]";
            await this.reusable.click(edit_Selector);

            await this.reusable.log("Enter updated username.");
            await this.reusable.fill(FrontEnd.USERNAME_TEXTBOX, this.updated_username);

            await this.reusable.log("Click on save button from add user pop up.");
            await this.reusable.click(FrontEnd.SAVE_USER_BUTTON);
        }
        else {
            await this.reusable.log(`User with username ${this.username} not present in user list.`);
        }
        await this.reusable.log("Verify previous old username not present in list.");
        isUsernamePresent = await this.isUserPresentInUserList(this.username);
        expect(isUsernamePresent).toBe(false);

        await this.reusable.log("Verify newly updated username present in list.");
        isUsernamePresent = await this.isUserPresentInUserList(this.updated_username);
        expect(isUsernamePresent).toBe(true);

    }
    public async verifyNewlyAddedUserDeletedFromRecords() {

        let isUsernamePresent = await this.isUserPresentInUserList(this.updated_username);
        await this.reusable.log(`Click on delete button of record with user name : ${this.updated_username}`);

        if (isUsernamePresent == true) {
            let delete_Selector = "//div[text()='" + this.updated_username + "']/parent::div/following-sibling::div//div//button[1]";
            await this.reusable.click(delete_Selector);

            await this.reusable.log("Click on Yes,Delete button on pop up.")
            await this.reusable.click(FrontEnd.YES_DELETE_BUTTON);

            await this.reusable.log("Verify deleted username not present in user list.");
            isUsernamePresent = await this.isUserPresentInUserList(this.updated_username);
            expect(isUsernamePresent).toBe(false);
        }
        else {
            await this.reusable.log(`User with username ${this.updated_username} not present in user list`);
        }
    }
}