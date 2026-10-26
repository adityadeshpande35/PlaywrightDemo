import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pageobjects_ts/DashboardPage';
import { CartPage } from '../pageobjects_ts/CartPage';

const baseUrl = 'https://rahulshettyacademy.com/seleniumPractise/#/';

test.describe('GreenKart Functional Tests', () => {
  test('Cart Preview and Checkout Flow', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const cart = new CartPage(page);

    // 1. With an empty cart, open the cart preview from the cart icon.
    await page.goto(baseUrl);
    await dashboard.cart.click();
    await expect(page.locator('.cart-preview .empty-cart h2')).toHaveText('You cart is empty!');
    await expect(page.locator('.cart-preview button:has-text("PROCEED TO CHECKOUT")')).toBeVisible();

    // 2. Add a product to the cart and verify preview
    await dashboard.products.first().locator('a.increment').click();
    await dashboard.products.first().locator('button').click();
    await dashboard.cart.click();
    await expect(page.locator('.cart-preview .cart-item')).toHaveCount(1);
    await expect(page.locator('.cart-preview .cart-item .product-name')).toContainText('Brocolli');
    await expect(page.locator('.cart-preview button:has-text("PROCEED TO CHECKOUT")')).toBeVisible();

    // 3. Click PROCEED TO CHECKOUT and verify checkout page
    await page.locator('.cart-preview button:has-text("PROCEED TO CHECKOUT")').click();
    await expect(page).toHaveURL(/\/cart$/);
    await expect(page.locator('text=Place Order')).toBeVisible();
    await expect(page.locator('text=No. of Items : 1')).toBeVisible();
  });
});
