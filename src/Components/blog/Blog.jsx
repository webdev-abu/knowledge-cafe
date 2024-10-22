import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'


const Blog = ({blogs,handleAddBookmark,handleMarkToRead}) => {
    // console.log(blogs)
    const {author, author_img, cover, hashtags, posted_date, reading_time, title, }=blogs;
  return (
    <>
        <div className="card shadow-xl">
            <figure>
                <img
                src={cover}
                alt="Shoes"  className='w-full h-auto'/>
            </figure>
            <div className="card-body px-3 md:px-6">
                <div className='flex justify-between items-center'>
                    <div className="flex justify-center items-center">
                    <div className="avatar md:mr-6 mr-3">
                        <div className="w-12 rounded-full">
                        <img src={author_img} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className="sm:text-[16px] md:text-[24px] font-bold text-[#111111]">{author}</h2>
                        <p className="text-[16px] font-semibold text-[rgba(17,17,17,0.6)]">{posted_date}</p>
                    </div>
                    </div>
                    <div className="card-title">
                        <p className='sm:text-[16px] md:text-[20px] font-medium text-[rgba(17,17,17,0.6)] mr-3'>{reading_time} min read</p>
                        <FontAwesomeIcon icon={faBookmark} onClick={()=>handleAddBookmark(blogs)}  className='p-3 border border-1 border-purple-700 hover:bg-purple-700 hover:text-[#ffffff] hover:cursor-pointer'/>
                    </div>
                </div>
                <h2 className="sm:text-[18px] md:text-[40px] font-bold text-[#111111]">{title}</h2>
                <div className=''>
                    <p className="text-[rgba(17,17,17,0.6)]  sm:text-[16] md:text-[20px]">
                    {
                        hashtags.map((hashtag, index) => <span key={index} className='mr-3'>#{hashtag}</span>)
                    }
                    </p>
                </div>
                <div className="card-actions justify-start">
                <a onClick={()=>handleMarkToRead(blogs)} className='sm:text-[16px] md:text-[20px] font-bold text-[#6047EC] hover:underline hover:cursor-pointer'>Mark as read</a>
                </div>
            </div>
        </div>
        <div className="divider"></div>
    </>
  )
}

Blog.propTypes = {
  blogs: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkToRead: PropTypes.func.isRequired,
}

export default Blog;
