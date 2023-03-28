@BBP
Feature: buyer bid or buy product

  @BBP001
  Scenario: user want to bid price product
    Given the buyer already login as buyer
    When search product to buy
    And buyer click Saya tertarik dan ingin nego button
    And buyer input Harga Tawar "99998"
    And buyer click Kirim button
    Then Harga tawarmu berhasil dikirim ke penjual notification appears
    And Saya tertarik dan ingin nego button change into Menunggu respon penjual.

  @BBPHelper
  Scenario: Helper for change status to decline
    Given the buyer already login as buyer in market
    When buyer click Saya tertarik dan ingin nego button
    And buyer input Harga Tawar "99998"
    And buyer click Kirim button
    Then Harga tawarmu berhasil dikirim ke penjual notification appears
    And Saya tertarik dan ingin nego button change into Menunggu respon penjual.
