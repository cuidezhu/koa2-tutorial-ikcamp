/*
* @Author: cuidezhu
* @Date:   2018-04-15 00:24:30
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 17:20:15
*/

module.exports = () => {
  function render(json) {
    this.set("Content-Type", "application/json")
    this.body = JSON.stringify(json)
  }
  return async(ctx, next) => {
    ctx.send = render.bind(ctx)
    ctx.log.error('something wrong')
    await next()
  }
}