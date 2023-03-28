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
import cucumber.api.java.en.When
import cucumber.api.java.en.Then
import internal.GlobalVariable

public class seller_list {

	@Given("the user already login with email {string} and password {string}")
	public void the_user_already_login_with_email_and_password(String email, String password) {
		Mobile.startApplication('APK/app-release.apk', false)

		Mobile.callTestCase(findTestCase('Pages/page_login/navigate_to_login_page'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click menu Akun")
	public void user_click_menu_Akun() {
		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click menu Daftar Jual Saya")
	public void user_click_menu_Daftar_Jual_Saya() {
		Mobile.callTestCase(findTestCase('Pages/page_seller_list/navigate_to_daftar_jual'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("Daftar Jual Saya page displayed")
	public void daftar_Jual_Saya_page_displayed() {
		Mobile.callTestCase(findTestCase('Pages/page_seller_list/verify_all_product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Given("the user already in Daftar Jual Saya page")
	public void the_user_already_in_Daftar_Jual_Saya_page() {
		Mobile.delay(2, FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click category Diminati")
	public void user_click_category_Diminati() {
		Mobile.callTestCase(findTestCase('Pages/page_seller_list/click_diminati'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user can view list of products that buyers are interested in")
	public void user_can_view_list_of_products_that_buyers_are_interested_in() {
		Mobile.callTestCase(findTestCase('Pages/page_seller_list/verify_list_diminati'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Given("the user already login in DaftarJual Saya page")
	public void the_user_already_login_in_DaftarJual_Saya_page() {
		Mobile.delay(2, FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click category Terjual")
	public void user_click_category_Terjual() {
		Mobile.callTestCase(findTestCase('Pages/page_seller_list/click_terjual'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user can view list of products that have been sold")
	public void user_can_view_list_of_products_that_have_been_sold() {
		Mobile.callTestCase(findTestCase('Pages/page_seller_list/verify_list_terjual'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
