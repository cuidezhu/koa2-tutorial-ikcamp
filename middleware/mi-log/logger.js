/*
* @Author: cuidezhu
* @Date:   2018-04-15 15:48:42
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 19:27:22
*/
const log4js = require('log4js')
const access = require('./access.js')
const methods = ["trace", "debug", "info", "warn", "error", "fetal", "mark"]

module.exports = (options) => {
  const contextLogger = {}
  const defaultInfo = {
    env: 'dev',
    dir: "logs",
    appLogLevel: 'info'
  }
  const opts = Object.assign({}, defaultInfo, options || {})
  const { env, dir, appLogLevel } = opts
  const commonInfo = { }
  const appenders = { cheese: {
    type: 'dateFile',
    filename: `${dir}/task`,
    pattern: '-yyyy-MM-dd.log', 
    alwaysIncludePattern: true
  } }
  

  if (env === "dev" || env === "local" || env === "development") {
    appenders.out = {
      type: "console"
    }
  }

  const config = {
    appenders: appenders,
    categories: { default: { appenders: Object.keys(appenders), level: appLogLevel }}
  }

  log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'info' } } 
  })

  const logger = log4js.getLogger('cheese')

  return async(ctx, next) => {
    const start = Date.now()
    log4js.configure(config)

    const logger = log4js.getLogger('cheese')

    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
        logger[method](access(ctx, message, commonInfo))
      }
    })
    ctx.log = contextLogger
    await next()
    const end = Date.now()
    const responseTime = end - start
    logger.info(access(ctx, `响应时间为${responseTime/1000}s`, {}))
  }
}