# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalProjectPOM.spec.js >> Final project
- Location: tests\finalProjectPOM.spec.js:4:5

# Error details

```
TypeError: sp.navigateToStorePage is not a function
```

# Test source

```ts
  1  | import { test } from "@playwright/test"
  2  | import { pageManagerFinal } from "../finalProjectPages/pageManagerFinal"
  3  | 
  4  | test("Final project", async ({ page }) => {
  5  |     const pom = new pageManagerFinal(page);
  6  |     const sp = pom.getSignUpPage();
> 7  |     await sp.navigateToStorePage();
     |              ^ TypeError: sp.navigateToStorePage is not a function
  8  |     await sp.navigateToSignUp();
  9  |     await sp.navigateToSignUpAndClose();
  10 | 
  11 | })
```