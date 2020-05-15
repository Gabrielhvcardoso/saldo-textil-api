const Agents = require('../../models/Situations/Agents')

module.exports = {
  async index(req, res) {
    // Find by state
    if(req.body.uf && !req.body.products) {
      const agents = await Agents.find({ states : req.body.uf }).populate('user').exec();
      return res.json(agents)
    }
    // Find by products
    if(!req.body.uf && req.body.products) {
      const agents = await Agents.find({ products : { $regex : new RegExp(req.body.products) } }).populate('user').exec();
      return res.json(agents)
    }
    // Find by state and products
    if(req.body.uf && req.body.products) {
      const agents = await Agents.find({ states : req.body.uf, products : { $regex : new RegExp(req.body.products) } }).populate('user').exec();
      return res.json(agents)
    }
    // Find all
    else {
      const agents = await Agents.find().populate('user').exec()
      return res.json(agents)
    }
  },
  async searchProducts(req, res) {
    const agents = await Agents.find({ "products.name": { $regex: new RegExp(req.params.search), $options: 'i' } }).populate('user').exec()
    return res.json(agents)
  },
  async store(req, res) {
    const agent = await Agents.create(req.body)
    return res.json(agent)
  },
  async update(req, res) {
    const agent = await Agents.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(agent)
  },
  async destroy(req, res) {
    await Agents.findOneAndRemove({_id: req.params.id})
    return res.send()
  }
}