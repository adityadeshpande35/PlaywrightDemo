import{Page,Locator,test,expect} from '@playwright/test';

test("event hub demo",async({page})=>
{

await page.goto("https://eventhub.rahulshettyacademy.com/login");
 await page.getByPlaceholder('you@email.com').fill("adityadeshpande35@gmail.com");

  // Located by label
  await page.getByLabel('Password').fill("DeshAdi12$");

  // Located by id
  await page.locator('#login-btn').click();

  await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();

  await page.getByRole('button', { name: 'Admin' }).click();



})
