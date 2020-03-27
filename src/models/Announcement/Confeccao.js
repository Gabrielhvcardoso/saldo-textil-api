const mongoose = require('mongoose')

const ConfeccaoSchema = new mongoose.Schema({
  titulo: String,
  publico: String,
  quantidade: String,
  // Peças, Kr, Metros
  medida: String,
  preco: Float32Array,
  userId: String,
  adsTipo: String,
  categoria: String,
  subcategoria: String,
  tamanho: String,
  cor: String,
  image: String,
  
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Confeccao', ConfeccaoSchema)