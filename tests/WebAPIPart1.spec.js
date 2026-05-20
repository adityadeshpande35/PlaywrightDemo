const{test,expect,request}=require('@playwright/test');
const {APiUtils}=require('../utils/APiUtils');
const loginPayload={userEmail:"adityadeshpande2345@gmail.com", userPassword:"DeshAdi1#"};
const orderPayload={orders:[{country:"Cuba",productOrderedId:"6960ea76c941646b7a8b3dd5"}]};
let response;

test.beforeAll(async()=>
{
const apiContext=await request.newContext();
const apiUtils=new APiUtils(apiContext,loginPayload);
 response=await apiUtils.createOrder(orderPayload);


});



test(`@API place the order`,async({page})=> 
    
{

    
    
  page.addInitScript(value=>
    {
        window.localStorage.setItem("token",value);
    },response.token);

   
  const email="adityadeshpande2345@gmail.com";
  const productName="iphone 13 pro";
    await page.goto("https://rahulshettyacademy.com/client/");
  
    
    
    await page.locator("button[routerlink*='myorders']").click();
    
    await page.locator("tbody").waitFor();
    const rows=await page.locator("tbody tr");
    for(let i=0;i<await rows.count();i++)
    {
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(response.orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails=await page.locator(".col-text").textContent();
    await expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
    await expect(page.locator("div:has-text(' Delivery Address ')").locator("p.text").first()).toHaveText(email);
    await expect(page.locator("div:has-text(' Delivery Address ')").locator("p.text").last()).toContainText("Cuba");
    await expect(page.locator("div.artwork-card-info div.title")).toHaveText(productName);




await page.locator("button[routerlink*='myorders']").click();
    
    await page.locator("tbody").waitFor();
   
    for(let i=0;i<await rows.count();i++)
    {
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(response.orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").last().click();
            break;
        }
    }

    await page.locator("button.btn.btn-custom").last().click();
    
 

})