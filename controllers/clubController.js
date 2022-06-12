const Club = require('../models/Club')

const getClubs = async (req, res) => {
  try {
    const data = await Club.find({})
    res.send(data)
  } catch (err) {
    console.log(err)
    res.status(500).send('Sever Error')
  }
}

const addClub = async (req, res) => {
  try {
    const data = req.body
    const newClub = new Club(data)
    await newClub.save()
    const newClubData = await Club.find({})
    res.send(newClubData)
  } catch {
    console.log(err)
    res.status(500).send('Sever Error')
  }
}

const updateClub = async (req, res) => {
  const id = req.params.id
  const {clubName, clubBrand, shot, club, deleteShot, shotId} = req.body
  if (clubName && clubBrand) {
    try {
      await Club.findByIdAndUpdate(id, {
        clubName: clubName,
        brand: clubBrand,
      })
      res.send('Success')
    } catch (err) {
      console.log(err)
      res.status(500).send('Server Error')
    }
  }
  if (shot !== null) {
    console.log('shot', shot)
    await Club.findOneAndUpdate(
      {_id: id},
      {
        shots: [...club.shots, shot],
        totalShots: club.totalShots + 1,
      }
    )
    const data = await Club.findOne({_id: id})
    res.send(data)
  }
  if (deleteShot === true) {
    console.log(deleteShot)
    console.log(`id`, id)
    console.log(`shotId:`, shotId)
    await Club.findOneAndUpdate(
      {_id: id},
      {
        shots: club.shots.filter((item) => {
          return item.yardsId !== shotId
        }),
        totalShots: club.totalShots - 1,
      }
    )
    const data = await Club.findOne({_id: id})
    res.send(data)
  }
}

const getClubById = async (req, res) => {
  try {
    const id = req.params.id
    const data = await Club.findById(id)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.status(500).send('Sever Error')
  }
}

const deleteClubById = async (req, res) => {
  try {
    const id = req.params.id
    await Club.findByIdAndDelete(id)
    const data = await Club.find({})
    res.send(data)
  } catch (err) {
    console.log(err)
    res.status(500).send('Sever Error')
  }
}

module.exports = {
  addClub,
  getClubs,
  updateClub,
  getClubById,
  deleteClubById,
}
