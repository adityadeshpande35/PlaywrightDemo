import { Page, Locator, expect } from '@playwright/test';

export class AbstractComponent {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ===========================
    // WAIT METHODS
    // ===========================

    async waitForElementToAppear(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async waitForElementToDisappear(locator: Locator) {
        await locator.waitFor({ state: 'hidden' });
    }

    async waitForElementToBeClickable(locator: Locator) {
        await expect(locator).toBeEnabled();
    }

    // ===========================
    // JAVASCRIPT METHODS
    // ===========================

    async javascriptClick(locator: Locator) {
        await locator.evaluate((element: any) => element.click());
    }

    async scrollIntoView(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async scrollPage(x: number, y: number) {
        await this.page.evaluate(([scrollX, scrollY]) => {
            window.scrollBy(scrollX, scrollY);
        }, [x, y]);
    }

    // ===========================
    // ALERT / DIALOG HANDLING
    // ===========================

    async acceptAlert() {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
    }

    async dismissAlert() {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        });
    }

    async alertWithPrompt(text: string) {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept(text);
        });
    }

    // ===========================
    // CHILD WINDOW / NEW TAB
    // ===========================

    async switchToNewTab(locator: Locator): Promise<Page> {

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            locator.click()
        ]);

        await newPage.waitForLoadState();

        return newPage;
    }

    async switchToNewWindow(action: () => Promise<void>): Promise<Page> {

        const [newWindow] = await Promise.all([
            this.page.context().waitForEvent('page'),
            action()
        ]);

        await newWindow.waitForLoadState();

        return newWindow;
    }

    // ===========================
    // HOVER ACTIONS
    // ===========================

    async hoverOnElement(locator: Locator) {
        await locator.hover();
    }

    // ===========================
    // DROPDOWN HANDLING
    // ===========================

    async selectDropdownByText(locator: Locator, text: string) {
        await locator.selectOption({ label: text });
    }

    async selectDropdownByValue(locator: Locator, value: string) {
        await locator.selectOption(value);
    }

    // ===========================
    // KEYBOARD ACTIONS
    // ===========================

    async pressKeyboardKey(key: string) {
        await this.page.keyboard.press(key);
    }

    async typeUsingKeyboard(text: string) {
        await this.page.keyboard.type(text);
    }

    // ===========================
    // SCREENSHOT METHODS
    // ===========================

    async captureScreenshot(fileName: string) {
        await this.page.screenshot({
            path: `screenshots/${fileName}.png`,
            fullPage: true
        });
    }

    // ===========================
    // FRAME HANDLING
    // ===========================

    async switchToFrame(frameLocator: string) {
        return this.page.frameLocator(frameLocator);
    }

    // ===========================
    // TAB UTILITIES
    // ===========================

    async getAllOpenTabs(): Promise<Page[]> {
        return this.page.context().pages();
    }

    async closeCurrentTab() {
        await this.page.close();
    }

    // ===========================
    // GENERIC NAVIGATION
    // ===========================

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async refreshPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }
}