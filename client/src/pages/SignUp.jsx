import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // State for button disabled if making sign up request
  const [isLoading, setIsloading] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsloading(true)
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/user/signup`,
        JSON.stringify({email, password}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        }
      )
      setIsloading(false)
      console.log(response)

      if (response.data.error) {
        setError(response.data.error)
      }
      if (!response.data.error) {
        setEmail('')
        setPassword('')
        navigate('/clubs')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='h-screen bg-dark-500 flex pt-10 sm:pt-24 justify-center text-gray-400'>
        <div className='container max-w-[600px]'>
          <div className='sm:bg-dark-400 border-0 md:border-2 md:border-gray-600 px-3 py-4 md:px-6 md:py-8 sm:rounded-lg w-full'>
            <form>
              <div>
                <div className='pb-1 pl-1'>
                  <label htmlFor='email' className='text-lg text-gray-400'>
                    Email
                  </label>
                </div>
                <input
                  id='email'
                  type='text'
                  onChange={handleEmailChange}
                  className='bg-dark-200 placeholder-opacity-60 placeholder-gray-600 w-full p-3 rounded-md border-2 border-dark-200 focus:outline-none focus:border-blue-400  focus:ring-blue-400'
                  placeholder='Johng@gmail.com'
                  value={email}
                />
              </div>
              <div className='pt-2 pb-4'>
                <div className='pb-2 pl-1'>
                  <label htmlFor='password' className='text-lg'>
                    Password
                  </label>
                </div>
                <input
                  id='password'
                  type='password'
                  onChange={handlePasswordChange}
                  className='bg-dark-200 placeholder-opacity-60 placeholder-gray-600 w-full p-3 rounded-md border-2 border-dark-200 focus:outline-none focus:border-blue-400  focus:ring-blue-400'
                  placeholder='Password'
                  value={password}
                />
              </div>
              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className='mt-4 w-full bg-blue-400 py-3 rounded-md hover:bg-blue-300'>
                SignUp
              </button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
