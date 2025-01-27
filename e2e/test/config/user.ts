// 用户账号密码
export interface AccountInfo {
    account: string;
    password: string;
  }

/**
 * @description: dev环境账号信息
 */
export const DevUserInfo: {
  [key in string]: AccountInfo;
} = {
  testUser: {
    account: 'ibosstest',
    password: 'Iboss666',
  }
}

/**
 * @description: 预发环境账号信息
 */
export const PreUserInfo: {
    [key in string]: AccountInfo;
  } = {
    testUser: {
      account: 'wb-lj375511',
      password: 'superJAY***',
    }
}

/**
 * @description: 生产环境账号信息
 */
export const ProUserInfo: {
  [key in string]: AccountInfo;
} = {
  testUser: {
    account: 'Iboss666',
    password: 'Iboss666',
  }
}
