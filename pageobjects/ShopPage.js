const { expect } = require('@playwright/test');

class ShopPage {
    constructor(page) {
        this.page = page;
        this.productTitles = page.locator('.card .card-title a');
    }

    async verifyProductPresent(productName) {
        const productLocator = this.page.locator(`.card .card-title a:has-text("${productName}")`);
        await expect(productLocator).toBeVisible();
    }
}

module.exports = { ShopPage };