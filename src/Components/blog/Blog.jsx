import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'


const Blog = () => {
  return (
    <div className="card shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='md:flex justify-between items-center'>
        <div className="flex justify-center items-center">
        <div className="avatar mr-6">
            <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div className='flex flex-col'>
            <h2 className="sm:text-[16px] md:text-[24px] font-bold text-[#111111]">Blog Post</h2>
            <p className="text-[16px] font-semibold text-[rgba(17,17,17,0.6)]">Mar 14 (4 Days ago)</p>
        </div>
        </div>
        <div className="card-title">
            <p className='sm:text-[16px] md:text-[20px] font-medium text-[rgba(17,17,17,0.6)] mr-3'>05 min read</p>
            <FontAwesomeIcon icon={faBookmark} />
        </div>
    </div>
    <h2 className="sm:text-[18px] md:text-[40px] font-bold text-[#111111]">Shoes!</h2>
    <div className=''>
        <p className="text-[rgba(17,17,17,0.6)]  sm:text-[16] md:text-[20px]">#hashtag</p>
    </div>
    <div className="card-actions justify-start">
      <a className='sm:text-[16px] md:text-[20px] font-bold text-[#6047EC] hover:underline hover:cursor-pointer'>Mark as read</a>
    </div>
  </div>
</div>
  )
}

Blog.propTypes = {
  second: PropTypes.third
}

export default Blog;
