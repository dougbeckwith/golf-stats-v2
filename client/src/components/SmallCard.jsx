const SmallCard = ({icon, title, value}) => {
  const symbol = (
    <div className='flex'>
      <span className='pl-2 pr-1'>&#177;</span>
    </div>
  )
  return (
    <div className='w-full rounded-md  shadow-lg py-3 px-3 mb-2 bg-[#f7f7f5] flex items-center border border-slate-200'>
      <div>{icon}</div>
      <div className='pl-5'>
        <p className='text-[#7e7d7d] text-sm'>{title}</p>
        <div className='text-[#14A76C] text-xl font-bold flex'>
          <span>{value}</span>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
