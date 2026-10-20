import { test } from '@playwright/test'

test.describe("grouping test cases", () => {
    test.describe.configure({ mode: 'parallel', timeout: 3000, retries: 2 })
    test("annotation", async ({ page }) => {
        console.log("test started");
    })

    /*
    test.only("only test", async ({ page }) => {
        console.log("this test is for .only annotation");
    })
    */

    //in case we need to skip a test
    test.skip("skip test", async ({ page }) => {
        console.log("this test is for skip");
    })

    
    //in case if some tests will get fail but we need a report
    test("fail test", async ({ page }) => {
        console.log("this test is for fail");
        test.fail();
    })
        

    //in case if some test take long time and cause timeout error
    test("slow test", async ({ page }) => {
        console.log("this test is for slow");
        test.slow();
    })

    //to mark any tests to fix any bugs/issues,it will get skipped like test.skip
    test.fixme("test for fixme", async ({ page }) => {
        console.log("this test is for marking fixing any issues");
    })

})








