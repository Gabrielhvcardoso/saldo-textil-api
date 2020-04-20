const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MalhaSchema = new mongoose.Schema({
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
  artigo: String,
  tipoDeArtigo: String,
  composicao: String,
  tipoDeFio: String,
  tipoDeMalha: String,
  largura: String,
  gramatura: String,
  cores: String,
  tipoDeProduto: String,
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

module.exports = mongoose.model('Malha', MalhaSchema)