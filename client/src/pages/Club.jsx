import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ShotList from '../components/ShotList'
import ShotItem from '../components/ShotItem'
import {v4 as uuidv4} from 'uuid'
import GolfIcon from '../components/GolfIcon'
import SmallCard from '../components/SmallCard'

const Club = ({setClubData}) => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const [club, setClub] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [shot, setShot] = useState('')
  const [avgYards, setAvgYards] = useState(0)

  const navigateToClubs = () => {
    navigate('/clubs')
  }
  const getAverageYards = (club) => {
    let totalYards = 0
    let shots = club.totalShots
    if (shots === 0) {
      return 0
    } else {
      club.shots.forEach((shot) => {
        totalYards += parseInt(shot.yards)
      })
      return (totalYards / shots).toFixed()
    }
  }

  useEffect(() => {
    const fetchClub = async () => {
      const result = await axios.get(`${process.env.REACT_APP_URL}/api/${id}`)
      setClub(result.data)
      setAvgYards(getAverageYards(result.data))
      setIsLoading(false)
    }
    fetchClub()
    // eslint-disable-next-line
  }, [])

  const handleDelete = async () => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_URL}/api/${id}`
      )
      setClubData(result.data)
      navigateToClubs()
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddShot = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.patch(
        `${process.env.REACT_APP_URL}/api/${id}`,
        {
          club,
          deleteShot: null,
          shot: {yards: shot, yardsId: uuidv4()},
        }
      )
      setClub(result.data)
      setAvgYards(getAverageYards(result.data))
      setShot('')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='w-full bg-[#f7f7f5] min-h-screen max-h-min '>
        <div className='container m-auto pt-4 px-3 sm:px-0'>
          {isLoading ? (
            <div>Loading</div>
          ) : (
            <div className=''>
              <div className=''>
                <p className='font-semibold text-lg'>{club.clubName}</p>
                <p>{club.brand}</p>
                <form className='w-full pt-4 pb-2'>
                  <div>
                    <input
                      onChange={(e) => setShot(e.target.value)}
                      className='border-2 p-2 rounded focus:outline-none focus:border-slate-400  focus:ring-slate-400'
                      value={shot}
                      type='text'
                      placeholder='Yards'
                    />
                    <button
                      className='btn--small btn--primary'
                      onClick={handleAddShot}>
                      Add Shot
                    </button>
                  </div>
                </form>
              </div>

              <SmallCard
                icon={<GolfIcon />}
                title='Avg Yards'
                value={avgYards}
              />
              <SmallCard
                icon={<GolfIcon />}
                title='Total Shots'
                value={club.totalShots}
              />

              <div className='flex gap-2 pt-2'>
                <Link to={`/clubs/${id}/edit`}>
                  <button className='btn--small btn--secondary'>
                    Edit Club
                  </button>
                </Link>
                <button
                  className='btn--small btn--danger'
                  onClick={handleDelete}>
                  Delete Club
                </button>
              </div>
            </div>
          )}
          <h2 className='text-xl font-semibold pt-5 pb-4'>Shots</h2>

          {isLoading ? (
            <div>Loading</div>
          ) : (
            <ShotList>
              {club.shots.map((shot) => {
                return (
                  <ShotItem
                    key={uuidv4()}
                    shotId={shot.yardsId}
                    setClub={setClub}
                    shot={shot}
                    club={club}
                    setAvgYards={setAvgYards}
                    getAverageYards={getAverageYards}
                  />
                )
              })}
            </ShotList>
          )}
        </div>
      </div>
    </>
  )
}

export default Club
