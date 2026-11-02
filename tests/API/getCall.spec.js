import { test,expect } from "@playwright/test"

test("get request call", async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    //console.log(response);
    //this data is not readable to make it readable do below
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const responseStatus = response.status()
    console.log(responseStatus);
    const statusText = response.statusText();
    console.log(statusText);
    expect(statusText).toBe("OK");
    expect(responseStatus).toBe(200);
    expect(response.ok()).toBeTruthy();
    //to check properties of json data
    expect(jsonResponse).toHaveProperty("userId",1);
    expect(jsonResponse).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(jsonResponse.body).toContain("aut");
})