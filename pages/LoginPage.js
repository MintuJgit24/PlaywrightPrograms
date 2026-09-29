//this is a class

export class LoginPage {
    //need constructor
    constructor(page) {
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
    async validateUser() {
        await this.userName.fill("standard_user")
        await this.passWord.fill("secret_sauce")
        await this.loginBtn.click()
        await this.page.waitForLoadState('networkidle')
    }

}