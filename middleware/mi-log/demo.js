/*
* @Author: cuidezhu
* @Date:   2018-04-15 15:37:55
* @Last Modified by:   cuidezhu
* @Last Modified time: 2018-04-15 15:45:02
*/
const log4js = require('log4js')
log4js.configure({
  appenders: { cheese: {type: 'file', filename: 'cheese.log'}},
  categories: { default: { appenders: ['cheese'], level: 'error'}}
})

const logger = log4js.getLogger('cheese')
logger.trace('Entering cheese testing')
logger.debug('Got cheese.')
logger.info('Cheese is Gouda.')
logger.warn('Cheese is quite smelly.')
logger.error('Cheese is too ripe!')
logger.fatal('Cheese was breeding ground for listeria.')