/*
* @Author: cuidezhu
* @Date:   2018-04-12 12:06:04
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 16:37:49
*/

const Koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())

router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})