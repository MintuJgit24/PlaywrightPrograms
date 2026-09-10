import { test } from "@playwright/test"
//page fixture is used to create a new page within the browser context, allowing for interaction with web pages
// and performing actions like navigation, clicking, and form submission.
//.only is used to run only the specified test and skip all other tests in the file. This is useful for debugging or focusing on a specific test case.
test("Locators", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/form-submit.php")
    //locating using id put a # before the id
    await page.locator("#validationCustom01").fill("Mintu")
    //await page.locator("#validationCustom02").fill("Joseph")
    //await page.locator("#validationCustomUsername").fill("mintu.joseph")
    //to pause the test execution and open the browser for debugging, you can use the page.pause() method. This will halt the test at that point and allow you to inspect the page state, interact with elements, and perform any necessary debugging actions.
    //await page.pause() 

    //for class use . before the class name
    //index starts from 0, so nth(1) refers to the second element with the class "form-control"
    await page.locator(".form-control").nth(1).fill("Joseph")
    //here we give single quotes for value to avoid confusion
    await page.locator("[placeholder='Username']").fill("mintu.joseph")
    await page.locator("//input[@placeholder='City']").fill("Kochi")
    //inbuilt method to locate by placeholder, it is more readable and easier to understand
    await page.getByPlaceholder("State").fill("Kerala")
    //label value is visible text Zip
    await page.getByLabel("Zip").fill("682001")
    await page.getByLabel("Agree to terms and conditions").check()
    //or using click()
    //await page.locator("#invalidCheck").click()
    await page.getByRole("button", { name: "Submit form" }).click()
    await page.waitForTimeout(3000)//3sec it will wait and then got closed

})

