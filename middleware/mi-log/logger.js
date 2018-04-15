/*
* @Author: cuidezhu
* @Date:   2018-04-15 15:48:42
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 15:58:43
*/
const log4js = require('log4js')
module.exports = (options) => {
  return async(ctx, next) => {
    const start = Date.now()
    log4js.configure({
      appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
      categories: { default: { appenders: ['cheese'], level: 'info' }}
    })
    const logger = log4js.getLogger('cheese')
    await next()
    const end = Date.now()
    const responseTime = end - start
    logger.info(`响应时间为${responseTime/1000}s`)
  }
}