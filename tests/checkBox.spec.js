import { test, expect } from "@playwright/test"

test("Home", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php")
    await page.getByRole("link", { name: "Input Form" }).click()
    await page.getByRole("link", { name: "Checkbox Demo" }).click()
    const checkBox = page.getByLabel("Click on this check box")
    await checkBox.check()
    //inbuilt function ischecked will return boolean value
    const result = await checkBox.isChecked()
    console.log(result)
    await expect(checkBox).toBeChecked()//assertion
    await expect(result).toBeTruthy()//since it is not a locator await is not required
    //await expect(result).toBeFalsy()//opp of truthy, here test will fail

    const msg1 = page.locator("#message-one")
    await expect(msg1).toBeVisible()
    const displayMsg = await msg1.textContent()
    console.log(displayMsg)
    //toBeVisible can be only used with Locator object
    await expect(displayMsg).toContain("Success")
    await expect(msg1).toHaveText(displayMsg)
    await page.waitForTimeout(3000)
})

test("RadioBtn", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php")
    await page.getByRole("link", { name: "Input Form" }).click()
    await page.getByRole("link", { name: "Radio Buttons Demo" }).click()
    await page.locator("#inlineRadio2").click()
    await page.getByRole("button", { name: "Show Selected Value" }).click()
    const radioClickMsg = page.locator("#message-one")
    await expect(radioClickMsg).toBeVisible()
    const radioMsg = await radioClickMsg.textContent()
    console.log(radioMsg)
    await expect(radioClickMsg).toHaveText(radioMsg)
    await expect(radioMsg).toContain("Female")
    await page.waitForTimeout(3000)
})