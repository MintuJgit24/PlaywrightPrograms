import { test, expect } from "@playwright/test"

//modal inbuilt in a page
test("modal1", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    //await page.getByRole("button",{name:"Launch modal"}).click()
    await page.locator(".btn.btn-primary").first().click()//it is actually 2 classes btn and btn-primary so need to give like this . between spaces
    //for strict mode violation errors need to mention the index
    //modal opens as different page so can give like this 
    //modal is new page opened in same page itself
    const modal = page.locator("#exampleModalCenter")
    await expect(modal).toBeVisible()
    await modal.locator(".btn.btn-secondary").click()
    await page.waitForTimeout(3000)
})

test("Modal2", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    await page.getByRole("button", { name: "Launch modal" }).nth(1).click()
    //await page.getByRole("button",{name:"Launch another modal"}).click()
    //await page.locator(".btn.btn-secondary").nth(2).click()
    //await page.locator(".btn.btn-secondary").nth(1).click()
    const modal2 = page.locator("#exampleModalCenter1")
    await expect(modal2).toBeVisible()
    await modal2.getByRole("button", { name: "Launch another modal" }).click()
    const modal3 = page.locator("#exampleModalCenter2")
    await expect(modal3).toBeVisible()
    await modal3.locator(".btn.btn-secondary").click()
    await modal2.locator(".btn.btn-secondary").click()
    await page.waitForTimeout(3000)
})