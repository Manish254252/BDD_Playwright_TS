import {Page} from "playwright";
import {Locator} from "@playwright/test";

export class AdminPage{
    addBtn: Locator;

    constructor(page:Page) {
        // page = pageFixture.page;
        console.log(page);
        this.addBtn = page.locator("//button[normalize-space()='Add']");
    }

    async clickAddBtn(){
        await this.addBtn.click();
    }
}