import { Page } from "@playwright/test";
import { FrontEnd } from "@frontEndLocators";
import { Reusable } from "@reusable";


export class LoginPage {

    private page: Page
    private reusable: Reusable;

    constructor(page: Page) {
        this.page = page;
        this.reusable = new Reusable(this.page);
    }

    public async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    public async loginToFrontEnd(username: string, password: string) {
        await this.reusable.log(`Enter username : ${username}`);
        await this.reusable.fill(FrontEnd.USERNAME_TXTBOX, username);

        await this.reusable.log(`Enter password : ${password}`);
        await this.reusable.fill(FrontEnd.PASSWORD_TXTBOX, password);
        
        await this.reusable.log("Click on login button.");
        await this.reusable.click(FrontEnd.LOGIN_BUTTON);
    }

    public async assertInvalidLoginMessageIsVisible() {
        await this.reusable.log("Verify invalid credentials message displayed.");
        await this.reusable.assertElementisVisible(FrontEnd.INVALID_ERROR_MSG);
    }

    public async verifyAllLoginPageElementsArePresent() {
        await this.reusable.log("Verify orange HRM logo visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.ORANGE_HRM_LOGO);

        await this.reusable.log("Verify login label visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.LOGIN_LABEL);

        await this.reusable.log("Verify username label visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.USERNAME_LABEL);

        await this.reusable.log("Verify password label visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.PASSWORD_LABEL);

        await this.reusable.log("Verify username textbox visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.USERNAME_TXTBOX);

        await this.reusable.log("Verify password textbox visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.PASSWORD_TXTBOX);

        await this.reusable.log("Verify login button visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.LOGIN_BUTTON);

        await this.reusable.log("Verify forget password link visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.FORGOT_PASS_LINK);

        await this.reusable.log("Verify orange HRB footer link visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.ORANGE_FOOTER_LINK);

        await this.reusable.log("Verify social media logos visible on login page.");
        await this.reusable.assertElementisVisible(FrontEnd.SOCIAL_MEDIA_LOGOS);
    }

    public async assertHomePageLaunchedSuccessfully() {
        await this.reusable.log("Verify dashboard label visible on homepage page to confirm successfull login.");
        await this.reusable.assertElementisVisible(FrontEnd.DASHBOARD_LABEL);
    }
}