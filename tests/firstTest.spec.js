import { test } from "@playwright/test"
//test function need 2 parameters, first is the name of the test and second is an async function which contains the test logic. The async function takes an object as a parameter, which can contain various fixtures provided by Playwright, such as browser, page, context, etc. 
//In this case, we are using the browser fixture to create a new browser instance for the test.
//browser is a global variable provided by playwright test runner
//browser fixture is used to create a new browser instance for each test, ensuring isolation and preventing state leakage between tests.
//new context is used to create a new browser context, which is like a separate browser session with its own cookies and cache. This allows for testing scenarios that require a clean state or different user sessions.
//new page is used to create a new page within the browser context, allowing for interaction with web pages and performing actions like navigation, clicking, and form submission.
test("First test", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")
})