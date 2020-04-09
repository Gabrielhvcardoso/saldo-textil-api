const mongoose = require('mongoose')

const DonationSchema = new mongoose.Schema({
  donateBy: String,
  donateTo: String,
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