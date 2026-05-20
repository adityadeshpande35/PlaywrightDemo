
import {test,expect} from '@playwright/test';
import{customTest} from '../utils_ts/test-base';
import { POManager } from '../pageobjects_ts/POManager';
const dataset = JSON.parse(JSON.stringify(require("../utils/placeOrderTestData.json")));


for (const data of dataset) {
test(`@Web Client app login for ${data.productName}`, async ({ page }) => {
  const poManager = new POManager(page);
 
  const products = page.locator(".card-body");

  const loginPage = poManager.getLoginPage();
  await loginPage.goto();
  await loginPage.validLogin(data.username, data.password);
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProduct(data.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.verifyProductisDisplayed(data.productName);
  await cartPage.checkout();
  //await page.waitForLoadState("networkidle");
  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchAndSelectCountry("ind", " India");
  await ordersReviewPage.verifyUserName(data.username);
  await ordersReviewPage.fillBankDetails(
    "1234 5678 9012 3456",
    "03",
    "30",
    "965",
    "Aditya Deshpande",
    "rahulshettyacademy",
    "* Coupon Applied",
  );
  let orderId:any
   orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);

await dashboardPage.naviagateToOrders();

    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelectViewbtn(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    await ordersHistoryPage.verifyProductDetails(data.username, "India", data.productName);
    await ordersHistoryPage.searchOrderAndSelectDeletebtn(orderId);
     await ordersHistoryPage.signout();
});
}



customTest(`Client app login `, async ({ page,testDataForOrder}) => {
  const poManager = new POManager(page);
 
  const products = page.locator(".card-body");

  const loginPage = poManager.getLoginPage();
  await loginPage.goto();
  await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProduct(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.verifyProductisDisplayed(testDataForOrder.productName);
  await cartPage.checkout();
})