import { test, expect } from "@playwright/test"

test("To partially update booking", async ({ request }) => {
    const partialUpdateData = {
        "firstname": "Mary",
        "lastname": "Louis"
    }
    const response = await request.patch("https://restful-booker.herokuapp.com/booking/1513",
        {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Cookie": "token=3a96a0cdc57bc9f" },
            data: partialUpdateData
        }
    );
    const responseBody=await response.json();
    console.log(responseBody);
    expect(responseBody).not.toBeNull();
    expect(responseBody.firstname).toContain("Mary");
})