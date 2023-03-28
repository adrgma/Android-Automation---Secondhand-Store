@edit_profile
Feature: Edit Profile



@EPR001
Scenario: User should be success edit profile
    Given user already on login page
    When user input email "studentqa3@binar.id"
    And user input password "studentQA3"
    And user click button login
    And user click icon pencil
    And user click text nama
    And user edit nama "Milea"
    And user click button simpan nama
    And userr click label silang notif sukses
    And userr click icon panah kembali
    And userr click icon pensil
    And user click text nohp 
    And user click edit nohp "098786"
    And user click button simpan nohp
    And u click label silang notif sukses
    And u click icon panah kembali
    And u click icon pensil
    And user click text kota 
    And user click edit kota "Palembang"
    And user click button simpan kota
    And us click label silang notif sukses
    And us click icon panah kembali
    And us click icon pensil
    And user click text alamat 
    And user click edit alamat "Banten"
    And user click button simpan alamat
    And use click label silang notif sukses
    And use click icon panah kembali
    And use click icon pensil
    And user click text email 
    And user click edit email "studentqa3@binar.id"
    And user click button simpan email
    And usr click label silang notif sukses
    And usr click icon panah kembali
    And usr click icon pensil
    And user click text edit sandi 
    And user click edit sandi lama "studentQA3"
    And user click edit sandi baru "studentQA3"
    And user click edit sandi baru konfirm "studentQA3"
    And user click button simpan sandi
    Then finish update data profile
   