const User = require('../models/User')
const Confeccao = require('../models/Announcement/Confeccao')
const Malha = require('../models/Announcement/Malha')
const Outro = require('../models/Announcement/Outros')

module.exports = {
  async indexU(req, res) {
    const users = await User.find({ name: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(users)
  },
  async indexC(req, res) {
    const confeccoes = await Confeccao.find({ titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(confeccoes)
  },
  async indexTypeC(req, res) {
    const confeccoes = await Confeccao.find({ adsTipo: req.params.type, titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(confeccoes)
  },
  async indexM(req, res) {
    const malhas = await Malha.find({ titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(malhas)
  },
  async indexTypeM(req, res) {
    const malhas = await Malha.find({ adsTipo: req.params.type, titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(malhas)
  },
  async indexO(req, res) {
    const outros = await Outro.find({ titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(outros)
  },
  async indexTypeO(req, res) {
    const outros = await Outro.find({ adsTipo: req.params.type, titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(outros)
  }
}