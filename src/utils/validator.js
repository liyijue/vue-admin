// 验证邮箱
export const patternEmali = value =>
  /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value)

// 验证密码
export const patternPassword = value => /^[\w_-]{6,16}$/.test(value)

// 验证验证码
export const patterKeyCode = value => /^[\w_-]{6,16}$/.test(value)
