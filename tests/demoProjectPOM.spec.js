import { test } from "@playwright/test"
import { PageManager } from "../pages/PageManager"

test.only("DemoProject", async ({ page }) => {

    const pom = new PageManager(page)

    const lp = await pom.getLoginPage()
    await lp.navigateToLoginPage()
    const username = "standard_user"
    const password = "secret_sauce"
    await lp.validateUser(username, password)

    const pp = await pom.getProductPage()
    const product = "Sauce Labs Bolt T-Shirt"
    await pp.navigateToProductsPage(product)

    const cp = await pom.getCheckOutPage()
    await cp.navigateToCheckoutPage("Meena", "Kumar", "683090")
    await cp.validateCheckout()

    await page.waitForTimeout(3000)
})