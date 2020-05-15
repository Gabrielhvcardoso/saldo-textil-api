const Confeccao = require('../../models/Announcement/Confeccao')

module.exports = {
  async index(req, res) {
    const confeccoes = await Confeccao.find()
                                      .populate('userId')
                                      .exec()
    return res.json(confeccoes)
  },
  async indexType(req, res) {
    // Index from ADS and NAME
    if( req.body.adsTipo && !req.body.userId && !req.body.uf && req.body.name ) {
      const confeccoes = await Confeccao.find({ titulo: { $regex: new RegExp(req.body.name), $options: 'i' } , adsTipo: req.body.adsTipo }).populate('userId').exec()
      
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
      
      return res.json(removeNullResults(confeccoes));
    }
    // Index from ADS
    else if( req.body.adsTipo && !req.body.userId && !req.body.uf && !req.body.name ) {
      const confeccoes = await Confeccao.find({ adsTipo: req.body.adsTipo }).populate('userId').exec()
      
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
      
      return res.json(removeNullResults(confeccoes));
    } 
    // Index from USERID
    else if ( !req.body.adsTipo && req.body.userId && !req.body.uf && !req.body.name) {
      const confeccoes = await Confeccao.find().populate({
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
      
      return res.json(removeNullResults(confeccoes));
    } 
    // Index from ADS and USERID
    else if ( req.body.adsTipo && req.body.userId && !req.body.uf && !req.body.name ) {
      const confeccoes = await Confeccao.find({ adsTipo: req.body.adsTipo }).populate({
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
      
      return res.json(removeNullResults(confeccoes));
    }
    // Index from ADS and UF    
    else if ( req.body.adsTipo && !req.body.userId && req.body.uf && !req.body.name ) {
      const confeccoes = await Confeccao.find({ adsTipo: req.body.adsTipo }).populate({
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
      
      return res.json(removeNullResults(confeccoes));
    } 
    // Index from ADS and UF and NAME  
    else if ( req.body.adsTipo && !req.body.userId && req.body.uf && req.body.name ) {
      const confeccoes = await Confeccao.find({ titulo: { $regex: new RegExp(req.body.name), $options: 'i' } , adsTipo: req.body.adsTipo }).populate({
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
      
      return res.json(removeNullResults(confeccoes));
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