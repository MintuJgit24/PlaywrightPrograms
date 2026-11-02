import { Given, When, Then } from "@cucumber/cucumber"
import { PageManager } from "../../pages/PageManager.js"
import { chromium } from "@playwright/test"

Given('enter username {string} and password {string}', async function (uName, pswrd) {

    const browser = await chromium.launch({ headless: false }); //need to launch browser in headed mode, so that we can see the browser actions
    const context = await browser.newContext(); //need to create new context, so that we can have separate session for each test
    this.page = await context.newPage(); //need to create new page, so that we can have separate page for each test
    this.pom = new PageManager(this.page); //common pom object for all pages, so that we can use it in all steps

    const lp = await this.pom.getLoginPage();
    await lp.navigateToLoginPage();
    await lp.validateUser(uName, pswrd);

});

When('add a product {string} to cart', async function (productName) {
    //const pom = new PageManager(page);
    const pp = await this.pom.getProductPage();
    await pp.navigateToProductsPage(productName);
});

When('valid user details {string}, {string}, {string} are added', async function (firstName, lastName, zipCode) {
    //const pom = new PageManager(page);
    const cp = await this.pom.getCheckOutPage();
    await cp.navigateToCheckoutPage(firstName, lastName, zipCode);
});

Then('verify order confirmation', async function () {
    //const pom = new PageManager(page);
    const cp = await this.pom.getCheckOutPage();
    await cp.validateCheckout();
    await this.page.close();
});