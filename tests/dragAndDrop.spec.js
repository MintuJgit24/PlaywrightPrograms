import { test, expect } from "@playwright/test"

test("DragAndDrop", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/drag-drop.php")
    const targetBox = page.getByText("Draggable n°1")
    const destinationBox = page.locator("#mydropzone")
    await targetBox.dragTo(destinationBox)

    await page.waitForTimeout(3000)
    //task use loop to do all 
})

test("MultipleDragAndDrop", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/drag-drop.php")
    //const targeLocationBox = page.getByText("Draggable n°1")
    const targetBox = page.locator('[draggable="true"]')
    const destinationBox = page.locator("#mydropzone")
    const count = await targetBox.count() //to count elem 
    console.log(count)
    //await targeLocationBox.dragTo(destinationBox)
    for (let i = 0; i < count; i++) {
        await targetBox.first().dragTo(destinationBox)
        //or await targetBox.nth(0).dragTo(destinationBox)
    }
    await page.waitForTimeout(3000)
})

