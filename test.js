require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('Checkout Google.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(() => driver && driver.quit());

    it('Search on Google', async function() {
        await driver.get('https://development.softuni.org');

        await driver.findElement(By.linkText("About us")).click();

        let title = await driver.getTitle();
        assert.equal(title, "About us - SoftUni");
    });
})