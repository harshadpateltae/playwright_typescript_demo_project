export class FrontEnd {

    //FRONT END LOGIN PAGE LOCATORS
    static readonly USERNAME_TXTBOX = "//input[@name='username']";
    static readonly USERNAME_LABEL = "//label[text()='Username']";
    static readonly PASSWORD_TXTBOX = "//input[@name='password']";
    static readonly PASSWORD_LABEL = "//label[text()='Password']";
    static readonly LOGIN_BUTTON = "//button[@type='submit']";
    static readonly ORANGE_HRM_LOGO = "//img[@alt='company-branding']";
    static readonly LOGIN_LABEL = "//h5[text()='Login']";
    static readonly FORGOT_PASS_LINK = "//p[text()='Forgot your password? ']";
    static readonly ORANGE_FOOTER_LINK = "//a[contains(@href,'orangehrm.com')]";
    static readonly SOCIAL_MEDIA_LOGOS = "(//div[@class='orangehrm-login-footer-sm']//a)[1]";
    static readonly INVALID_ERROR_MSG = "//p[text()='Invalid credentials']";

    //FRONT END HOME OAGE LOCATORS
    static readonly DASHBOARD_LABEL = "//h6[text()='Dashboard']";
    static readonly BRAND_BANNER_IMAGE = "//img[@alt='client brand banner']";
    static readonly SEARCH_ICON = "//input[@placeholder='Search']";
    static readonly ACTIVE_DASHBOARD_MENU = "//a[@class='oxd-main-menu-item active']//span[text()='Dashboard']";
    static readonly ADMIN_MENU = "//span[text()='Admin']";
    static readonly OPEN_SIDEPANEL_MENU = "//aside[@class='oxd-sidepanel']//button";
    static readonly CLOSE_SIDEPANEL_MENU = "//aside[@class='oxd-sidepanel toggled']";
    static readonly UPGRADE_BUTTON = "//button[contains(@class,'orangehrm-upgrade-button')]";
    static readonly USER_DD_TAB = "//span[@class='oxd-userdropdown-tab']";
    static readonly HELP_ICON = "//button[@class='oxd-icon-button']";
    static readonly MY_ACTION_SECTION = "//p[text()='My Actions']";
    static readonly TIME_AT_WORK_SECTION = "//p[text()='Time at Work']";
    static readonly QUICK_LAUNCH_SECTION = "//p[text()='Quick Launch']";
    static readonly BUZZ_LATEST_POSTS_SECTION = "//p[text()='Buzz Latest Posts']";
    static readonly EMPLOYEES_ON_LEAVE_TODAY_SECTION = "//p[text()='Employees on Leave Today']";
    static readonly EMPLOYEE_SUB_UNIT_SECTION = "//p[text()='Employee Distribution by Sub Unit']";
    static readonly EMPLOYEE_LOCATION_SECTION = "//p[text()='Employee Distribution by Location']";
    static readonly SYSTEM_USERNAME = "//label[text()='Username']/parent::div/following-sibling::div/input";
    static readonly SYSTEM_USERROLE = "//label[text()='User Role']/parent::div/following-sibling::div//div[@class='oxd-select-text-input']";
    static readonly ADD_USER_BUTTON = "//button[@class='oxd-button oxd-button--medium oxd-button--secondary']";
    static readonly USER_ROLE_DD = "//label[text()='User Role']/parent::div/following-sibling::div//i";
    static readonly STATUS_DD = "//label[text()='Status']/parent::div/following-sibling::div//i";
    static readonly EMPLOYEE_NAME_TEXTBOX = "//label[text()='Employee Name']/parent::div/following-sibling::div//input";
    static readonly PASSWORD_TEXTBOX = "//label[text()='Password']/parent::div/following-sibling::div//input";
    static readonly USERNAME_TEXTBOX = "//label[text()='Username']/parent::div/following-sibling::div//input";
    static readonly CONFIRM_PASSWROD_TEXTBOX = "//label[text()='Confirm Password']/parent::div/following-sibling::div//input";
    static readonly CANCEL_USER_BUTTON = "//button[@class='oxd-button oxd-button--medium oxd-button--ghost']";
    static readonly SAVE_USER_BUTTON = "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']";
    static readonly USER_ROLE_REQ_MSG = "//label[text()='User Role']/parent::div/following-sibling::span[text()='Required']";
    static readonly EMPLOYEE_NAME_REQ_MSG = "//label[text()='Employee Name']/parent::div/following-sibling::span[text()='Required']";
    static readonly EMPLOYEE_NAME_INVALID_MSG = "//label[text()='Employee Name']/parent::div/following-sibling::span[text()='Invalid']";
    static readonly STATUS_REQ_MSG = "//label[text()='Status']/parent::div/following-sibling::span[text()='Required']";
    static readonly USERNAME_REQ_MSG = "//label[text()='Username']/parent::div/following-sibling::span[text()='Required']";
    static readonly USERNAME_MINIMUM_CHARS_MSG = "//label[text()='Username']/parent::div/following-sibling::span[text()='Should be at least 5 characters']";
    static readonly USERNAME_ALREADY_EXIST_MSG = "//label[text()='Username']/parent::div/following-sibling::span[text()='Already exists']";
    static readonly PASSWORD_REQ_MSG = "//label[text()='Password']/parent::div/following-sibling::span[text()='Required']";
    static readonly PASSWORD_MINIMUM_LENGTH_MSG = "//label[text()='Password']/parent::div/following-sibling::span[text()='Should have at least 7 characters']";
    static readonly PASSWORD_MINIMUM_1_LOWERCASE_MSG = "//label[text()='Password']/parent::div/following-sibling::span[text()='Your password must contain minimum 1 lower-case letter']";
    static readonly PASSWORD_MINIMUM_1_NUMBER_MSG = "//label[text()='Password']/parent::div/following-sibling::span[text()='Your password must contain minimum 1 number']";
    static readonly CONFIRM_PASSWORD_REQ_MSG = "//label[text()='Confirm Password']/parent::div/following-sibling::span[text()='Passwords do not match']";
    static readonly USER_RECORDS_COUNT = "(//div[@class='oxd-table-body']//div[@class='oxd-table-card'])";
    static readonly CHANGE_PASSWORD_CHECKBOX = "//label[text()='Yes']/input";
    static readonly YES_DELETE_BUTTON = "//button[text()=' Yes, Delete ']";
}

