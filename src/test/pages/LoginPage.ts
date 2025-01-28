import {Page} from "playwright";
import {Locator} from "@playwright/test";
import {page} from "../../hooks/hooks";


export class LoginPage{
     username: Locator;
     password: Locator;
     signInButton: Locator;

    constructor(page: Page) {
        // page = pageFixture.page;
        console.log(page);
        this.username = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.signInButton = page.locator(".oxd-button");

    }

    public  async navigateToUrl(url: string){
        await page.goto(url);

    }


    public  async enterUsername(username: string){
        await this.username.fill(username);

    }

    public  async enterPassword(password: string){
        await this.password.fill(password);

    }
    public async clickLoginButton(){
        await this.signInButton.click();
    }

}