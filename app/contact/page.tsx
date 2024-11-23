"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Terminal, Circle, Heart, Mail } from 'lucide-react'
import { Footer } from "@/components/footer"

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      className="inline-block font-mono"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.03,
            ease: "easeIn"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

function TerminalWindow({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-800">
      <div className="flex items-center gap-2 px-4 py-2 bg-black border-b border-gray-800">
        <Circle className="w-3 h-3 fill-pink-500 stroke-pink-600" />
        <Circle className="w-3 h-3 fill-pink-400 stroke-pink-500" />
        <Circle className="w-3 h-3 fill-pink-300 stroke-pink-400" />
        {title && <span className="ml-2 text-sm font-mono text-gray-400">{title}</span>}
      </div>
      <div className="p-4 font-mono">
        {children}
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <motion.div 
        className="flex-grow mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-12">
          <section className="mb-20">
            <TerminalWindow title="lovehe.art/contact">
              <div className="flex items-center gap-2 text-pink-500 mb-4">
                <Terminal className="w-4 h-4" />
                <span className="text-sm">~/lovehe.art/contact $</span>
              </div>
              <div className="space-y-4">
                <TypewriterText text="Welcome to lovehe.art Contact - Let's Connect" />
                <div className="h-4" />
                <TypewriterText 
                  text="We'd love to hear from you and answer any questions you may have." 
                  delay={1.5}
                />
              </div>
            </TerminalWindow>
          </section>

          <section className="mb-20">
            <TerminalWindow>
              <div className="flex flex-col items-center justify-center space-y-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Heart className="w-24 h-24 text-pink-500" />
                </motion.div>
                <div className="text-center space-y-4">
                  <TypewriterText text="Get in Touch" delay={0.7} />
                  <p className="text-gray-400">
                    <TypewriterText text="We're here to help and answer any question you might have." delay={1.2} />
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <a 
                    href="mailto:hi@lovehe.art"
                    className="inline-flex items-center px-6 py-3 text-lg bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    hi@lovehe.art
                  </a>
                </motion.div>
              </div>
            </TerminalWindow>
          </section>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

