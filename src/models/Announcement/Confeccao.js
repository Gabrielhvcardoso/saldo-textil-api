const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConfeccaoSchema = new mongoose.Schema({
  images: Array,
  titulo: String,
  publico: String,
  quantidade: String,
  // Peças, Kr, Metros
  medida: String,
  preco: Number,
  userId: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  adsTipo: String,
  categoria: String,
  subcategoria: String,
  tamanho: String,
  cor: String,
  image: String,
  status: {
    type: Boolean,
    default: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Confeccao', ConfeccaoSchema)