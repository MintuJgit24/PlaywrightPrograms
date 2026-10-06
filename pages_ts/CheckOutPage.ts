import { Locator, Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class CheckOutPage {
    checkOutFirstName: Locator
    checkOutLastName: Locator
    checkOutZipCode: Locator
    checkOutContinue: Locator
    finishBtn: Locator
    page: Page

    constructor(page: Page) {
        this.checkOutFirstName = page.getByPlaceholder("First Name").first()
        this.checkOutLastName = page.locator("#last-name")
        this.checkOutZipCode = page.locator("#postal-code")
        this.checkOutContinue = page.locator("#continue")
        this.finishBtn = page.getByRole("button", { name: "Finish" })
        this.page = page
    }
    async navigateToCheckoutPage(fName: string, lName: string, zip: string) {
        await this.checkOutFirstName.fill(fName)
        await this.checkOutLastName.fill(lName)
        await this.checkOutZipCode.fill(zip)
        await this.checkOutContinue.click()
        await expect(this.finishBtn).toBeVisible()
        await this.finishBtn.click()
    }
    async validateCheckout() {
        const msg = await this.page.locator(".complete-header").textContent()
        console.log(msg)
        await expect(msg).toContain("Thank you for your order!")
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    }
}