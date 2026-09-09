import { test } from "@playwright/test"
//page fixture is used to create a new page within the browser context, allowing for interaction with web pages
// and performing actions like navigation, clicking, and form submission.
//.only is used to run only the specified test and skip all other tests in the file. This is useful for debugging or focusing on a specific test case.
test.only("Locators", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/form-submit.php")
    //locating using id put a # before the id
    await page.locator("#validationCustom01").fill("Mintu")
    //to pause the test execution and open the browser for debugging, you can use the page.pause() method. This will halt the test at that point and allow you to inspect the page state, interact with elements, and perform any necessary debugging actions.
    //await page.pause() 
    await page.waitForTimeout(3000)//3sec it will wait and then got closed
})

