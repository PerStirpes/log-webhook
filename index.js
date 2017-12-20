const {json} = require('micro')

module.exports = async req => {
  const payload = await json(req)
  console.log(payload)
}
