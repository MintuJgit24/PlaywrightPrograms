# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalProjectPOM.spec.js >> Final project
- Location: tests\finalProjectPOM.spec.js:4:5

# Error details

```
TypeError: (0 , _test.expect)(...).tobeVisible is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]
      - button "Next" [ref=e32] [cursor=pointer]
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=e45]:
      - listitem [ref=e46]:
        - button "Previous" [ref=e47]
      - listitem [ref=e48]:
        - button "Next" [ref=e49] [cursor=pointer]
  - generic [ref=e51]:
    - generic [ref=e54]:
      - heading "About Us" [level=4] [ref=e55]
      - paragraph [ref=e56]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e59]:
      - heading "Get in Touch" [level=4] [ref=e60]
      - paragraph [ref=e61]: "Address: 2390 El Camino Real"
      - paragraph [ref=e62]: "Phone: +440 123456"
      - paragraph [ref=e63]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e67]
  - contentinfo [ref=e69]:
    - paragraph [ref=e70]: Copyright © Product Store
```

# Test source

```ts
  1  | import { expect } from "@playwright/test"
  2  | 
  3  | export class signUpPage {
  4  |     constructor(page) {
  5  |         //this.signupLink = page.locator("#signin2");
  6  |         this.signUpModal = page.locator("#signInModal");
  7  |         this.userName = this.signUpModal.locator("#sign-username");
  8  |         this.password = this.signUpModal.locator("#sign-password");
  9  |         this.signupBtn = this.signUpModal.getByRole("button", { name: "Sign up" });
  10 |         this.closeBtn = this.signUpModal.locator(".btn.btn-secondary");
  11 |         this.page = page;
  12 |     }
  13 |     async navigateToStorePage() {
  14 |         await this.page.goto("https://www.demoblaze.com/");
  15 | 
  16 |     }
  17 |     async navigateToSignUp() {
  18 |         await expect(this.signUpModal).tobeVisible();
  19 |         await this.signUpModal.click();
  20 |         await this.userName.fill("mintujoseph");
  21 |         await this.password.fill("12345");
  22 |         await this.signupBtn.click();
  23 |     }
  24 |     async navigateToSignUpAndClose() {
> 25 |         await expect(this.signUpModal).tobeVisible();
     |                                        ^ TypeError: (0 , _test.expect)(...).tobeVisible is not a function
  26 |         await this.signUpModal.click();
  27 |         await this.userName.fill("mintujoseph");
  28 |         await this.password.fill("12345");
  29 |         await this.closeBtn.first().click();
  30 |     }
  31 | 
  32 | }
```