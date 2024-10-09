import { expect, Page, Locator } from "@playwright/test";
import { state } from "@state-manager";

export class Reusable {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // Scroll to element found by selector
    public async scrollToElement(selector: string) {
        const locator = this.page.locator(selector)
        await locator.evaluate((element) => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    public async highlightElement(locator: Locator): Promise<void> {
        await locator.evaluate((element: HTMLElement) => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        await locator.evaluate((element: HTMLElement) => {
            element.style.border = '4px solid red'; // Highlight color and border width
        });
        // Wait for a short duration to let the highlight effect be visible
        await locator.page().waitForTimeout(1000);
        await locator.evaluate((element: HTMLElement) => {
            element.style.border = ''; // Remove color and border width
        });
    }

    public async goto(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'load' });
    }
    public async log(message: string): Promise<void> {
        // Log the message with the current step number
        console.log(`Step ${state.stepCounter}: ${message}`);
        // Increment the step number for the next call
        state.stepCounter += 1;
    }

    public async click(selector: string): Promise<void> {
        const locator = this.page.locator(selector);
        await this.highlightElement(locator);
        await locator.click();
    }

    public async countElements(selector: string): Promise<number> {
        await this.page.waitForSelector(selector); // Wait for the elements to appear
        return await this.page.locator(selector).count();
    }

    public async getInnerText(selector: string): Promise<string> {
        const locator = this.page.locator(selector);
        await this.highlightElement(locator);
        return await locator.innerText();
    }
    public async selectDropdownOption(selector: string, downArrowPresses: number): Promise<void> {
        const locator = this.page.locator(selector);
        await this.highlightElement(locator);
        await locator.click();
        for (let i = 0; i < downArrowPresses; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
        await this.page.keyboard.press('Enter');
    }
    public async tab() {
        await this.page.keyboard.press('Tab');
    }
    public async typeAndSelectOption(selector: string, valueToFill: string, downArrowPresses: number): Promise<void> {
        const locator = this.page.locator(selector);
        await this.highlightElement(locator);
        await locator.fill(valueToFill);
        await locator.page().waitForTimeout(3000);
        for (let i = 0; i < downArrowPresses; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
        await this.page.keyboard.press('Enter');
    }
    public async fill(selector: string, valueToFill: string): Promise<void> {
        const locator = this.page.locator(selector);
        await this.highlightElement(locator);
        await locator.fill(valueToFill);
    }
    public async assertElementisVisible(selector: string): Promise<void> {
        const locator = this.page.locator(selector);
        await expect.soft(locator).toBeVisible();
        await this.highlightElement(locator);
    }
}