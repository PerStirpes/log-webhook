const {json} = require('micro')

module.exports = async (req, res) => {
  const payload = await json(req)
  console.log(payload)
}
