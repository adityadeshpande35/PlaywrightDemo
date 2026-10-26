import{Page,Locator,test,expect} from '@playwright/test';
export class eventDetailsPage
{
    page:Page;
    eventTitle:Locator;
    eventDescription:Locator;
    eventCategory:Locator;
    eventCity:Locator;
    eventvenue:Locator;
    eventDate:Locator;
    eventPrice:Locator;
    eventSeats:Locator;

    constructor(page:Page)
    {

        this.page=page;
        this.eventTitle=this.page.locator("#event-title-input");
        this.eventDescription=this.page.getByPlaceholder("Describe the event…");
        this.eventCategory=this.page.locator("#category");
        this.eventCity=this.page.locator("#city");
        this.eventvenue=this.page.locator("#venue");
        this.eventDate=this.page.locator("#event-date-&-time");
        this.eventPrice=this.page.locator("#price-($)");
        this.eventSeats=this.page.locator("#seats");
    }

    async createNewEvent(eventtitle:string,eventdescription:string,eventcategory:string,eventcity:string,eventvenue:string,eventdate:string,eventprice:string,eventseats:string)
    {
        await this.eventTitle.fill(eventtitle);
        await this.eventDescription.fill(eventdescription);
        await this.eventCategory.selectOption(eventcategory);
        await this.eventCity.fill(eventcity);
        await this.eventvenue.fill(eventvenue);
        await this.eventDate.fill(eventdate);
        await this.eventPrice.fill(eventprice);
        await this.eventSeats.fill(eventseats);
}

}
module.exports={eventDetailsPage};