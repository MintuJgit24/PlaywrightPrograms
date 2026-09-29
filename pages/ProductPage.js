export class ProductPage {
    constructor(page) {
        this.productTitle = page.locator(".inventory_item_name")
        this.prodCount = this.productTitle.count()
        this.productList = this.productTitle.allTextContents()
        this.myProduct = 'Sauce Labs Bolt T-Shirt'
        this.prodDescription = page.locator(".inventory_item_description")
        this.addToCart = this.prodDescription.getByText("Add to cart")
        this.cart = page.locator(".shopping_cart_link")
        this.cartItem = page.locator(".inventory_item_name").first()
        this.checkOut = page.locator("#checkout")
        this.page = page
    }
    async navigateToProductsPage() {
        console.log("products count:", await this.prodCount)
        console.log("Products list: ", await this.productList)
        for (let i = 0; i < this.prodCount; i++) {
            if (await this.productTitle.nth(i).textContent() == this.myProduct) {
                await this.prodDescription.nth(i)
                await this.addToCart.click()
                break
            }
        }
        await this.cart.click()
        //await expect(this.cartItem).toHaveText(this.myProduct)
        await this.checkOut.click()
    }
}