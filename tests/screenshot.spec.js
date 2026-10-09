import { test } from "@playwright/test"

//to take screenshot of a page
test("Screenshot", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/form-submit.php")
    //await page.screenshot({path:"playwrighttrainigscreenshot.png"})//to take screenshot of the visible part of the page
    await page.screenshot({ path: "playwrighttrainigscreenshot.png", fullPage: true })//to take fullpage
    const userName = page.locator("#validationCustom01")
    await userName.screenshot({ path: "submitformusername.png" }) //to take screenshot of a specific element
})