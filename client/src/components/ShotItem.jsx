import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const ShotItem = ({
  shotId,
  shot,
  setClub,
  club,
  setAvgYards,
  getAverageYards,
}) => {
  const params = useParams()
  const id = params.id
  const handlePatch = async () => {
    try {
      const result = await axios.patch(
        `${process.env.REACT_APP_URL}/api/${id}`,
        {
          deleteShot: true,
          club: club,
          shot: null,
          shotId: shotId,
        }
      )
      setClub(result.data)
      setAvgYards(getAverageYards(result.data))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <p>Yards: {shot.yards}</p>
      <button onClick={handlePatch}>Delete</button>
    </>
  )
}

export default ShotItem
