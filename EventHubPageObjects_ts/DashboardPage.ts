import{Page,Locator,test,expect} from '@playwright/test';
export class DashboardPage
{

    page:Page;
    BrowseEventsbtn:Locator;
    MyBookingsbtn:Locator;
    eventCards:Locator;
    Adminbtn:Locator;
    ManageEventsbtn:Locator;
    ManageBookingsBtn:Locator;
    APIDocslink:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.BrowseEventsbtn=this.page.getByRole('link', { name: 'Browse Events →' });
        this.MyBookingsbtn=this.page.getByRole('link', { name: 'My Bookings' });
        this.eventCards=this.page.locator("#event-card");
        this.Adminbtn=this.page.getByRole('button', { name: 'Admin' });
        this.ManageEventsbtn=this.page.locator("div.right-0  a[href='/admin/events']");
        this.ManageBookingsBtn=this.page.locator("div.right-0  a[href='/admin/bookings']");
        this.APIDocslink=this.page.getByRole("link",{name:"API Docs"});

    }


    async verifyuserisonDashboardpage()
    {
        await expect(this.BrowseEventsbtn).toBeVisible();
    }


    async navigateToManageEvent()
    {
        await this.Adminbtn.click();
        await this.ManageEventsbtn.click();
    }

    async NavigateToAPIDocsPage()
    {
        await this.APIDocslink.click();

    }
    




}