/*
* @Author: cuidezhu
* @Date:   2018-04-13 17:23:19
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-14 17:20:00
*/

module.exports = {
  register: async function(name, pwd) {
    let data
    if (name == 'ikcamp' && pwd == '123456') {
      data = {
        status: 0,
        data: {
          title: "个人中心",
          content: "欢迎进入个人中心"
        }
      }
    } else {
      data = {
        status: -1,
        data: {
          title: "登录失败",
          content: "请输入正确的账号信息"
        }
      }
    }
    return data
  }
}