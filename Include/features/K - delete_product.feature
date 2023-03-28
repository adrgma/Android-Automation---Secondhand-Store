@DLP
Feature: delete product

  @DLP001
  Scenario: user Cancel delete product
    Given the user already login with "d.erprion@gmail.com" and "qwerty1234"
    When user open daftarjual page
    And user click delete icon
    And user click batalkan
    Then product not deleted

  @DLP002
  Scenario: user Cancel delete product
    Given the user already login with "d.erprion@gmail.com" and "qwerty1234"
    When user open daftarjual page
    And user click delete icon
    And user click hapus
    Then product not appear in the daftarjual page
