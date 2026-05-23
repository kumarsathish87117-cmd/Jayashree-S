import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'

const links = [
  ['Home','/'],['About','/about'],['Skills','/skills'],['Projects','/projects'],['Contact','/contact']
]

export default function Nav(){
  return (
    <header className="fixed w-full z-40 top-6 px-6 md:px-12">
      <motion.nav initial={{opacity:0, y:-10}} animate={{opacity:1,y:0}} className="glass-card mx-auto max-w-6xl p-3 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-secondary to-accent shadow-md flex items-center justify-center text-white font-semibold">JP</div>
          <div className="hidden md:block">
            <div className="text-sm text-text-dark">Jayashree Portfolio</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3">
            {links.map(l=> (
              <NavLink key={l[1]} to={l[1]} className={({isActive})=> `px-3 py-2 rounded-md text-sm transition-all ${isActive? 'bg-gradient-to-br from-accent to-accent/70 text-white':'text-text-dark/70 hover:text-accent'}`}>
                {l[0]}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </motion.nav>
    </header>
  )
}
