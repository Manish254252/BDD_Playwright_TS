import {Given, Then} from "@cucumber/cucumber";
import {LoginPage} from "../pages/loginPage";
import {pageFixture} from "../../hooks/pageFixtures";
import {AdminPage} from "../pages/AdminPage";

let adminPage:AdminPage ;
Given('user clicks on AddUserBtn', async function () {
    adminPage=new AdminPage(pageFixture.page);
    await adminPage.clickAddBtn()
})
Then('user selects user role as Admin',async function () {
    await adminPage.selectUserRole("Admin")
});
Then('user selects EmployeeName',async function () {
    await adminPage.selectEmployeeName("M")
});
Then('user selects status',async function () {
    await adminPage.selectStatus("Enabled")


});
Then('user enters username',async function () {
    await adminPage.enterUsername("Admin");

});
Then('user enters password',async function () {
    await adminPage.enterPassword("admin123");

});
Then('user clicks on saveBtn',{timeout:30000},async function () {
    await adminPage.clickSaveBtn();

});
Then('verify user is created',async function () {
    await adminPage.verifyUserInAdminList();

});