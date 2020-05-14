const Malha = require('../../models/Announcement/Malha')

module.exports = {
  async index(req, res) {
    const malhas = await Malha.find()
                              .populate('userId')
                              .exec()
    return res.json(malhas)
  },
  async detail(req, res) {
    const malha = await Malha.findById(req.params.id)
                             .populate('userId')
                             .exec()
    return res.json(malha)
  },
  async store(req, res) {
    const malha = await Malha.create(req.body)
    return res.json(malha)
  },
  async update(req, res) {
    const malha = await Malha.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(malha)
  },
  async destroy(req, res) {
    await Malha.findOneAndRemove({_id: req.params.id})
    return res.send()
  },
  async indexType(req, res) {
    // Index from announcement type
    if( req.body.adsTipo && !req.body.userId && !req.body.uf ) {
      const malhas = await Malha.find({ adsTipo: req.body.adsTipo }).populate('userId').exec()
      return res.json(malhas)
    } 
    // Index from user Id
    else if ( !req.body.adsTipo && req.body.userId && !req.body.uf) {
      const malhas = await Malha.find().populate({
        path: 'userId',
        match: { _id: req.body.userId }
      }).exec()
      return res.json(malhas)
    } 
    // Index from announcement type and userId
    else if ( req.body.adsTipo && req.body.userId && !req.body.uf ) {
      const malhas = await Malha.find({ adsTipo: req.body.adsTipo }).populate({
        path: 'userId',
        match: { _id: req.body.userId }
      }).exec()
      return res.json(malhas)
    }
    // Index from announcement type and uf    
    else if ( req.body.adsTipo && !req.body.userId && req.body.uf ) {
      const malhas = await Malha.find({ adsTipo: req.body.adsTipo }).populate({
        path: 'userId',
        match: { UF: req.body.uf }
      }).exec()
      return res.json(malhas)
    } 
    // Bad request
    else {
      return res.send("Error: bad request. <br/> Expected <pre>adsType, userId, uf</pre>")
    }
  },
}