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