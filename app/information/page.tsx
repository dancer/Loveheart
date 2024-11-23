"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Terminal, ArrowRight, Circle, Mail } from 'lucide-react'
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

export default function InformationPage() {
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
            <TerminalWindow title="lovehe.art">
              <div className="flex items-center gap-2 text-pink-500 mb-4">
                <Terminal className="w-4 h-4" />
                <span className="text-sm">~/lovehe.art $</span>
              </div>
              <div className="space-y-4">
                <TypewriterText text="Welcome to lovehe.art - where money moves with heart" />
                <div className="h-4" />
                <TypewriterText 
                  text="A revolutionary payment platform that connects stablecoins with empathy." 
                  delay={1.5}
                />
                <div className="h-4" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  <Link 
                    href="mailto:hi@lovehe.art"
                    className="inline-flex items-center px-4 py-2 text-sm text-pink-500 border border-pink-500 rounded hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    <span className="font-mono">$ connect</span>
                  </Link>
                </motion.div>
              </div>
            </TerminalWindow>
          </section>

          <section className="mb-20 grid gap-8">
            <TerminalWindow title="features.sh">
              <div className="space-y-6">
                <div>
                  <TypewriterText text="# Core Features" />
                  <div className="mt-4 pl-4 border-l-2 border-pink-500">
                    <TypewriterText text="→ Seamless stablecoin transfers" delay={0.5} />
                    <br />
                    <TypewriterText text="→ Real-time global settlements" delay={1} />
                    <br />
                    <TypewriterText text="→ Multi-chain support" delay={1.5} />
                  </div>
                </div>
              </div>
            </TerminalWindow>

            <TerminalWindow title="benefits.sh">
              <div className="space-y-6">
                <div>
                  <TypewriterText text="# Why lovehe.art?" />
                  <div className="mt-4 pl-4 border-l-2 border-pink-500">
                    <TypewriterText text="→ Lightning-fast transactions" delay={0.5} />
                    <br />
                    <TypewriterText text="→ Minimal transaction fees" delay={1} />
                    <br />
                    <TypewriterText text="→ Secure and transparent" delay={1.5} />
                  </div>
                </div>
              </div>
            </TerminalWindow>

            <TerminalWindow title="network.sh">
              <div className="space-y-6">
                <div>
                  <TypewriterText text="# Supported Networks" />
                  <div className="mt-4 pl-4 border-l-2 border-pink-500">
                    <TypewriterText text="→ USDC (Base, Stellar, Solana)" delay={0.5} />
                    <br />
                    <TypewriterText text="→ PYUSD (Ethereum)" delay={1} />
                    <br />
                    <TypewriterText text="→ EUR, USD, MXN bridges" delay={1.5} />
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </section>

          <section className="text-center mb-20">
            <TerminalWindow>
              <div className="space-y-4">
                <TypewriterText text="Ready to move money with heart?" />
                <div className="h-4" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <Link 
                    href="mailto:hi@lovehe.art"
                    className="inline-flex items-center px-4 py-2 text-sm text-pink-500 border border-pink-500 rounded hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    <span className="font-mono">$ start --with-love</span>
                  </Link>
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

