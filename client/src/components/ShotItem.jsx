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
      <div className='rounded-md shadow-lg w-full m-auto sm:w-60 py-3 px-3 bg-[#f7f7f5] border border-slate-200'>
        <div className=' text-xl flex items-center'>
          <p className='text-[#7e7d7d] text-lg'>
            Yards:{' '}
            <span className='font-semibold text-[#14A76C]'> {shot.yards}</span>
          </p>
        </div>

        <div>
          <button
            className='btn--extra--small btn--danger'
            onClick={handlePatch}>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}

export default ShotItem
