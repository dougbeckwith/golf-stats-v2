const User = require('../models/User')

const loginUser = async (req, res) => {}

const signupUser = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.signup(email, password)
    res.send(user).status(200)
  } catch (error) {
    res.send({error: error.message}).status(400)
  }
}

module.exports = {signupUser, loginUser}
