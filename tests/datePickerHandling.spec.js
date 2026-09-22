import{test,expect} from "@playwright/test"

test("DatePicker",async({page})=>{
    await page.goto("https://selenium.qabible.in/date-picker.php")
    await page.locator(".form-control.datepicker").click()
    await page.waitForTimeout(3000)
})