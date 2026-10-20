import { test } from "@playwright/test"

//hooks important
//test.beforeall - execute before all test cases
//test.beforeeach - execute after each test case
//test.aftereach - execute after each test case
//test.afterall - execte after all test cases


test("hooks testcase sample1", async ({ page }) => {
    console.log("1st test case")
})

test("hooks testcase sample2", async ({ page }) => {
    console.log("2nd test case")
})

test("hooks testcase sample3", async ({ page }) => {
    console.log("3rd test case")
})

test.beforeAll(async () => {
    console.log("before all executed")
})

test.afterAll(async () => {
    console.log("after all executed")
})

test.beforeEach(async () => {
    console.log("beforeeach executed before each test cases")
})

test.afterEach(async () => {
    console.log("aftereach executed after each test cases")
})
