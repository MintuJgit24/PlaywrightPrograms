import { expect, test } from "@playwright/test"

test("Rahul shetty",async({page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com/login")
    await page.locator("#email").fill("student@example.com")
    await page.locator("#password").fill("secret123")
    await page.getByRole("button",{name:"Sign In"}).click()
    const logOutBtn=page.locator("#logout-btn")
    await expect(logOutBtn).toBeVisible()
    //const myBooking=page.getByRole("button",{name:"My Bookings"})
    //await expect(myBooking).toBeVisible()
    //myBooking.click()
    await page.locator("#book-now-btn").nth(0).click()
    await page.locator("#customerName").fill("Manoj Kumar")
    await page.locator("#customer-email").fill("manoj@gmail.com")
    await page.locator("#phone").fill("9498786541")
    await page.getByRole("button",{name:"Confirm Booking"}).click()
    await page.getByRole("button",{name:"My Bookings"}).click()
    await page.getByRole("button",{name:"View Details"}).click()
    await page.waitForTimeout(3000)
})

test("JSAlert",async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on("dialog",async(dialogbox)=>{
        await page.waitForTimeout(3000)
        dialogbox.accept()
    })
    const clickBtn=page.locator("//button[@onclick='jsAlert()']") 
    await clickBtn.click()
    //await page.waitForTimeout(3000)
})

test("JSConfirmBox",async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on("dialog",async(confirmBox)=>{
        await page.waitForTimeout(3000)
        console.log(confirmBox.type())
        console.log(confirmBox.message())
        confirmBox.accept()
        
    })
    const clickBtn=page.locator(".btn.btn-warning")
    await clickBtn.click()
})