import React, { useEffect, useState } from 'react'

export default function Typist({words=['Software Engineer','UI Engineer','Full-Stack Developer'], speed=90}){
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState('')
  useEffect(()=>{
    let i=0, forward=true
    const loop = ()=>{
      const word = words[idx]
      const id = setInterval(()=>{
        setSub(prev=>{
          if(forward){
            if(prev.length < word.length) return word.slice(0, prev.length+1)
            forward=false; return prev
          } else {
            if(prev.length>0) return prev.slice(0, -1)
            clearInterval(id);
            setIdx((k)=> (k+1)%words.length);
            forward=true;
            return ''
          }
        })
      }, speed)
      return ()=> clearInterval(id)
    }
    const t = setTimeout(loop, 300)
    return ()=> clearTimeout(t)
  },[idx])
  return <span className="text-accent">{sub}<span className="blink">|</span></span>
}
