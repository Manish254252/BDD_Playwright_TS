import {Browser, Page} from "playwright";
import {After, AfterAll, AfterStep, Before, BeforeAll, Status} from "@cucumber/cucumber";
import {BrowserContext, chromium} from "@playwright/test";
import {pageFixture} from "./pageFixtures";


let page: Page, browser: Browser, context: BrowserContext;

BeforeAll(async function () {

    // For chromium

    browser = await chromium.launch({headless: false});

    // For Chrome

    // browser = await chromium.launch(
    //     {headless: false,
    //     executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'}
    // );
    console.log("before all")
})

Before({tags: "@web"}, async function () {
    console.log("before")
    context = await browser.newContext();
    page = await context.newPage();
    //@ts-ignore
    pageFixture.page = page;

});
//
//
// AfterStep(async function ({pickle,result}) {
//     const image = await pageFixture.page.screenshot({path:`./screenshots/${pickle.name}.png`,type:"png"});
//     this.attach(image, "image/png");
// });

After({tags: "@web"}, async function ({pickle, result}) {

    // screenshots for test failure

    if (result?.status == Status.FAILED) {
        const image = await pageFixture.page.screenshot({path: `./screenshots/${pickle.name}.png`, type: "png"});
        this.attach(image, "image/png");
    }


    //screenshots for all tests


    await page.close()
    await context.close()


});

AfterAll(async function () {
    await browser.close()
})

export {page}