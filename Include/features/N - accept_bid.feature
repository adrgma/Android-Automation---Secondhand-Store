@ACB001

Feature: accept bid

@ACB001
Scenario: User accept bid
Given the user already login with email "Putriyulina45@gmail.com" and password "Puyulputriyulina123"
When user click menu Akun
And user click menu Daftar Jual Saya
And user click tab Diminati
And user click product
And User click button Terima
Then user success to update status negotiation and accept bid