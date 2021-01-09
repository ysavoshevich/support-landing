import React from 'react'
import Navbar from '~/components/ui/Navbar'
import Footer from '~/components/ui/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
