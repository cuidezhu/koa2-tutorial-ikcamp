/*
* @Author: cuidezhu
* @Date:   2018-04-16 07:12:41
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-16 08:08:22
*/
const Path = require('path')
const nunjucks = require('nunjucks')

module.exports = (opts = {}) => {
  const folder = opts.errorPageFolder
  const env = opts.env || process.env.NODE_ENV || 'development'
  const templatePath = Path.resolve(__dirname, './error.html')
  let fileName = 'other'
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404)
    } catch (e) {
      let status = parseInt(e.status)
      const message = e.message

      if (status >= 400) {
        switch(status) {
          case 400:
          case 404:
          case 500:
            fileName = status
            break
          default:
            fileName = 'other'
        }
      } else {
        status = 500
        fileName = status
      }
      const filePath = folder ? Path.join(folder, `${fileName}.html`) : templatePath
      try {
        nunjucks.configure( folder ? folder: __dirname)
        const data = await nunjucks.render(filePath, {
          env: env,
          status: e.status || e.message,
          error: e.message,
          stack: e.stack
        })
        ctx.status = status
        ctx.body = data
      } catch(e) {
        ctx.throw(500, `错误页渲染失败:${e.message}`)
      }
    }
  }
}