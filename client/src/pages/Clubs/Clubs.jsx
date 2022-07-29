import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
import ClubItem from './ClubItem'
import ClubList from './ClubList'

const Clubs = ({clubData, setClubData, isLoading, setIsLoading}) => {
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    const getAllClubData = async () => {
      console.log('API call from CLUBS... GET ALL CLUB DATA')
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api`)
        console.log(response.data)
        setClubData(response.data)
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
      <div className='px-5 lg:px-0 pt-7 w-full bg-dark-400 min-h-screen max-h-min'>
        <div className='container m-auto'>
          <div className='pb-10 pt-10'>
            <h1 className='text-gray-400 text-center mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl'>
              Add <span className='relative text-blue-400'>clubs</span> here
              click a{' '}
              <span className='relative whitespace-nowrap text-blue-600'>
                <span className='relative text-blue-400'>club</span>
              </span>{' '}
              to add shots and <span className='text-gray-600'>view</span> more.
            </h1>
          </div>
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
