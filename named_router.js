/*
* @Author: cuidezhu
* @Date:   2018-04-13 14:15:46
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 14:19:42
*/

const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get('user', '/users/:id', async(ctx, next) => {
  ctx.response.body = '<h1>user page</h1>'
})

const userUrl = router.url('user', 3)
console.log('userUrl: ', userUrl)

const userUrl2 = router.url('user', { id: 4})
console.log('userUrl2: ', userUrl2);

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})