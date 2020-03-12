const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const users = await User.find()
    return res.json(users)
  },
  async detail(req, res) {
    const user = await User.find({_id: req.params.id})
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
    const user = await User.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(user)
  },
  async destroy(req, res) {
    await User.findOneAndRemove(req.params.id)
    return res.send()
  }
}