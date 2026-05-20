const{test,expect,request}=require('@playwright/test');
const {APiUtils}=require('../utils/APiUtils');
const loginPayload={userEmail:"adityadeshpande2345@gmail.com", userPassword:"DeshAdi1#"};
const orderPayload={orders:[{country:"Cuba",productOrderedId:"6960ea76c941646b7a8b3dd5"}]};
const fakePayloadOrderss={data:[],message:"No Orders"};
let response;

test.beforeAll(async()=>
{
const apiContext=await request.newContext();
const apiUtils=new APiUtils(apiContext,loginPayload);
 response=await apiUtils.createOrder(orderPayload);


});



test(`Client app login`,async({page})=> 
    
{

    
    
  page.addInitScript(value=>
    {
        window.localStorage.setItem("token",value);
    },response.token);
const email="adityadeshpande2345@gmail.com";
  const productName="iphone 13 pro";
    await page.goto("https://rahulshettyacademy.com/client/");
  
    
    
    

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
       async route=>
        {
            const response=await page.request.fetch(route.request());
            let body=JSON.stringify(fakePayloadOrderss)
            route.fulfill({
                response,
                body,


        });


        });
    
   await page.locator("button[routerlink*='myorders']").click();
   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
   console.log(await page.locator(".mt-4").textContent());
   await expect(page.locator(".mt-4")).toHaveText(" You have No Orders to show at this time. Please Visit Back Us ");


})