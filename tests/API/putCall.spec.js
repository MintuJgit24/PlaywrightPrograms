import { test, expect } from "@playwright/test"

test("To update booking", async ({ request }) => {
    const updateBookingData = {
        "firstname": "Mary",
        "lastname": "Jacobjos",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Soup"
    }
    const response = await request.put("https://restful-booker.herokuapp.com/booking/1513",
        {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Cookie": "token=d7acb223b5a611e" },
            data: updateBookingData
        });
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).not.toBeNull();
    expect(responseBody.firstname).toContain("Mary");

})