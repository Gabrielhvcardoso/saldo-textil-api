const mongoose = require('mongoose')

const ConfeccaoSchema = new mongoose.Schema({
  titulo: String,
  userId: String,
  adsTipo: String,
  categoria: String,
  subcategoria: String,
  tamanho: String,
  cor: String,
  
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Confeccao', ConfeccaoSchema)