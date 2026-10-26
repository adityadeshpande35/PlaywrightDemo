import {test, expect} from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';

test("Playwright Special locators", async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: "Submit"}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds default timeout for expect assertions --{timeout:10000} Step level
     await page.getByText("Success! The Form has been submitted successfully!.").toBeVisible({timeout:10_000});

    await page.getByRole("link", {name: "Shop"}).click();
    await expect (page.locator(".my-4").first()).toHaveText("Shop");
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();


})



test("Playwright Test level timeouts", async ({page}) => {

    test.setTimeout(60000);

    const slowExpect=expect.configure({timeout:9000});

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: "Submit"}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds default timeout for expect assertions --{timeout:10000} Step level
     await slowExpect("Success! The Form has been submitted successfully!.").toBeVisible({timeout:10_000});

    await page.getByRole("link", {name: "Shop"}).click();

    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop");
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();


})