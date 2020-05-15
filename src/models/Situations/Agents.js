const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AgentSchema = new mongoose.Schema({
  cvLink: String,
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  products: [String],
  states: [String]

})

module.exports = mongoose.model('Agent', AgentSchema)