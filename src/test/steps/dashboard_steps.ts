import {DashBoard} from "../pages/DashBoard";
import {Given, setDefaultTimeout, When} from "@cucumber/cucumber";
import {pageFixture} from "../../hooks/pageFixtures";

let dashboardPage : DashBoard;
setDefaultTimeout(60 * 1000);

Given('verify user is logged in', async function () {
    dashboardPage = new DashBoard(pageFixture.page);
    await dashboardPage.isUsernameVisible();
});
When('user clicks on AdminBtn', async function () {
   await dashboardPage.clickAdmin();
});