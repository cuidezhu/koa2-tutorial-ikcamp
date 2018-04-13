/*
* @Author: cuidezhu
* @Date:   2018-04-12 12:06:04
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 17:56:33
*/

const Koa = require('koa')
const path = require('path')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const app = new Koa()

app.use(bodyParser())

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}))

router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})