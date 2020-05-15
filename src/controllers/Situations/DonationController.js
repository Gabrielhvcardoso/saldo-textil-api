const Donation = require('../../models/Situations/Donation')

module.exports = {
  async index(req, res) {
    // Find by uf
    if(req.body.uf) {
      const donations = await Donation.find({ status: true, states: req.body.uf }).populate('donateBy').exec()
      return res.json(donations)  
    }
    // Find by who've donated
    else if (req.body.donateBy) {
      const donations = await Donation.find({ status: true, donateBy: req.body.donateBy })
      return res.json(donations)
    }
    // Find all
    else {
      const donations = await Donation.find({ status: true }).populate('donateBy').exec()
      return res.json(donations)  
    }
  },
  async detail(req, res) {
    const donation = await Donation.findById(req.params.id).populate('donateBy').exec()
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