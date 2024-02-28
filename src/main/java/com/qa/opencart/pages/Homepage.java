package com.qa.opencart.pages;

import com.microsoft.playwright.Page;

public class Homepage {
	
	private Page page;
	
	//1.String Locators-OR

	private String search="input[name='search']";
	private String searchIcon="div#search button";
	private String searchPageHeader="div#content h1";
	private String Loginlink="a:text('Login')";
	private String  MyAccountLink="a[title='My Account']";
	
	//2.page constructor:
	public Homepage(Page page)
	{
		this.page=page;
	}
	//3. page actions/methods
	public String getHomePageTitle()
	{
		String title= page.title();
		System.out.println("Page title:"+title);
		return title;
	}
	public String getHomePageURL()
	{
	String url	= page.url();
	System.out.println("page url:"+url);
	return url;
	}
	
	public String doSearch(String productName)
	{
		page.fill(search, productName);
		page.click(searchIcon);
		 String header =page.textContent(searchPageHeader);
		 System.out.println("search header:"+header);
		 return header;
	}
	
	public LoginPage navigateToLoginPage()
	{
		page.click(MyAccountLink);
		page.click(Loginlink);
		return new LoginPage(page);
	}
	
}
