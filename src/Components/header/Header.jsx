
export const Header = () => {
  return (
    <header className="w-full bg-purple-700 fixed top-0 right-0 blur-[50%] drop-shadow mb-16 z-50 backdrop-blur-sm bg-purple-700/30">
      <div className="navbar px-3 md:px-8">
      <div className="flex-1">
          <a className="sm:text-[18px] md:text-[40px] font-bold text-[#111111]">WEBDEV Knowledge Cafe</a>
      </div>
    <div className="flex-none">
      <div className="dropdown-end">
        <div role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </header>
  )
}

export default Header;