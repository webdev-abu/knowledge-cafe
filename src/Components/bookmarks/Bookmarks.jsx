import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';

export default function Bookmarks({bookmarks,handleRemoveBookmark,read}) {
    console.log(read)

  return (
    <div className='grid col-span-1 gap-6'>
      <div className='bg-[rgba(96,71,236,0.1)] p-5 rounded-md shadow-md sm:text-[16px] md:text-[24px] font-bold text-[#6047EC]'>Spent time on read : {read} min</div>
      <div className='bg-[rgba(96,71,236,0.1)] p-5 rounded-md shadow-md grid col-span-1 gap-6  '>
      <p className='sm:text-[16px] md:text-[24px] font-bold text-[#6047EC]'>Bookmarked Blogs : {bookmarks.length}</p>
       {
        bookmarks.map((bookmark, index) => <Bookmark key={index} bookmarks={bookmark} read={read} handleRemoveBookmark={handleRemoveBookmark}/>)
      }
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    handleRemoveBookmark: PropTypes.func.isRequired,
    read: PropTypes.number.isRequired,
  }
  