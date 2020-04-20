const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DonationSchema = new mongoose.Schema({
  donateBy: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  donateTo: {
    type: Schema.Types.ObjectId, ref: 'CharityOrganization'
  },
  productId: String,
  status: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    defalt: Date.now()
  }
})

module.exports = mongoose.model('Donation', DonationSchema)