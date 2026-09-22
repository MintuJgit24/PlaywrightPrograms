//window popup
//here facebook is new window/child window
//need to handle using Promise

import { test, expect } from "@playwright/test"

test("WindowPopUp", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/window-popup.php")
    //at a time need to check multiple items here wait and click actions, so use Promise.all() method
    //using array to store multiple actions
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator(".btn.btn-primary.windowSingle").click()
    ])
    await newPage.waitForLoadState()
    const parentTitle = await page.title()
    console.log(parentTitle)
    const childPageTitle = await newPage.title()
    console.log(childPageTitle)
    await newPage.close()//to close that new page
    //incase to login to new page can use newPage.locator etc..
    await page.waitForTimeout(3000)
})