import { test, expect } from "@playwright/test"

test("keyboard actions", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/form-submit.php");
    const firstNameInput = page.locator("#validationCustom01");
    await expect(firstNameInput).toBeVisible()
    //await firstNameInput.fill("Sherin");
    //await page.keyboard.type("Sherin"); //type is old depricated
    await firstNameInput.click();
    await firstNameInput.pressSequentially("Sherin"); //here give input letters one by one then only suggestion dropdown come
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    const lastNameInput = page.locator("#validationCustom02");
    await lastNameInput.click();
    await page.keyboard.press("Control+V");
    await expect(firstNameInput).toHaveValue(/er/i, { timeout: 10000 });
    /*
    /er/i is a Regular Expression (Regex). 
    It means the input field's value must contain the letters "er". 
    The i flag at the end makes it case-insensitive, 
    so it will match "Eric", "Peter", "ERIN", or "runner".
    */

    //mouse hover action
    const inputFormLink = page.getByRole("link", { name: "Input Form" });
    const colorBeforeHover = await inputFormLink.evaluate((el) => {
        return window.getComputedStyle(el).color;
    })
    console.log(colorBeforeHover);

    await inputFormLink.hover() //when hover color changes
    const colorAfterHover = await inputFormLink.evaluate((el) => {
        return window.getComputedStyle(el).color;

    })
    console.log(colorAfterHover);

    await expect(colorAfterHover).not.toEqual(colorBeforeHover);
    await page.waitForTimeout(3000)

})