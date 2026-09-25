import { test, expect } from "@playwright/test"

test("DatePicker", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/date-picker.php")
    await page.locator(".form-control.datepicker").click()
    await page.locator(".datepicker-days th.datepicker-switch").click() //for year //from parent div class to child class with child tag name
    await page.locator(".datepicker-months th.datepicker-switch").click()//for month //same form parent
    const targetYear = 2016
    const targetMonth = 6
    const targetDate = 12
    //we dont know no.of iterations so choosing while loop
    while (true) {
        const currentRange = await page.locator(".datepicker-years th.datepicker-switch").textContent()
        console.log(currentRange) //2020-2029 is stored as an array format
        const startYear = currentRange.split("-")[0]//its a string that splits to store in array ,to store zeroth index
        console.log(startYear)
        const endYear = currentRange.split("-")[1]
        console.log(endYear)
        if (targetYear >= startYear && targetYear <= endYear) {
            //2016>=2020 && 2016<=2029 first loop will fail will not enter if loop
            //2016>=2010 && 2016<=2019 second will work enters if loop and break
            break
        }

        if (targetYear < startYear) {
            await page.locator(".datepicker-years th.prev").click()
        }
        else {
            await page.locator(".datepicker-years th.next").click()
        }
    }
    //await page.getByText(targetYear.toString(),{exact:true}).click() //to convert 2016 number to string
    //await page.locator("span.year").filter({ hasText: targetYear.toString() }).click()
    //or
    await page.locator("span.year", { hasText: targetYear.toString() }).click() //giving span helps to check exact locator
    await page.locator(".month").nth(targetMonth - 1).click()
    await page.locator(".day").filter({ hasText: targetDate.toString() }).click()
    await page.locator("#button-one").click()

    const inputBox = page.locator(".form-control.datepicker")
    const inputDate = await inputBox.inputValue()//helps to get input exactly from inputbox
    const showDateValue = await page.locator("#message-one").textContent()
    console.log(showDateValue)
    console.log("input date : ", inputDate)
    await expect(showDateValue).toContain(inputDate)
    await page.waitForTimeout(3000)
})