/*
* @Author: cuidezhu
* @Date:   2018-04-13 14:57:08
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 15:00:20
*/

const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

const router = new Router({
  prefix: '/users'
})

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>responds to "/users"</h1>'
})

router.get('/:id', async (ctx, next) => {
  ctx.response.body = '<h1>responds to "/users/:id"</h1>'
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})