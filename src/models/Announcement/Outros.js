const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OutroSchema = new mongoose.Schema({
  titulo: String,
  categoria: String,
  userId: String,
  adsTipo: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  descricao: String,
  preco: Number,
  status: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Outro', OutroSchema)