import React from 'react'

const ButtonPrimary = ({text}) => {
  return (
    <button
      className={`w-full text-center py-1 px-2 rounded bg-[#c60021] text-white hover:bg-[#b7011f] focus:outline-none my-1`}>
      {text}
    </button>
  )
}

export default ButtonPrimary
