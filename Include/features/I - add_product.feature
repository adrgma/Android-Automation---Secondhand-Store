@ADP
Feature: add product

  @ADP001
  Scenario: user add product to sell from Homepage
    Given the user already login with "d.erprion@gmail.com" and "qwerty1234"
    When user + icon from navbar
    And user input Product Name "HomepageProduct"
    And user input product price "141414"
    And user input product location "Tangerang"
    And user input product description "hanya untuk testing deskripsi saja"
    And user choose product category
    And user upload product photo
    And user click Terbitkan button
    Then the product is publish and can be seen in daftarjual page

  @ADP002
  Scenario: user preview product
    Given the user already login with "d.erprion@gmail.com" and "qwerty1234"
    When user + icon from navbar
    And user input Product Name "previewProduct"
    And user input product price "131313"
    And user input product location "Tangerang"
    And user input product description "ini adalah contoh deskripsi previewProduct"
    And user choose product category
    And user upload product photo
    And user click Preview button
    Then User is directed to Tinjau Produk page and see how their product is show

  @ADP003
  Scenario: user Cancel add product
    Given the user already login with "d.erprion@gmail.com" and "qwerty1234"
    When user + icon from navbar
    And user click back button
    Then user is redirect to previous page

