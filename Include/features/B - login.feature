@login
Feature: Login
 
@LG001
Scenario: User want to login by using correct credential
	Given User navigate to the login page
  When User input Email field with registered credential "mayorey@gmail.com"
  And User input Password field with registered credential "Sooyan321"
  Then User click Masuk and success login

@LG002
Scenario: User want to login by not filling all field
	Given User navigate to the login page
  Then User click Masuk
  
@LG003
Scenario: User want to login by using incorrect email credential
	Given User navigate to the login page
  When User input Email field with incorrect email credential "mayorey2@gmail.com"
  And User input Password field with registered credential "Sooyan321"
  Then User click Masuk

@LG004
Scenario: User want to login by using incorrect password credential
	Given User navigate to the login page
  When User input Email field with registered credential "mayorey@gmail.com"
  And User input Password field with incorrect password credential "Soo1yan32"
  Then User click Masuk
 
@LG005
Scenario: User want to login by input incorrect email format on email textfield
	Given User navigate to the login page
  When User input Email field with incorrect email format "mayoreygmail.com"
  And User input Password field with registered credential "Sooyan321"
  Then User click Masuk

@LG006
Scenario: User want to login by input incorrect password format on password textfield
	Given User navigate to the login page
  When User input Email field with registered credential "mayorey@gmail.com"
  And User input Password field with incorrect password format "So"
  Then User click Masuk

@LG007
Scenario: User want to login by reveal his password
	Given User navigate to the login page
  When User input Email field with registered credential "mayorey@gmail.com"
  And User input Password field with registered credential "Sooyan321"
  And User click icon mata
  Then User click Masuk and success login

@LG008
Scenario: User want to login by hide his password
	Given User navigate to the login page
  When User input Email field with registered credential "mayorey@gmail.com"
  And User input Password field with registered credential "Sooyan321"
  And User click icon mata dua kali
  Then User click Masuk and success login