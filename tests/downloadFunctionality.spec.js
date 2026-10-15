import { test } from '@playwright/test'

test("download handling @web @tag", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download");
    const downloadBtn = page.locator("#downloadButton");
    const downloadPromise = page.waitForEvent("download");
    //page.waitForEvent wait for an event
    await downloadBtn.click();
    const download = await downloadPromise; //returns a Download object that represents the download
    await download.saveAs("c:\\Mintu\\Playwright\\Utils\\sampleFile.jpeg"); //saveAs method saves the downloaded file to the specified path
    console.log("File downloaded successfully");
    await page.waitForTimeout(3000); //wait for 3 sec to download the file

}) 