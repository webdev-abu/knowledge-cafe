import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

export default function Bookmark({bookmarks,handleRemoveBookmark}) {
    const {id,title}=bookmarks;
  return (
    <div className='bg-[#FFFFFF] p-5 rounded-md shadow-inner sm:text-[14px] md:text-[18px] font-semibold text-[#111111] flex justify-between items-center'>{title}<FontAwesomeIcon icon={faClose} onClick={()=>handleRemoveBookmark(id)} className='text-red-600 font-extrabold text-[24px] hover:cursor-pointer'/></div>
  )
}

Bookmark.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    handleRemoveBookmark: PropTypes.func.isRequired,
  }