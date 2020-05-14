const Confeccao = require('../../models/Announcement/Confeccao')

module.exports = {
  async index(req, res) {
    const confeccoes = await Confeccao.find()
                                      .populate('userId')
                                      .exec()
    return res.json(confeccoes)
  },
  async indexType(req, res) {
    // Index from announcement type
    if( req.body.adsTipo && !req.body.userId && !req.body.uf ) {
      const confeccoes = await Confeccao.find({ adsTipo: req.body.adsTipo }).populate('userId').exec()
      return res.json(confeccoes)
    } 
    // Index from user Id
    else if ( !req.body.adsTipo && req.body.userId && !req.body.uf) {
      const confeccoes = await Confeccao.find().populate({
        path: 'userId',
        match: { _id: req.body.userId }
      }).exec()
      return res.json(confeccoes)
    } 
    // Index from announcement type and userId
    else if ( req.body.adsTipo && req.body.userId && !req.body.uf ) {
      const confeccoes = await Confeccao.find({ adsTipo: req.body.adsTipo }).populate({
        path: 'userId',
        match: { _id: req.body.userId }
      }).exec()
      return res.json(confeccoes)
    }
    // Index from announcement type and uf    
    else if ( req.body.adsTipo && !req.body.userId && req.body.uf ) {
      const confeccoes = await Confeccao.find({ adsTipo: req.body.adsTipo }).populate({
        path: 'userId',
        match: { UF: req.body.uf }
      }).exec()
      return res.json(confeccoes)
    } 
    // Bad request
    else {
      return res.send("Error: bad request. <br/> Expected <pre>adsType, userId, uf</pre>")
    }
  },
  async detail(req, res) {
    const confeccao = await Confeccao.findById(req.params.id)
                                     .populate('userId')
                                     .exec()
    return res.json(confeccao)
  },
  async store(req, res) {
    const confeccao = await Confeccao.create(req.body)
    return res.json(confeccao)
  },
  async update(req, res) {
    const confeccao = await Confeccao.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(confeccao)
  },
  async destroy(req, res) {
    await Confeccao.findOneAndRemove({_id: req.params.id})
    return res.send()
  }
}