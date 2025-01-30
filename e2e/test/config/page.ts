import { register } from "ts-node";

export const UrlInfo = {

  //域名
  url: {
    dev: 'xxx',
    pre: 'xxx',
    pro: 'https://mail.163.com',
  },

  //鉴权登录地址
  auth: {
    dev: 'xxx',
    pre: 'xxx',
    pro: 'https://mail.163.com',
  },

  
  //pro拼接页面URL
  pageUrl_pro: {
    //首页
    portal: '/js6/main.jsp?sid=dLjHtGuYpCHWDszMlbYYtVZLpXdQfQks&df=mail163_letter#module=welcome.WelcomeModule%7C%7B%7D'

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