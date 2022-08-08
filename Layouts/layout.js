import React from 'react'
import Footer from '../components/Footer/footer'
import NavBar from '../components/NavBar/NavBar'

export default function DefaultLayout({children}) {
  return (
    <>
    <NavBar />
    <main>
        {children}
    </main>
    <Footer />
    </>
  )
}
