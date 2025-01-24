import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";

import {expect} from "@playwright/test";
import {pageFixture} from "../../hooks/pageFixtures";
import {page} from "../../hooks/hooks";
import {LoginPage} from "../pages/loginPage";

// import {page} from "../../hooks/hooks";
// import {LoginPage} from "../pages/loginPage";


// setDefaultTimeout(60 * 1000);

let loginPage:LoginPage ;
console.log(pageFixture.page+" in steps ")
Given('user visits the web page', async function () {
        loginPage  = new LoginPage(pageFixture.page);
    await loginPage.navigateToUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});
When('user enter username',async function () {

   await loginPage.enterUsername("Admin")

});


When('user enter password',async function () {
  await  loginPage.enterPassword("admin123")
});


Then('user clicks on signIn Button', async function () {

  await  loginPage.clickLoginButton()
});

