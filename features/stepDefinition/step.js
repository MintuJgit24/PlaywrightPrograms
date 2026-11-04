import { Given, When, Then } from "@cucumber/cucumber"

Given('enter username {string} and password {string}', async function (uName, pswrd) {
    //common items for all pages did in hooks
    const lp = await this.pom.getLoginPage();
    await lp.navigateToLoginPage();
    await lp.validateUser(uName, pswrd);
});

When('add a product {string} to cart', async function (productName) {
    const pp = await this.pom.getProductPage();
    await pp.navigateToProductsPage(productName);
});

When('valid user details {string}, {string}, {string} are added', async function (firstName, lastName, zipCode) {
    await this.cp.navigateToCheckoutPage(firstName, lastName, zipCode);
});

Then('verify order confirmation', async function () {
    await this.cp.validateCheckout();
});