import PropTypes from 'prop-types'
import Blog from '../blog/Blog'
import { useEffect, useState } from 'react'

const Blogs = ({handleAddBookmark,handleMarkToRead}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])

  return (
    <div className=''>
    {
        blogs.map((blog,index)=><Blog key={index} blogs={blog} handleAddBookmark={handleAddBookmark} handleMarkToRead={handleMarkToRead}/>)
    }
    </div>
  )
}

Blogs.propTypes = {
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkToRead: PropTypes.func.isRequired,
}

export default Blogs;

