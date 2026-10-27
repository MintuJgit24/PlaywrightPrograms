import { test } from "@playwright/test"

test("get request call", async ({ request }) => {
    const responseData=await request.get("https://jsonplaceholder.typicode.com/posts/1");
    //console.log(responseData);
    //this data is not readable to make it readable do below
    const jsonResponse=await responseData.json();
    console.log(jsonResponse);
})