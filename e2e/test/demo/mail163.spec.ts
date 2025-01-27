import { test , expect , chromium } from '@playwright/test';


test('访问163', async ({ page }) => {
    await page.goto('https://mail.163.com/');
  
    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/Playwright/);
    
  });