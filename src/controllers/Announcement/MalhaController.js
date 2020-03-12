const Malha = require('../../models/Announcement/Malha')

module.exports = {
  async index(req, res) {
    const malhas = await Malha.find()
    return res.json(malhas)
  },
  async indexType(req, res) {
    const malhas = await Malha.find({ adsTipo: req.body.adsTipo })
    return res.json(malhas)
  },
  async indexFrom(req, res) {
    const malhas = await Malha.find({ userId: req.body.userId })
    return res.json(malhas)
  },
  async indexTypeFrom(req, res) {
    const malhas = await Malha.find({ userId: req.body.userId, adsTipo: req.body.adsTipo })
    return res.json(malhas)
  },
  
  async detail(req, res) {
    const malha = await Malha.findById(req.params.id)
    return res.json(malha)
  },
  async store(req, res) {
    const malha = await Malha.create(req.body)
    return res.json(malha)
  },
  async update(req, res) {
    const malha = await Malha.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(malha)
  },
  async destroy(req, res) {
    await Malha.findOneAndRemove(req.params.id)
    return res.send()
  }
}