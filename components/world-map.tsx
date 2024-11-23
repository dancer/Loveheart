"use client"

import { motion } from "framer-motion"

export function WorldMap() {
  const locations = [
    { x: "20%", y: "30%" },
    { x: "40%", y: "50%" },
    { x: "60%", y: "20%" },
    { x: "80%", y: "40%" },
    { x: "30%", y: "70%" },
    { x: "70%", y: "60%" },
  ]

  return (
    <div className="relative h-[400px] bg-white/50 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10" />
      {locations.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-pink-400 rounded-full"
          style={{ left: pos.x, top: pos.y }}
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

