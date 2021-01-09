import React from 'react'
import LogoSVG from '~/assets/images/logo.svg'
import Link from 'gatsby-link'

export default function Logo() {
  return (
    <Link to="/">
      <LogoSVG />
    </Link>
  )
}
