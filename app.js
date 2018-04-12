/*
* @Author: cuidezhu
* @Date:   2018-04-12 12:06:04
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 02:46:39
*/

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.response.body = '<h1>index page</h1>'
  } else {
    await next()
  }
})
app.use(async (ctx, next) => {
  if (ctx.request.path === '/home') {
    ctx.response.body = '<h1>home page</h1>'
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.request.path === '/404') {
    ctx.response.body = '<h1>404 Not Found</h1>'
  } else {
    await next()
  }
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})