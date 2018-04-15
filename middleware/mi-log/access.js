/*
* @Author: cuidezhu
* @Date:   2018-04-15 18:37:31
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 19:02:58
*/
module.exports = (ctx, message, commonInfo) => {
  const {
    method,
    url,
    host,
    headers
  } = ctx.request
  const client = {
    method,
    url,
    host,
    message,
    referer: headers['referer'],
    userAgent: headers['user-agent']
  }

  return JSON.stringify(Object.assign(commonInfo, client))
}