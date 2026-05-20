const{test,expect} = require('@playwright/test');

test(`Browser Context-Validating Error login`,async({page})=> 
    
{
    const email="adityadeshpande2345@gmail.com";
    const productName="iphone 13 pro";
    const products=page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client/");
   await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("DeshAdi1#"); 
    await page.getByRole("button", {name: "Login"}).click();
   //await page.waitForLoadState("networkidle");
   await page.locator(".card-body b").first().waitFor();
 
  await page.locator(".card-body").filter({hasText: productName})
  .getByRole("button", {name: "Add To Cart"}).click();

    
  
  await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();

    await page.locator("div li").first().waitFor();
    await expect(page.getByText(productName)).toBeVisible();
    await page.getByRole("button", {name: "Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole('button', {name: "India"}).nth(1).click();
     await expect(page.getByText("adityadeshpande2345@gmail.com").first()).toHaveText(email);
   
    await page.locator(".form__cc input[class='input txt text-validated']").fill(" ");
    await page.locator(".form__cc input[class='input txt text-validated']").fill("1234 5678 9012 3456");
    const dropdown1 = page.locator("select.input.ddl").first();
   await dropdown1.selectOption("03");
    const dropdown2 = page.locator("select.input.ddl").last();
   await dropdown2.selectOption("30");
   await page.locator("div.field.small .input.txt").first().fill("965");
    await page.locator(".form__cc input[class='input txt']").last().fill("Aditya Deshpande");
    await page.locator("div.field.small .input.txt").last().fill("rahulshettyacademy");
    await page.locator(".btn.btn-primary.mt-1").click();
    await expect(page.locator("p.mt-1.ng-star-inserted")).toHaveText("* Coupon Applied");
    await page.getByText("PLACE ORDER").click();
    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
  
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

    const orderIdClean = orderId.replace(/\|/g, '').trim();
    await page.getByRole("button", {name: "ORDERS"}).click();
    
  await page .locator("tbody tr")
  .filter({ has: page.locator("th", { hasText: orderIdClean.trim() })})
.getByRole("button",{name:"View"}) .click();

    const orderIdDetails=await page.locator(".col-text").textContent();
    await expect(orderId.includes(orderIdDetails)).toBeTruthy();
    await expect(page.locator("div:has-text(' Delivery Address ')").locator("p.text").first()).toHaveText(email);
    await expect(page.locator("div:has-text(' Delivery Address ')").locator("p.text").last()).toContainText("India");
    await expect(page.locator("div.artwork-card-info div.title")).toHaveText(productName);




await page.getByText("View Orders").click();
    
      await page.locator("tbody tr")
    .filter({ has: page.locator("th", { hasText: orderIdClean.trim() })}).getByRole("button",{name:"Delete"}) .click();

      await page.getByRole("listitem").getByRole("button",{name:"Sign Out"}).click();
    
 

})