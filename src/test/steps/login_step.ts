

import {Given, When, setDefaultTimeout} from "@cucumber/cucumber";

import { expect} from "@playwright/test";
import {pageFixture} from "../../hooks/pageFixtures";
import {page} from "../../hooks/hooks";

// import {page} from "../../hooks/hooks";

setDefaultTimeout(60 * 1000);


Given('user visits the web page', async function () {
    await pageFixture.page.goto('https://playwright.dev/');

});


When('user click link', async function () {
    await expect(pageFixture.page).toHaveTitle(/Playwright/);
});
