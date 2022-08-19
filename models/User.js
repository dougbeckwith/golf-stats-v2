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
  if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 0,
      minSymbols: 0,
    })
  ) {
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

userSchema.statics.login = async function (email, password) {
  // Check if email and password
  // If not throw error
  if (!email || !password) {
    // It Creates a new Error object and sets the error.message property
    // to the provided text message
    throw new Error('Please enter email and password')
  }

  // Check if email is in database
  // If no user with that email throw error
  const user = await this.findOne({email})
  console.log(user)
  if (!user) {
    throw new Error('Invalid email and/or password ')
  }

  // If user found check if password matches password in database
  // If not match throw error
  // If match return user
  const match = await bcrypt.compare(password, user.password)
  if (match) {
    return user
  } else {
    throw new Error('Invalid email and/or password')
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User
