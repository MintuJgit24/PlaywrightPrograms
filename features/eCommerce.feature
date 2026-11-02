Feature: End-To-End Test 
  Scenario: Buy a product
    Given enter username "standard_user" and password "secret_sauce"
    When add a product "Sauce Labs Bolt T-Shirt" to cart
    When valid user details "John", "Doe", "12345" are added
    Then verify order confirmation


//here we have provide given, when,then steps according to the way we did demoProjectPOM.spec.js
//if there were more steps like navigate to product page, verify product details match, navigate to checout page, verify checkout details match, then we would have added those steps as well