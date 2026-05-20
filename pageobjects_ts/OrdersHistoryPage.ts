// Author: Rahul
import{Page,Locator,test,expect} from '@playwright/test';

const BUTTON_POSITIONS = {
    FIRST: "first",
    LAST: "last"
};
export class OrdersHistoryPage
{
    page:Page;
    ordersTable:Locator
    rows:Locator;
    orderIdDetails:Locator
    signoutbtn:Locator;
    vieworders:Locator;
    username:Locator;
    country:Locator;
    productName:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.ordersTable=page.locator("tbody");
        this.rows=page.locator("tbody tr");
        this.orderIdDetails=page.locator(".col-text");
        this.signoutbtn=page.locator("button:has-text('Sign Out')");
        this.vieworders=page.getByText("View Orders");
        this.username=page.locator("div:has-text(' Delivery Address ')").locator("p.text").first();
        this.country=page.locator("div:has-text(' Delivery Address ')").locator("p.text").last();
        this.productName=page.locator("div.artwork-card-info div.title");


    }

    async searchOrderAndSelect(orderId:any, buttonPosition = BUTTON_POSITIONS.FIRST)
    {
        await this.ordersTable.waitFor();

        const rowsCount = await this.rows.count();
        let orderFound = false;

        for (let i = 0; i < rowsCount; ++i) {
            const rowOrderId = await this.rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
               const button = buttonPosition === BUTTON_POSITIONS.LAST 
                   ? await this.rows.nth(i).locator("button").last()
                   : await this.rows.nth(i).locator("button").first();
               await button.click();
               orderFound = true;
               break;
            }
         }

         if (!orderFound) {
            console.error(`Order ID ${orderId} not found in the table.`);
        }
    }

    async searchOrderAndSelectViewbtn(orderId:any)
    {
        await this.searchOrderAndSelect(orderId, BUTTON_POSITIONS.FIRST);
    }

    async getOrderId()
    {
        return await this.orderIdDetails.textContent();
    }

    async searchOrderAndSelectDeletebtn(orderId:any)
    {
        await this.vieworders.click();
        await this.searchOrderAndSelect(orderId, BUTTON_POSITIONS.LAST);
    }

        async signout()
        {
            await this.signoutbtn.click();
        }

        

 async verifyProductDetails(username:string, country:string, productName:string)
 {
    await expect(this.username).toHaveText(username);
    await expect(this.country).toContainText(country);
    await expect(this.productName).toHaveText(productName);
 }
    
}
module.exports={OrdersHistoryPage};