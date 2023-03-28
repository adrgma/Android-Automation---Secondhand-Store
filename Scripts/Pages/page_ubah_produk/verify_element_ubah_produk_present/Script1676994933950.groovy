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

Mobile.verifyElementExist(findTestObject('page_ubah_produk/title_page_ubah_produk'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/btn_cancel_edit'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/input_product_name'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/input_product_price'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/choose_kategori'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/input_location'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/input_product_description'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/upload_new_photo'), 3)

Mobile.verifyElementExist(findTestObject('page_ubah_produk/btn_perbarui_produk'), 2)

