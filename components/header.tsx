"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatedHeart } from "@/components/animated-heart"
import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react'

const PulsingDot = () => (
  <motion.span
    className="inline-block w-1.5 h-1.5 bg-white rounded-full ml-0.5 mb-0.5"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [1, 0.7, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white relative"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(45deg, #fff 30%, #ff69b4 100%)',
            }}
          >
            lovehe<PulsingDot />art
          </motion.span>
        </Link>
        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8">
            <AnimatedHeart />
          </div>
        </Link>
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row absolute sm:relative top-full left-0 right-0 sm:top-auto sm:left-auto sm:right-auto bg-black sm:bg-transparent p-4 sm:p-0 items-center gap-4 sm:gap-6 text-sm`}>
          <Link href="/information" className="hover:text-gray-400 transition-colors" onClick={handleLinkClick}>
            Information
          </Link>
          <Link href="/partners" className="hover:text-gray-400 transition-colors" onClick={handleLinkClick}>
            Partners
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

