import { test } from "@playwright/test"

test("sample", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("Hello Mintu")
    await page.locator("#button-one").click()
    await page.locator("#value-a").fill("10")
    await page.locator("#value-b").fill("20")
    await page.getByRole("button", { name: "Get Total" }).click()
    await page.waitForTimeout(3000)
})