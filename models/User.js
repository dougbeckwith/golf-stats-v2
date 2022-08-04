const mongoose = require('mongoose')
const {Schema} = mongoose
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// Add static function onto user model that:
// Checks if email and password are valid
// Checks if email already exists
// Creates salt and hashes password
// Add user document to database
// return the user document
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw new Error('Please enter email and password')
  }
  if (!validator.isEmail(email)) {
    throw new Error('Please enter a valid email')
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error('Please enter a stronger password')
  }

  const exists = await this.findOne({email})

  if (exists) {
    throw new Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email, password: hash})
  return user
}

const User = mongoose.model('User', userSchema)
module.exports = User
