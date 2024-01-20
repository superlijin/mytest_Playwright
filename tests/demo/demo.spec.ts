import { test, expect } from '@playwright/test';

test('百度', async ({ page }) => {
  await page.goto('https://www.baidu.com/');
  await page.locator('#kw').click();
  await page.locator('#kw').fill('java');
  //await page.getByRole('button', { name: '百度一下' }).click();
  await page.click('#su');
  console.log("打印网页标题：" + await page.title());
  
});

test('hao268', async ({ page }) => {
  await page.goto('https://www.hao268.com/');
  
  //input 标签定位写法
  await page.locator('input[name="wd"]').fill('你好呀!');
  
});

