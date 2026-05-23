import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function Projects(){
  return (
    <main className="pt-36 min-h-screen px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6">
          <motion.div whileHover={{scale:1.02}} className="glass-card p-6 rounded-xl flex flex-col md:flex-row items-start gap-4">
            <div className="w-full md:w-2/5 h-44 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white">Reestar Preview</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Reestar — Restaurant Menu Website</h3>
              <p className="text-text-dark/80 mt-2">Elegant restaurant menu built with semantic HTML & CSS. Clean, responsive, and accessible.</p>
              <div className="mt-4 flex gap-3">
                <a className="px-3 py-2 rounded-md bg-accent text-primary" href="#">Live Preview</a>
                <a className="px-3 py-2 rounded-md border border-accent text-accent" href="#">GitHub</a>
              </div>
              <div className="mt-3 text-sm text-text-dark/70">Technologies: HTML, CSS</div>
            </div>
          </motion.div>

          <div className="glass-card p-6 rounded-xl text-center">More exciting projects coming soon…</div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
