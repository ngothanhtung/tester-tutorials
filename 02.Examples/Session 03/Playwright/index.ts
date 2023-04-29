const _ = require('lodash');
const { chromium } = require('playwright');
const { title } = require('process');

const get = async () => {
  try {
    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    const navigationPromise = page.waitForNavigation();

    await page.goto('https://danang.customs.gov.vn/index.jsp?pageId=3789&cid=6337');

    await page.waitForSelector('#content-category');

    await navigationPromise;
    // GO TO
    await page.waitForLoadState('networkidle'); // This resolves after 'networkidle'

    const data = await page.evaluate(() => {
      let rowElements = document.querySelectorAll('div.content_item');
      return Array.from(rowElements).map((row) => {
        const title = row.querySelectorAll('h3.content_title > a')[0].innerText;
        const summary = row.querySelectorAll('div.content_intro > div.content_intro')[0].innerText;
        const author = row.querySelectorAll('.note-layout > span')[0]?.innerText;
        const date = row.querySelectorAll('.note-layout')[0]?.innerText;

        return {
          title: title?.replace(/\n/g, ' ').trim(),
          author: author?.replace(/\n/g, ' ').trim(),
          summary: summary?.replace(/\n/g, ' ').trim(),
          date: date?.replace(/\n/g, ' ').trim(),
        };
      });
    });

    console.log('🔥 DATA', data);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

get();
