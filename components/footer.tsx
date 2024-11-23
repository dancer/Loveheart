"use client"

import { motion } from "framer-motion"

export function Footer({ className = "" }: { className?: string }) {
  return (
    <motion.footer 
      className={`py-2 px-4 bg-black/80 backdrop-blur-sm z-10 text-xs ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-2 flex justify-between items-center text-sm">
        <div>
          © 2024 lovehe.art
        </div>
        <div></div>
      </div>
    </motion.footer>
  )
}

