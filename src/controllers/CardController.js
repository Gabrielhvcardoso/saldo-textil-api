const Card = require('../models/Card')

module.exports = {
  async detail(req, res) {
    const card = await Card.find({_id: req.params.id})
    return res.json(card)
  },
  async store(req, res) {
    const card = await Card.create(req.body)
    return res.json(card)
  },
  async update(req, res) {
    const card = await Card.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(card)
  },
  async destroy(req, res) {
    await Card.findOneAndRemove({_id: req.params.id})
    return res.send()
  }
}