import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import ClubItem from './ClubItem'
import ClubList from './ClubList'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {useNavigate} from 'react-router-dom'

const Clubs = ({clubData, setClubData, isLoading, setIsLoading}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const getAllClubData = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_URL}/api`)
        setClubData(result.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getAllClubData()
    // eslint-disable-next-line
  }, [])

  const handleClick = (id) => {
    navigate(`/clubs/${id}`)
  }

  return (
    <>
      <div className='pt-7 w-full bg-dark-400 min-h-screen max-h-min'>
        <div className='container m-auto'>
          <div className='w-full flex items-center mb-3 '>
            <h1 className='text-gray-500 text-2xl font-semibold'>
              Club Distances
            </h1>
            <div className='ml-auto'>
              <Link to='/clubs/add'>
                <button
                  type='button'
                  className='px-4 py-2 text-sm font-medium rounded-md shadow-sm text-gray-400 bg-blue-400 hover:bg-blue-300 '>
                  Add Club
                </button>
              </Link>
            </div>
          </div>

          {isLoading ? (
            <div>Loading</div>
          ) : (
            <>
              <ClubList>
                {clubData.map((club) => (
                  <ClubItem
                    key={uuidv4()}
                    club={club}
                    setClubData={setClubData}
                    handleClick={handleClick}
                  />
                ))}
              </ClubList>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Clubs
