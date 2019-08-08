require('chromedriver');
require('geckodriver');

const { expect } = require('chai');

const { Builder, Key, By, until } = require('selenium-webdriver');

const browsers = ['firefox', 'chrome'];

browsers.forEach(browser => {
    describe(`Testing on ${browser}`, () => {
        let driver;
        before(async () => {
            driver = await new Builder().forBrowser(browser).build();
        });

        after(() => driver && driver.quit());

        it('Click about', async () => {
            await driver.get('https://development.softuni.org');
            await driver.findElement(By.linkText('About us')).click();
            const title = await driver.getTitle();
            expect(title).to.equal("About us - SoftUni");
        });

        it('Login ', async () => {
            await driver.get('https://development.softuni.org');

            await driver.findElement(By.linkText('Log in'))
                .click();

            await Promise.all([
                driver.findElement(By.id('account-email'))
                    .sendKeys('admin@interactive.bg'),
                driver.findElement(By.id('account-email'))
                    .sendKeys('admin1')
            ]);
        });
    });
});