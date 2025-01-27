import {Page} from "playwright";
import {Locator} from "@playwright/test";
import {expect} from "@playwright/test";
import {page} from "../../hooks/hooks";

export class AdminPage{
    passwordStr ="Admin123@@123##ADMIN"
    userName="";


    addBtn: Locator;
    userNameAdminList: Locator;
    userRoleSelectorBtn:Locator
    userRole:Locator
    employeeName:Locator
    username:Locator
    password:Locator
    confirmPassword:Locator
    statusSelector:Locator
    statusEnabled :Locator
    saveBtn:Locator


    constructor(page:Page) {
        // page = pageFixture.page;
        console.log(page);
        this.addBtn = page.locator("//button[normalize-space()='Add']");
        this.userNameAdminList = page.locator("//div[@role='table']//div[@role='row']/div[2]");
        this.userRoleSelectorBtn = page.locator("(//div[@class=\"oxd-select-text--after\"])[1]")
        this.userRole = page.locator("//div[text()='Admin']")
        this.employeeName = page.locator("(//input)[2]")
        this.username = page.locator("(//input)[3]")
        this.password = page.locator("(//input)[4]")
        this.confirmPassword = page.locator("(//input)[5]")
        this.statusSelector = page.locator("(//div[@class=\"oxd-select-text--after\"])[2]")
        this.statusEnabled = page.locator("//div[normalize-space()='Enabled']")
        this.saveBtn = page.locator("//button[normalize-space()='Save']")
    }

    async clickAddBtn(){
        await this.addBtn.click();
    }


    async selectUserRole(admin: string) {
        await this.userRoleSelectorBtn.click();
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("Enter");
        // await this.userRole.click();
    }

    async selectEmployeeName(m: string) {
        await this.employeeName.fill(m);
        await page.waitForTimeout(3000)
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        console.log( await this.employeeName.innerText()+" emp name");
        // await page.keyboard.press('ArrowDown');
    }

    async selectStatus(enabled: string) {
        await this.statusSelector.click();
        await this.statusEnabled.click();
    }

    async enterUsername(admin: string) {
        //generate random number
        let randomNumber = Math.floor(Math.random() * 1000);
        let name = "mksol"+randomNumber;
        await this.username.fill(name);
        this.userName = name
    }

    async enterPassword(admin123: string) {
        await this.password.fill(this.passwordStr);
        await this.confirmPassword.fill(this.passwordStr);
    }

    async clickSaveBtn() {
    await this.saveBtn.click();
    await page.waitForTimeout(29000)
    }
    async verifyUserInAdminList(){
        let userNames = await this.userNameAdminList.allInnerTexts();
        console.log(this.userName+" userName");
        expect(userNames).toContain(this.userName);
    }

}