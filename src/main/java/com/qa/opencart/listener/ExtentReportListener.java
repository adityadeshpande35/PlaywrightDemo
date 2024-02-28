package com.qa.opencart.listener;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Calendar;
import java.util.Date;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.qa.opencart.factory.PlaywrightFactory;

public class ExtentReportListener  implements ITestListener{
	
	private static final String OUTPUT_FOLDER="./build/";
	private static final String FILE_NAME="TestExecutionReport.html";
	
	private static ExtentReports extent=init();
	public static ThreadLocal<ExtentTest> test=new ThreadLocal<ExtentTest>();
	private static ExtentReports extentReports;
	
	private static  ExtentReports init()
	{
		Path path=Paths.get(OUTPUT_FOLDER);
		if(!Files.exists(path))
		{
			try {
				Files.createDirectories(path);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		extentReports=new ExtentReports();
		ExtentSparkReporter reporter=new ExtentSparkReporter(OUTPUT_FOLDER+FILE_NAME);
		reporter.config().setReportName("Open Cart Automation Test Results");
		extentReports.attachReporter(reporter);
		extentReports.setSystemInfo("System", "MAC");
		extentReports.setSystemInfo("Author", "Naveen Automation Labs");
		extentReports.setSystemInfo("Build#", "1.1");
		extentReports.setSystemInfo("Team", "OMS");
		extentReports.setSystemInfo("Customer Name", "NAL");
		return extentReports;

		

		


		
	}
	@Override
	public void onStart(ITestContext context) {
		// TODO Auto-generated method stub
		System.out.println("Test Suite Started!");
	}
	@Override
	public void onFinish(ITestContext context) {
		// TODO Auto-generated method stub
		System.out.println("Test Suite is ending!");
		extent.flush();
		test.remove();

	}

	

	@Override
	public void onTestStart(ITestResult result) {
		// TODO Auto-generated method stub
		String methodName=result.getMethod().getMethodName();
		String qualifiedName=result.getMethod().getQualifiedName();
		int last=qualifiedName.lastIndexOf(".");
		int mid=qualifiedName.substring(0,last).lastIndexOf(".");
		String className=qualifiedName.substring(mid+1,last);
		System.out.println(methodName+" started!");
		ExtentTest extentTest=extent.createTest(result.getMethod().getMethodName(),
				result.getMethod().getDescription());
		extentTest.assignCategory(result.getTestContext().getSuite().getName());
		extentTest.assignCategory(className);
		test.set(extentTest);
		test.get().getModel().setStartTime(getTime(result.getStartMillis()));
		
	}

	@Override
	public void onTestSuccess(ITestResult result) {
		// TODO Auto-generated method stub
	System.out.println((result.getMethod().getMethodName()+" passed! "));
	test.get().pass("Test passed");
	test.get().pass(result.getThrowable(),MediaEntityBuilder.createScreenCaptureFromPath(PlaywrightFactory.takeScreenshot()).build());
	test.get().getModel().setEndTime(getTime(result.getEndMillis()));

	}

	@Override
	public void onTestFailure(ITestResult result) {
		// TODO Auto-generated method stub
		System.out.println((result.getMethod().getMethodName()+" failed! "));
		test.get().fail(result.getThrowable(),MediaEntityBuilder.createScreenCaptureFromPath(PlaywrightFactory.takeScreenshot()).build());
		test.get().getModel().setEndTime(getTime(result.getEndMillis()));

	}

	
	@Override
	public void onTestSkipped(ITestResult result) {
		// TODO Auto-generated method stub
		System.out.println((result.getMethod().getMethodName()+" skipped! "));
		test.get().skip(result.getThrowable(),MediaEntityBuilder.createScreenCaptureFromPath(PlaywrightFactory.takeScreenshot()).build());
		test.get().getModel().setEndTime(getTime(result.getEndMillis()));
	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		// TODO Auto-generated method stub
	System.out.println("onTestFailedButWithinSuccessPercentage for"+result.getMethod().getMethodName());
	}

	@Override
	public void onTestFailedWithTimeout(ITestResult result) {
		// TODO Auto-generated method stub
		ITestListener.super.onTestFailedWithTimeout(result);
	}

	private Date getTime(long millis)
	{
		Calendar calendar=Calendar.getInstance();
		calendar.setTimeInMillis(millis);
		return calendar.getTime();
	}
	

}
