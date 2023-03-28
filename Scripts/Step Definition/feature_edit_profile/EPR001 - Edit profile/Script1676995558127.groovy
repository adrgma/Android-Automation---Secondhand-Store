import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.callTestCase(findTestCase('Pages/page_login/navigate_to_login_page'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_nama'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_nama'), [('nama') : nama], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_nama'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_nohp'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_nohp'), [('nohp') : nohp], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_nohp'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_kota'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_kota'), [('kota') : kota], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_kota'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_alamat'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_alamat'), [('alamat') : alamat], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_alamat'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_edit_email'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_email'), [('email') : edit_email], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_email'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_label_silang_notif_sukses'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_panah_kembali'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_icon_pensil'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_text_edit_sandi'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_sandi_lama'), [('sandi_lama') : sandi_lama], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_sandi_baru'), [('sandi_baru') : sandi_baru], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/edit_sandi_baru_konfirm'), [('konfirm_sandi_baru') : sandi_baru_konfirm], 
    FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/click_button_simpan_sandi'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/label_sukses_update'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_profile/back_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)

