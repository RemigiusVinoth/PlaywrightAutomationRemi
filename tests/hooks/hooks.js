const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

// Increase timeout to 60 seconds
setDefaultTimeout(60 * 1000);

Before(async function () {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
});

After(async function () {
    if (this.browser) {
        await this.browser.close();
    }
});