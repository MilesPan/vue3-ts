/**登录页的校验规则配置
 *
 */
export const rules = {
  name: [
    {
      // 必传
      required: true,
      // 不符合时的提示内容
      message: '请填写用户名',
      // 什么时候会触发验证
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      // 不符合时的提示内容
      message: '请填写密码',
      // 什么时候会触发验证
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{2,}$/,
      message: '用户名必须是3位以上的字母或数字',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^1[3|4|5|8][0-9]\d{4,8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  identifyCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4}$/,
      message: '请输入正确验证码'
    }
  ]
}
