import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const send = e=>{ e.preventDefault(); setSent(true); setTimeout(()=> setSent(false), 2500) }

  return (
    <main className="pt-36 min-h-screen px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form onSubmit={send} className="mt-6 glass-card p-6 rounded-xl grid gap-4">
          <input required placeholder="Name" className="p-3 rounded-md bg-transparent border border-primary/20" />
          <input required type="email" placeholder="Email" className="p-3 rounded-md bg-transparent border border-primary/20" />
          <textarea required placeholder="Message" rows={6} className="p-3 rounded-md bg-transparent border border-primary/20" />
          <motion.button whileTap={{scale:0.98}} className="px-4 py-2 rounded-md bg-gradient-to-br from-accent to-highlight text-primary">Send Message</motion.button>
        </form>
        {sent && <div className="mt-4 p-4 rounded-md bg-accent text-primary">Message sent — I will get back soon!</div>}
      </div>
      <Footer />
    </main>
  )
}
