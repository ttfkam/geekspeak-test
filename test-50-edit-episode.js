'use strict';

describe('Editing Episodes', function () {
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

    it('should get title');

    it('should get description');

    it('should get content');

    it('should get recording date');

    it('should get publish date');

    it('should get teaser image');

    it('should get secondary image');

    it('should get news item sort order');

    it('should get participants/roles');

    it('should allow audio content upload');

    it('should set title');

    it('should set description');

    it('should set content');

    it('should set recording date');

    it('should set publish date');

    it('should set teaser image');

    it('should set secondary image');

    it('should set audio content');

    it('should set news item sort order');

    it('should 2et participants/roles');
});