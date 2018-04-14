/*
* @Author: cuidezhu
* @Date:   2018-04-12 12:06:04
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 00:36:47
*/

const Koa = require('koa')

const router = require('./router')
const app = new Koa()

const middleware = require('./middleware')

middleware(app)
router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})