import { test, expect } from "@playwright/test"

test("Dropdown", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/select-input.php")
    const dropDown = page.getByRole("combobox", { name: "Select Color" })
    //const dropDown=page.getByLabel("Select Color")
    await dropDown.selectOption("Yellow")
    const msgLocator = page.locator("#message-one")
    const displayMsg = await msgLocator.textContent()
    console.log(displayMsg)
    await expect(msgLocator).toBeVisible()
    await expect(msgLocator).toHaveText(displayMsg)
    await expect(displayMsg).toContain("Color")
    await page.waitForTimeout(3000)
})