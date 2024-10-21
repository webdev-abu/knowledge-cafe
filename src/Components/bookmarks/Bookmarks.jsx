import PropTypes from 'prop-types'

export default function Bookmarks() {
  return (
    <div className='grid col-span-1 gap-6'>
      <div className='bg-[rgba(96,71,236,0.1)] p-5 rounded-md shadow-md sm:text-[16px] md:text-[24px] font-bold text-[#6047EC]'>Spent time on read : 177 min</div>
      <div className='bg-[rgba(96,71,236,0.1)] p-5 rounded-md shadow-md grid col-span-1 gap-6  '>
      <div className='bg-[#FFFFFF] p-5 rounded-md shadow-inner sm:text-[14px] md:text-[18px] font-semibold text-[#111111]'>Bookmarks</div>
      <div className='bg-[#FFFFFF] p-5 rounded-md shadow-inner sm:text-[14px] md:text-[18px] font-semibold text-[#111111]'>Bookmarks</div>
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
    second: PropTypes.third
  }
  