import{Page,Locator,test,expect} from '@playwright/test';
export class RegisterPage
{
    page:Page;
    email:Locator;
    password:Locator;
    confirmPassword:Locator;
    createAccountBtn:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.email=page.locator("#register-email");
        this.password=page.locator("#register-password");
        this.confirmPassword=page.getByPlaceholder("Repeat your password");
        this.createAccountBtn=page.locator("#register-btn");



    }


async PerformValidRegistration(email:string,pasword:string,)
{
    await this.email.fill(email);
    await this.password.fill(pasword);
    await this.confirmPassword.fill(pasword);
    await this.createAccountBtn.click();


}


}
