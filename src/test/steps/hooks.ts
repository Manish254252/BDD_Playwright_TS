import {Browser, Page} from "playwright";
import {After, Before} from "@cucumber/cucumber";
import {chromium} from "@playwright/test";


let page:Page, browser:Browser;



Before(async function () {

    browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    page = await context.newPage();

});
After(async function () {

    await browser.close()

});
export {page,browser}