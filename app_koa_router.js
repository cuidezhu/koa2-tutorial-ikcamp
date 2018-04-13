/*
* @Author: cuidezhu
* @Date:   2018-04-13 15:07:59
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 15:09:29
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

router.get('/:category/:title', function (ctx, next) {
  ctx.response.body = '<h1>ikcamp node</h1>'
  console.log(ctx.params)
})

// call router middleware
app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})