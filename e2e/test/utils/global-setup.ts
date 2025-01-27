import { chromium } from '@playwright/test';
import { CommonPageModel } from './common-page-model';
import { getAuthUrl,getUserInfo } from '../utils/getConfigInfo';

//方法抽象统一登录能力，写入缓存。
//根据palywright.config.ts配置，执行用例之前会默认执行该方法完成登录


async function globalSetup() {
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const commonPage = new CommonPageModel(page);
  await commonPage.login(getAuthUrl(), getUserInfo().account, getUserInfo().password);
  console.log('global-setup.ts文件打印：已成功登录');
  
  // 将登录成功后的浏览器状态存入本地文件
  await context.storageState({ path: './e2e/.tmp/state.json' });  
  await browser.close();
}

// async  function getEnvConfig() {
//   if(envInfo as String =="dev"){
//     authUrl = UrlInfo.auth.dev;
//     username = DevUserInfo.testUser.account;
//     password = DevUserInfo.testUser.password;
//   }else if(envInfo as String =="pro"){
//     const authUrl = UrlInfo.auth.pre;
//     const username = PreUserInfo.testUser.account;
//     const password = PreUserInfo.testUser.password;
//   }else{
//     const authUrl = UrlInfo.auth.pro;
//     const username = ProUserInfo.testUser.account;
//     const password = ProUserInfo.testUser.password;
//   }
// }
export default globalSetup;