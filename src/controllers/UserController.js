const User = require('../models/User')

const Confeccao = require('../models/Announcement/Confeccao')
const Malha = require('../models/Announcement/Malha')
const Outros = require('../models/Announcement/Outros')

module.exports = {
  async index(req, res) {
    const users = await User.find()
    return res.json(users)
  },
  async detail(req, res) {
    const user = await User.findById(req.params.id)
    return res.json(user)
  },
  async login(req, res) {
    const login = await User.findOne({email: req.body.email, password: req.body.password})
    return res.json(login)
  },
  async store(req, res) {
    const user = await User.create(req.body)
    return res.json(user)
  },
  async update(req, res) {
    const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(user)
  },
  async destroy(req, res) {
    await User.findOneAndRemove({_id: req.params.id})
    await Confeccao.deleteMany({ userId: req.params.id })
    await Malha.deleteMany({ userId: req.params.id })
    await Outros.deleteMany({ userId: req.params.id })
    return res.send()
  }
}