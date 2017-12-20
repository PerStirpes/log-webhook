const {json} = require('micro')

module.exports = async request => {
  const payload = await json(request)
  console.log(`%c${payload}`, 'color:blue')
}
