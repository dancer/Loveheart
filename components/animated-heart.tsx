"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const glowStyle = {
  boxShadow: '0 0 5px 1px rgba(236, 72, 153, 0.35), 0 0 10px 2px rgba(236, 72, 153, 0.25)',
}

const heartGrid = [
  [0,0,1,1,0,0,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0,0],
]

export function AnimatedHeart() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-12 h-12">
        <motion.div
          className="grid gap-0.5"
          style={{
            gridTemplateColumns: `repeat(${heartGrid[0].length}, 1fr)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {heartGrid.map((row, i) =>
            row.map((cell, j) =>
              cell === 1 ? (
                <motion.div
                  key={`${i}-${j}`}
                  className="h-1 w-1 rounded-sm bg-pink-400"
                  style={glowStyle}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: isHovered ? [1, 1.4, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (i + j) * 0.02,
                    ease: "easeInOut",
                  }}
                />
              ) : (
                <div key={`${i}-${j}`} className="h-1 w-1" />
              )
            )
          )}
        </motion.div>
      </div>
    </div>
  )
}

