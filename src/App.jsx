
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './Components/blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import { addToLocalStorage, getLocalStorageBookmark, removeFromLocalStorage } from './Components/utilities/utilities'

function App() {

  const [blog, setBlog]=useState([]);
  const [bookmarks,setBookmarks]=useState([]);
  const [read, setRead]=useState(0);

  useEffect(()=>{
    fetch('blogs.json')
    .then(response => response.json())
    .then(data => setBlog(data))
},[])

   // load cart from Local Storage
   useEffect(() => {
    if(blog.length > 0){
        const storedCart = getLocalStorageBookmark();
        // console.log(storedCart,bottles);
        const savedCart= [];
        for(const id of storedCart){
            const bookmark = blog.find(bookmark => bookmark.id === id);
            // console.log(bookmark)
            if(bookmark){
                savedCart.push(bookmark);
            }else{
              setBookmarks(`No bookmark found for id ${id}`);
            }
        }
        setBookmarks(savedCart);
    }
    
},[blog]);

  const handleAddBookmark=(blogs)=>{
    const storedBookmark = getLocalStorageBookmark();
    const blogId = blogs.id;
    if(storedBookmark.includes(blogId)){
      alert('Already bookmarked');
      }else{
        addToLocalStorage(blogId);
        setBookmarks([...bookmarks,blogs]);
      }
    }

    const handleMarkToRead = (blog) =>{
      const newReadTime =blog.reading_time;
      setRead(read+newReadTime);
  }

  const handleRemoveBookmark =(id)=>{
    // UI Bookmark Remove
    const remainingBookmark =bookmarks.filter((item)=>item.id !== id);
    console.log(remainingBookmark)
    setBookmarks(remainingBookmark);
    // Local Storage Bookmark Id Remove
    removeFromLocalStorage(id);
  }


  return (
    <>
       <Header/>
       <div className="divider mt-[100px]"></div>
       <main className='md:flex justify-between gap-5 sm:mx-3 md:mx-0'>
       <div className='w-full sm:mx-3 md:w-2/3 md:mx-0'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkToRead={handleMarkToRead}/>
       </div>
       <div className='w-full sm:mx-3 md:w-1/3 md:mx-0'>
        {/* <Bookmarks bookmarks={bookmarks} localStorageBookmarks={localStorageBookmarks}/> */}
        <Bookmarks bookmarks={bookmarks} read={read} handleRemoveBookmark={handleRemoveBookmark}/>
       </div>
       </main>
       <Footer/>
    </>
  )
}

export default App
