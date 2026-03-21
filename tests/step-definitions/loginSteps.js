const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');
const config = require('../config/config');
const assert = require('assert');

let loginPage;

Given('User launches the application', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigate(config.baseURL);
});

When('User enters username and password', async function () {
    await loginPage.login(config.username, config.password);
});

Then('User should see dashboard', async function () {
    const url = await this.page.url();
    console.log("Current URL:", url);
    assert(url.includes("logged-in-successfully"));
});