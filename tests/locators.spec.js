import { test, expect } from "@playwright/test"
//page fixture is used to create a new page within the browser context, allowing for interaction with web pages
// and performing actions like navigation, clicking, and form submission.
//.only is used to run only the specified test and skip all other tests in the file. This is useful for debugging or focusing on a specific test case.
test.only("Locators", async ({ page }) => {
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
    //label value is visible text Zip, if there is connection with for attribute and id attribute, it will locate the input field
    await page.getByLabel("Zip").fill("682001")
    await page.getByLabel("Agree to terms and conditions").check()
    //or using click()
    //await page.locator("#invalidCheck").click()
    const submitMsg = page.locator(".my-2")
    await expect(submitMsg).not.toBeVisible()
    await page.getByRole("button", { name: "Submit form" }).click()
    //const submitMsg = page.locator(".my-2")//here await not needed as it is just locating, for performing actions await is must
    const msg = await submitMsg.textContent()//to fetch text content from that locator
    console.log(msg)
    //assertion to check whether locator is visible
    //toBeVisible can be only used with Locator object
    await expect(submitMsg).toBeVisible()//first it will check whether the locator is visible or not, if visible then it will check the text content
    //need to import expect from @playwright/test to use expect assertion, it is not a global function like in cypress
    //asserting that locator should have text
    await expect(submitMsg).toHaveText(msg)//it will check the text content of the locator, if not same then it will throw error
    //toContain
    await expect(msg).toContain("success")//toContain will check any of substring, no need full string
    await page.waitForTimeout(3000)//3sec it will wait and then got closed

})

