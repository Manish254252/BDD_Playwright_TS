

import {Given, When, setDefaultTimeout} from "@cucumber/cucumber";

import { expect} from "@playwright/test";
import {page} from "./hooks";


setDefaultTimeout(60 * 1000);


Given('user visits the web page', async function () {
    await page.goto('https://playwright.dev/');

});


When('user click link', async function () {
    await expect(page).toHaveTitle(/Playwright/);
});
