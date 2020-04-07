const CharityOrganization = require('../models/Organizations/CharityOrganization')

module.exports = {
  async index(req, res) {
    const organizations = await CharityOrganization.find()
    return res.json(organizations)
  },
  async detail(req, res) {
    const organization = await CharityOrganization.findById(req.params.id)
    return res.json(organization)
  },
  async store(req, res) {
    const organization = await CharityOrganization.create(req.body)
    return res.json(organization)
  },
  async update(req, res) {
    const organization = await CharityOrganization.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(organization)
  },
  async destroy(req, res) {
    await CharityOrganization.findOneAndRemove({_id: req.params.id})
    return res.send()
  }
}