
import {test,expect} from '@playwright/test';
import{customTest} from '../utils_ts/test-base';
import { POManager } from '../pageobjects_ts/POManager';
import { RegisterBuilder } from '../utils_ts/Register';
const dataset = require("../utils_ts/placeOrderTestData.json");


for (const data of dataset) {
test.only(`@Web Client app login for ${data.productName}`, async ({ page }) => {
  const poManager = new POManager(page);
 
  const products = page.locator(".card-body");

  const loginPage = poManager.getLoginPage();
  await loginPage.goto();
  await loginPage.NavigateToRegister();
  const username = `aditya${Date.now()}@gmail.com`

  const register = new RegisterBuilder()
    .setFirstName(data.firstname)
    .setLastName(data.lastname)
    .setEmail(username)
    .setTelephone(data.phoneno)
    .setPassword(data.password)
    .setConfirmPassword(data.confirmpassword)
    .setOccupation(data.occupation)
    .build();

  const registerpage=poManager.getRegisterPage();
  await registerpage.performValidRegidstration(register);


  await loginPage.validLogin(username, data.password);
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProduct(data.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.verifyProductisDisplayed(data.productName);
  await cartPage.checkout();
  //await page.waitForLoadState("networkidle");
  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchAndSelectCountry("ind", " India");
  await ordersReviewPage.verifyUserName(username);
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
    await ordersHistoryPage.verifyProductDetails(username, "India", data.productName);
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