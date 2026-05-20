const { test, expect } = require("@playwright/test");

test("@Qw Security test request interception", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator("#userEmail").fill("adityadeshpande2345@gmail.com");
  await page.locator("#userPassword").fill("DeshAdi1#");
  await page.locator("#login").click();
  //await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();

await page.locator("button[routerlink*='myorders']").click();
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",

   route=>route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a01f7b9965c23b43b1099c6'}))

   await page.locator("button:has-text('View')").first().click();
   await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");







});
