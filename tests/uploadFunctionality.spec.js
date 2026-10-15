import { test } from '@playwright/test'

test("Upload handling @web", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download");
    const chooseFileBtn = page.locator("#uploadFile"); //while inspecting type should be file
    await chooseFileBtn.setInputFiles("C:\\Mintu\\Playwright\\Utils\\SampleExcel.xlsx");
    console.log("File uploaded successfully");
    await page.waitForTimeout(3000);
})