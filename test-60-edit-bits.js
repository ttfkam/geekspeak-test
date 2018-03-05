'use strict';

describe('Editing Bits', function () {
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

    it('should get item');

    it('should get title');

    it('should get description');

    it('should get isbn');

    it('should get teaser image');

    it('should assign news item to episode');

    it('should set title');

    it('should set description');

    it('should set isbn');

    it('should set teaser image');
});
