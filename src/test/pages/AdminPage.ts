import {Page} from "playwright";
import {Locator} from "@playwright/test";
import {expect} from "@playwright/test";

export class AdminPage{
    addBtn: Locator;
    userNameAdminList: Locator;

    constructor(page:Page) {
        // page = pageFixture.page;
        console.log(page);
        this.addBtn = page.locator("//button[normalize-space()='Add']");
        this.userNameAdminList = page.locator("//div[@role='table']//div[@role='row']/div[2]");
    }

    async clickAddBtn(){
        await this.addBtn.click();
    }
    async verifyUserInAdminList(userName: string){
        let userNames = await this.userNameAdminList.allInnerTexts();
        console.log(userNames);
        expect(userNames).toContain(userName);
    }
}