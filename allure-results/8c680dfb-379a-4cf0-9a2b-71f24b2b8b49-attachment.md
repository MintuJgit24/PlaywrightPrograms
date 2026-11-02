# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalProjectPOM.spec.js >> Final project
- Location: tests\finalProjectPOM.spec.js:4:5

# Error details

```
TypeError: page.lcoator is not a function
```

# Test source

```ts
  1  | 
  2  | export class signUpPage {
  3  |     constructor(page) {
  4  |         this.signupLink = page.locator("signin2");
  5  |         this.userName = page.locator("sign-username");
> 6  |         this.password = page.lcoator("sign-password");
     |                              ^ TypeError: page.lcoator is not a function
  7  |         this.signupBtn = page.getByRole("button", { name: "Sign up" });
  8  |         this.closeBtn = page.getByRole("button", { name: "Close" });
  9  |         this.page = page;
  10 |     }
  11 |     async navigateToStorePage() {
  12 |         await this.page.goto("https://www.demoblaze.com/");
  13 | 
  14 |     }
  15 |     async navigateToSignUp() {
  16 |         await this.signupLink.click();
  17 |         await this.userName.fill("mintujoseph");
  18 |         await this.password.fill(12345);
  19 |         await this.signupBtn.click();
  20 |     }
  21 |     async navigateToSignUpAndClose() {
  22 |         await this.signupLink.click();
  23 |         await this.userName.fill("mintujoseph");
  24 |         await this.password.fill(12345);
  25 |         await this.closeBtn.click();
  26 |     }
  27 | 
  28 | }
```