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

Mobile.callTestCase(findTestCase('Pages/page_akun/navigate_to_daftar_jual_saya'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_daftarjual/navigate_to_delete_product'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_daftarjual/click_confirmation_hapus'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_daftarjual/verify_delete_product_success'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_daftarjual/back_to_akun_menu'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)

