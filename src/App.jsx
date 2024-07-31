import { useState } from 'react'
import './App.css'
import React from 'react'
import About from './About'
import Portofolio from './Portofolio'
import Contact from './Contact'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import MainLayout from './Pages/MainLayout/MainLayout'
import Home from './Home'
import NotFound from './Pages/NotFound/NotFound'

function App() {
  let route = createHashRouter([
    {path:'/', element:<MainLayout/>, children:[
      {index:true, element:<Home/>},
      {path:'about', element:<About/>},
      {path:'portofolio', element:<Portofolio/>},
      {path:'contact', element:<Contact/>},
      {path:'*', element:<NotFound/>}
    ]}
  ])

  return (
  <>
  <RouterProvider router={route}></RouterProvider>
  </>
  )
}
export default App
