const mongoose = require('mongoose')

const OutroSchema = new mongoose.Schema({
  titulo: String,
  categoria: String,
  userId: String,
  adsTipo: String,
  descricao: String,
  preco: Float32Array,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Outro', OutroSchema)