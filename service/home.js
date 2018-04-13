/*
* @Author: cuidezhu
* @Date:   2018-04-13 17:23:19
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 17:24:58
*/
module.exports = {
  register: async(name, pwd) => {
    let data
    if (name == 'ikcamp' && pwd == '123456') {
      data = `Hello, ${name}!`
    } else {
      data = '账户信息错误'
    }
    return data
  }
}