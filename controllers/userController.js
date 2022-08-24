const User = require('../models/User')
const jwt = require('jsonwebtoken')

// create jwt token and return it
const createToken = (_id) => {
  return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'})
}

const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create token
    const accessToken = createToken(user._id)

    res.send({email, accessToken}).status(200)
  } catch (error) {
    res.send({error: error.message}).status(400)
  }
}

const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create token
    const accessToken = createToken(user._id)

    res.send({email, accessToken}).status(200)
  } catch (error) {
    res.send({error: error.message}).status(400)
  }
}

module.exports = {signupUser, loginUser}
