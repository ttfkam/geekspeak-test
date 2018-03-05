'use strict';

describe('Main Content', function () {
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

    it('should return favicon');

    it('should return logo image');

    it('should go to homepage when clicking logo');

    it('should list recent episodes');

    it('should go to episodes archive');

    it('should allow contacting the geeks by email');

    it('should allow following on social media');

    it('should go to support page');

    it('should list patrons');

    it('should include donation link/info');

    it('should get RSS feed');

    it('should get iTunes feed');

    it('should get Overcast feed');

    it('should get search results');

    it('should allow login');

    it('should allow logout');

    it('should allow auth fallback(s)');

    it('should return formatted 404 error page');

    it('should return formatted 500 error page');
});