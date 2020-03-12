const mongoose = require('mongoose')

const MalhaSchema = new mongoose.Schema({
  titulo: String,
  publico: String,
  quantidade: String,
  // Peças, Kr, Metros
  medida: String,
  preco: Number,
  userId: String,
  adsTipo: String,
  artigo: String,
  tipoDeArtigo: String,
  composicao: String,
  tipoDeFio: String,
  tipoDeMalha: String,
  largura: String,
  gramatura: String,
  cores: String,
  tipoDeProduto: String,
  
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Malha', MalhaSchema)