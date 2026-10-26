import{Page,Locator,test,expect} from '@playwright/test';
export class LoginPage
{
    page:Page;
    signInButton:Locator;
    userName:Locator;
    password:Locator;
    invalidemailerrormsg:Locator;
    passwordlengthnotmatcherrormsg:Locator;
    incorrectloginerrormsg:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.signInButton = page.locator("#login-btn");
        this.userName=page.locator("#email");
        this.password=page.locator("#password");
        this.invalidemailerrormsg=page.locator("p.mt-1.text-xs.text-red-600").first();
        this.passwordlengthnotmatcherrormsg=page.locator("p.mt-1.text-xs.text-red-600").last();
        this.incorrectloginerrormsg=page.locator("p.flex-1.leading-snug");
    }

    async goto()
    {
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login");
    }

    async performValidLogin(username:string,password:string)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        
    }

    async performInvalidLogin(username:string,password:string)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await expect(this.incorrectloginerrormsg).toHaveText("Invalid email or password");
    }

    //p.flex-1.leading-snug
 


}
module.exports={LoginPage};