import {test, expect} from '@playwright/test';


test('Manual Context Creation', async ({browser}) => {
 // let browser1: Browser = await chromium.launch({ headless: false });
 
   let context1 = await browser.newContext();
    let page1 = await context1.newPage();
  await page1.goto('https://www.app.vwo.com/dashboard');
  console.log("Tab 1 : Dashboard");
});
