import React from 'react'
import Navbar from '~/components/ui/Navbar'
import Footer from '~/components/ui/Footer'

export default function Layout({ children, nav, footer }) {
  return (
    <>
      <Navbar links={nav.links} />
      <main>{children}</main>
      <Footer links={footer.links} />
    </>
  )
}
