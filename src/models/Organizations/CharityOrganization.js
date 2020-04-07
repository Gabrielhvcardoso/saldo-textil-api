const mongoose = require('mongoose')

const CharityOrganizationSchema = new mongoose.Schema({
  ownerId: String,
  allowedIds: String,
  organizationName: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  andress: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }

})

module.exports = mongoose.model('CharityOrganization', CharityOrganizationSchema)