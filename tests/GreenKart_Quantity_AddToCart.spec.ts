import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pageobjects_ts/DashboardPage';
import { CartPage } from '../pageobjects_ts/CartPage';

const baseUrl = 'https://rahulshettyacademy.com/seleniumPractise/#/';

test.describe('GreenKart Functional Tests', () => {
  test('Quantity Adjustment and Add to Cart', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const cart = new CartPage(page);

    await page.goto(baseUrl);

    // use page object's product locator
    const firstProduct = dashboard.products.first();
    const qtyInput = firstProduct.locator('input.quantity');

    await expect(firstProduct).toBeVisible();
    await expect(qtyInput).toHaveValue('1');

    // increase quantity to 2 and add to cart
    await firstProduct.locator('a.increment').click();
    await expect(qtyInput).toHaveValue('2');
    await firstProduct.locator('button').click();

    // open cart preview and verify using cart page object locators where possible
    await dashboard.cart.click();
    await expect(page.locator('.cart-preview .cart-item')).toHaveCount(1);
    await expect(page.locator('.cart-preview .cart-item .product-name')).toContainText('Brocolli');
    await expect(page.locator('.cart-preview .cart-item .quantity')).toContainText('2 Nos.');

    // verify decreasing quantity when at 1 does not go below 1
    await page.goto(baseUrl);
    const firstProductAgain = dashboard.products.first();
    await expect(firstProductAgain.locator('input.quantity')).toHaveValue('1');
    await firstProductAgain.locator('a.decrement').click();
    await expect(firstProductAgain.locator('input.quantity')).toHaveValue('1');
  });
});
