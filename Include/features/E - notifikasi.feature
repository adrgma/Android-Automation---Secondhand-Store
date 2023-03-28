@notifikasi
Feature: Notifikasi



@NOT001
Scenario: User should be success see detail product
    Given usr already on login page
    When usr input email "studentqa3@binar.id"
    And usr input password "studentQA3"
    And usr click button login
    Then a list of product offerings appears
    