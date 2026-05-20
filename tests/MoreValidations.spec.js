const{test,expect} =require('@playwright/test');
test.describe.configure({mode:'parallel'});

test("@Web popup validation",async({page})=>{


await page .goto("https://rahulshettyacademy.com/AutomationPractice/");
//await page.goto("https://google.com");
//await page.goBack();
//await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
//await page.pause();
page.on("dialog",async(dialog)=>{
    const message =  dialog.message();
    console.log(message);
    await dialog.accept()
})
await page.locator("#confirmbtn").click();
await page.locator("#mousehover").hover();
const framespasge= page.frameLocator("#courses-iframe");
await framespasge.locator("li a[href*='lifetime-access']:visible").click();
const textcheck=await framespasge.locator(".text h2").textContent();
console.log(textcheck.split(" ")[1]);


})

test("Screenshot and Visual comparison",async({page})=>{

await page .goto("https://rahulshettyacademy.com/AutomationPractice/");

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#displayed-text").screenshot({path:"partialScreenshot.png"});
await page.locator("#hide-textbox").click();
await page.screenshot({path:'screenshot.png'});
await expect(page.locator("#displayed-text")).toBeHidden();

})

test(" Visual Testing",async({page})=>{
await page.goto("https://google.com/");
expect(await page.screenshot()).toMatchSnapshot("landing.png");

})