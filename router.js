/*
* @Author: cuidezhu
* @Date:   2018-04-13 16:32:44
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-13 17:06:42
*/
const router = require('koa-router')()
const HomeController = require('./controller/home')

module.exports = (app) => {
  router.get('/', HomeController.index)

  router.get('/home', HomeController.home)

  router.get('/home/:id/:name', HomeController.homeParams)

  router.get('/404', async(ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
  })

  // add return form page router
  router.get('/user', HomeController.login)

  // add handle form request router
  router.post('/user/register', HomeController.register)

  app.use(router.routes())
      .use(router.allowedMethods())
}