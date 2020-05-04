const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OutroSchema = new mongoose.Schema({
  images: Array,
  titulo: String,
  categoria: String,
  userId: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  adsTipo: String,
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