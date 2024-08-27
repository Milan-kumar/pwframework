import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { fixture } from "./pageFixture";
import { getEnv } from "../helper/env/env";
import { invokeBrowser } from "../helper/browser/browserManager";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
})

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        recordVideo: {
            "dir": "test-results/videos"
        }
    });
    const page = await context.newPage();
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
});

After(async function ({ pickle, result }) {
    console.log("RESULT:", result?.status);
    let videoPath: string;
    let img: Buffer;

    if (result?.status == Status.FAILED) {
        const img = await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        videoPath = await fixture.page.video().path();
    }
    await fixture.page.close()
    await context.close();
    if (result.status == Status.FAILED) {
        await this.attach(img, "image/png");
        await this.attach(
            fs.readFileSync(videoPath), 'video/webm'
        )
    }
})

AfterAll(async function () {
    await browser.close();
    fixture.logger.close();
})