const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true
  },
  endereco: String,
  bairro: String,
  numero: String,
  cidade: String,
  UF: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', UserSchema)