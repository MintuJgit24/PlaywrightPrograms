export class CheckOutPage {
    constructor(page) {
        this.checkOutFirstName = page.getByPlaceholder("First Name").first()
        this.checkOutLastName = page.locator("#last-name")
        this.checkOutZipCode = page.locator("#postal-code")
        this.checkOutContinue = page.locator("#continue")
        this.finishBtn = page.getByRole("button", { name: "Finish" })
        this.msg = page.locator(".complete-header").textContent()
        this.page = page
    }
    async validateCheckout() {
        await this.checkOutFirstName.fill("Meena")
        await this.checkOutLastName.fill("Kumar")
        await this.checkOutZipCode.fill("680309")
        await this.checkOutContinue.click()
        //await expect(finishBtn).toBeVisible()
        //await expect(msg).toContain("Thank you for your order!")
        await this.finishBtn.click()
        console.log(await this.msg)
    }
}