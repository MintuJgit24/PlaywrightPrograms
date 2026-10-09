import { test, expect } from "@playwright/test"

test("visual comparison",async({page})=>{
    await page.goto("https://www.amazon.in/")
    //await page.screenshot({path:"visualcomparison.png"})
    await expect(page).toHaveScreenshot("amazon.png") 
    //first run will fail but will take screenshot and save it in the folder and next time it will compare with the saved screenshot
    //in case it fails it will have 3 screenhsots -atual,expected and difference between the two screenshots
    //this is a flaky test because if amazon changes its UI then the test will fail and it will be difficult to maintain the test
})