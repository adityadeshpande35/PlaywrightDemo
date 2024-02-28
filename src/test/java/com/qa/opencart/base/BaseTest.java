package com.qa.opencart.base;

import java.util.Properties;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.microsoft.playwright.Page;
import com.qa.opencart.factory.PlaywrightFactory;
import com.qa.opencart.pages.Homepage;
import com.qa.opencart.pages.LoginPage;

public class BaseTest {
	PlaywrightFactory pf;
	Page page;
	protected Properties prop;
	protected Homepage homepage;
	protected LoginPage loginpage;
	@BeforeTest
	public void setup()
	{
		pf=new PlaywrightFactory();
		prop=pf.init_prop();
		page=pf.initBrowser(prop);
		homepage=new Homepage(page);
	}
	@AfterTest
	public void tearDown()
	{
		page.context().browser().close();
	}
}
