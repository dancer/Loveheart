"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Terminal, ArrowRight, Circle, Heart, Zap, Code, Mail, Star } from 'lucide-react'
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

export default function PartnersPage() {
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
            <TerminalWindow title="lovehe.art/partners">
              <div className="flex items-center gap-2 text-pink-500 mb-4">
                <Terminal className="w-4 h-4" />
                <span className="text-sm">~/lovehe.art/partners $</span>
              </div>
              <div className="space-y-4">
                <TypewriterText text="Welcome to lovehe.art Partners - Join the Financial Revolution" />
                <div className="h-4" />
                <TypewriterText 
                  text="Help us build a more inclusive and efficient global payment system." 
                  delay={1.5}
                />
              </div>
            </TerminalWindow>
          </section>

          <section className="mb-20 grid gap-8">
            <TerminalWindow title="innovation.sh">
              <div className="space-y-6">
                <div>
                  <TypewriterText text="# Innovation Showcase" />
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { icon: Zap, title: "Lightning Fast", description: "Experience transactions at the speed of light" },
                      { icon: Heart, title: "Community Driven", description: "Built with love, powered by our passionate community" },
                      { icon: Code, title: "Future Ready", description: "Constantly evolving to meet tomorrow's financial needs" }
                    ].map((item, index) => (
                      <div key={item.title} className="flex flex-col items-center text-center p-4 border border-gray-800 rounded-lg">
                        <item.icon className="w-8 h-8 text-pink-400 mb-2" />
                        <TypewriterText text={item.title} delay={0.5 + index * 0.5} />
                        <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TerminalWindow>

            <TerminalWindow title="partnership-tiers.sh">
              <div className="space-y-6">
                <div>
                  <TypewriterText text="# Partnership Tiers" />
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Bronze", price: "100+", stars: 1, features: ["Listed on partners page", "Monthly newsletter"] },
                      { name: "Silver", price: "1k+", stars: 2, features: ["Bronze benefits", "Early feature previews", "Quarterly strategy call"] },
                      { name: "Gold", price: "10k+", stars: 3, features: ["Silver benefits", "Custom badge on listing", "Annual product roadmap input"] }
                    ].map((tier, index) => (
                      <div key={tier.name} className="border border-pink-500 rounded-lg p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <TypewriterText text={tier.name} delay={0.5 + index * 0.5} />
                            <div className="flex">
                              {[...Array(tier.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-pink-400 mt-2">${tier.price}</p>
                        </div>
                        <ul className="mt-4 text-sm text-gray-400">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 mb-1">
                              <Heart className="w-3 h-3 text-pink-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </section>

          <section className="text-center mb-20">
            <TerminalWindow>
              <div className="space-y-4">
                <TypewriterText text="Ready to join the financial revolution?" />
                <div className="h-4" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 text-sm text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    <span className="font-mono">partner --with-love</span>
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

