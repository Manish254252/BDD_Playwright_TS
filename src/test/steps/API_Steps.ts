import {Given, Then, When} from "@cucumber/cucumber";
import {pageFixture} from "../../hooks/pageFixtures";
import {APIRequestContext, request} from "@playwright/test";


let requestContext;

Given('user makes a GET request to RestBooker API', async function () {
       requestContext = await request.newContext();
      await requestContext.get('https://restful-booker.herokuapp.com/booking\n')
});
When('user receives a response', async function () {

});
Then('user verifies the status code is {int}', async function () {

});
Then('user verifies the response body contains {string}', async function () {

});