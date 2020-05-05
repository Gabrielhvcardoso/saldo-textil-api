const Agents = require('../../models/Situations/Agents')

module.exports = {
  async index(req, res) {
    const agents = await Agents.find().populate('user').exec()
    return res.json(agents)
  },
  async store(req, res) {
    const agent = await Agents.create(req.body)
    return res.json(agent)
  },
  async update(req, res) {
    const agent = await Agents.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(agent)
  },
  async destroy(req, res) {
    await Agents.findOneAndRemove({_id: req.params.id})
    return res.send()
  }
}