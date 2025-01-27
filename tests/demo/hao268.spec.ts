//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

 test.beforeEach(async ({ page }) => {
    await page.goto('https://www.hao268.com/');
  });

  const MAIL_DATA = [
    '',
    '@163.com',
    '@qq.com',
    '@126.com',
    '@yeah.net',
    '@sina.com',
    '@sohu.com',
    '@21cn.com',
    '@188.com',
    '@aliyun.com',
    '@189.cn',
    '@139.com',
    '@gmail.com',
    '@hotmail.com',
    '@yahoo.com',
    '@aol.com',
    '--其它帐号--',
    '百度帐号',
    '知乎帐号',
    '新浪微博',
    'QQ空间',
    '支付宝',
    '人人网',
    '开心网'
  ];

  const MAIL_DATA2 = '@163.com\n@qq.com\n@126.com\n@yeah.net\n@sina.com\n@sohu.com\n@21cn.com\n@188.com\n@aliyun.com\n@189.cn\n@139.com\n@gmail.com\n@hotmail.com\n@yahoo.com\n@aol.com\n--其它帐号--\n百度帐号\n知乎帐号\n新浪微博\nQQ空间\n支付宝\n人人网\n开心网';

  test.describe('邮箱', () => {

    test('check_邮箱控件地址', async ({ page }) => {

        //定位-邮箱控件
        const mail = page.locator('#hao_mail_options');
        //点击-邮箱控件
        await mail.click();
        //获取-本地配置的邮箱地址  -- 这里循环遍历暂时行不通，只能把数组给遍历出来。这里后面才发现，出发点就错了，这里的把数组遍历出来后，但实际的值是字符串
        for(var i = 0 ; i < MAIL_DATA.length ; i++ ){
            //await expect(mail).toHaveText(MAIL_DATA[i]);  //不得行
            //console.log('打印：' + MAIL_DATA[i]);
            //await expect(MAIL_DATA[i]).toEqual(await mail.innerText());
            //await expect(await mail.innerText()).toEqual(MAIL_DATA[i]);
        }

        //打印邮箱控件内容
        //console.log('打印邮箱控件内容' + await mail.innerText());
        //console.log('打印设置邮箱控件内容：\n' + MAIL_DATA2);

        //核对-邮箱地址  --- 这种写法，核对的是 数组，但是实际接收的是一串字符串，所以在这里不适用
        // await expect(mail).toHaveText([
        //     MAIL_DATA[0],
        //     MAIL_DATA[1],
        //     MAIL_DATA[2]
        // ]);

    //可行方案如下：
    //await expect(await mail.innerText()).toMatch(MAIL_DATA[1]);   //可行，也可用于匹配正则表达式
    //await expect(await mail.innerText()).toEqual([ MAIL_DATA[1],MAIL_DATA[2] ]);  //匹配的方式是数组
    await expect(await mail.innerText()).toEqual(MAIL_DATA2);   //就用这个了，完美实现
    
    });


  });








