import PropTypes from 'prop-types'

export default function Bookmark({bookmarks}) {
    // console.log(typeof bookmarks)
    const {title}=bookmarks;
  return (
    <div className='bg-[#FFFFFF] p-5 rounded-md shadow-inner sm:text-[14px] md:text-[18px] font-semibold text-[#111111]'>{title}</div>
  )
}

Bookmark.propTypes = {
    bookmarks: PropTypes.object.isRequired,
  }