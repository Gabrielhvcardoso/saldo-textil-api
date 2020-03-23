const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nameFic: String,
  cep: {
    type: String,
    required: true
  },
  tel: {
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
  cpfCnpj: String,
  premium: {
    type: Boolean, 
    default: false
  },
  endereco: String,
  bairro: String,
  numero: String,
  cidade: String,
  UF: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', UserSchema)