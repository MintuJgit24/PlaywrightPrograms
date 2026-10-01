import { expect } from "@playwright/test"
export class ProductPage {
    constructor(page) {
        this.productTitle = page.locator(".inventory_item_name")
        //this.prodCount = this.productTitle.count()
        //this.productList = this.productTitle.allTextContents()
        //this.myProduct = 'Sauce Labs Bolt T-Shirt'
        this.prodDescription = page.locator(".inventory_item_description")
        //this.addToCart = this.prodDescription.getByText("Add to cart")
        this.cartBtn = page.locator(".shopping_cart_link")
        //this.cartItem = page.locator(".inventory_item_name").filter({hasText:myProduct})
        this.checkOutBtn = page.locator("#checkout")
        this.page = page
    }
    async navigateToProductsPage(myProduct) {
        const prodCount = await this.productTitle.count()
        const productList = await this.productTitle.allTextContents()
        const cartItem = await this.productTitle.filter({ hasText: myProduct })
        const addToCart = await this.prodDescription.getByText("Add to cart")
        console.log("products count:", prodCount)
        console.log("Products list: ", productList)
        for (let i = 0; i < prodCount; i++) {
            if (await this.productTitle.nth(i).textContent() == myProduct) {
                await this.prodDescription.nth(i)
                await addToCart.nth(i).click()
                break
            }
        }
        await this.cartBtn.click()
        await expect(cartItem).toHaveText(myProduct)
        await this.checkOutBtn.click()
    }
}