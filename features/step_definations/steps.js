const { Given, When, Then } = require("@cucumber/cucumber");
const { POManager } = require("../../pageobjects/POManager");
const { expect } = require("@playwright/test");
const playwright = require("@playwright/test");

Given(
  "a login to Ecommerce application with {string} and  {string}",
  { timeout: 100 * 1000 },
  async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    this.username = username;

    const products = this.page.locator(".card-body");

    const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.validLogin(this.username, password);
  },
);

When("Add {string} to Cart", async function (productName) {
  this.productName = productName;
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProduct(this.productName);
  await this.dashboardPage.navigateToCart();
});

Then("Verify {string} is displayed in the Cart", async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage = this.poManager.getCartPage();
  await cartPage.verifyProductisDisplayed(productName);
  await cartPage.checkout();
});

When(
  "Enter valid details and Place the Order",
  { timeout: 100 * 1000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchAndSelectCountry("ind", " India");
    await ordersReviewPage.verifyUserName(this.username);

    await ordersReviewPage.fillBankDetails(
      "1234 5678 9012 3456",
      "03",
      "30",
      "965",
      "Aditya Deshpande",
      "rahulshettyacademy",
      "* Coupon Applied",
    );
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
  },
);

Then(
  "Verify order is present in the Orde History",
  { timeout: 100 * 1000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.naviagateToOrders();

    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelectViewbtn(this.orderId);
    expect(
      this.orderId.includes(await ordersHistoryPage.getOrderId()),
    ).toBeTruthy();
    await ordersHistoryPage.verifyProductDetails(
      this.username,
      "India",
      this.productName,
    );
    await ordersHistoryPage.searchOrderAndSelectDeletebtn(this.orderId);
    await ordersHistoryPage.signout();
  },
);

Given("a login to Ecommerce2 application with {string} and  {string}",{ timeout: 100 * 1000 },
  async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    const userName = this.page.locator("#username");
    const signIn = this.page.locator("#signInBtn");
 await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await this.page.title());
 await userName.fill(username);
 await this.page.locator("[type='password']").fill(password);
 await signIn.click();
  },
);

Then("Verify Error message is displayed",{ timeout: 100 * 1000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log(await this.page.locator("[style*='block']").textContent());
 await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});


