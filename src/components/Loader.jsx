import React from 'react'
import { motion } from 'framer-motion'

export default function Loader(){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-primary/80 to-primary/95">
      <motion.div animate={{rotate:360}} transition={{repeat: Infinity, duration:2}} className="w-20 h-20 rounded-lg bg-gradient-to-tr from-accent to-highlight shadow-2xl flex items-center justify-center text-white font-bold">JP</motion.div>
    </div>
  )
}
