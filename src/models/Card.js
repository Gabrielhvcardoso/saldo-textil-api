const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  idUsuario: String,
  cpf: String,
  numero: String,
  nome: String,
  data: String,
  cvv: String,
})

module.exports = mongoose.model('Card', CardSchema)