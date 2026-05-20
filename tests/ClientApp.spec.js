const{test,expect} = require('@playwright/test');

test.skip(`Client app login`,async({page})=> 
    
{
    const email="adityadeshpande2345@gmail.com";
    const productName="iphone 13 pro";
    const products=page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client/");
   await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("DeshAdi1#");
    await page.locator("[value='Login']").click();
   //await page.waitForLoadState("networkidle");
   await page.locator(".card-body b").first().waitFor();
    const titles=await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count=await products.count();
    for(let i=0;i<count;i++)
    {
        if(await products.nth(i).locator("b").textContent()=== productName)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool=await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    const dropdown=page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount=await dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++)
    {
        const text=await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }   
    }

    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
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
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='myorders']").click();
    
    await page.locator("tbody").waitFor();
    const rows=await page.locator("tbody tr");
    for(let i=0;i<await rows.count();i++)
    {
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails=await page.locator(".col-text").textContent();
    await expect(orderId.includes(orderIdDetails)).toBeTruthy();
    await expect(page.locator("div:has-text(' Delivery Address ')").locator("p.text").first()).toHaveText(email);
    await expect(page.locator("div:has-text(' Delivery Address ')").locator("p.text").last()).toContainText("India");
    await expect(page.locator("div.artwork-card-info div.title")).toHaveText(productName);




await page.locator("button[routerlink*='myorders']").click();
    
    await page.locator("tbody").waitFor();
   
    for(let i=0;i<await rows.count();i++)
    {
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").last().click();
            break;
        }
    }

    await page.locator("button.btn.btn-custom").last().click();
    
 

})