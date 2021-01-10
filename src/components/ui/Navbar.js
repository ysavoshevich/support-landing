import React, { useState } from 'react'
import Logo from '~/components/ui/Logo'
import SearchIcon from '~/assets/images/search.svg'
import LockIcon from '~/assets/images/lock.svg'
import OpenIcon from '~/assets/images/menu-open-icon-dark.svg'
import NavLink from '~/components/ui/NavLink'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function Navbar({ links }) {
  const [isOnTop, setIsOnTop] = useState(true)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenuHandler = () => {
    setIsMenuOpen(true)
  }
  const closeMenuHandler = () => {
    setIsMenuOpen(false)
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -50) {
        setIsOnTop(true)
      } else {
        setIsOnTop(false)
      }
    },
    [isOnTop]
  )

  return (
    <header
      className={`fixed w-full px-5  transition-padding duration-500 xl:px-0 z-50 ${
        !isOnTop ? 'bg-white shadow-xl py-3' : 'py-5'
      }`}
    >
      <nav className="container flex items-center justify-between mx-auto lg:justify-center">
        <div className="flex items-center w-full mx-auto">
          <div className="mr-6">
            <Logo />
          </div>
          <ul className="flex items-center justify-end w-full lg:justify-between">
            <div className="items-center hidden lg:flex">
              {links &&
                links.map(({ text, sectionName }, i) => {
                  return <NavLink text={text} to={sectionName} key={i} />
                })}
              <SearchIcon />
            </div>
            <div className="flex items-center">
              <div className="items-center hidden lg:flex">
                <div className="mr-2 hover:fill-regularOrange">
                  <LockIcon className="hover:fill-regularOrange" />
                </div>
                <NavLink text="Login" to="/" />
              </div>
              <button className="hidden px-2 py-2 rounded-sm lg:block bg-lightOrange text-brown">
                Get Started
              </button>
              <OpenIcon
                className="block cursor-pointer lg:hidden"
                onClick={openMenuHandler}
              />
            </div>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-white">
            <ul className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex flex-col ">
                <NavLink text="Home" to="/" />
                <NavLink text="Advertise" to="/" />
                <NavLink text="Supports" to="/" />
                <NavLink text="About" to="/" />
                <div className="flex items-center">
                  <div className="mr-2">
                    <LockIcon />
                  </div>
                  <NavLink text="Login" to="/" />
                </div>
              </div>
              <button
                className="p-2 rounded-lg bg-brown text-lightOrange"
                onClick={closeMenuHandler}
              >
                Close
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
