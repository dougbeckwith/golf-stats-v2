const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const port = 3001
const clubRoutes = require('./routes/clubRoutes')
const userRoutes = require('./routes/userRoutes')
const path = require('path')

const connectDataBase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`)
    console.log('Connected to database')
  } catch (err) {
    console.log(err)
  }
}
connectDataBase()

////////////////////////////////////////////////////////////
// Added was getting error when trying to make user document in database
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
////////////////////////////////////////////////////////

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/clubs', clubRoutes)
app.use('/api/user', userRoutes)
// PORT only defined in production server

  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
  })


app.listen(process.env.PORT || port, () => {
  console.log(`Server listening ${process.env.PORT} ${port}`)
})
