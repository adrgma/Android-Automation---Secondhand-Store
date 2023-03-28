package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class login {
	@Given("User navigate to the login page")
	public void user_navigate_to_the_login_page() {
		Mobile.callTestCase(findTestCase('Pages/page_login/navigate_to_login_page'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User input Email field with registered credential {string}")
	public void user_input_Email_field_with_registered_credential(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User input Password field with registered credential {string}")
	public void user_input_Password_field_with_registered_credential(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click Masuk and success login")
	public void user_click_Masuk_and_success_login() {
		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User input Email field with incorrect email credential {string}")
	public void user_input_Email_field_with_incorrect_email_credential(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User input Password field with incorrect password credential {string}")
	public void user_input_Password_field_with_incorrect_password_credential(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click Masuk")
	public void user_click_Masuk() {
		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User input Email field with incorrect email format {string}")
	public void user_input_Email_field_with_incorrect_email_format(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User input Password field with incorrect password format {string}")
	public void user_input_Password_field_with_incorrect_password_format(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User click icon mata")
	public void user_click_icon_mata() {
		Mobile.callTestCase(findTestCase('Pages/page_login/reveal_password'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User click icon mata dua kali")
	public void user_click_icon_mata_dua_kali() {
		Mobile.callTestCase(findTestCase('Pages/page_login/hide_password'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}