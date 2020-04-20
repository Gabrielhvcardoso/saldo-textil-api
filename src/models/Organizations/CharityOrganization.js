const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CharityOrganizationSchema = new mongoose.Schema({
  ownerId: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  allowedIds: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }],
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