import { test , expect , chromium } from '@playwright/test';
import { getTargetUrl_163,getAuthUrl_163,getUserInfo_163 } from '../utils/getConfigInfo';
import { envInfo } from '../config/env';


  test.beforeEach(async ({ page }) => {

    //每个测试之前运行的钩子
    console.log("当前环境域名="+ envInfo );

    //首页URL：动态获取访问页面的域名：生产、预发、dev等
    const url = getTargetUrl_163();
    const response = await page.request.get( url );

    //跳转页面
    //await page.goto(url,{waitUntil: 'networkidle'});
    await page.goto(url);
    await expect(response).toBeOK();

    // 等待一段时间以便观察结果
    await page.waitForTimeout(5000);

    });
  
  
  test.describe('测试组名称', () => {
  //测试组
    
    test('访问163邮箱', async ({ page }) => {

      console.log('成功访问163邮箱！');

      
    });
    
    test.skip('测试用例2', async ({page}) => {

      //编写测试用例
      });
    
  });
  
  
  test.afterEach(async ({ page }) => {

    //每个测试之后运行的钩子
    console.log('我是收尾的~');

    });