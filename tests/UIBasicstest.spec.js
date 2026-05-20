const{test,expect} = require('@playwright/test');

test("@Web Browser context Playwright Test", async ({browser}) => {

 

 const context = await browser.newContext();
 
 const page = await context.newPage();
 //page.route('**/*.{png,jpg,jpeg}', route => route.abort());
  const userName=page.locator("#username");
  const signIn = await page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  page.on('request', request => console.log(request.url()));
  page.on('response', response => console.log(response.url(), response.status()));
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title());
 await userName.fill("rahulshetty");
 await page.locator("[type='password']").fill("Learning@830$3mK2");
 await signIn.click();
 console.log(await page.locator("[style*='block']").textContent());
 await expect(page.locator("[style*='block']")).toContainText("Incorrect");
 await userName.fill("");
 await userName.fill("rahulshettyacademy");
 await signIn.click();

//console.log(await cardTitles.first().textContent());
//console.log(await cardTitles.nth(1).textContent());

await cardTitles.first().waitFor();

const allTitles = await cardTitles.allTextContents();
console.log(allTitles);




})

test("@Web UI Controls", async ({page}) => {

    
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=page.locator("#username");
   const signIn = await page.locator("#signInBtn");
   const documentLink = page.locator("[href*='documents']");
   const dropdown = page.locator("select.form-control");
   await dropdown.selectOption("consult");
   await page.locator(".radiotextsty").last().click();
   await page.locator("#okayBtn").click();
   console.log(await page.locator(".radiotextsty").last().isChecked());
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
   await page.locator("#terms").click();
   await expect(page.locator("#terms")).toBeChecked();
   await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class","blinkingText");

  // await page.pause();

   


});

test("Child Window Handling", async ({page}) => {

 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 const documentLink = page.locator("[href*='documents']");
 const userName=page.locator("#username");
 const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    documentLink.click()
 ]);
 const text = await newPage.locator(".red").textContent();
 const arrayText = text.split("@");

 const domain = arrayText[1].split(" ")[0];
 //console.log(domain);
 await userName.fill(domain);
 console.log(await userName.inputValue());



})