import { test, expect } from "@playwright/test"

test("DemoProject1", async ({ page }) => {
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
    await productTitle.first().waitFor() //wait for first product to be visible, so that we can get count of products   
    const prodCount = await productTitle.count()
    console.log("Total product count: ", prodCount)
    const productList = await productTitle.allTextContents()  //to get multiple elem text contents, it return array of texts
    console.log("Products list: ", productList)
    const myProduct = 'Sauce Labs Bolt T-Shirt'
    for (let i = 0; i < prodCount; i++) {
        if (await productTitle.nth(i).textContent() == myProduct) { //do not miss to add await
            const prodDescription = page.locator(".inventory_item_description").nth(i)
            const addToCart = prodDescription.getByText("Add to cart")
            await addToCart.click()
            break
        }
    }
    const cart = page.locator(".shopping_cart_link")
    await cart.click()
    //const cartItem = await page.locator(".inventory_item_name").first() //here cannot use textContent() as it cause strict mode violation later
    const cartItem = await page.locator(".inventory_item_name").filter({ hasText: myProduct })
    await expect(cartItem).toHaveText(myProduct)
    const checkOut = page.locator("#checkout")
    await checkOut.click()

    //const checkOutFirstName = page.locator("#first-name")
    //or
    const checkOutFirstName = page.getByPlaceholder("First Name").first()
    await checkOutFirstName.fill("Meena")
    const checkOutLastName = page.locator("#last-name")
    await checkOutLastName.fill("Kumar")
    const checkOutZipCode = page.locator("#postal-code")
    await checkOutZipCode.fill("680309") //zip type is text so give string format itself
    const checkOutContinue = page.locator("#continue")
    await checkOutContinue.click()
    const finishBtn = page.getByRole("button", { name: "Finish" })
    await expect(finishBtn).toBeVisible()
    await finishBtn.click()
    const msg = await page.locator(".complete-header").textContent()
    console.log(msg)
    await expect(msg).toContain("Thank you for your order!")
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    await page.waitForTimeout(3000)
})