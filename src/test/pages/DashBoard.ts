import {Page} from "playwright";
import {Locator} from "@playwright/test";



export class DashBoard{

    // side panel locators

    searchField: Locator;
    admin: Locator;
    PIM: Locator;
    leave: Locator;
    time: Locator;
    recruitment: Locator;
    myInfo: Locator;
    performance: Locator;
    dashBoard: Locator;
    directory: Locator;
    maintenance: Locator;
    claim: Locator;
    buzz: Locator;

    // page locators

    username: Locator;

    constructor(page: Page) {
        // page = pageFixture.page;
        console.log(page);
        // side panel locators

        this.searchField = page.locator("//input[@placeholder='Search']");
        this.admin = page.locator("(//ul[@class='oxd-main-menu']//li/a)[1]");
        this.PIM = page.locator("(//ul[@class='oxd-main-menu']//li/a)[2]");
        this.leave = page.locator("(//ul[@class='oxd-main-menu']//li/a)[3]");
        this.time = page.locator("(//ul[@class='oxd-main-menu']//li/a)[4]");
        this.recruitment = page.locator("(//ul[@class='oxd-main-menu']//li/a)[5]");
        this.myInfo = page.locator("(//ul[@class='oxd-main-menu']//li/a)[6]");
        this.performance = page.locator("(//ul[@class='oxd-main-menu']//li/a)[7]");
        this.dashBoard = page.locator("(//ul[@class='oxd-main-menu']//li/a)[8]");
        this.directory = page.locator("(//ul[@class='oxd-main-menu']//li/a)[9]");
        this.maintenance = page.locator("(//ul[@class='oxd-main-menu']//li/a)[10]");
        this.claim = page.locator("(//ul[@class='oxd-main-menu']//li/a)[10]");
        this.buzz = page.locator("(//ul[@class='oxd-main-menu']//li/a)[12]");


        // page locators
        this.username = page.locator("//p[@class='oxd-userdropdown-name']");

    }


    async search(searchText: string){
        await this.searchField.click();
        await this.searchField.fill(searchText);

    }

    async clickAdmin(){
        await this.admin.click();
    }
    async clickPIM(){
        await this.PIM.click();
    }
    async clickLeave(){
        await this.leave.click();
    }
    async clickTime(){
        await this.time.click();
    }
    async clickRecruitment(){
        await this.recruitment.click();
    }
    async clickMyInfo(){
        await this.myInfo.click();
    }
    async clickPerformance(){
        await this.performance.click();
    }
    async clickDashBoard(){
        await this.dashBoard.click();
    }
    async clickDirectory(){
        await this.directory.click();
    }
    async clickMaintenance(){
        await this.maintenance.click();
    }
    async clickClaim(){
        await this.claim.click();
    }
    async clickBuzz(){
        await this.buzz.click();
    }
    async getUsername(){
        return await this.username.textContent();
    }


}