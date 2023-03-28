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

public class pencarian {

	@Given("user input name product")
	public void user_input_name_product() {
		Mobile.startApplication('APK/app-release.apk', false)
		Mobile.callTestCase(findTestCase('Pages/page_pencarian/input_nama_produk'), [('nama_produk') : 'Baju muslim'], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user click to see detail product")
	public void user_click_to_see_detail_product() {
		Mobile.callTestCase(findTestCase('Pages/page_pencarian/click_hasil_pencarian'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user see appears detail product")
	public void user_see_appears_detail_product() {
		Mobile.callTestCase(findTestCase('Pages/page_pencarian/detail_produk'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
