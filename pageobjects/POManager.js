const{LoginPage} = require('./LoginPage');
const{DashboardPage} = require('./DashboardPage');
const{CartPage} = require('./CartPage');
const{OrdersReviewPage} = require('./OrdersReviewPage');
const{OrdersHistoryPage} = require('./OrdersHistoryPage');
const{LoginPagePractise} = require('./LoginPagePractise');
const{ShopPage} = require('./ShopPage');

class POManager
{
    constructor(page)
    {
        this.page=page;
        this.loginpage=new LoginPage(this.page);
        this.dashboardpage=new DashboardPage(this.page);
        this.cartpage=new CartPage(this.page);
        this.ordersreviewpage=new OrdersReviewPage(this.page);
        this.ordersHistoryPage=new OrdersHistoryPage(this.page);
        this.loginPagePractise = new LoginPagePractise(this.page);
        this.shopPage = new ShopPage(this.page);
    }


    getLoginPage()
{
    return this.loginpage;
}

getDashboardPage()
{
    return this.dashboardpage;

}
getCartPage()
{
    return this.cartpage;   
}
getOrdersReviewPage()
{
    return this.ordersreviewpage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;

}
getLoginPagePractise()
{
    return this.loginPagePractise;
}
getShopPage()
{
    return this.shopPage;
}
}
module.exports={POManager};