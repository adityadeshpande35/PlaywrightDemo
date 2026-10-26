import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pageobjects_ts/DashboardPage';

const baseUrl = 'https://rahulshettyacademy.com/seleniumPractise/#/';

test.describe('GreenKart Functional Tests', () => {
  test('Product Search and Filter', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await page.goto(baseUrl);

    // verify placeholder present on search using the page object
    await expect(page.locator('input.search-keyword')).toHaveAttribute('placeholder', 'Search for Vegetables and Fruits');

    // search for Tomato and verify only matching product is visible
    await page.fill('input.search-keyword', 'Tomato');
    const visibleProducts = page.locator('.products-wrapper .product:visible');
    await expect(visibleProducts).toHaveCount(1);
    await expect(visibleProducts.locator('h4')).toContainText('Tomato');

    // clear the search via the page object and verify full product list returns
    await page.fill('input.search-keyword', '');
    const allProducts = page.locator('.products-wrapper .product:visible');
    await expect(allProducts).toHaveCount(30);
  });
});
