const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DonationSchema = new mongoose.Schema({
  donateBy: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  images: [String],
  title: String,
  description: String,
  states: [String],
  status: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    defalt: Date.now()
  }
})

module.exports = mongoose.model('Donation', DonationSchema)