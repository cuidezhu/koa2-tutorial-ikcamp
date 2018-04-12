/*
* @Author: cuidezhu
* @Date:   2018-04-12 12:06:04
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-12 14:29:59
*/

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello World</h1>'
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})