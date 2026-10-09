import { test,expect } from "@playwright/test"

test("frames handling", async ({ page }) => {
    await page.goto("https://demoqa.com/frames")
    const iframe = page.frameLocator("#frame1")
    const heading = iframe.locator("#sampleHeading") //heading is inside the frame so we need to use frameLocator to locate the heading
    const headingText = await heading.textContent()
    console.log("content:", headingText)
    await expect(heading).toHaveText(headingText)
    await page.waitForTimeout(3000)
})