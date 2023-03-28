package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import internal.GlobalVariable

public class logout {
	@Given("User go to the login page")
	public void user_go_to_the_login_page() {
		Mobile.callTestCase(findTestCase('Pages/page_login/navigate_to_login_page'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User input Email field {string}")
	public void user_input_Email_field(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User input Password field {string}")
	public void user_input_Password_field(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User click button Masuk")
	public void user_click_button_Masuk() {
		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click button log out")
	public void user_click_button_log_out() {
		Mobile.callTestCase(findTestCase('Pages/page_home/click_button_log_out'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
