import { register } from "ts-node";

export const UrlInfo = {

  //域名
  url: {
    dev: 'xxx',
    pre: 'https://ics-site-pre.alipay.com',
    pro: 'xxx',
  },

  //鉴权登录地址
  auth: {
    dev: 'xxx',
    pre: 'https://ipaybuservice.alipay.com/login.htm',
    pro: 'https://ipaybuservice.alipay.com/login.htm',
  },

  
  //pro拼接页面URL
  pageUrl_pro: {
    //首页
    portal: '/ics-portal/home'

  },

  //pre拼接页面URL
  pageUrl_pre: {
    //首页
    portal: '/ics-portal/home'

  },

  //dev拼接页面URL
  pageUrl_dev: {
    //首页
    portal: '/ics-portal/home'

  }

}