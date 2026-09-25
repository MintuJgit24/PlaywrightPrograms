import { test, expect } from "@playwright/test"

test.only("DemoProject", async ({ page }) => {
    await page.goto("https://www.saucedemo.com")
    const userName = page.locator("#user-name")
    await userName.fill("standard_user")
    const passWord = page.locator("#password")
    await passWord.fill("secret_sauce")
    const loginBtn = page.locator("#login-button")
    //or
    //const loginBtn = page.getByRole("button",{name:"Login"})
    await loginBtn.click()
    // incase count becomes 0 can give
    //it can occur if network bcomes slow
    await page.waitForLoadState('networkidle')
    const productTitle = page.locator(".inventory_item_name")
    const prodCount = await productTitle.count()
    console.log(prodCount)
    const productList = await productTitle.allTextContents()  //to get multiple elem text contents, it return array of texts
    console.log(productList) 
    const myProduct ='Sauce Labs Bolt T-Shirt'
    await page.waitForTimeout(3000)
})