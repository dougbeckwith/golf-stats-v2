import React from 'react'

const ClubItem = ({club, handleClick}) => {
  const id = club._id
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

  return (
    <>
      <div
        onClick={() => handleClick(id)}
        className='flex-wrap font-base gap-1 shadow-lg w-full rounded-md py-3 px-3 mb-2 bg-[#f7f7f5] flex items-center justify-between hover:bg-[#ebebe9] hover:cursor-pointer border border-slate-200'>
        <p className='font-semibold mr-4'>{club.clubName}</p>
        <p className='mr-auto'>{club.brand}</p>
        <div className='flex gap-4'>
          <p className='w-auto lg:w-28'>
            Avg Yards:{' '}
            <span className='font-semibold'>{getAverageYards(club)}</span>
          </p>
          <p className=''>
            Total Shots:{' '}
            <span className='font-semibold'>{club.totalShots}</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default ClubItem
