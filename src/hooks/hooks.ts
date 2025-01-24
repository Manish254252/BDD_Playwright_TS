import {Browser, Page} from "playwright";
import {After, AfterAll, Before, BeforeAll, Status} from "@cucumber/cucumber";
import {BrowserContext, chromium} from "@playwright/test";
import {pageFixture} from "./pageFixtures";


let page: Page, browser: Browser, context: BrowserContext;

BeforeAll(async function () {

    browser = await chromium.launch({headless: false});
})

Before(async function () {

    context = await browser.newContext();
    page = await context.newPage();
    //@ts-ignore
    pageFixture.page = page;

});


After(async function ({pickle,result}) {

    //screenshots for test failure
        if(result?.status==Status.FAILED)
        {
            const image = await pageFixture.page.screenshot({path:`./screenshots/${pickle.name}.png`,type:"png"});
            this.attach(image, "image/png");
        }

    await page.close()
    await context.close()


});

AfterAll(async function () {
    await browser.close()
})

export {page}