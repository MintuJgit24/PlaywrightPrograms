import { test, expect } from "@playwright/test"

test("post request call", async ({ request }) => {
    const authData = {
        "username": "admin",
        "password": "password123"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth",
        {
            headers: { "Content-Type": "application/json" },
            data: authData
        });
    //console.log(response);
    const jsonReponse = await response.json();
    console.log(jsonReponse);
    expect(jsonReponse.token).not.toBeNull();
})

test("Create booking", async ({ request }) => {
    const bookingData = {
        "firstname": "Jis",
        "lastname": "Jacob",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Dinner"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/booking",
        {
            headers: { "Content-Type": "application/json" },
            data: bookingData
        });
    //console.log(await response.json());
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.booking).toMatchObject(bookingData);
    expect(responseBody.bookingid).toBeTruthy();
    expect(responseBody.booking.firstname).toBe(bookingData.firstname);
    expect(responseBody.booking.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);//nested objects
})