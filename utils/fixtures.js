const base=require('@playwright/test');
const{APiUtils}=require('./APiUtils.js');
const {request}=require('@playwright/test');

const loginpayload={userEmail:"adityadeshpande2345@gmail.com", userPassword:"DeshAdi1#"};
const orderPayload={orders:[{country:"India",productOrderedId:"6960ea76c941646b7a8b3dd5"}]};


exports.customtest=base.test.extend(
    {
        authenticatedPage:async({browser},use)=>
        {
            const context=await browser.newContext();
            const page=await context.newPage();
            await page.goto("https://rahulshettyacademy.com/client/");
            await page.locator("#userEmail").fill("adityadeshpande2345@gmail.com");
            await page.locator("#userPassword").fill("DeshAdi1#");
            await page.locator("#login").click();
            await page.locator(".card-body b").first().waitFor();
            await use(page);
            //teardown
            await context.close();
          
        },

        createOrder:async({},use)=>
        {
            const apiContext=await request.newContext();
            const apiUtils=new APiUtils(apiContext,loginpayload);
            const  response=await apiUtils.createOrder(orderPayload);
            await use(response);
            await apiContext.dispose();
        },
        testDataForOrder:{
            productName:'ADIDAS ORIGANAL'
        }
    }
)

