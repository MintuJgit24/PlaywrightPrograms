//to manage objects in page
import { LoginPage } from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import { CheckOutPage } from "../pages/CheckOutPage"

export class PageManager {
    constructor(page) {
        this.lp = new LoginPage(page)
        this.pp = new ProductPage(page)
        this.cp = new CheckOutPage(page)
    }
    //to get the objects create functions
    async getLoginPage() {
        return this.lp
    }
    async getProductPage(){
        return this.pp
    }
    async getCheckOutPage(){
        return this.cp
    }
}