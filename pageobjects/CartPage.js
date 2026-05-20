const{test,expect} = require('@playwright/test');
class CartPage
{
    constructor(page)
    {
        this.page=page;
        this.cartProducts=page.locator("div li").first();
        this.productsText=page.locator(".card-body b");
        this.cart=page.locator("[routerlink*='cart']");
        this.orders=page.locator("button[routerlink*='myorders']");
        this.checkoutbtn=page.locator("text=Checkout");
    }

    async verifyProductisDisplayed(productName)
    {

        await this.cartProducts.waitFor();
        const bool=await this.page.locator("h3:has-text('"+productName+"')").isVisible();
        expect(bool).toBeTruthy();
    }

    async  checkout()
    {
        await this.checkoutbtn.click();
    }

    getProductLocator(productName)
    {
        return this.page.locator("h3:has-text('"+productName+"')");
    }
}
module.exports={CartPage};