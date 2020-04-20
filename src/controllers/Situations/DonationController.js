const Donation = require('../../models/Situations/Donation')

module.exports = {
  async index(req, res) {
    const donations = await Donation.find()
                                    .populate('donateTo')
                                    .exec()
    return res.json(donations)
  },
  async indexFrom(req, res) {
    const donations = await Donation.find({ donateBy: req.params.id })
                                    .populate('donateBy')
                                    .populate('donateTo')
                                    .exec()
    return res.json(donations)
  },
  async indexTo(req, res) {
    const donations = await Donation.find({ donateTo: req.params.id })
                                    .populate('donateBy')
                                    .populate('donateTo')
                                    .exec()
    return res.json(donations)
  },
  async detail(req, res) {
    const donation = await Donation.findById(req.params.id)
                                   .populate('donateBy')
                                  .populate('donateTo')
                                   .exec()
    return res.json(donation)
  },
  async store(req, res) {
    const donation = await Donation.create(req.body)
    return res.json(donation)
  },
  async update(req, res) {
    const donation = await Donation.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(donation)
  },
  async destroy(req, res) {
    await Donation.findOneAndRemove({_id: req.params.id})
    return res.send()
  }
}