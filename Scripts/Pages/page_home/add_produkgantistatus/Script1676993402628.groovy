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

Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_akun/click_masuk_button'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_tambah_produk'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/verify_element_tambah_produk_present'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_product_name'), [('product_name') : product_name], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_product_price'), [('product_price') : product_price], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_location'), [('location') : location], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/input_description'), [('product_description') : product_description], 
    FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/choose_category'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/page_tambah_produk/upload_photo_dummy'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_tambah_produk/click_terbitkan'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.delay(8, FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.closeApplication()

