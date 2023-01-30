import React from 'react'
import { Footer } from '../Footer/Footer'
import { NavBar } from '../NavBar/NavBar'

export const Layout = ({children}:any) => {
  return (
    <>
    <NavBar/>
   {children}
   <Footer/>
    </>
  )
}
