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
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import internal.GlobalVariable

class filter {
	@Given("the user already in home page")
	public void the_user_already_in_home_page() {
		Mobile.startApplication('APK/app-release.apk', false)
	}

	@When("user select category")
	public void user_select_category() {
		Mobile.callTestCase(findTestCase('Pages/page_filter/click_filter_elektronik'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("product list displayed by category")
	public void product_list_displayed_by_category() {
		//		Mobile.callTestCase(findTestCase('Pages/page_filter/verify_category_elektronik'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_filter/verify_button_category_elektronik'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_filter/click_filter_komputer_dan_aksesoris'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_filter/verify_button_category_komputer_aksesoris'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_filter/click_filter_handphone_dan_aksesoris'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_filter/verify_button_category_handphone_aksesoris'), [:], FailureHandling.STOP_ON_FAILURE)

	}
}
