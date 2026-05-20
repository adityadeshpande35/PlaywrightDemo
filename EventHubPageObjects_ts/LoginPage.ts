import{Page,Locator,test,expect} from '@playwright/test';
export class LoginPage
{
    page:Page;
    signInButton:Locator;
    userName:Locator;
    password:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.signInButton = page.locator("#login-btn");
        this.userName=page.locator("#email");
        this.password=page.locator("#password");
    }

    async goto()
    {
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login");
    }

    async performvalidLogin(username:string,password:string)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        
    }


}
module.exports={LoginPage};