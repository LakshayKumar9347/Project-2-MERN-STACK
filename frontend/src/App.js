import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar, Home, About, Awards, Testimonials, Contact, Footer } from './components/index'

export default function App() {
  return (
    <div>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/awards' element={<Awards />}/>
          <Route path='/testimonials' element={<Testimonials />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </>
    </div>
  )
}
