const User = require('../models/User')

const Confeccao = require('../models/Announcement/Confeccao')
const Malha = require('../models/Announcement/Malha')
const Outro = require('../models/Announcement/Outros')

const Charity = require('../models/Organizations/CharityOrganization')

const Job = require('../models/Situations/Job')

module.exports = {
  // User
  async indexU(req, res) {
    const users = await User.find({ name: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(users)
  },
  
  // Anúncios - Confecção
  async indexC(req, res) {
    const confeccoes = await Confeccao.find({ titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(confeccoes)
  },
  async indexTypeC(req, res) {
    const confeccoes = await Confeccao.find({ adsTipo: req.params.type, titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(confeccoes)
  },

  // Anúncio - Malha
  async indexM(req, res) {
    const malhas = await Malha.find({ titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(malhas)
  },
  async indexTypeM(req, res) {
    const malhas = await Malha.find({ adsTipo: req.params.type, titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(malhas)
  },

  // Anúncio - Outros
  async indexO(req, res) {
    const outros = await Outro.find({ titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(outros)
  },
  async indexTypeO(req, res) {
    const outros = await Outro.find({ adsTipo: req.params.type, titulo: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(outros)
  },

  // Organizations - Charity
  async indexOC(req, res) {
    const charityOrganizations = await Charity.find({ organizationName: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(charityOrganizations)
  },

  // Situations - Job
  async indexJ(req, res) {
    const jobs = await Job.find({ title: { $regex: new RegExp(req.params.search), $options: 'i' } })
    return res.json(jobs)
  }
}
