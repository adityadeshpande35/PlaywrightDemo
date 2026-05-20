import{Page,Locator,test,expect} from '@playwright/test';
export class DashboardPage
{

    page:Page;
    BrowseEventsbtn:Locator;
    MyBookingsbtn:Locator;
    eventCards:Locator;
    Adminbtn:Locator;
    ManageEventsbtn:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.BrowseEventsbtn=this.page.getByRole('link', { name: 'Browse Events →' });
        this.MyBookingsbtn=this.page.getByRole('link', { name: 'My Bookings' });
        this.eventCards=this.page.locator("#event-card");
        this.Adminbtn=this.page.getByRole('button', { name: 'Admin' });
        this.ManageEventsbtn=this.page.locator("div.right-0  a[href='/admin/events']");

    }


    async verifyuserisonDashboardpage()
    {
        await expect(this.BrowseEventsbtn).toBeVisible();
    }




}