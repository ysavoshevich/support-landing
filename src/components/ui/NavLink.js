import React from 'react'
import { Link } from 'react-scroll'

export default function NavLink({ text, to }) {
  return (
    <li className="mr-6">
      <Link
        to={to || '/'}
        smooth={true}
        offset={-80}
        hashSpy={true}
        activeClass="text-regularOrange"
        className="transition-colors duration-200 cursor-pointer hover:text-regularOrange"
      >
        {text}
      </Link>
    </li>
  )
}
