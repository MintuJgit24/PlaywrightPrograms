import { test } from "@playwright/test"

test("child window handling", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator(".btn.btn-primary.windowSingle").click()
    ])
    await newPage.waitForLoadState()
    const parentTitle=await page.title()
    console.log(parentTitle)
    const childTitle=await newPage.title()
    console.log(childTitle)
    await newPage.close()
    await page.waitForTimeout(3000)

})