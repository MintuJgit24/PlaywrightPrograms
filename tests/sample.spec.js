import { test } from "@playwright/test"

test("second test", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com/")
})

test("sample test", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.youtube.com/")
})

test("sample", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("Hello Mintu")
    await page.locator("#button-one").click()
    await page.locator("#value-a").fill("10")
    await page.locator("#value-b").fill("20")
    await page.getByRole("button", { name: "Get Total" }).click()
    await page.waitForTimeout(3000)
})