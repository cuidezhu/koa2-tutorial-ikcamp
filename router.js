/*
* @Author: cuidezhu
* @Date:   2018-04-13 16:32:44
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-16 08:33:08
*/
const router = require('koa-router')()

module.exports = (app) => {
  router.get('/', app.controller.home.index)

  router.get('/home', app.controller.home.home)

  router.get('/home/:id/:name', app.controller.home.homeParams)

  router.get('/404', async(ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
  })

  // add return form page router
  router.get('/user', app.controller.home.login)

  // add handle form request router
  router.post('/user/register', app.controller.home.register)

  app.use(router.routes())
      .use(router.allowedMethods())
}