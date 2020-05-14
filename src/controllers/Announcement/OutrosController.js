const Outro = require('../../models/Announcement/Outros')

module.exports = {
  async index(req, res) {
    const outros = await Outro.find()
                              .populate('userId')
                              .exec()
    return res.json(outros)
  },
  async detail(req, res) {
    const outro = await Outro.findById(req.params.id)
                             .populate('userId')
                             .exec()
    return res.json(outro)
  },
  async store(req, res) {
    const outro = await Outro.create(req.body)
    return res.json(outro)
  },
  async update(req, res) {
    const outro = await Outro.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    return res.json(outro)
  },
  async destroy(req, res) {
    await Outro.findOneAndRemove({_id: req.params.id})
    return res.send()
  },
  async indexType(req, res) {
    // Index from announcement type
    if( req.body.adsTipo && !req.body.userId && !req.body.uf ) {
      const outros = await Outro.find({ adsTipo: req.body.adsTipo }).populate('userId').exec()
      return res.json(outros)
    } 
    // Index from user Id
    else if ( !req.body.adsTipo && req.body.userId && !req.body.uf) {
      const outros = await Outro.find().populate({
        path: 'userId',
        match: { _id: req.body.userId }
      }).exec()
      return res.json(outros)
    } 
    // Index from announcement type and userId
    else if ( req.body.adsTipo && req.body.userId && !req.body.uf ) {
      const outros = await Outro.find({ adsTipo: req.body.adsTipo }).populate({
        path: 'userId',
        match: { _id: req.body.userId }
      }).exec()
      return res.json(outros)
    }
    // Index from announcement type and uf    
    else if ( req.body.adsTipo && !req.body.userId && req.body.uf ) {
      const outros = await Outro.find({ adsTipo: req.body.adsTipo }).populate({
        path: 'userId',
        match: { UF: req.body.uf }
      }).exec()
      return res.json(outros)
    } 
    // Bad request
    else {
      return res.send("Error: bad request. <br/> Expected <pre>adsType, userId, uf</pre>")
    }
  },
}