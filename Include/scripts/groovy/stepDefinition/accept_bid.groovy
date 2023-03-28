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

public class accept_bid {
	@Given("the user already login with email {string} and password {string}")
	public void the_user_already_login_with_email_and_password(String email, String password) {
		Mobile.startApplication('APK/app-release.apk', false)
		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/navigate_to_login_page'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click tab Diminati")
	public void user_click_tab_Diminati() {
		Mobile.callTestCase(findTestCase('Pages/page_seller_list/click_diminati'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click product")
	public void user_click_product() {
		Mobile.callTestCase(findTestCase('Pages/page_accept_bid/click_list_product_diminati'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User click button Terima")
	public void user_click_button_Terima() {
		Mobile.callTestCase(findTestCase('Pages/page_accept_bid/click_button_accept'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user success to update status negotiation and accept bid")
	public void user_success_to_update_status_negotiation_and_accept_bid() {
		Mobile.callTestCase(findTestCase('Pages/page_accept_bid/success_to_accept_bid'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_accept_bid/back_to_detail_product'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_accept_bid/click_button_back_to_list_daftar_jual'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
