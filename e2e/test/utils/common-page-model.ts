import type { Page } from '@playwright/test';     //说明：从 Playwright 库中导入 Page 类型，用于 类型 检查
import { expect } from '@playwright/test';          //说明：导入 Playwright 的 expect 断言库，用于 断言 操作
import { PreUserInfo } from '../config/user';        //说明：导入用户信息配置，这是自定义的 用户 信息接口或类型   --该脚本这里并没有使用
import { UrlInfo } from '../config/page';               //说明：导入页面 URL 配置，这是自定义的 URL 信息接口或类型  --该脚本这里并没有使用

//【公共登录方法】

// export const AUTH_URL =
//   'https://ipaybuservice.alipay.com/login.htm';


//定义了一个 CommonPageModel 类
export class CommonPageModel {
  readonly page: Page;   //说明：声明一个只读属性 page，类型为 Page，用于保存浏览器页面实例

  constructor(page: Page) {
    this.page = page;    //说明：构造函数，接收一个 Page 实例并赋值给类的 page 属性
  }

  
//登录的异步方法 login
/*
传参：
1、rul：登录的地址
2、username：登录的用户名
3、password：登录的密码
调用：
1、
*/
  async login(url, username, password) {
    
    const { page } = this;                                  //解构赋值，获取当前类实例中的 page 属性
    
    console.log('start login.');                            //输出日志，表示 开始登录流程 ，在终端打印出来

    await page.goto(url, { waitUntil: "load", });  //导航到指定的登录页面，并等待页面加载完成

    const isACI = process.env.CI === 'true';        //检查是否在 CI（持续集成）环境中运行，如果是，则设置较长的等待时间（5秒），否则为较短的时间（1秒）。
    await page.waitForTimeout(isACI ? 5000 : 1000); //根据环境变量 CI 的值等待一定时间

    //定位到登录 iframe，在浏览器body即可找到。 <iframe> 标签规定一个内联框架 【查看 代码解剖】
    const frameLocator = await page.frameLocator('#login-iframe');      //定义一个常量来接收 iframe 标签里面元素信息，便于后续使用
    await expect(frameLocator, '未找到登录弹窗').not.toBeNull();            //断言 iframe 是否存在，如果不存在则抛出错误
    //定位 用户、密码、登录 的元素
    await frameLocator.locator('input[name="username"]').fill(username || '');                 //在 iframe 中定位用户名输入框 并 填充用户名
    await frameLocator.locator('input[name="userpass"]').fill(password || '');                   //在 iframe 中定位密码输入框 并 填充密码
    await frameLocator.locator('.submit.domain-body-submit-control-submit').click();   //点击 提交按钮进行登录，这里找的是css样式来定位

    await page.waitForNavigation();      //等待页面导航完成，确保登录成功后页面已加载完毕

    console.log('login success.');          //走到这里表示成功登录了，输出日志
    
  }
  
}