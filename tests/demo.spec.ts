import { test, expect } from '@playwright/test';

test('测试登录百度', async ({ page }) => {
  await page.goto('https://www.baidu.com/');
  await page.locator('#kw').click();
  await page.locator('#kw').fill('java');
  await page.getByRole('button', { name: '百度一下' }).click();
  console.log("打印网页标题：" + await page.title());
  
});



