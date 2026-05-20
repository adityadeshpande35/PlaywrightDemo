const{expect} = require('@playwright/test');
class OrdersReviewPage
{
    constructor(page)


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

 async searchAndSelectCountry(countryCode,countryName)
 {

    await this.country.pressSequentially(countryCode);
    await this.dropdown.waitFor();
    const optionsCount=await this.dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++)
    {
        const text=await this.dropdown.locator("button").nth(i).textContent();
        if(text === countryName)
        {
            await this.dropdown.locator("button").nth(i).click();
            break;
        }
    }
 }


 async verifyUserName(username)
 {
    await expect(this.emailId).toHaveText(username);
 }

 
async fillBankDetails(creditcardno,month,year,cvvcode,nameoncard,coupouncode,expectedtext)
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
module.exports={OrdersReviewPage};