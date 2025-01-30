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
    account: '',
    password: '',
  }
}

/**
 * @description: 预发环境账号信息
 */
export const PreUserInfo: {
    [key in string]: AccountInfo;
  } = {
    testUser: {
      account: '',
      password: '',
    }
}

/**
 * @description: 生产环境账号信息
 */
export const ProUserInfo: {
  [key in string]: AccountInfo;
} = {
  testUser: {
    account: '',
    password: '',
  }
}
