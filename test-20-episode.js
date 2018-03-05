'use strict';

describe('Episode Display', function () {
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

    it('should redirect from legacy URLs');

    it('should return formatted episode');

    it('should return audio content');

    it('should play episode audio');

    it('should have news items');

    it('should have sources for news items');

    it('should have teaser image for news items');

    it('should have ISBN for some bits');

    it('should have participants/roles');
});
