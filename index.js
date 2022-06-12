const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const port = 3001
var path = require('path')

console.log('test')
const connectDataBase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`)
    console.log('Connected to database')
  } catch (err) {
    console.log(err)
  }
}
connectDataBase()

app.use(cors())
app.use(express.json())

// PORT only defined in production server
if (process.env.PORT) {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
  })
}

app.use('/api', require('./routes/clubRoutes'))

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening ${process.env.PORT} ${port}`)
})
