import PropTypes from 'prop-types'


export const Header = () => {
  return (
    <div className="navbar bg-[#ffffff] my-8 md:px-0">
    <div className="flex-1">
        <a className="sm:text-[18px] md:text-[40px] font-bold text-[#111111]">Knowledge Cafe</a>
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
  )
}

Header.propTypes = {
  second: PropTypes.third
}

export default Header;