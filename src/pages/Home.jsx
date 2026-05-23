import React from 'react'
import { motion } from 'framer-motion'
import Typist from '../components/Typist'
import TicTacToe from '../components/TicTacToe'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main className="pt-36 min-h-screen flex flex-col items-center">
      <section className="w-full max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1,x:0}} className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary dark:text-text">
              Hello, I'm Jayashree — <span className="text-accent">Crafting premium digital experiences</span>
            </h1>
            <p className="text-lg text-text-dark/80 dark:text-text">I build elegant, high-performance web apps with a focus on design, accessibility, and delightful micro-interactions. <Typist/></p>
            <div className="flex gap-3 pt-4">
              <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-br from-accent to-highlight text-primary shadow">Hire Me</a>
              <a download href="/resume.pdf" className="px-4 py-2 rounded-md border border-accent text-accent">Download Resume</a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ['Projects','24'],['Skills','18'],['Certs','5'],['Coding Hours','1200+']
              ].map(s=> (
                <motion.div whileHover={{scale:1.03}} key={s[0]} className="glass-card p-4 rounded-lg">
                  <div className="text-xs text-text-dark/70">{s[0]}</div>
                  <div className="text-2xl font-semibold text-accent">{s[1]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1,x:0}} className="flex flex-col items-center gap-6">
            <div className="glass-card p-6 rounded-2xl w-full flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-secondary to-accent shadow-lg flex items-center justify-center text-white text-2xl">Jay</div>
              <p className="mt-4 text-center text-text-dark/80">Professional image placeholder — replace with a high-quality portrait.</p>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
              <TicTacToe />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-6xl px-6 md:px-12 mt-12">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Social</h3>
          <div className="flex gap-3 mt-3">
            <a className="px-3 py-2 rounded-md bg-primary/80 text-white" href="#">GitHub</a>
            <a className="px-3 py-2 rounded-md bg-primary/80 text-white" href="#">LinkedIn</a>
            <a className="px-3 py-2 rounded-md bg-primary/80 text-white" href="#">Twitter</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
