'use strict';

describe('Health Check', function () {
    const
        puppeteer = require('puppeteer'),
        chai = require('chai');

    chai.should();

    let browser,
        page;

    before(async () => {
        browser = await puppeteer.launch();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    after(() => {
        browser.close();
        browser = null;
    });

    it('should return health check', async () => {
        await page.goto('http://localhost:8080/health');
        const result = await page.evaluate('document.body.innerText.trim()');
        result.should.equal('HTTP OK');
    });

    it('should return logic check', async () => {
        await page.goto('http://localhost:8080/health/lua');
        const result = await page.evaluate('document.body.innerText.trim()');
        result.should.equal('Lua OK');
    });

    it('should return database check');
});