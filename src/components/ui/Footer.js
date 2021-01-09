import React from 'react'
import FooterLogo from '~/assets/images/footer-logo.svg'
import FooterLink from '~/components/ui/FooterLink'

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#2B293E' }}
      className="px-4 py-8 text-white text-opacity-75"
    >
      <div className="container flex flex-col justify-between mx-auto lg:flex-row">
        <div className="flex flex-col items-center justify-center mb-5 lg:flex-row lg:mb-0">
          <FooterLogo />
          <p>Copyright by 2019 Redq, Inc</p>
        </div>
        <div>
          <ul className="flex flex-wrap items-center justify-center ">
            <FooterLink to="/" text="Home" />
            <FooterLink to="/" text="Advertise" />
            <FooterLink to="/" text="Supports" />
            <FooterLink to="/" text="Marketing" />
            <FooterLink to="/" text="FAQ" />
          </ul>
        </div>
      </div>
    </footer>
  )
}
