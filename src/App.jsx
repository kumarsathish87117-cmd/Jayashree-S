import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App(){
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(()=>{
    const t = setTimeout(()=> setLoading(false), 900)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className="min-h-screen">
      {loading && <Loader />}
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
