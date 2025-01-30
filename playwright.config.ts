/////////【导入依赖库】/////////
import type { PlaywrightTestConfig } from '@playwright/test';     //从Playwright包中导入类型定义，确保TypeScript编译时有正确的类型检查
import { devices } from '@playwright/test';                                   //从Playwright包中导入预定义设备模拟器信息
import dotenv from 'dotenv';                                                         //导入dotenv库以加载环境变量 env


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
/////////【加载环境变量】/////////
dotenv.config();                 //通过调用dotenv.config()方法读取.env文件中的环境变量，并将其添加到Node.js进程中，可以根据不同的部署环境调整配置参数来切换环境。【解剖】


/**
 * See https://playwright.dev/docs/test-configuration.
 */
/////////【配置对象定义】/////////
const config: PlaywrightTestConfig = {           //定义了名为config的对象，并指定其类型为PlaywrightTestConfig
  
  //测试目录
  testDir: './e2e',                                               //指定了测试文件所在的目录路径为当前项目根目录下的./e2e
  
  /* Maximum time one test can run for. */
  //超时设置
  timeout: 180 * 1000,                                     //全局超时时间设为180秒（180,000毫秒），即每个测试用例的最大执行时间为3分钟
  
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in 'await expect(locator).toHaveText();'
     */
    timeout: 15 * 1000,                          //对于在expect断言函数，默认等待时间为15秒（15,000毫秒），防止因网络延迟等原因导致断言失败
  },

  //输出目录与CI相关设置
  outputDir: '.e2e-result',                      //指定输出目录为.e2e-result，用于存放测试结果文件，配合 reporter 设置使用
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,              //当在持续集成（CI）环境中运行时，如果离开则构建失败
  
  retries: 0,                                             //设置重试次数为0次，一旦测试失败不会自动重试
  
  /* Opt out of parallel tests on CI. */
  workers: 8,                                         //并行工作进程数量为8个，--但注释提到在CI上不并行运行测试很奇怪
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //配置报告器
  reporter: [['json', { outputFile: '.e2e-result/e2e-result.json' }]],    //配置了JSON格式的报告生成器，所有测试的结果将以JSON格式保存到指定文件中
  
  // globalSetup: require.resolve('./e2e/test/utils/global-setup'),

  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  //共享设置，给所有项目的通用设置，如视口大小、视频录制选项、基础URL、存储状态路径等
  use: {
    viewport: { width: 1380, height: 723 },                               //设定了默认浏览器视窗尺寸为1380x723像素
    video: { mode: 'on', size: { width: 1380, height: 723 } },     //开启视频录制功能，视频大小与视窗一致
    
    /* Maximum time each action such as 'click()' can take. Defaults to 0 (no limit). */
    actionTimeout: 20000,                                                       //动作超时时间设为20秒
    
    /* Base URL to use in actions like 'await page.goto('/')'. */
    baseURL: 'http://localhost:8000',                                       //基础URL设置为http://localhost:8000，用于相对路径请求
    
    //【重要！！！】登录信息去本地的缓存文件拿 -- 如果不需要读取，则注释即可
    storageState: './e2e/.tmp/state.json',                              //使用本地缓存文件存储状态，以便快速恢复登录等操作，用于处理浏览器会话数据（例如登录信息），极大地提高测试效率并减少重复劳动

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',       //当测试第一次重试时收集跟踪信息

    /* headless 配置为 false 后运行时会开启浏览器；配置为 true 则不启动浏览器；本地调试使用吧 */
    headless: true                 //默认情况下浏览器以无头模式运行（即不显示GUI界面），这有助于提高测试速度和减少资源消耗
    
  },

  /* Configure projects for major browsers */
  //为主要浏览器配置项目，如果后面有需要多个浏览器支持，则在这里配置即可。但需要针对不同的浏览器或设备进行专门优化，以确保跨平台兼容性
  projects: [         //定义了一个名为chromium的项目，使用桌面版Chrome作为默认浏览器进行测试。这里可以通过扩展devices['Desktop Chrome']来继承默认的Chrome设备配置
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // launchOptions: {
          // args: ['--host-resolver-rules=MAP local.alipay.net 127.0.0.1'],
        // },
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  // webServer: {
  //   command: 'cross-env UMI_ENV=test PORT=8000 tnpm run devs',
  //   url: 'http://localhost:8000',
  //   timeout: 180 * 1000,
  //   reuseExistingServer: !process.env.CI,
  // },
};

try{
  //这里是 【全局初始化脚本】 优先执行！！！    //如果需要使用抽象登录，则开启 storageState 注释
  //加载全局初始化脚本 global-setup，该脚本是把登录能力给写到缓存中。如果加载失败，则忽略错误继续执行后续逻辑
  config.globalSetup = require.resolve('./e2e/test/utils/global-setup')   //globalSetup单独拎出来了，为了适配昊天塔平台的接入
  
}catch (ex) {
 //ignore
}

export default config;