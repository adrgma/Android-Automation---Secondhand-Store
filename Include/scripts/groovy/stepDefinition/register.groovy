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



class register {
	@Given("User navigate to the register page")
	public void user_navigate_to_the_register_page() {
		Mobile.callTestCase(findTestCase('Pages/page_register/navigate_to_register_page'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User register by input Nama field {string}")
	public void user_register_by_input_Nama_field(String name) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_nama'), [('nama') : name], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Email field {string}")
	public void user_register_by_input_Email_field(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Password field {string}")
	public void user_register_by_input_Password_field(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_register/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Nomor HP field {string}")
	public void user_register_by_input_Nomor_HP_field(String nomorhp) {
		Mobile.callTestCase(findTestCase('Pages/page_register/Input Nomor HP'), [('nomorhp') : nomorhp], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Kota field {string}")
	public void user_register_by_input_Kota_field(String kota) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_kota'), [('kota') : kota], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Alamat field {string}")
	public void user_register_by_input_Alamat_field(String alamat) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_alamat'), [('alamat') : alamat], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click Daftar and success daftar")
	public void user_click_Daftar_and_success_daftar() {
		Mobile.callTestCase(findTestCase('Pages/page_register/click_daftar'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.delay(10, FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click Daftar")
	public void user_click_Daftarr() {
		Mobile.callTestCase(findTestCase('Pages/page_register/click_daftar'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User register by input Nama field with used credentials {string}")
	public void user_register_by_input_Nama_field_with_used(String name) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_nama'), [('nama') : name], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Email field with used credentials {string}")
	public void user_register_by_input_Email_field_with_used(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Password field with used credentials {string}")
	public void user_register_by_input_Password_field_with_used(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_register/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Email field with incorrect email format {string}")
	public void user_register_by_input_Email_field_with_incorrect_email_format(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input Password field with incorrect password format {string}")
	public void user_register_by_input_Password_field_with_incorrect_password_format(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_register/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User register by input new credentials Nama field {string}")
	public void user_register_by_input_new_credentials_Nama_field(String name) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_nama'), [('nama') : name], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input new credentials Email field {string}")
	public void user_register_by_input_new_credentials_Email_field(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input new credentials Password field {string}")
	public void user_register_by_input_new_credentials_Password_field(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_register/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User see password by click icon mata")
	public void user_see_password_by_click_icon_mata() {
		Mobile.callTestCase(findTestCase('Pages/page_register/see_password'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User register by input new credentials in Nama field {string}")
	public void user_register_by_input_new_credentials_in_Nama_field(String name) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_nama'), [('nama') : name], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input new credentials in Email field {string}")
	public void user_register_by_input_new_credentials_in_Email_field(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_register/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User register by input new credentials in Password field {string}")
	public void user_register_by_input_new_credentials_in_Password_field(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_register/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User see password by click icon mata dua kali")
	public void user_see_password_by_click_icon_mata_dua_kali() {
		Mobile.callTestCase(findTestCase('Pages/page_register/hide_password'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}