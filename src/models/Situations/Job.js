const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new mongoose.Schema({
  postedBy: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  title: {
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
  status: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    defalt: Date.now()
  }
})

module.exports = mongoose.model('Job', JobSchema)