import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const skillGroups = {
  Frontend: [['HTML','95'],['CSS','92'],['JavaScript','90'],['React.js','88'],['Tailwind CSS','92']],
  Programming: [['Python','85'],['C','70'],['DSA Basics','75']],
  Tools: [['VS Code','95'],['Git','88'],['GitHub','90']]
}

function Bar({label, value}){
  return (
    <div className="py-2">
      <div className="flex justify-between text-sm text-text-dark/80"><div>{label}</div><div>{value}%</div></div>
      <div className="bg-primary/20 rounded-full h-2 mt-2 overflow-hidden">
        <div className="bg-accent h-2 rounded-full transition-all" style={{width:`${value}%`}} />
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <main className="pt-36 min-h-screen px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-6 grid gap-6">
          {Object.entries(skillGroups).map(([k,v])=> (
            <motion.div key={k} className="glass-card p-6 rounded-xl">
              <h4 className="font-semibold">{k}</h4>
              <div className="mt-4">
                {v.map(s=> <Bar key={s[0]} label={s[0]} value={s[1]} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
