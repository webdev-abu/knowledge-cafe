
import './App.css'
import Blogs from './Components/blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'

function App() {

  return (
    <>
       <Header/>
       <div className="divider"></div>
       <main className='md:flex justify-between gap-5 sm:mx-3 md:mx-0'>
       <div className='w-full sm:mx-3 md:w-2/3 md:mx-0'>
        <Blogs/>
       </div>
       <div className='w-1/3'>
        <Bookmarks/>
       </div>
       </main>
       <Footer/>
    </>
  )
}

export default App
