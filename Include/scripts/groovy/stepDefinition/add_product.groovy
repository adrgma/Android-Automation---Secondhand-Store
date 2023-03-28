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

public class add_product {
	@Given("the user already login with {string} and {string}")
	public void the_user_already_login_with_and(String email, String password) {

		Mobile.startApplication('APK/app-release.apk', false)

		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/click_masuk_button'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user + icon from navbar")
	public void user_icon_from_navbar() {
		Mobile.delay(8, FailureHandling.STOP_ON_FAILURE)
		
		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_tambah_produk'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/verify_element_tambah_produk_present'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input Product Name {string}")
	public void user_input_Product_Name(String product_name) {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_product_name'), [('product_name') : product_name], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input product price {string}")
	public void user_input_product_price(String product_price) {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_product_price'), [('product_price') : product_price], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input product location {string}")
	public void user_input_product_location(String location) {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_location'), [('location') : location], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input product description {string}")
	public void user_input_product_description(String product_description) {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_description'), [('product_description') : product_description],
		FailureHandling.STOP_ON_FAILURE)
	}

	@When("user choose product category")
	public void user_choose_product_category() {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/choose_category'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user upload product photo")
	public void user_upload_product_photo() {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/upload_photo'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click Terbitkan button")
	public void user_click_Terbitkan_button() {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/click_terbitkan'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("the product is publish and can be seen in daftarjual page")
	public void the_product_is_publish_and_can_be_seen_in_daftarjual_page() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/verify_add_product_success'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click Preview button")
	public void user_click_Preview_button() {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/click_preview'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User is directed to Tinjau Produk page and see how their product is show")
	public void user_is_directed_to_Tinjau_Produk_page_and_see_how_their_product_is_show() {
		Mobile.callTestCase(findTestCase('Pages/page_tinjau_produk/verify_preview_product_success'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_tinjau_produk/back_to_page_tambah_produk'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/cancel_add_product'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click back button")
	public void user_click_back_button() {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/cancel_add_product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user is redirect to previous page")
	public void user_is_redirect_to_previous_page() {
		Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/verify_element_tambah_produk_not_present'), [:], FailureHandling.STOP_ON_FAILURE)

		WebUI.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
