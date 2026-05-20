
import{Page,Locator,test,expect} from '@playwright/test';
export class CartPage
{
    page:Page;
    cartProducts:Locator;
    productsText:Locator;
    cart:Locator;
    orders:Locator;
    checkoutbtn:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.cartProducts=page.locator("div li").first();
        this.productsText=page.locator(".card-body b");
        this.cart=page.locator("[routerlink*='cart']");
        this.orders=page.locator("button[routerlink*='myorders']");
        this.checkoutbtn=page.locator("text=Checkout");
    }

    async verifyProductisDisplayed(productName:string)
    {

        await this.cartProducts.waitFor();
        const bool = await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();
    }

    async  checkout()
    {
        await this.checkoutbtn.click();
    }

    getProductLocator(productName:string)
    {
        return this.page.locator("h3:has-text('"+productName+"')");
    }
}
module.exports={CartPage};