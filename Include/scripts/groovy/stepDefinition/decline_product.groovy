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

public class decline_product {
	@Given("the user login to website with email {string} and password {string}")
	public void the_user_login_to_website_with_email_and_password(String email, String password) {
		Mobile.startApplication('APK/app-release.apk', false)

		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/click_masuk_button'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("Seller go to daftarjual page")
	public void seller_go_to_daftarjual_page() {
		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/navigate_to_daftar_jual_saya'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("Seller click Diminati in category")
	public void seller_click_Diminati_in_category() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/navigate_to_tab_diminati'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("Seller click the product langsung tolak")
	public void seller_click_the_product_langsung_tolak() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/tab_diminati/navigate_to_div_langsung_tolak'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("Seller click button Tolak to decline bid")
	public void seller_click_button_Tolak_to_decline_bid() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/tab_diminati/click Tolak'), [:], FailureHandling.STOP_ON_FAILURE)
	}


	@Then("Decline bid pop up appears Tawaran produk ditolak")
	public void decline_bid_pop_up_appears_Tawaran_produk_ditolak() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/tab_diminati/verifikasi_click_tolak_berhasil'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/navigate_delete_dummy_product'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/click_confirmation_hapus'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)
		
		Mobile.delay(2, FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Given("the user already login in Seller Account using {string} and password {string}")
	public void the_user_already_login_in_Seller_Account_using_and_password(String email, String password) {
		Mobile.startApplication('APK/app-release.apk', false)

		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/click_masuk_button'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("Seller click the product to change status to decline")
	public void seller_click_the_product_to_change_status_to_decline() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/tab_diminati/navigate_to_div_ganti_status'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("Seller click button Terima")
	public void seller_click_button_Terima() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/tab_diminati/click_terima'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("Seller click button Status")
	public void seller_click_button_Status() {
		Mobile.pressBack()

		Mobile.tap(findTestObject('page_buy_product/tab_diminati/btn_status'), 2)
	}

	@When("Seller click radio button Batalkan transaksi")
	public void seller_click_radio_button_Batalkan_transaksi() {
		Mobile.tap(findTestObject('page_buy_product/tab_diminati/choose Batalkan transaksi'), 2)

		Mobile.tap(findTestObject('page_buy_product/tab_diminati/btn_save_change_status'), 2)
	}

	@Then("Sellers success to decline bid")
	public void sellers_success_to_decline_bid() {
		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/tab_diminati/back_to_diminati'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.delay(6, FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/navigate_to_produk_tab'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/navigate_delete_dummy_product'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/click_confirmation_hapus'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)
		
		Mobile.delay(2, FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
