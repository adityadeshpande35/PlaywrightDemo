package com.qa.opencart.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.qa.opencart.base.BaseTest;
import com.qa.opencart.constant.AppConstant;

public class LoginPageTest extends BaseTest {
	
	
	@Test(priority=1)
	public void loginPageNavigationTest()
	{
		loginpage=homepage.navigateToLoginPage();
		String actualLoginPageTitle=loginpage.getLoginPageTitle();
		System.out.println("page actual title:"+actualLoginPageTitle);
		Assert.assertEquals(actualLoginPageTitle, AppConstant.LOGIN_PAGE_TITLE);
	}
	@Test(priority=2)
	public void forgotPwdLinkExistsTest()
	{
	Assert.assertTrue(loginpage.isForgotPwdLinkExists());
		
	}
	@Test(priority=3)
	public void appLoginTest()
	{
	Assert.assertTrue(loginpage.doLogin(prop.getProperty("username").trim(), prop.getProperty("password").trim()));
		
	}

}
