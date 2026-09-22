import { test, expect } from "@playwright/test"

test("JSConfirmBox", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    //JS CONFIRM BOX
    //In this case need to handle JS alert first then need to perform action
    //to hanlde page.on()
    //dialogBox is parameter
    //dialog is what we are going to handle its the Event

    page.on('dialog', async (dialogBox) => {
        await page.waitForTimeout(3000)
        console.log(dialogBox.type())
        console.log(dialogBox.message())
        await dialogBox.accept() //to choose OK
        //await dialogBox.dismiss() //to choose cancel
    })
    await page.locator(".btn.btn-warning").click()
    await page.waitForTimeout(3000)
})

test.only("AlertBox", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on('dialog', async (dialogBox2) => {
        await page.waitForTimeout(3000)
        console.log(dialogBox2.type())
        console.log(dialogBox2.message())
        await dialogBox2.accept()
    })
    const alertBtn = page.locator("//button[@onclick='jsAlert()']")
    await expect(alertBtn).toBeVisible()
    await alertBtn.click()
    await page.waitForTimeout(3000)
})