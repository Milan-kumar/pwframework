import { Then } from "@cucumber/cucumber"
import { Browser, chromium, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

Then('User searches for book {string}', async function (book) {
    await page.getByRole('searchbox', { name: 'search' }).fill(book);
    await page.getByRole('option', { name: 'search' }).fill(book);

});

Then('User adds the book to the cart', async function () {

});

Then('Cart should get updated', async function () {

});