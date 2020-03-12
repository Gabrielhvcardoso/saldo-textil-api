const Confeccao = require('../../models/Announcement/Confeccao')

module.exports = {
  async index(req, res) {
    const confeccoes = await Confeccao.find()
    return res.json(confeccoes)
  },
  async indexType(req, res) {
    const confeccoes = await Confeccao.find({ adsTipo: req.body.adsTipo })
    return res.json(confeccoes)
  },
  async indexFrom(req, res) {
    const confeccoes = await Confeccao.find({ userId: req.body.userId })
    return res.json(confeccoes)
  },
  async indexTypeFrom(req, res) {
    const confeccoes = await Confeccao.find({ userId: req.body.userId, adsTipo: req.body.adsTipo })
    return res.json(confeccoes)
  },
  
  async detail(req, res) {
    const confeccao = await Confeccao.findById(req.params.id)
    return res.json(confeccao)
  },
  async store(req, res) {
    const confeccao = await Confeccao.create(req.body)
    return res.json(confeccao)
  },
  async update(req, res) {
    const confeccao = await Confeccao.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(confeccao)
  },
  async destroy(req, res) {
    await Confeccao.findOneAndRemove(req.params.id)
    return res.send()
  }
}