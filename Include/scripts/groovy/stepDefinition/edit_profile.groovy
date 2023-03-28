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
import groovy.json.StringEscapeUtils


public class edit_profile {
	@Given("user already on login page")
	public void user_already_on_login_page() {
		Mobile.callTestCase(findTestCase('Pages/page_login/navigate_to_login_page'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input email {string}")
	public void user_input_email(String email) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user input password {string}")
	public void user_input_password(String password) {
		Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button login")
	public void user_click_button_login() {
		Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click icon pencil")
	public void user_click_icon_pencil() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click text nama")
	public void user_click_text_nama() {
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_nama'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user edit nama {string}")
	public void user_edit_nama(String nama) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_nama'), [('nama') : nama], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button simpan nama")
	public void user_click_button_simpan_nama() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_nama'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("userr click label silang notif sukses")
	public void userr_click_label_silang_notif_sukses() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("userr click icon panah kembali")
	public void userr_click_icon_panah_kembali() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("userr click icon pensil")
	public void userr_click_icon_pensil() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click text nohp")
	public void user_click_text_nohp() {
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_nohp'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click edit nohp {string}")
	public void user_click_edit_nohp(String nohp) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_nohp'), [('nohp') : nohp], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button simpan nohp")
	public void user_click_button_simpan_nohp() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_nohp'), [:], FailureHandling.STOP_ON_FAILURE)
	}


	@And("u click label silang notif sukses")
	public void u_click_label_silang_notif_sukses() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("u click icon panah kembali")
	public void u_click_icon_panah_kembali() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("u click icon pensil")
	public void u_click_icon_pensil() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click text kota")
	public void user_click_text_kota() {
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_kota'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click edit kota {string}")
	public void user_click_edit_kota(String kota) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_kota'), [('kota') : kota], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button simpan kota")
	public void user_click_button_simpan_kota() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_kota'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("us click label silang notif sukses")
	public void us_click_label_silang_notif_sukses() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("us click icon panah kembali")
	public void us_click_icon_panah_kembali() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("us click icon pensil")
	public void us_click_icon_pensil() {
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click text alamat")
	public void user_click_text_alamat() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_alamat'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click edit alamat {string}")
	public void user_click_edit_alamat(String alamat) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_alamat'), [('alamat') : alamat], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button simpan alamat")
	public void user_click_button_simpan_alamat() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_alamat'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("use click label silang notif sukses")
	public void use_click_label_silang_notif_sukses() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("use click icon panah kembali")
	public void use_click_icon_panah_kembali() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("use click icon pensil")
	public void use_click_icon_pensil() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click text email")
	public void user_click_text_email() {
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_edit_email'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click edit email {string}")
	public void user_click_edit_email(String edit_email) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_email'), [('email') : edit_email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button simpan email")
	public void user_click_button_simpan_email() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_email'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("usr click label silang notif sukses")
	public void usr_click_label_silang_notif_sukses() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("usr click icon panah kembali")
	public void usr_click_icon_panah_kembali() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("usr click icon pensil")
	public void usr_click_icon_pensil() {
		WebUI.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)
	}
	@And("user click text edit sandi")
	public void user_click_text_edit_sandi() {
		Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/page_profile/click_text_edit_sandi'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click edit sandi lama {string}")
	public void user_click_edit_sandi_lama(sandi_lama) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_sandi_lama'), [('sandi_lama') : sandi_lama], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click edit sandi baru {string}")
	public void user_click_edit_sandi_baru(String sandi_baru) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_sandi_baru'), [('sandi_baru') : sandi_baru],
		FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click edit sandi baru konfirm {string}")
	public void user_click_edit_sandi_baru_konfirm(String sandi_baru_konfirm) {
		Mobile.callTestCase(findTestCase('Pages/page_profile/edit_sandi_baru_konfirm'), [('konfirm_sandi_baru') : sandi_baru_konfirm], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button simpan sandi")
	public void user_click_button_simpan_sandi() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_sandi'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("finish update data profile")
	public void finish_update_data_profile() {
		Mobile.callTestCase(findTestCase('Pages/page_profile/label_sukses_update'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_profile/back_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
