import { test } from "@playwright/test"
import { pageManagerFinal } from "../finalProjectPages/pageManagerFinal"

test("Final project", async ({ page }) => {
    const pom = new pageManagerFinal(page);
    const sp = await pom.getSignUpPage();
    await sp.navigateToStorePage();
    await sp.navigateToSignUpAndClose();
    await sp.navigateToSignUp();
    page.on('dialog',async(dialogBox)=>{
        await page.waitForTimeout(3000);
        await dialogBox.accept();
    })
    await page.waitForTimeout(5000);
   
})