//import type { Page } from 'playwright-core';
import type { Page } from '@playwright/test';
import { BLACK_DOMAIN } from './configs';


const regUrl = new RegExp(`${BLACK_DOMAIN.join('|')}`, 'ig');
const verifyUrl = (url: URL) => {
  return regUrl.test(url?.hostname);
}

/**
 * @description 设置浏览器基本信息
 */
export const setBrowserConfig = async (page: Page) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  return await page.route(verifyUrl, route => route.abort());
}