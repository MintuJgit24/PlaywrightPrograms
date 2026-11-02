# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalProjectPOM.spec.js >> Final project
- Location: tests\finalProjectPOM.spec.js:4:5

# Error details

```
ReferenceError: signUpModal is not defined
```

# Test source

```ts
  1  | 
  2  | export class signUpPage {
  3  |     constructor(page) {
  4  |         //this.signupLink = page.locator("#signin2");
  5  |         this.signUpModal = page.locator("#signInModal");
> 6  |         this.userName = signUpModal.locator("#sign-username");
     |                         ^ ReferenceError: signUpModal is not defined
  7  |         this.password = signUpModal.locator("#sign-password");
  8  |         this.signupBtn = signUpModal.getByRole("button", { name: "Sign up" });
  9  |         this.closeBtn = signUpModal.locator(".btn.btn-secondary");
  10 |         this.page = page;
  11 |     }
  12 |     async navigateToStorePage() {
  13 |         await this.page.goto("https://www.demoblaze.com/");
  14 | 
  15 |     }
  16 |     async navigateToSignUp() {
  17 |         await this.signUpModal.click();
  18 |         await this.userName.fill("mintujoseph");
  19 |         await this.password.fill("12345");
  20 |         await this.signupBtn.click();
  21 |     }
  22 |     async navigateToSignUpAndClose() {
  23 |         await this.signUpModal.click();
  24 |         await this.userName.fill("mintujoseph");
  25 |         await this.password.fill("12345");
  26 |         await this.closeBtn.first().click();
  27 |     }
  28 | 
  29 | }
```