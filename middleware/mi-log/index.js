/*
* @Author: cuidezhu
* @Date:   2018-04-15 15:48:24
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 19:12:38
*/
const logger = require("./logger")

module.exports = (options) => {
  const loggerMiddleware = logger(options)

  return (ctx, next) => {
    return loggerMiddleware(ctx, next)
    .catch((e) =>  {
      if (ctx.status < 500) {
        ctx.status = 500
      }
      ctx.log.error(e.stack)
      ctx.state.logged = true
      ctx.throw(e)
    })
  }
}