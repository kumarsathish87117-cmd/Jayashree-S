import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function About(){
  return (
    <main className="pt-36 min-h-screen flex flex-col items-center px-6 md:px-12">
      <div className="max-w-5xl w-full">
        <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-3xl font-bold">About Me</motion.h2>
        <motion.p className="mt-4 text-text-dark/80 glass-card p-6 rounded-xl">I am passionate about building beautiful, accessible, and performant web applications. My journey started with HTML & CSS and evolved into modern React and design-driven engineering.</motion.p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <motion.div className="glass-card p-6 rounded-xl">
            <h4 className="font-semibold">Education</h4>
            <p className="text-text-dark/80 mt-2">B.Sc. in Computer Science — premium institution</p>
          </motion.div>
          <motion.div className="glass-card p-6 rounded-xl">
            <h4 className="font-semibold">Career Goal</h4>
            <p className="text-text-dark/80 mt-2">To lead product-focused engineering teams and craft delightful UX for complex systems.</p>
          </motion.div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold">When I'm not coding…</h3>
          <div className="mt-3 flex gap-3">
            <div className="glass-card p-4 rounded-lg">Learning new tech</div>
            <div className="glass-card p-4 rounded-lg">Watching tech videos</div>
            <div className="glass-card p-4 rounded-lg">Building creative websites</div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
