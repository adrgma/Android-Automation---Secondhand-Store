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

Mobile.callTestCase(findTestCase('Pages/page_login/verify_content'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/input_email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/input_password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_login/click_masuk'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_home/navigate_to_menu_akun'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.callTestCase(findTestCase('Pages/page_akun/log_out_account'), [:], FailureHandling.STOP_ON_FAILURE)

