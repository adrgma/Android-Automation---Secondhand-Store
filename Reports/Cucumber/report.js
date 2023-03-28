$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/A - register.feature");
formatter.feature({
  "name": "Register",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.scenario({
  "name": "User want to register by using filling all field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT001"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field \"matoyan715fv5@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Password field \"Matoyan5622\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Kota field \"Jakarta Pusat\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Kota_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Alamat field \"Jl. Sooyay No.5\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Alamat_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar and success daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftar_and_success_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by not filling all field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT002"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by only filling Nama field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT003"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by only filling Nama and Email field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT004"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field \"matoyan562@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by only filling Nama, Email, and Password field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT005"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field \"matoyan562@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Password field \"Matoyan562\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by filling all field except City and Address",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT006"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field \"matoyan562@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Password field \"Matoyan562\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by filling all field except Address",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT007"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field \"matoyan562@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Password field \"Matoyan562\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Kota field \"Jakarta Pusat\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Kota_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by using used credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT008"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field with used credentials \"Mayoreh\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field_with_used(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field with used credentials \"mayoreyf2@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field_with_used(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Password field with used credentials \"Mayorey2g\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Password_field_with_used(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Kota field \"Jakarta Pusat\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Kota_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Alamat field \"Jl. Sooyay No.5\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Alamat_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by input incorrect email format on email textfield",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT009"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field with incorrect email format \"mayorey222gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field_with_incorrect_email_format(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Password field \"Matoyan562\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Kota field \"Jakarta Pusat\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Kota_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Alamat field \"Jl. Sooyay No.5\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Alamat_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by input incorrect password format on email textfield",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT010"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nama field \"Matoyan562\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Email field \"matoyan562@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Password field with incorrect password format \"M2\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Password_field_with_incorrect_password_format(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Kota field \"Jakarta Pusat\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Kota_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Alamat field \"Jl. Sooyay No.5\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Alamat_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftarr()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by see his password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT011"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input new credentials Nama field \"Matoyan572\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_new_credentials_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input new credentials Email field \"matoyan134agf@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_new_credentials_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input new credentials Password field \"Matoyan572\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_new_credentials_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see password by click icon mata",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_see_password_by_click_icon_mata()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Kota field \"Jakarta Pusat\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Kota_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Alamat field \"Jl. Sooyay No.5\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Alamat_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar and success daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftar_and_success_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to register by hide his password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@RGT012"
    }
  ]
});
formatter.step({
  "name": "User navigate to the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_navigate_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input new credentials in Nama field \"Matoyan582\"",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_register_by_input_new_credentials_in_Nama_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input new credentials in Email field \"matoyanaf32@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_new_credentials_in_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input new credentials in Password field \"Matoyan582\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_new_credentials_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see password by click icon mata dua kali",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_see_password_by_click_icon_mata_dua_kali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Nomor HP field \"08218929391\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Nomor_HP_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Kota field \"Jakarta Pusat\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Kota_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User register by input Alamat field \"Jl. Sooyay No.5\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_register_by_input_Alamat_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Daftar and success daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_click_Daftar_and_success_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/B - login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "User want to login by using correct credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG001"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field with registered credential \"mayorey@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_input_Email_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field with registered credential \"Sooyan321\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_Password_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk and success login",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk_and_success_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to login by not filling all field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG002"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to login by using incorrect email credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG003"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field with incorrect email credential \"mayorey2@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_input_Email_field_with_incorrect_email_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field with registered credential \"Sooyan321\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_Password_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to login by using incorrect password credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG004"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field with registered credential \"mayorey@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_input_Email_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field with incorrect password credential \"Soo1yan32\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_Password_field_with_incorrect_password_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to login by input incorrect email format on email textfield",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG005"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field with incorrect email format \"mayoreygmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_input_Email_field_with_incorrect_email_format(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field with registered credential \"Sooyan321\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_Password_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to login by input incorrect password format on password textfield",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG006"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field with registered credential \"mayorey@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_input_Email_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field with incorrect password format \"So\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_Password_field_with_incorrect_password_format(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to login by reveal his password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG007"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field with registered credential \"mayorey@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_input_Email_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field with registered credential \"Sooyan321\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_Password_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click icon mata",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_click_icon_mata()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk and success login",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk_and_success_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want to login by hide his password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@LG008"
    }
  ]
});
formatter.step({
  "name": "User navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field with registered credential \"mayorey@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_input_Email_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field with registered credential \"Sooyan321\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_Password_field_with_registered_credential(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click icon mata dua kali",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_click_icon_mata_dua_kali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk and success login",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_click_Masuk_and_success_login()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/C - logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@logout"
    }
  ]
});
formatter.scenario({
  "name": "User wants to log out from his account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logout"
    },
    {
      "name": "@LGO001"
    }
  ]
});
formatter.step({
  "name": "User go to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "logout.user_go_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Email field \"mayorey@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "logout.user_input_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Password field \"Sooyan321\"",
  "keyword": "And "
});
formatter.match({
  "location": "logout.user_input_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "logout.user_click_button_Masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button log out",
  "keyword": "Then "
});
formatter.match({
  "location": "logout.user_click_button_log_out()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/D - edit_profile.feature");
formatter.feature({
  "name": "Edit Profile",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@edit_profile"
    }
  ]
});
formatter.scenario({
  "name": "User should be success edit profile",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@edit_profile"
    },
    {
      "name": "@EPR001"
    }
  ]
});
formatter.step({
  "name": "user already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "edit_profile.user_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email",
  "keyword": "When "
});
formatter.match({
  "location": "edit_profile.user_input_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_input_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button login",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click icon pencil",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_icon_pencil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text nama",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_text_nama()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit nama",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_edit_nama()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button simpan nama",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_button_simpan_nama()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr click label silang notif sukses",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.userr_click_label_silang_notif_sukses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr click icon panah kembali",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.userr_click_icon_panah_kembali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr click icon pensil",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.userr_click_icon_pensil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text nohp",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_text_nohp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click edit nohp",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_edit_nohp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button simpan nohp",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_button_simpan_nohp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "u click label silang notif sukses",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.u_click_label_silang_notif_sukses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "u click icon panah kembali",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.u_click_icon_panah_kembali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "u click icon pensil",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.u_click_icon_pensil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text kota",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_text_kota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click edit kota",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_edit_kota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button simpan kota",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_button_simpan_kota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us click label silang notif sukses",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.us_click_label_silang_notif_sukses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us click icon panah kembali",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.us_click_icon_panah_kembali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us click icon pensil",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.us_click_icon_pensil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text alamat",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_text_alamat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click edit alamat",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_edit_alamat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button simpan alamat",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_button_simpan_alamat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use click label silang notif sukses",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.use_click_label_silang_notif_sukses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use click icon panah kembali",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.use_click_icon_panah_kembali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use click icon pensil",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.use_click_icon_pensil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text email",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_text_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click edit email",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_edit_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button simpan email",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_button_simpan_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usr click label silang notif sukses",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.usr_click_label_silang_notif_sukses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usr click icon panah kembali",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.usr_click_icon_panah_kembali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usr click icon pensil",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.usr_click_icon_pensil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text edit sandi",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_text_edit_sandi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click edit sandi lama",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_edit_sandi_lama()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click edit sandi baru",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_edit_sandi_baru()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click edit sandi baru konfirm",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_edit_sandi_baru_konfirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button simpan sandi",
  "keyword": "And "
});
formatter.match({
  "location": "edit_profile.user_click_button_simpan_sandi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "finish update data profile",
  "keyword": "Then "
});
formatter.match({
  "location": "edit_profile.finish_update_data_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/E - notifikasi.feature");
formatter.feature({
  "name": "Notifikasi",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@notifikasi"
    }
  ]
});
formatter.scenario({
  "name": "User should be success see detail product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@notifikasi"
    },
    {
      "name": "@NOT001"
    }
  ]
});
formatter.step({
  "name": "usr already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "notifikasi.usr_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usr input email",
  "keyword": "When "
});
formatter.match({
  "location": "notifikasi.usr_input_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usr input password",
  "keyword": "And "
});
formatter.match({
  "location": "notifikasi.usr_input_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usr click button login",
  "keyword": "And "
});
formatter.match({
  "location": "notifikasi.usr_click_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a list of product offerings appears",
  "keyword": "Then "
});
formatter.match({
  "location": "notifikasi.a_list_of_product_offerings_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/F - pencarian.feature");
formatter.feature({
  "name": "Pencarian",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@pencarian"
    }
  ]
});
formatter.scenario({
  "name": "User should be success to search product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pencarian"
    },
    {
      "name": "@CAR001"
    }
  ]
});
formatter.step({
  "name": "user input name product",
  "keyword": "Given "
});
formatter.match({
  "location": "pencarian.user_input_name_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to see detail product",
  "keyword": "When "
});
formatter.match({
  "location": "pencarian.user_click_to_see_detail_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see appears detail product",
  "keyword": "Then "
});
formatter.match({
  "location": "pencarian.user_see_appears_detail_product()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/G - filter.feature");
formatter.feature({
  "name": "filter",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FLT"
    }
  ]
});
formatter.scenario({
  "name": "User filter product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FLT"
    },
    {
      "name": "@FLT"
    }
  ]
});
formatter.step({
  "name": "the user already in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "filter.the_user_already_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select category",
  "keyword": "When "
});
formatter.match({
  "location": "filter.user_select_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product list displayed by category",
  "keyword": "Then "
});
formatter.match({
  "location": "filter.product_list_displayed_by_category()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/H - seller_list.feature");
formatter.feature({
  "name": "seller list",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SLL"
    }
  ]
});
formatter.scenario({
  "name": "user view seller list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SLL"
    },
    {
      "name": "@SLL001"
    }
  ]
});
formatter.step({
  "name": "the user already login",
  "keyword": "Given "
});
formatter.match({
  "location": "seller_list.the_user_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click menu Akun",
  "keyword": "When "
});
formatter.match({
  "location": "seller_list.user_click_menu_Akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click menu Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "seller_list.user_click_menu_Daftar_Jual_Saya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Daftar Jual Saya page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "seller_list.daftar_Jual_Saya_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user view list of products that buyers are interested in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SLL"
    },
    {
      "name": "@SLL002"
    }
  ]
});
formatter.step({
  "name": "the user already in Daftar Jual Saya page",
  "keyword": "Given "
});
formatter.match({
  "location": "seller_list.the_user_already_in_Daftar_Jual_Saya_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click category Diminati",
  "keyword": "When "
});
formatter.match({
  "location": "seller_list.user_click_category_Diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view list of products that buyers are interested in",
  "keyword": "Then "
});
formatter.match({
  "location": "seller_list.user_can_view_list_of_products_that_buyers_are_interested_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user view list of products that have been sold",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SLL"
    },
    {
      "name": "@SLL003"
    }
  ]
});
formatter.step({
  "name": "the user already login in DaftarJual Saya page",
  "keyword": "Given "
});
formatter.match({
  "location": "seller_list.the_user_already_login_in_DaftarJual_Saya_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click category Terjual",
  "keyword": "When "
});
formatter.match({
  "location": "seller_list.user_click_category_Terjual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view list of products that have been sold",
  "keyword": "Then "
});
formatter.match({
  "location": "seller_list.user_can_view_list_of_products_that_have_been_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/I - add_product.feature");
formatter.feature({
  "name": "add product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ADP"
    }
  ]
});
formatter.scenario({
  "name": "user add product to sell from Homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ADP"
    },
    {
      "name": "@ADP001"
    }
  ]
});
formatter.step({
  "name": "the user already login with \"d.erprion@gmail.com\" and \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "add_product.the_user_already_login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user + icon from navbar",
  "keyword": "When "
});
formatter.match({
  "location": "add_product.user_icon_from_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input Product Name \"HomepageProduct\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_Product_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input product price \"141414\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input product location \"Tangerang\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_product_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input product description \"hanya untuk testing deskripsi saja\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose product category",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_choose_product_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user upload product photo",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_upload_product_photo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_click_Terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is publish and can be seen in daftarjual page",
  "keyword": "Then "
});
formatter.match({
  "location": "add_product.the_product_is_publish_and_can_be_seen_in_daftarjual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user preview product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ADP"
    },
    {
      "name": "@ADP002"
    }
  ]
});
formatter.step({
  "name": "the user already login with \"d.erprion@gmail.com\" and \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "add_product.the_user_already_login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user + icon from navbar",
  "keyword": "When "
});
formatter.match({
  "location": "add_product.user_icon_from_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input Product Name \"previewProduct\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_Product_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input product price \"131313\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input product location \"Tangerang\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_product_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input product description \"ini adalah contoh deskripsi previewProduct\"",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose product category",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_choose_product_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user upload product photo",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_upload_product_photo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Preview button",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_click_Preview_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to Tinjau Produk page and see how their product is show",
  "keyword": "Then "
});
formatter.match({
  "location": "add_product.user_is_directed_to_Tinjau_Produk_page_and_see_how_their_product_is_show()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user Cancel add product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ADP"
    },
    {
      "name": "@ADP003"
    }
  ]
});
formatter.step({
  "name": "the user already login with \"d.erprion@gmail.com\" and \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "add_product.the_user_already_login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user + icon from navbar",
  "keyword": "When "
});
formatter.match({
  "location": "add_product.user_icon_from_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click back button",
  "keyword": "And "
});
formatter.match({
  "location": "add_product.user_click_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirect to previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "add_product.user_is_redirect_to_previous_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/J - edit_product.feature");
formatter.feature({
  "name": "edit product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EDP"
    }
  ]
});
formatter.scenario({
  "name": "user cancel edit product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EDP"
    },
    {
      "name": "@EDP001"
    }
  ]
});
formatter.step({
  "name": "the user already login with \"d.erprion@gmail.com\" and \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "add_product.the_user_already_login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open daftarjual page",
  "keyword": "When "
});
formatter.match({
  "location": "edit_product.user_open_daftarjual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to edit product",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.navigate_to_edit_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click back button in ubah produk page",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.click_back_button_in_ubah_produk_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product will not change",
  "keyword": "Then "
});
formatter.match({
  "location": "edit_product.the_product_will_not_change()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user edit product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EDP"
    },
    {
      "name": "@EDP002"
    }
  ]
});
formatter.step({
  "name": "the user already login with \"d.erprion@gmail.com\" and \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "add_product.the_user_already_login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open daftarjual page",
  "keyword": "When "
});
formatter.match({
  "location": "edit_product.user_open_daftarjual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to edit product",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.navigate_to_edit_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input edit Product Name \"edit produk berhasil\"",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.user_input_edit_Product_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input edit product price \"333333333\"",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.user_input_edit_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input edit product location \"Bandung\"",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.user_input_edit_product_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit input product description \"edit deksripsi produk\"",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.user_edit_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit choose product category",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.user_edit_choose_product_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit upload product photo",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.user_edit_upload_product_photo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit click Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "edit_product.user_edit_click_Terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can edit their product information",
  "keyword": "Then "
});
formatter.match({
  "location": "edit_product.user_can_edit_their_product_information()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/K - delete_product.feature");
formatter.feature({
  "name": "delete product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DLP"
    }
  ]
});
formatter.scenario({
  "name": "user Cancel delete product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DLP"
    },
    {
      "name": "@DLP001"
    }
  ]
});
formatter.step({
  "name": "the user already login with \"d.erprion@gmail.com\" and \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "add_product.the_user_already_login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open daftarjual page",
  "keyword": "When "
});
formatter.match({
  "location": "edit_product.user_open_daftarjual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click delete icon",
  "keyword": "And "
});
formatter.match({
  "location": "delete.user_click_delete_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click batalkan",
  "keyword": "And "
});
formatter.match({
  "location": "delete.user_click_batalkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product not deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "delete.product_not_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user Cancel delete product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DLP"
    },
    {
      "name": "@DLP002"
    }
  ]
});
formatter.step({
  "name": "the user already login with \"d.erprion@gmail.com\" and \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "add_product.the_user_already_login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open daftarjual page",
  "keyword": "When "
});
formatter.match({
  "location": "edit_product.user_open_daftarjual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click delete icon",
  "keyword": "And "
});
formatter.match({
  "location": "delete.user_click_delete_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click hapus",
  "keyword": "And "
});
formatter.match({
  "location": "delete.user_click_hapus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product not appear in the daftarjual page",
  "keyword": "Then "
});
formatter.match({
  "location": "delete.product_not_appear_in_the_daftarjual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/L - buy product.feature");
formatter.feature({
  "name": "buyer bid or buy product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BBP"
    }
  ]
});
formatter.scenario({
  "name": "user want to bid price product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BBP"
    },
    {
      "name": "@BBP001"
    }
  ]
});
formatter.step({
  "name": "the buyer already login as buyer",
  "keyword": "Given "
});
formatter.match({
  "location": "buy_product.the_buyer_already_login_as_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search product to buy",
  "keyword": "When "
});
formatter.match({
  "location": "buy_product.search_product_to_buy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click Saya tertarik dan ingin nego button",
  "keyword": "And "
});
formatter.match({
  "location": "buy_product.buyer_click_Saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer input Harga Tawar \"99998\"",
  "keyword": "And "
});
formatter.match({
  "location": "buy_product.buyer_input_Harga_Tawar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "buy_product.buyer_click_Kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Harga tawarmu berhasil dikirim ke penjual notification appears",
  "keyword": "Then "
});
formatter.match({
  "location": "buy_product.harga_tawarmu_berhasil_dikirim_ke_penjual_notification_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya tertarik dan ingin nego button change into Menunggu respon penjual.",
  "keyword": "And "
});
formatter.match({
  "location": "buy_product.saya_tertarik_dan_ingin_nego_button_change_into_Menunggu_respon_penjual()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Helper for change status to decline",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BBP"
    },
    {
      "name": "@BBPHelper"
    }
  ]
});
formatter.step({
  "name": "the buyer already login as buyer in market",
  "keyword": "Given "
});
formatter.match({
  "location": "buy_product.the_buyer_already_login_as_buyer_in_market()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click Saya tertarik dan ingin nego button",
  "keyword": "When "
});
formatter.match({
  "location": "buy_product.buyer_click_Saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer input Harga Tawar \"99998\"",
  "keyword": "And "
});
formatter.match({
  "location": "buy_product.buyer_input_Harga_Tawar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "buy_product.buyer_click_Kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Harga tawarmu berhasil dikirim ke penjual notification appears",
  "keyword": "Then "
});
formatter.match({
  "location": "buy_product.harga_tawarmu_berhasil_dikirim_ke_penjual_notification_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya tertarik dan ingin nego button change into Menunggu respon penjual.",
  "keyword": "And "
});
formatter.match({
  "location": "buy_product.saya_tertarik_dan_ingin_nego_button_change_into_Menunggu_respon_penjual()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/M - decline product.feature");
formatter.feature({
  "name": "buyer bid or buy product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UTD"
    }
  ]
});
formatter.scenario({
  "name": "Seller Decline Bid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UTD"
    },
    {
      "name": "@UTD001"
    }
  ]
});
formatter.step({
  "name": "the user login to website with email \"j.inprion@gmail.com\" and password \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "decline_product.the_user_login_to_website_with_email_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller go to daftarjual page",
  "keyword": "When "
});
formatter.match({
  "location": "decline_product.seller_go_to_daftarjual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click Diminati in category",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_Diminati_in_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click the product langsung tolak",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_the_product_langsung_tolak()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click button Tolak to decline bid",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_button_Tolak_to_decline_bid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Decline bid pop up appears Tawaran produk ditolak",
  "keyword": "Then "
});
formatter.match({
  "location": "decline_product.decline_bid_pop_up_appears_Tawaran_produk_ditolak()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Page_daftarjual/Navigate Delete dummy product\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.decline_product.decline_bid_pop_up_appears_Tawaran_produk_ditolak(decline_product.groovy:73)\r\n\tat ✽.Decline bid pop up appears Tawaran produk ditolak(Include/features/M - decline product.feature:11)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Page_daftarjual/delete_dummy_product not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:1490)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat Navigate Delete dummy product.run(Navigate Delete dummy product:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.decline_product.decline_bid_pop_up_appears_Tawaran_produk_ditolak(decline_product.groovy:73)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat runner.run(runner:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1676963692749.run(TempTestCase1676963692749.groovy:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Seller Change transaction status to decline",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UTD"
    },
    {
      "name": "@UTD002"
    }
  ]
});
formatter.step({
  "name": "the user already login in Seller Account using \"prionaratama@gmail.com\" and password \"qwerty1234\"",
  "keyword": "Given "
});
formatter.match({
  "location": "decline_product.the_user_already_login_in_Seller_Account_using_and_password(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Page_akun/Click Masuk Button\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.decline_product.the_user_already_login_in_Seller_Account_using_and_password(decline_product.groovy:88)\r\n\tat ✽.the user already login in Seller Account using \"prionaratama@gmail.com\" and password \"qwerty1234\"(Include/features/M - decline product.feature:15)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Page_akun/btn_masuk not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:1490)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat Click Masuk Button.run(Click Masuk Button:22)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.decline_product.the_user_already_login_in_Seller_Account_using_and_password(decline_product.groovy:88)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat runner.run(runner:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1676963692749.run(TempTestCase1676963692749.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Seller go to daftarjual page",
  "keyword": "When "
});
formatter.match({
  "location": "decline_product.seller_go_to_daftarjual_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Seller click Diminati in category",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_Diminati_in_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Seller click the product to change status to decline",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_the_product_to_change_status_to_decline()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Seller click button Terima",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_button_Terima()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Seller click button Status",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_button_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Seller click radio button Batalkan transaksi",
  "keyword": "And "
});
formatter.match({
  "location": "decline_product.seller_click_radio_button_Batalkan_transaksi()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sellers success to decline bid",
  "keyword": "Then "
});
formatter.match({
  "location": "decline_product.sellers_success_to_decline_bid()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Include/features/N - accept_bid.feature");
formatter.feature({
  "name": "accept bid",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ACB001"
    }
  ]
});
formatter.scenario({
  "name": "User accept bid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ACB001"
    },
    {
      "name": "@ACB001"
    }
  ]
});
formatter.step({
  "name": "the user already login",
  "keyword": "Given "
});
formatter.match({
  "location": "seller_list.the_user_already_login()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Page_login/Navigate to Login Page\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.seller_list.the_user_already_login(seller_list.groovy:34)\r\n\tat ✽.the user already login(Include/features/N - accept_bid.feature:7)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Page_home/btn_masuk not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:1490)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat Navigate to Login Page.run(Navigate to Login Page:24)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.seller_list.the_user_already_login(seller_list.groovy:34)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat runner.run(runner:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1676963692749.run(TempTestCase1676963692749.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click menu Akun",
  "keyword": "When "
});
formatter.match({
  "location": "seller_list.user_click_menu_Akun()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click menu Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "seller_list.user_click_menu_Daftar_Jual_Saya()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click tab Diminati",
  "keyword": "And "
});
formatter.match({
  "location": "accept_bid.user_click_tab_Diminati()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click product",
  "keyword": "And "
});
formatter.match({
  "location": "accept_bid.user_click_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click button Terima",
  "keyword": "And "
});
formatter.match({
  "location": "accept_bid.user_click_button_Terima()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user success to update status negotiation and accept bid",
  "keyword": "Then "
});
formatter.match({
  "location": "accept_bid.user_success_to_update_status_negotiation_and_accept_bid()"
});
formatter.result({
  "status": "skipped"
});
});