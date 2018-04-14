/*
* @Author: cuidezhu
* @Date:   2018-04-13 16:41:22
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 00:32:38
*/
const HomeService = require('../service/home')

module.exports = {
  index: async function(ctx, next) {
    await ctx.render("home/index", {title: "iKcamp欢迎您"})
  },
  home: async(ctx, next) => {
    ctx.send({status: '200'})
    //ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async(ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  login: async(ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GoGoGo'
    })
  },
  register: async function(ctx, next) {
    let params = ctx.request.body
    let name = params.name
    let password = params.password
    let res = await HomeService.register(name, password)
    if (res.status == "-1") {
      await ctx.render("home/login", res.data)
    } else {
      ctx.status.title = "个人中心"
      await ctx.render("home/success", res.data)
    }
  }
}