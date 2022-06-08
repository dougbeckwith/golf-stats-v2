const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {collection: 'user-data'}
)

const User = mongoose.model('User', UserSchema)
module.exports = User
