import{Page,Locator,test,expect} from '@playwright/test';
import { Register } from '../utils_ts/Register';
import { AbstractComponent } from '../utils_ts/AbstractComponent';


export class RegisterPage  extends AbstractComponent
{
    page:Page;
    firstName:Locator;
    LastName:Locator;
    Email:Locator;
    phoneno:Locator;
    occupationdropdown:Locator;
    maleradiobtn:Locator;
    femaleradiobtn:Locator;
    password:Locator;
    cnfpassword:Locator;
    agecheckbox:Locator;
    Registerbtn:Locator;
    RegisterSuccessmsg:Locator;
    Loginbtn:Locator;


    constructor(page:Page)
    {
        super(page);
        
        this.page=page;
        this.firstName=page.locator("#firstName");
        this.LastName=page.locator("#lastName");
        this.Email=page.locator("#userEmail");
        this.phoneno=page.locator("#userMobile");
        this.occupationdropdown=page.locator("select.custom-select");
        this.maleradiobtn=page.locator("input.mt-3").first();
        this.femaleradiobtn=page.locator("input.mt-3").last();
        this.password=page.locator("#userPassword");
        this.cnfpassword=page.locator("#confirmPassword");
        this.agecheckbox=page.locator("input[type='checkbox']");
        this.Registerbtn=page.locator("#login");
        this.RegisterSuccessmsg=page.locator("h1.headcolor");
        this.Loginbtn=page.getByRole("button",{name:'Login'});


        
    }


async performValidRegidstration(register: Register)
{
    

 

    await this.firstName.fill(register.firstName);

    await this.LastName.fill(register.lastName);
    await this.Email.fill(register.email);
    await this.phoneno.fill(register.telephone);

     await this.selectDropdownByText(
            this.occupationdropdown,
            register.occupation
        );

    await this.maleradiobtn.check();

    await this.password.fill(register.password);
    await this.cnfpassword.fill(register.confirmPassword);

    await this.agecheckbox.check();
    await this.Registerbtn.click();
    await expect(this.RegisterSuccessmsg).toHaveText("Account Created Successfully");
    await this.Loginbtn.click();

}
}