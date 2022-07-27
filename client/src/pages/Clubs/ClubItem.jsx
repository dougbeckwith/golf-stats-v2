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
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='w-full bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='mr-auto w-10/12 bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='mr-auto w-9/12 bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='mr-auto w-7/12 bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='mr-auto w-5/12 bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='mr-auto w-3/12 bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='mr-auto w-2/12 bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='flex items-center mr-auto w-8/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-lg h-full dark:bg-gray-700'>
          <div className='flex w-full'></div>
        </div>
        <div className='w-full bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='flex items-center mr-auto w-8/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-lg h-full dark:bg-gray-700'>
          <div className='flex w-full'></div>
        </div>
        <div className='w-full bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='flex items-center mr-auto w-8/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-lg h-full dark:bg-gray-700'>
          <div className='flex w-full'></div>
        </div>
        <div className='w-full bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-400 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <p className='ml-auto pr-4'>200 Yrds</p>
        </div>
        <div className='flex items-center mr-auto w-8/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-lg h-full dark:bg-gray-700'>
          <div className='flex w-full'></div>
        </div>
        <div className='w-full bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className='m'>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
          <div className='mr-auto w-10/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-6 mb-1 dark:bg-gray-700'>
            Avg Yards
          </div>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='mr-auto w-8/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='mr-auto w-6/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='mr-auto w-4/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='mr-auto w-3/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-full h-4 mb-1 dark:bg-gray-700'></div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-2/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex items-center w-full h-10 hover:cursor-pointer mb-1'>
        <div className='w-full  h-full'>
          <div className='w-12/12 bg-gradient-to-r from-dark-200 to-blue-400 rounded-lg h-full dark:bg-gray-700'>
            <div className='flex h-full items-center'>
              <p className='pl-4'>7 Iron</p>
            </div>
          </div>
        </div>
        <p className='ml-5 w-20'>100 Yrds</p>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-2/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-2/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-2/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-2/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-6/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-4/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(id)}
        className='text-gray-500 flex flex-col w-full rounded-md py-2 px-3 mb-2 bg-dark-300 items-center justify-between hover:bg-dark-200 hover:cursor-pointer'>
        <div className='flex w-full pb-2'>
          <p className=''>{club.clubName}</p>
          <span className='px-2'>-</span>
          <p className=''>{club.brand}</p>
        </div>
        <div className='flex items-center mr-auto w-2/12  bg-gradient-to-r from-dark-200 to-blue-400 rounded-md h-6 mb-1 dark:bg-gray-700'>
          <p className='w-full text-right pr-3'>200 yds</p>
        </div>
      </div>
    </>
  )
}

export default ClubItem
