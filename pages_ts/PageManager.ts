//to manage objects in page
import { LoginPage } from "../pages_ts/LoginPage"
import { ProductPage } from "../pages_ts/ProductPage"
import { CheckOutPage } from "../pages_ts/CheckOutPage"
import { Page } from "@playwright/test"

export class PageManager {
    lp: LoginPage //class itself is a type
    pp: ProductPage
    cp: CheckOutPage

    constructor(page: Page) {
        this.lp = new LoginPage(page)
        this.pp = new ProductPage(page)
        this.cp = new CheckOutPage(page)
    }
    //to get the objects create functions
    async getLoginPage() {
        return this.lp
    }
    async getProductPage() {
        return this.pp
    }
    async getCheckOutPage() {
        return this.cp
    }
}