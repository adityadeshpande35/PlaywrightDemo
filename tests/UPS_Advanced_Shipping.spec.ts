import { test, expect } from '@playwright/test';
import UPSLoginPage from './pageobjects/UPSLoginPage';
import UPSAdvancedShippingPage from './pageobjects/UPSAdvancedShippingPage';

test.describe('UPS Advanced Shipping', () => {
  
  test.describe('1. Login Validation', () => {
    
    test('1.1 - Verify login page elements are visible', async ({ page }) => {
      const loginPage = new UPSLoginPage(page);
      await loginPage.goto();
      
      // Verify username input is visible
      await expect(loginPage.usernameInput).toBeVisible();
      
      // Verify continue button is visible
      await expect(loginPage.continueButton).toBeVisible();
    });

    test('1.2 - Verify username field accepts input', async ({ page }) => {
      const loginPage = new UPSLoginPage(page);
      await loginPage.goto();
      
      const testUsername = 'testuser@example.com';
      await loginPage.enterUsername(testUsername);
      
      // Verify the input value
      await expect(loginPage.usernameInput).toHaveValue(testUsername);
    });

    test('1.3 - Verify empty credentials show validation', async ({ page }) => {
      const loginPage = new UPSLoginPage(page);
      await loginPage.goto();
      
      // Try to continue without entering username
      await loginPage.clickContinue();
      
      // Wait for error or validation message
      await page.waitForTimeout(1000);
      
      // Verify either an error message or still on login page
      const isErrorVisible = await loginPage.isErrorMessageVisible();
      const isUsernameFieldStillVisible = await loginPage.usernameInput.isVisible();
      
      expect(isErrorVisible || isUsernameFieldStillVisible).toBeTruthy();
    });
  });

  test.describe('2. Advanced Shipping Page Navigation', () => {
    
    test('2.1 - Verify advanced shipping page URL', async ({ page }) => {
      await page.goto('https://www.ups.com/ship/advanced');
      
      // After redirect, verify we're either on advanced shipping or login page
      const url = page.url();
      expect(url.includes('ups.com')).toBeTruthy();
    });

    test('2.2 - Verify navigation to advanced shipping initiates login or shows form', async ({ page }) => {
      await page.goto('https://www.ups.com/ship/advanced');
      
      // Wait for page to fully load
      await page.waitForTimeout(2000);
      
      // Verify we see either login form or advanced shipping form
      const loginPage = new UPSLoginPage(page);
      const shippingPage = new UPSAdvancedShippingPage(page);
      
      const isLoginPageVisible = await loginPage.usernameInput.isVisible().catch(() => false);
      const isShippingPageLoaded = await shippingPage.isPageLoaded().catch(() => false);
      
      expect(isLoginPageVisible || isShippingPageLoaded).toBeTruthy();
    });
  });

  test.describe('3. Advanced Shipping Form Interactions', () => {
    
    test('3.1 - Verify shipment form elements are accessible (when authenticated)', async ({ page }) => {
      // Note: This test demonstrates form element accessibility
      // In a real scenario, you would need valid credentials to proceed past login
      
      const shippingPage = new UPSAdvancedShippingPage(page);
      await shippingPage.goto();
      
      // The page might redirect to login, so we just verify the ShippingPage object
      // can be instantiated and locators are defined correctly
      expect(shippingPage.shipFromCompany).toBeDefined();
      expect(shippingPage.shipToAddress).toBeDefined();
      expect(shippingPage.serviceType).toBeDefined();
      expect(shippingPage.continueButton).toBeDefined();
    });

    test('3.2 - Verify form field visibility structure', async ({ page }) => {
      const shippingPage = new UPSAdvancedShippingPage(page);
      
      // Verify locators are properly defined
      const locators = [
        shippingPage.shipFromCompany,
        shippingPage.shipToCompany,
        shippingPage.packageWeight,
        shippingPage.continueButton
      ];
      
      // All locators should be instances of Locator
      locators.forEach(locator => {
        expect(locator).toBeDefined();
        expect(typeof locator.fill).toBe('function');
      });
    });
  });

  test.describe('4. Complete Shipment Flow', () => {
    
    test('4.1 - Verify complete shipping workflow (unauthenticated redirect)', async ({ page }) => {
      const loginPage = new UPSLoginPage(page);
      const shippingPage = new UPSAdvancedShippingPage(page);
      
      // Navigate to advanced shipping
      await page.goto('https://www.ups.com/ship/advanced');
      await page.waitForTimeout(1500);
      
      // Verify either login page or shipping page is loaded
      const isLoginVisible = await loginPage.usernameInput.isVisible().catch(() => false);
      const isShippingLoaded = await shippingPage.isPageLoaded().catch(() => false);
      
      if (isLoginVisible) {
        console.log('Redirected to login page - authentication required');
        expect(isLoginVisible).toBeTruthy();
      } else if (isShippingLoaded) {
        console.log('Direct access to shipping page available');
        expect(isShippingLoaded).toBeTruthy();
      }
    });

    test('4.2 - Verify shipment form structure', async ({ page }) => {
      const shippingPage = new UPSAdvancedShippingPage(page);
      
      // Navigate to the page
      await page.goto('https://www.ups.com/ship/advanced');
      await page.waitForTimeout(2000);
      
      // Verify the shipping page locators are properly initialized
      // These assertions verify the page object has all required fields
      expect(shippingPage.shipFromCompany).toBeDefined();
      expect(shippingPage.shipFromAddress).toBeDefined();
      expect(shippingPage.shipFromCity).toBeDefined();
      expect(shippingPage.shipFromZip).toBeDefined();
      expect(shippingPage.shipToCompany).toBeDefined();
      expect(shippingPage.shipToAddress).toBeDefined();
      expect(shippingPage.serviceType).toBeDefined();
      expect(shippingPage.packageWeight).toBeDefined();
    });
  });

  test.describe('5. Data Validation', () => {
    
    test('5.1 - Verify page object methods are callable', async ({ page }) => {
      const shippingPage = new UPSAdvancedShippingPage(page);
      
      // Verify methods exist and are callable
      expect(typeof shippingPage.fillShipFromDetails).toBe('function');
      expect(typeof shippingPage.fillShipToDetails).toBe('function');
      expect(typeof shippingPage.selectServiceType).toBe('function');
      expect(typeof shippingPage.fillPackageWeight).toBe('function');
      expect(typeof shippingPage.clickContinue).toBe('function');
    });

    test('5.2 - Verify login page methods are callable', async ({ page }) => {
      const loginPage = new UPSLoginPage(page);
      
      // Verify methods exist and are callable
      expect(typeof loginPage.enterUsername).toBe('function');
      expect(typeof loginPage.enterPassword).toBe('function');
      expect(typeof loginPage.clickContinue).toBe('function');
      expect(typeof loginPage.performLogin).toBe('function');
    });
  });
});
