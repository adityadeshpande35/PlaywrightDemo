const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

test('Login and verify iphone X on Rahul Shetty shop page', async ({ page }) => {
    const poManager = new POManager(page);

    const loginPagePractise = poManager.getLoginPagePractise();
    await loginPagePractise.goto();
    await loginPagePractise.login('rahulshettyacademy', 'Learning@830$3mK2');

    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');

    const shopPage = poManager.getShopPage();
    await shopPage.verifyProductPresent('iphone X');
});