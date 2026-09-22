//JS Prompt box

import { test, expect } from "@playwright/test"

test("PromptBox", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on('dialog', async (promptBox) => {
        await page.waitForTimeout(3000)
        console.log(promptBox.type()) //return type of promptBox
        console.log(promptBox.message()) //return msg inside of promptBox
        await promptBox.accept("Mintu")

    })
    await page.locator(".btn.btn-danger").click()
    await page.waitForTimeout(3000)
})