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
    // Index from ADS and NAME
    if( req.body.adsTipo && !req.body.userId && !req.body.uf && req.body.name ) {
      const outros = await Outro.find({ titulo: { $regex: new RegExp(req.body.name), $options: 'i' } , adsTipo: req.body.adsTipo }).populate('userId').exec()
      
      function removeNullResults(array) {
        var result = array.filter(function(el) {
          return el.userId === null;
        });
        for(var elemento of result) {
          var index = array.indexOf(elemento);
          array.splice(index, 1);
        };
        return array;
      }
      
      return res.json(removeNullResults(outros));
    } 
    // Index from ADS
    if( req.body.adsTipo && !req.body.userId && !req.body.uf && !req.body.name ) {
      const outros = await Outro.find({ adsTipo: req.body.adsTipo }).populate('userId').exec()
      
      function removeNullResults(array) {
        var result = array.filter(function(el) {
          return el.userId === null;
        });
        for(var elemento of result) {
          var index = array.indexOf(elemento);
          array.splice(index, 1);
        };
        return array;
      }
      
      return res.json(removeNullResults(outros));
    } 
    // Index from user Id
    else if ( !req.body.adsTipo && req.body.userId && !req.body.uf && !req.body.name ) {
      const outros = await Outro.find().populate({
        path: 'userId',
        match: { _id: req.body.userId }
      }).exec()
      
      function removeNullResults(array) {
        var result = array.filter(function(el) {
          return el.userId === null;
        });
        for(var elemento of result) {
          var index = array.indexOf(elemento);
          array.splice(index, 1);
        };
        return array;
      }
      
      return res.json(removeNullResults(outros));
    } 
    // Index from ADS and userId
    else if ( req.body.adsTipo && req.body.userId && !req.body.uf && !req.body.name ) {
      const outros = await Outro
                            .find({ adsTipo: req.body.adsTipo }).
                            populate({
                              path: 'userId',
                              match: { _id: req.body.userId }
                            }).exec()
      
      function removeNullResults(array) {
        var result = array.filter(function(el) {
          return el.userId === null;
        });
        for(var elemento of result) {
          var index = array.indexOf(elemento);
          array.splice(index, 1);
        };
        return array;
      }
      
      return res.json(removeNullResults(outros));
    }
    // Index from ADS and uf    
    else if ( req.body.adsTipo && !req.body.userId && req.body.uf && !req.body.name ) {
      const outros = await Outro.find({ adsTipo: req.body.adsTipo, userId: { $ne: null } }).populate({
        path: 'userId',
        match: { UF: req.body.uf }
      }).exec()

      function removeNullResults(array) {
        var result = array.filter(function(el) {
          return el.userId === null;
        });
        for(var elemento of result) {
          var index = array.indexOf(elemento);
          array.splice(index, 1);
        };
        return array;
      }
      
      return res.json(removeNullResults(outros));
    } 
    // Index from ADS and uf and NAME    
    else if ( req.body.adsTipo && !req.body.userId && req.body.uf && req.body.name ) {
      const outros = await Outro.find({ titulo: { $regex: new RegExp(req.body.name), $options: 'i' } , adsTipo: req.body.adsTipo, userId: { $ne: null } }).populate({
        path: 'userId',
        match: { UF: req.body.uf }
      }).exec()

      function removeNullResults(array) {
        var result = array.filter(function(el) {
          return el.userId === null;
        });
        for(var elemento of result) {
          var index = array.indexOf(elemento);
          array.splice(index, 1);
        };
        return array;
      }
      
      return res.json(removeNullResults(outros));
    } 
    // Bad request
    else {
      return res.send("Error: bad request. <br/> Expected <pre>adsType, userId, uf</pre>")
    }
  },
}