import React from 'react'

const ClubItem = ({club, handleClick}) => {
  const id = club._id
  console.log(id)

  return (
    <>
      <div
        onClick={() => handleClick(id)}
        className='shadow-lg w-full rounded-md py-3 px-3 mb-2 bg-[#f7f7f5] flex items-center justify-between hover:bg-[#ebebe9] hover:cursor-pointer'>
        <p className='mr-6'>{club.clubName}</p>
        <p>{club.brand}</p>
        <div className='ml-auto'></div>
      </div>
    </>
  )
}

export default ClubItem
