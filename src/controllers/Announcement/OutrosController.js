const Outro = require('../../models/Announcement/Outros')

module.exports = {
  async index(req, res) {
    const outros = await Outro.find()
    return res.json(outros)
  },
  async indexType(req, res) {
    const outros = await Outro.find({ adsTipo: req.params.adsTipo })
    return res.json(outros)
  },
  async indexFrom(req, res) {
    const outros = await Outro.find({ userId: req.params.userId })
    return res.json(outros)
  },
  async indexTypeFrom(req, res) {
    const outros = await Outro.find({ userId: req.params.userId, adsTipo: req.params.adsTipo })
    return res.json(outros)
  },
  
  async detail(req, res) {
    const outro = await Outro.findById(req.params.id)
    return res.json(outro)
  },
  async store(req, res) {
    const outro = await Outro.create(req.body)
    return res.json(outro)
  },
  async update(req, res) {
    const outro = await Outro.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(outro)
  },
  async destroy(req, res) {
    await Outro.findOneAndRemove({_id: req.params.id})
    return res.send()
  }
}