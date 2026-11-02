# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\deleteCall.spec.js >> To delete booking data
- Location: tests\API\deleteCall.spec.js:3:5

# Error details

```
SyntaxError: Unexpected token 'M', "Method Not Allowed" is not valid JSON
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | test("To delete booking data", async ({ request }) => {
  4  |     const response = await request.delete("https://restful-booker.herokuapp.com/booking/1614",
  5  |         {
  6  |             headers: { "Content-Type": "application/json", "Cookie": "token=0540e3b0e49e7ba" }
  7  |         });
> 8  |     const responseBody = await response.json();
     |                          ^ SyntaxError: Unexpected token 'M', "Method Not Allowed" is not valid JSON
  9  |     console.log(responseBody);
  10 | })
```