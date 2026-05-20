import{Page} from '@playwright/test';
import{LoginPage} from './LoginPage';


export class POManager
{
    page:Page;
    loginpage:LoginPage;
     constructor(page:Page)
    {
        this.page=page;
        this.loginpage=new LoginPage(this.page);

    }

    
    getLoginPage()
{
    return this.loginpage;  

}

}
module.exports={POManager};