import { test as base } from '@playwright/test'
//we name test as base
import { LoginPage } from '../pages/LoginPage.js'

//extend custom test from base/original/parent test
//use keyword is important to export fixture
const customTest = base.extend({
    //logDetails is fixture name
    logDetails: async ({ page }, use) => {
        const lp = new LoginPage(page)
        await lp.navigateToLoginPage()
        await lp.validateUser("standard_user", "secret_sauce")
        await use(LoginPage)
    }
})

export { customTest }
