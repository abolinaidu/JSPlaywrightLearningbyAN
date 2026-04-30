import {Browser, chromium} from 'playwright';

async function multiTabtest() {

let browser: Browser = await chromium.launch({ headless: false });
let context = await browser.newContext();

//Tab1
let page1 = await context.newPage();
await page1.goto('https://www.app.vwo.com/dashboard');
console.log("Tab 1 : Dashboard");


//Tab2
let page2 = await context.newPage();  
await page2.goto('https://www.facebook.com');
console.log("Tab 2 : Facebook");
  }
