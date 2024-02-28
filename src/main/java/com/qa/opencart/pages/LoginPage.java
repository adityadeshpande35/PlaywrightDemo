package com.qa.opencart.pages;

import com.microsoft.playwright.Page;

public class LoginPage {

	private Page page;
	//1.String Locators-OR
	private String emailId="//input[@id='input-email']";
	private String password="//input[@id='input-password']";
	private String loginBtn="//input[@value='Login']";
	private String forgotpwdlink="//div[@class='form-group']//a[normalize-space()='Forgotten Password']";
	private String logoutLink="//a[@class='list-group-item'][normalize-space()='Logout']";
	
	//2.page constructor:
	public LoginPage(Page page)
	{
		this.page=page;
	}
    
	//3. page actions/methods
	public String getLoginPageTitle()
	{
		return page.title();
	}
	public boolean isForgotPwdLinkExists()
	{
		return page.isVisible(forgotpwdlink);
	}

  public boolean doLogin(String  appUserName,String appPassword)
  {
	  System.out.println("App creds: "+appUserName+":"+appPassword);
	  page.fill(emailId,appUserName);
	  page.fill(password,appPassword);
	  page.click(loginBtn);
	  if(page.isVisible(logoutLink))
	  {
		  System.out.println("user is logged in sucessfully...");
		  return true;
	  }
	  return false;
	  

	  
  }
	

}
