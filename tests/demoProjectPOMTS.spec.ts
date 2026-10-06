import { test } from "@playwright/test"
import { PageManager } from "../pages_ts/PageManager"
import data from "../Utils/data.json"

//to convert json data to string format, then convert to javascript object format
//this is for single data in json 
//const testData=JSON.parse(JSON.stringify(data))     

//for multiple data in json, we can use for loop to iterate through the data and run the test for each data set
//data is our array
for (const testData of data) {
    //for error with duplicate title like 
    // Error: duplicate test title "DemoProject", first declared in demoProjectPOM.spec.js:11
    //can try this way
    test(`DemoProject ${testData.product}`, async ({ page }) => {

        const pom = new PageManager(page)

        const lp = await pom.getLoginPage()
        await lp.navigateToLoginPage()
        //const username = "standard_user"
        //const password = "secret_sauce"
        //await lp.validateUser(username, password)
        await lp.validateUser(testData.username, testData.password)

        const pp = await pom.getProductPage()
        //const product = "Sauce Labs Bolt T-Shirt"
        //await pp.navigateToProductsPage(product)
        await pp.navigateToProductsPage(testData.product)

        const cp = await pom.getCheckOutPage()
        //const firstName = "Meena"
        //const lastName = "Kumar"
        //const zipCode = "683090"
        //await cp.navigateToCheckoutPage(firstName, lastName, zipCode)
        await cp.navigateToCheckoutPage(testData.firstName, testData.lastName, testData.zipCode)
        await cp.validateCheckout()

        await page.waitForTimeout(3000)
    })
}