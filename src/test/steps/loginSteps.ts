import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test"
import { fixture } from "../../hooks/pageFixture";


setDefaultTimeout(60 * 1000 * 2);

Given('User opens the application', async function () {
    // browser = await chromium.launch({headless:false});
    // context = await browser.newContext();
    // page = await context.newPage();
    // page.goto('https://bookcart.azurewebsites.net/')
    fixture.logger.info("Open the application");
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Validate the title");
    expect(await fixture.page.title()).toBe("BookCart")
});

Given('Clicks on the login link', async function () {
    // await fixture.page.getByText('Login').click();
    await fixture.page.getByRole('button', { name: 'Login' }).click();
    await fixture.page.waitForTimeout(2000);
});

Given('User enters the username as {string}', async function (username) {
    await fixture.page.locator('[formcontrolname="username"]').fill(username);
});

Given('User enters the password as {string}', async function (password) {
    await fixture.page.getByPlaceholder('password').fill(password);
});

When('User clicks on the login button', async function () {
    await fixture.page.locator('//span[text()="Login"]').click();
});

Then('Login should be success {string}', async function (user) {
    const actualName = await fixture.page.locator('(//span[@class="mdc-button__label"])[2]/span').textContent();
    fixture.logger.info(`Validate expected user ${user} with actual ${actualName}`)
    expect(actualName?.trim()).toBe(user);
});