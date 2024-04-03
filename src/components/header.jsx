import { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { navLinks } from "../constants/objects";
import { Twirl as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 ml-[8%] mr-[2%] sm:mx-[7%] mt-5 lg:mt-10 flex items-center justify-between">
      <div className='flex'>
      <div className="w-[100px] h-auto mr-[20px]">
        <img src={Logo} className="w-[70px]" alt="Logo" />
      </div>

      <ul className={`list-none sm:flex hidden items-center flex-1 ${menuOpen ? '' : 'hidden'}`}>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className="cursor-pointer">
            <a href={`#${nav.title}`} className="text-[17px] mx-3">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      </div>

      <div className='flex items-center justify-end '>
      <Link to={'/login'}>
      <button className='bg-white rounded-md px-7 py-1 text-[13px] md:text-[15px] font-semibold' >Login</button>
      </Link>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Hamburger size={20} duration={0.5} toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full right-0 bg-white w-full shadow-lg py-2 rounded-lg">
          <ul className="text-center">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="py-1">
                <a href={`#${nav.title}`} className="text-[14px]">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
