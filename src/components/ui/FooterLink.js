import React from 'react'
import Link from 'gatsby-link'

export default function FooterLink({ text, to }) {
  return (
    <li className="mx-2 lg:mx-0 lg:mr-6 ">
      <Link to={to || '/'}>{text}</Link>
    </li>
  )
}
