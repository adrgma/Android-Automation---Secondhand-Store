@logout
Feature: Logout

@LGO001
Scenario: User wants to log out from his account
	Given User go to the login page
  When User input Email field "mayorey@gmail.com"
  And User input Password field "Sooyan321"
  And User click button Masuk
  Then User click button log out