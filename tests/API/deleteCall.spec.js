import { test, expect } from "@playwright/test"

//need to create booking first to delete it
//need to pass that boooking id and new token to delete the booking data
test("To delete booking data", async ({ request }) => {
    const response = await request.delete("https://restful-booker.herokuapp.com/booking/4309",
        {
            headers: { "Content-Type": "application/json", "Cookie": "token=15b8e2afaf4864f" }
        });
    console.log(response);
    //const responseBody = await response.json();
    expect(response.status()).toBe(201);
}) 