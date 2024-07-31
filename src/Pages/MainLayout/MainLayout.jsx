import React from 'react'
import Navbaar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
    <Navbaar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
