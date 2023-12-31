import React, { useState } from 'react';
import { images } from '../constants/index';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {MdKeyboardArrowDown} from 'react-icons/md'

const navItemsInfo = [
    {name : "Home", type:"link"},
    {name : "Articles", type:"link"},
    {name : "Pages", type:"dropdown", items:["About us", "Contact us"] },
    {name : "Pricing", type:"link"},
    {name : "FAQs", type:"link"}
]

const NavItem = ({ item }) => {
  
  const [dropdown, setDropdown] = useState(false);

  const togglerDropDown= () => {
    setDropdown((currState) => {
      return !currState;
    })
  }

    return (
      <li className='relative group '>
        {item.type === "link" ?
          (<>
            <a href='/' className='px-4 py-2 hover:underline hover:text-blue-400'>
              {item.name}
            </a>
          </>) :
          (<div className='flex flex-col items-center'>
            <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={togglerDropDown}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
           <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
            >
              <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                {item.items.map((page) => (
                  <li>
                    <a href='/'
                      className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>)
        } 
        </li>
    )
}

const Header = () => {

  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    })
  }

  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
          <div>
            <img className='w-16' src={images.Logo} alt='Logo'/>
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
              <AiOutlineMenu
              className="w-6 h-6" 
              onClick={navVisibilityHandler} />
          )}
        </div>
       <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
            <ul className=' items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-3 font-semibold'>
               {navItemsInfo.map((item) => (
                 <NavItem key={item.name} item={item} />
               ))}
            </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500
                  font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Sign in
            </button>
        </div>
      </header>
    </section>
  )
}

export default Header