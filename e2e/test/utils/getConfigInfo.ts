import { envInfo } from '../config/env';
import { UrlInfo } from '../config/page';
import { DevUserInfo } from '../config/user';
import { PreUserInfo } from '../config/user';
import { ProUserInfo } from '../config/user';

/**
 * @description  获取访问页面的域名：生产、预发、dev等
 */
export const getTargetUrl = () => {
    var targetUrl;
    if(envInfo as String =="dev"){
        console.log("dev环境域名="+UrlInfo.url.dev);
        targetUrl = UrlInfo.url.dev;
      }else if(envInfo as String =="pro"){
        console.log("pro环境域名="+UrlInfo.url.pro);
        targetUrl = UrlInfo.url.pro;
      }else{
        console.log("pre环境域名="+UrlInfo.url.pre);
        targetUrl = UrlInfo.url.pre;
      }
    
    return targetUrl;
  }

/**
 * @description  获取鉴权登录地址：生产、预发、dev等
 */
export const getAuthUrl = () => {
    var authUrl;
    if(envInfo as String =="dev"){
        console.log("dev鉴权登录="+UrlInfo.auth.dev);
        authUrl = UrlInfo.auth.dev;
      }else if(envInfo as String =="pro"){
        console.log("pro鉴权登录="+UrlInfo.auth.pro);
        authUrl = UrlInfo.auth.pro;
      }else{
        console.log("pre鉴权登录="+UrlInfo.auth.pre);
        authUrl = UrlInfo.auth.pre;
      }
    
    return authUrl;
  }

/**
 * @description  获取账号信息：生产、预发、dev等
 */
export const getUserInfo = () => {
    var UserInfo={
        account: '',
        password: '',
    }
    if(envInfo as String =="dev"){
        UserInfo.account = DevUserInfo.testUser.account;
        UserInfo.password = DevUserInfo.testUser.password;
    }else if(envInfo as String =="pro"){
        UserInfo.account = ProUserInfo.testUser.account;
        UserInfo.password = ProUserInfo.testUser.password;
    }else{
        UserInfo.account = PreUserInfo.testUser.account;
        UserInfo.password = PreUserInfo.testUser.password;
    }
    return UserInfo;
}

/**
 * @description 海棠首页：获取访问域名后对应拼接的URL地址
 */
export  const getPortalUrl = () =>{
  var page ;

  if(envInfo as String =="dev"){
    page = UrlInfo.pageUrl_dev.portal;
  }else if(envInfo as String =="pro"){
    page = UrlInfo.pageUrl_pro.portal;
  }else{
    page = UrlInfo.pageUrl_pre.portal;
  }

  return page;
}