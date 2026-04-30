//spec.ts is used to recognise that this is a testcase

import {test,expect} from '@playwright/test';

test("Verify the title of the page -app.vwo.com",async ({ page })=>{
 await page.goto("https://app.vwo.com");
    expect(page).toHaveTitle("Login - VWO");
});