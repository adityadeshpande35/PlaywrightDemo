import{Page,Locator,test,expect} from '@playwright/test';

export class OrdersReviewPage
{
    page:Page;
    country:Locator;
    dropdown:Locator;
    emailId:Locator;
    cardNumber:Locator;
    expiryMonth:Locator;
    expiryYear:Locator;
    cvv:Locator;
    nameOnCard:Locator;
    couponCode:Locator
    applyButton:Locator;
    couponAppliedText:Locator;
    submit:Locator;
    orderConfirmationText:Locator;
    orderId:Locator;

    constructor(page:Page)


{

    this.page=page;
    this.country=page.locator("[placeholder*='Country']");
    this.dropdown=page.locator(".ta-results");
    this.emailId=page.locator(".user__name [type='text']").first();
    this.cardNumber=page.locator(".form__cc input[class='input txt text-validated']");
    this.expiryMonth=page.locator("select.input.ddl").first();
    this.expiryYear=page.locator("select.input.ddl").last();
    this.cvv=page.locator("div.field.small .input.txt").first();
    this.nameOnCard=page.locator(".form__cc input[class='input txt']").last();
    this.couponCode=page.locator("div.field.small .input.txt").last();
    this.applyButton=page.locator(".btn.btn-primary.mt-1");
    this.couponAppliedText=page.locator("p.mt-1.ng-star-inserted");

    this.submit=page.locator(".action__submit");
    this.orderConfirmationText=page.locator(".hero-primary");
    this.orderId=page.locator(".em-spacer-1 .ng-star-inserted");



}

 async searchAndSelectCountry(countryCode:string,countryName:string)
 {

    await this.country.pressSequentially(countryCode);
    await this.dropdown.waitFor();
    const optionsCount=await this.dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++)
    {
        let text:any;
         text=await this.dropdown.locator("button").nth(i).textContent();
        if(text === countryName)
        {
            await this.dropdown.locator("button").nth(i).click();
            break;
        }
    }
 }


 async verifyUserName(username:string)
 {
    await expect(this.emailId).toHaveText(username);
 }

 
async fillBankDetails(creditcardno:string,month:string,year:string,cvvcode:string,nameoncard:string,coupouncode:string,expectedtext:string)
{
    await this.cardNumber.fill(" ");
    await this.cardNumber.fill(creditcardno);
    await this.expiryMonth.selectOption(month);
    await this.expiryYear.selectOption(year);
    await this.cvv.fill(cvvcode);
    await this.nameOnCard.fill(nameoncard);
    await this.couponCode.fill(coupouncode);
    await this.applyButton.click();
    await  expect(this.couponAppliedText).toHaveText(expectedtext);
    
}
async SubmitAndGetOrderId()
{

    await  this.submit.click();
    await  expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
    return await this.orderId.textContent();



}

}
