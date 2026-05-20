import{Page} from '@playwright/test';
import{LoginPage} from './LoginPage';
import {DashboardPage} from './DashboardPage';
import{CartPage} from './CartPage';
import{OrdersReviewPage} from './OrdersReviewPage';
import{OrdersHistoryPage} from './OrdersHistoryPage';


export class POManager
{
    loginpage:LoginPage;
    dashboardpage:DashboardPage
    cartpage:CartPage;
    ordersreviewpage:OrdersReviewPage;
    ordersHistoryPage:OrdersHistoryPage
    page:Page
    constructor(page:Page)
    {
        this.page=page;
        this.loginpage=new LoginPage(this.page);
        this.dashboardpage=new DashboardPage(this.page);
        this.cartpage=new CartPage(this.page);
        this.ordersreviewpage=new OrdersReviewPage(this.page);
        this.ordersHistoryPage=new OrdersHistoryPage(this.page);
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
}
module.exports={POManager};