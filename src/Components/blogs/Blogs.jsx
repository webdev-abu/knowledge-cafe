import PropTypes from 'prop-types'
import Blog from '../blog/Blog'
import { useEffect, useState } from 'react'

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])

  return (
    <div className=''>
    {
        blogs.map((blog)=><Blog key={blogs.id} blogs={blog}/>)
    }
    </div>
  )
}

Blog.propTypes = {
  second: PropTypes.third
}

export default Blogs;

