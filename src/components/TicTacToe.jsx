import React, { useState } from 'react'
import { motion } from 'framer-motion'

function checkWin(b){
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  for(const [a,b1,c] of lines) if(b[a] && b[a]===b[b1] && b[a]===b[c]) return b[a]
  return null
}

export default function TicTacToe(){
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState('X')
  const winner = checkWin(board)

  const play = i =>{
    if(board[i]|| winner) return
    const nb = board.slice(); nb[i]=turn; setBoard(nb); setTurn(t=> t==='X'?'O':'X')
  }
  const reset = ()=>{ setBoard(Array(9).fill(null)); setTurn('X') }

  return (
    <div className="p-4 glass-card rounded-xl w-full max-w-xs">
      <div className="grid grid-cols-3 gap-2">
        {board.map((v,i)=> (
          <motion.button key={i} onClick={()=> play(i)} whileTap={{scale:0.95}} className="h-14 flex items-center justify-center bg-gradient-to-br from-primary/80 to-primary/95 rounded-md text-white text-lg">{v}</motion.button>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-text-dark/80">Turn: {turn}</div>
        <div className="flex gap-2">
          <button onClick={reset} className="px-3 py-1 rounded-md bg-accent text-primary">Reset</button>
        </div>
      </div>
      {winner && <div className="mt-3 p-2 rounded-md bg-gradient-to-r from-accent to-highlight text-white">Winner: {winner}</div>}
    </div>
  )
}
