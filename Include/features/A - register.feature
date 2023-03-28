@register
Feature: Register

@RGT001
Scenario: User want to register by using filling all field
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  And User register by input Email field "matoyan528588@gmail.com"
  And User register by input Password field "Matoyan5622"
  And User register by input Nomor HP field "08218929391"
  And User register by input Kota field "Jakarta Pusat"
  And User register by input Alamat field "Jl. Sooyay No.5"
  Then User click Daftar and success daftar

@RGT002
Scenario: User want to register by not filling all field
	Given User navigate to the register page
  Then User click Daftar
 
@RGT003
Scenario: User want to register by only filling Nama field
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  Then User click Daftar
  
@RGT004
Scenario: User want to register by only filling Nama and Email field
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  And User register by input Email field "matoyan562@gmail.com"
  Then User click Daftar
  
@RGT005
Scenario: User want to register by only filling Nama, Email, and Password field
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  And User register by input Email field "matoyan562@gmail.com"
  And User register by input Password field "Matoyan562"
  Then User click Daftar
  
@RGT006
Scenario: User want to register by filling all field except City and Address
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  And User register by input Email field "matoyan562@gmail.com"
  And User register by input Password field "Matoyan562"
  And User register by input Nomor HP field "08218929391"
  Then User click Daftar
  
@RGT007
Scenario: User want to register by filling all field except Address
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  And User register by input Email field "matoyan562@gmail.com"
  And User register by input Password field "Matoyan562"
  And User register by input Nomor HP field "08218929391"
  And User register by input Kota field "Jakarta Pusat"
  Then User click Daftar
  
@RGT008
Scenario: User want to register by using used credentials
	Given User navigate to the register page
  When User register by input Nama field with used credentials "Mayoreh"
  And User register by input Email field with used credentials "mayoreyf2@gmail.com"
  And User register by input Password field with used credentials "Mayorey2g"
  And User register by input Nomor HP field "08218929391"
  And User register by input Kota field "Jakarta Pusat"
  And User register by input Alamat field "Jl. Sooyay No.5"
  Then User click Daftar
 
@RGT009
Scenario: User want to register by input incorrect email format on email textfield
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  And User register by input Email field with incorrect email format "mayorey222gmail.com"
  And User register by input Password field "Matoyan562"
  And User register by input Nomor HP field "08218929391"
  And User register by input Kota field "Jakarta Pusat"
  And User register by input Alamat field "Jl. Sooyay No.5"
  Then User click Daftar
  
@RGT010
Scenario: User want to register by input incorrect password format on email textfield
	Given User navigate to the register page
  When User register by input Nama field "Matoyan562"
  And User register by input Email field "matoyan562@gmail.com"
  And User register by input Password field with incorrect password format "M2"
  And User register by input Nomor HP field "08218929391"
  And User register by input Kota field "Jakarta Pusat"
  And User register by input Alamat field "Jl. Sooyay No.5"
  Then User click Daftar
  
@RGT011
Scenario: User want to register by see his password
	Given User navigate to the register page
  When User register by input new credentials Nama field "Matoyan572"
  And User register by input new credentials Email field "matoyan4774888@gmail.com"
  And User register by input new credentials Password field "Matoyan572"
  And User see password by click icon mata
  And User register by input Nomor HP field "08218929391"
  And User register by input Kota field "Jakarta Pusat"
  And User register by input Alamat field "Jl. Sooyay No.5"
  Then User click Daftar and success daftar
  
@RGT012
Scenario: User want to register by hide his password
	Given User navigate to the register page
  When User register by input new credentials in Nama field "Matoyan582"
  And User register by input new credentials in Email field "matoyan7873399@gmail.com"
  And User register by input new credentials in Password field "Matoyan582"
  And User see password by click icon mata dua kali
  And User register by input Nomor HP field "08218929391"
  And User register by input Kota field "Jakarta Pusat"
  And User register by input Alamat field "Jl. Sooyay No.5"
  Then User click Daftar and success daftar