import { Page, Locator, expect } from '@playwright/test';

export class UPSAdvancedShippingPage {
  page: Page;
  shipFromCompany: Locator;
  shipFromAddress: Locator;
  shipFromCity: Locator;
  shipFromState: Locator;
  shipFromZip: Locator;
  shipToCompany: Locator;
  shipToAddress: Locator;
  shipToCity: Locator;
  shipToState: Locator;
  shipToZip: Locator;
  shipToCountry: Locator;
  serviceType: Locator;
  packageWeight: Locator;
  packageDimensions: Locator;
  continueButton: Locator;
  pageTitle: Locator;
  errorMessage: Locator;
  successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h1, [role="heading"]').first();
    this.shipFromCompany = page.locator('input[name*="ship_from_company"], [placeholder*="Company"]').first();
    this.shipFromAddress = page.locator('input[name*="ship_from_address"], [placeholder*="Address"]').first();
    this.shipFromCity = page.locator('input[name*="ship_from_city"], [placeholder*="City"]').first();
    this.shipFromState = page.locator('select[name*="ship_from_state"], input[name*="ship_from_state"]').first();
    this.shipFromZip = page.locator('input[name*="ship_from_zip"], input[placeholder*="ZIP"]').first();
    this.shipToCompany = page.locator('input[name*="ship_to_company"], [placeholder*="Company"]').nth(1);
    this.shipToAddress = page.locator('input[name*="ship_to_address"], [placeholder*="Address"]').nth(1);
    this.shipToCity = page.locator('input[name*="ship_to_city"], [placeholder*="City"]').nth(1);
    this.shipToState = page.locator('select[name*="ship_to_state"], input[name*="ship_to_state"]').nth(1);
    this.shipToZip = page.locator('input[name*="ship_to_zip"], input[placeholder*="ZIP"]').nth(1);
    this.shipToCountry = page.locator('select[name*="country"], input[name*="country"]');
    this.serviceType = page.locator('select[name*="service"], [name*="Service"]');
    this.packageWeight = page.locator('input[name*="weight"], input[placeholder*="Weight"]');
    this.packageDimensions = page.locator('input[name*="dimension"], input[placeholder*="Dimension"]');
    this.continueButton = page.locator('button:has-text("Continue"), button:has-text("Next")');
    this.errorMessage = page.locator('[role="alert"], .error-message, .alert-danger');
    this.successMessage = page.locator('.success-message, .alert-success, [role="status"]');
  }

  async goto() {
    await this.page.goto('https://www.ups.com/ship/advanced');
  }

  async isPageLoaded() {
    return await this.pageTitle.isVisible().catch(() => false);
  }

  async fillShipFromDetails(company: string, address: string, city: string, state: string, zip: string) {
    await this.shipFromCompany.fill(company);
    await this.shipFromAddress.fill(address);
    await this.shipFromCity.fill(city);
    await this.shipFromState.selectOption(state).catch(() => this.shipFromState.fill(state));
    await this.shipFromZip.fill(zip);
  }

  async fillShipToDetails(company: string, address: string, city: string, state: string, zip: string, country: string = 'US') {
    await this.shipToCompany.fill(company);
    await this.shipToAddress.fill(address);
    await this.shipToCity.fill(city);
    await this.shipToState.selectOption(state).catch(() => this.shipToState.fill(state));
    await this.shipToZip.fill(zip);
    await this.shipToCountry.selectOption(country).catch(() => this.shipToCountry.fill(country));
  }

  async selectServiceType(service: string) {
    await this.serviceType.selectOption(service).catch(() => this.serviceType.fill(service));
  }

  async fillPackageWeight(weight: string) {
    await this.packageWeight.fill(weight);
  }

  async fillPackageDimensions(dimensions: string) {
    await this.packageDimensions.fill(dimensions);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isErrorVisible() {
    return await this.errorMessage.isVisible().catch(() => false);
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }

  async isSuccessMessageVisible() {
    return await this.successMessage.isVisible().catch(() => false);
  }
}

export default UPSAdvancedShippingPage;
