import {Browser, Page} from "playwright";
import {After, AfterAll, Before, BeforeAll} from "@cucumber/cucumber";
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


After(async function () {

    await page.close()
    await context.close()


});

AfterAll(async function () {
    await browser.close()
})

export {page}