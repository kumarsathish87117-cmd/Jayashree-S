import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle(){
  const [dark, setDark] = useState(()=> document.documentElement.classList.contains('dark'))
  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme',''+dark)
  },[dark])

  useEffect(()=>{ const stored = localStorage.getItem('theme'); if(stored!==null) setDark(stored === 'true') },[])

  return (
    <motion.button onClick={()=> setDark(d=>!d)} whileTap={{scale:0.95}} className="p-2 rounded-md bg-gradient-to-br from-secondary to-accent text-white shadow">
      {dark? '🌙':'☀️'}
    </motion.button>
  )
}
