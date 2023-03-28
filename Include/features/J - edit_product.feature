@EDP
Feature: edit product

  @EDP001
  Scenario: user cancel edit product
    Given the user already login with "d.erprion@gmail.com" and "qwerty1234"
    When user open daftarjual page
    And navigate to edit product
    And click back button in ubah produk page
    Then the product will not change
    
  @EDP002
  Scenario: user edit product
    Given the user already login with "d.erprion@gmail.com" and "qwerty1234"
    When user open daftarjual page
    And navigate to edit product
    And user input edit Product Name "edit produk berhasil"
    And user input edit product price "333333333"
    And user input edit product location "Bandung"
    And user edit input product description "edit deksripsi produk"
    And user edit choose product category
    And user edit upload product photo
    And user edit click Terbitkan button
    Then User can edit their product information
