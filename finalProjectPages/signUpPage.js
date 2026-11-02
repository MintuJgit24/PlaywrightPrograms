import { expect } from "@playwright/test"

export class signUpPage {
    constructor(page) {
        this.signupLink = page.locator("#signin2");
        this.signUpModal = page.locator("#signInModal");
        this.userName = this.signUpModal.locator("#sign-username");
        this.password = this.signUpModal.locator("#sign-password");
        this.signupBtn = this.signUpModal.getByRole("button", { name: "Sign up" });
        this.closeBtn = this.signUpModal.locator(".btn.btn-secondary");
        this.page = page;
    }
    async navigateToStorePage() {
        await this.page.goto("https://www.demoblaze.com/");
    }
    async navigateToSignUpAndFillUserDetails() {
        await this.signupLink.click();
        await expect(this.signUpModal).toBeVisible();
        await this.userName.fill("kdjfhfgfgf");
        await this.password.fill("12345");
    }
    async navigateToSignUpAndClose() {
        await this.navigateToSignUpAndFillUserDetails()
        await this.closeBtn.click();
    }
    async navigateToSignUp() {
        await this.navigateToSignUpAndFillUserDetails()
        await this.signupBtn.click();
    }
}