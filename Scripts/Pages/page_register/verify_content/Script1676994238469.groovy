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

Mobile.waitForElementPresent(findTestObject('page_register/text_nama'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/text_nama'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/textfield_nama'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/textfield_nama'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/text_email'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/text_email'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/textfield_email'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/textfield_email'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/text_password'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/text_password'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/textfield_password'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/textfield_password'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/icon_eyes_open'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/icon_eyes_open'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/text_nomor_hp'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/text_nomor_hp'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/textfield_nomor_hp'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/textfield_nomor_hp'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/text_kota'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/text_kota'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/textfield_kota'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/textfield_kota'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/text_alamat'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/text_alamat'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/textfield_alamat'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/textfield_alamat'), 6)

Mobile.waitForElementPresent(findTestObject('page_register/btn_daftar'), 6)

Mobile.verifyElementVisible(findTestObject('page_register/btn_daftar'), 6)

