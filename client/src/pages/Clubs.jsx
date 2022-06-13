import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import ClubItem from '../components/ClubItem'
import ClubList from '../components/ClubList'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import ButtonPrimary from '../components/ButtonPrimary'
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
      <div className='w-full bg-[#f7f7f5] min-h-screen max-h-min '>
        <div className='container m-auto pt-10  px-3 sm:px-0'>
          <div className='w-full flex items-center'>
            <h1 className='text-2xl font-semibold'>Clubs</h1>
            <div className='ml-auto'>
              <Link to='/clubs/add'>
                <ButtonPrimary text='Add Club' color={'#c60021'} />
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
