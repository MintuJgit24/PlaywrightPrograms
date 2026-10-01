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
    async validateUser(uName, pWord) {
        await this.userName.fill(uName)
        await this.passWord.fill(pWord)
        await this.loginBtn.click()
        await this.page.waitForLoadState('networkidle')
    }
}