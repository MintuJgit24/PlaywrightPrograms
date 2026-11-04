import { Before, BeforeStep, AfterStep, Status,After } from '@cucumber/cucumber'
import { chromium } from "@playwright/test"
import { PageManager } from "../../pages/PageManager.js"
import { setDefaultTimeout } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000); 
//set default timeout for all steps to 60 seconds, so that we can have enough time to complete the steps  

//Before hooks run before the first step of each scenario.
//After hooks run after the last step of each scenario, even when the step result is failed, undefined, pending, or skipped.
//Step hooks are invoked before and after a step. 
//The hooks have "invoke around" semantics, meaning that if a BeforeStep hook is executed the AfterStep hooks will also be executed regardless of the result of the step. 
// If a step did not pass, the following step and its hooks will be skipped.

Before(async function () {
    console.log("Before hook is executed before the first step of each scenario");
    this.browser = await chromium.launch({ headless: false }); //need to launch browser in headed mode, so that we can see the browser actions
    this.context = await this.browser.newContext(); //need to create new context, so that we can have separate session for each test
    this.page = await this.context.newPage(); //need to create new page, so that we can have separate page for each test
    this.pom = new PageManager(this.page);
    this.cp = await this.pom.getCheckOutPage();

})
BeforeStep(async function ({ }) {
    console.log("run before every step of scenario");

})
AfterStep(async function ({ result }) {
    console.log("run after every step of scenario");
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: `./screenshots/${Date.now()}.png`, fullPage: true });
        //Date.now() can be used to pass unique datas each time we run the test similar to faker
    }
})
After(async function(){
    console.log("After hook is executed after the last step of each scenario");
    if(this.page){
        await this.page.close();
    }
    if(this.browser){
        await this.browser.close();
    }
    if(this.context){
        await this.context.close();
    }
})