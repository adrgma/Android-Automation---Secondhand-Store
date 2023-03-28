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

public class edit_product {
	@When("user open daftarjual page")
	public void user_open_daftarjual_page() {
		Mobile.callTestCase(findTestCase('Pages/page_akun/navigate_to_daftar_jual_saya'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("navigate to edit product")
	public void navigate_to_edit_product() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/navigate_to_edit_product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("click back button in ubah produk page")
	public void click_back_button_in_ubah_produk_page() {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/cancel_edit_product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("the product will not change")
	public void the_product_will_not_change() {
		Mobile.verifyElementVisible(findTestObject('page_daftarjual/txt_product_name'), 30)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)
		
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input edit Product Name {string}")
	public void user_input_edit_Product_Name(String product_name) {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/input_product_name'), [('product_name') : product_name], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input edit product price {string}")
	public void user_input_edit_product_price(String product_price) {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/input_product_price'), [('product_price') : product_price], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input edit product location {string}")
	public void user_input_edit_product_location(String location) {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/input_location'), [('location') : location], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user edit input product description {string}")
	public void user_edit_input_product_description(String product_description) {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/input_description'), [('product_description') : product_description],
		FailureHandling.STOP_ON_FAILURE)
	}

	@When("user edit choose product category")
	public void user_edit_choose_product_category() {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/choose_new_category'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user edit upload product photo")
	public void user_edit_upload_product_photo() {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/upload_photo'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user edit click Terbitkan button")
	public void user_edit_click_Terbitkan_button() {
		Mobile.callTestCase(findTestCase('Pages/page_ubah_produk/click_perbarui_produk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User can edit their product information")
	public void user_can_edit_their_product_information() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/verify_edit_product_success'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)
		
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
