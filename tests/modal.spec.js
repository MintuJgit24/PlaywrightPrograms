import { test, expect } from "@playwright/test"

test("modal", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    //await page.getByRole("button",{name:"Launch modal"}).click()
    await page.locator(".btn.btn-primary").first().click()//it is actually 2 classes btn and btn-primary so need to give like this . between spaces
    //for strict mode violation errors need to mention the index
    //modal opens as different page so can give like this 
    const modal = page.locator("#exampleModalCenter")
    await expect(modal).toBeVisible()
    await modal.locator(".btn.btn-secondary").click()
    await page.waitForTimeout(3000)
})