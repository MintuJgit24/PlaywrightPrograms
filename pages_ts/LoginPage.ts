import { Locator, Page } from "@playwright/test"

export class LoginPage {
    //if not knowing type can give any also
    userName: Locator
    passWord: Locator
    loginBtn: Locator
    page: Page

    constructor(page: Page) {
        //loginpage functions
        this.userName = page.locator("#user-name")
        this.passWord = page.locator("#password")
        this.loginBtn = page.locator("#login-button")
        this.page = page
    }
    //method to navigate to url
    async navigateToLoginPage() {
        await this.page.goto("https://www.saucedemo.com")
    }
    //method to validate login
    async validateUser(uName: string, pWord: string) {
        await this.userName.fill(uName)
        await this.passWord.fill(pWord)
        await this.loginBtn.click()
        await this.page.waitForLoadState('networkidle')
    }
}