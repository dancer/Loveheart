"use client"

import { motion } from "framer-motion"
import { NetworkFlow } from "@/components/network-flow"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)]">
      <motion.div 
        className="flex-grow flex items-center justify-center p-4 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full max-w-4xl aspect-[4/3] sm:aspect-[16/9]">
          <NetworkFlow />
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

