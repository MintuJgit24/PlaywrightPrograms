# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalProjectPOM.spec.js >> Final project
- Location: tests\finalProjectPOM.spec.js:4:5

# Error details

```
TypeError: sp.navigateToSignUp is not a function
```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
```

# Test source

```ts
  1  | 
  2  | export class signUpPage {
  3  |     constructor(page) {
  4  |         this.signupLink = page.locator("signin2");
  5  |         this.userName = page.locator("sign-username");
  6  |         this.password = page.locator("sign-password");
  7  |         this.signupBtn = page.getByRole("button", { name: "Sign up" });
  8  |         this.closeBtn = page.getByRole("button", { name: "Close" });
  9  |         this.page = page;
  10 |     }
  11 |     async navigateToStorePage() {
> 12 |         await this.page.goto("https://www.demoblaze.com/");
     |                         ^ Error: page.goto: Test ended.
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