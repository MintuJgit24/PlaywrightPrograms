import { test, expect } from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import { CheckOutPage } from "../pages/CheckOutPage"


test.only("DemoProject", async ({ page }) => {

    //loginpage object
    const lp = new LoginPage(page)
    await lp.navigateToLoginPage()
    await lp.validateUser()

    //productpage object
    const pp = new ProductPage(page)
    await pp.navigateToProductsPage()

    //checkoutpage object
    const cp = new CheckOutPage(page)
    await cp.validateCheckout()

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    await page.waitForTimeout(3000)
})