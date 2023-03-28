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

import internal.GlobalVariable

import com.kms.katalon.core.util.KeywordUtil

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class Test {

	@When("user click delete icon")
	public void user_click_delete_icon() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/navigate_to_delete_product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click batalkan")
	public void user_click_batalkan() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/click_confirmation_cancel_delete'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("product not deleted")
	public void product_not_deleted() {

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click hapus")
	public void user_click_hapus() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/click_confirmation_hapus'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("product not appear in the daftarjual page")
	public void product_not_appear_in_the_daftarjual_page() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/verify_delete_product_success'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
