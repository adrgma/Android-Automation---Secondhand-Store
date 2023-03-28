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

public class buy_product {
	@Given("the buyer already login as buyer")
	public void the_buyer_already_login_as_buyer() {
		Mobile.startApplication('APK/app-release.apk', false)
		Mobile.callTestCase(findTestCase('Pages/page_home/add_produklangsungditolak'), [('email') : 'j.inprion@gmail.com', ('password') : 'qwerty1234'
			, ('product_name') : 'produklangsungtolak', ('product_price') : '919191', ('location') : 'Tangerang', ('product_description') : 'hanya produk testing'],
		FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Step Definition/feature_see_product_detail/SDP001 - See product detail for product langsung tolak'),
				[('email') : 'jin.prion@gmail.com', ('password') : 'qwerty1234', ('product_name') : 'produklangsung'], FailureHandling.STOP_ON_FAILURE)
	}

	@When("search product to buy")
	public void search_product_to_buy() {
		Mobile.callTestCase(findTestCase('Pages/page_buy_product/verify_content_produklangsungtolak'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("buyer click Saya tertarik dan ingin nego button")
	public void buyer_click_Saya_tertarik_dan_ingin_nego_button() {
		Mobile.tap(findTestObject('page_buy_product/btn_buy_bid_product'), 6)
	}

	@When("buyer input Harga Tawar {string}")
	public void buyer_input_Harga_Tawar(String string) {
		Mobile.sendKeys(findTestObject('page_buy_product/input_bid_product'), '919191')
	}

	@When("buyer click Kirim button")
	public void buyer_click_Kirim_button() {
		Mobile.tap(findTestObject('page_buy_product/btn_kirim'), 5)
	}

	@Then("Harga tawarmu berhasil dikirim ke penjual notification appears")
	public void harga_tawarmu_berhasil_dikirim_ke_penjual_notification_appears() {
		Mobile.callTestCase(findTestCase('Pages/page_buy_product/verify_bid_success'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("Saya tertarik dan ingin nego button change into Menunggu respon penjual.")
	public void saya_tertarik_dan_ingin_nego_button_change_into_Menunggu_respon_penjual() {
		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Given("the buyer already login as buyer in market")
	public void the_buyer_already_login_as_buyer_in_market() {
		Mobile.callTestCase(findTestCase('Pages/page_home/add_produkgantistatus'), [('email') : 'prionaratama@gmail.com', ('password') : 'qwerty1234'
			, ('product_name') : 'produkgantistatus', ('product_price') : '212121', ('location') : 'Tangerang', ('product_description') : 'hanya produk testing'],
		FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Step Definition/feature_see_product_detail/SDPhelper for change status'), [('email') : 'jin.prion@gmail.com'
			, ('password') : 'qwerty1234', ('product_name') : 'produkgantistatus'], FailureHandling.STOP_ON_FAILURE)
	}
}
