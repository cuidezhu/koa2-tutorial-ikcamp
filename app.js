/*
* @Author: cuidezhu
* @Date:   2018-04-12 12:06:04
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 03:13:17
*/

const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

// add router
router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>index page</h1>'
})

router.get('/home', async (ctx, next) => {
  ctx.response.body = '<h1> HOME page</h1>'
})

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
})

// call router middleware
app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})