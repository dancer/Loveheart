"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Node {
  id: string
  label: string
  x: number
  y: number
}

interface Flow {
  from: string
  to: string
  width: number
  customControlPoints?: { x1: number, y1: number, x2: number, y2: number }
}

export function NetworkFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeFlowIndex, setActiveFlowIndex] = useState(0)

  const nodes: Node[] = [
    { id: "usdc", label: "USDC", x: 20, y: 10 },
    { id: "pyusd", label: "PYUSD", x: 30, y: 30 },
    { id: "eur", label: "EUR", x: 35, y: 50 },
    { id: "usd", label: "USD", x: 40, y: 70 },
    { id: "mxn", label: "MXN", x: 80, y: 10 },
    { id: "sol", label: "Solana", x: 70, y: 30 },
    { id: "ltc", label: "Litecoin", x: 75, y: 50 },
    { id: "btc", label: "Bitcoin", x: 60, y: 70 },
  ]

  const flows: Flow[] = [
    { from: "usdc", to: "eur", width: 3 },
    { from: "usd", to: "ltc", width: 3 },
    { from: "ltc", to: "mxn", width: 2 },
    { from: "sol", to: "btc", width: 2.5 },
    { 
      from: "usd", 
      to: "pyusd", 
      width: 2.5,
      customControlPoints: { x1: 45, y1: 70, x2: 45, y2: 30 }
    },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const drawGlowingLine = (startNode: Node, endNode: Node, progress: number, width: number, customControlPoints?: { x1: number, y1: number, x2: number, y2: number }) => {
      const startX = startNode.x * canvas.width / 100
      const startY = startNode.y * canvas.height / 100
      const endX = endNode.x * canvas.width / 100
      const endY = endNode.y * canvas.height / 100

      const controlX1 = customControlPoints ? customControlPoints.x1 * canvas.width / 100 : startX + (endX - startX) / 2
      const controlY1 = customControlPoints ? customControlPoints.y1 * canvas.height / 100 : startY
      const controlX2 = customControlPoints ? customControlPoints.x2 * canvas.width / 100 : controlX1
      const controlY2 = customControlPoints ? customControlPoints.y2 * canvas.height / 100 : endY

      ctx.beginPath()
      ctx.moveTo(startX, startY)
      
      const totalPoints = 100
      for (let i = 0; i <= totalPoints; i++) {
        const t = i / totalPoints
        const x = Math.pow(1-t, 3) * startX + 
                  3 * Math.pow(1-t, 2) * t * controlX1 + 
                  3 * (1-t) * Math.pow(t, 2) * controlX2 + 
                  Math.pow(t, 3) * endX
        const y = Math.pow(1-t, 3) * startY + 
                  3 * Math.pow(1-t, 2) * t * controlY1 + 
                  3 * (1-t) * Math.pow(t, 2) * controlY2 + 
                  Math.pow(t, 3) * endY

        if (t <= progress) {
          ctx.lineTo(x, y)
        }
      }

      const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
      gradient.addColorStop(0, 'rgba(255, 105, 180, 0.8)')
      gradient.addColorStop(1, 'rgba(255, 105, 180, 0)')

      ctx.strokeStyle = gradient
      ctx.lineWidth = width * (canvas.width / 1000)
      ctx.lineCap = 'round'
      ctx.shadowColor = 'rgba(255, 105, 180, 0.5)'
      ctx.shadowBlur = 5
      ctx.stroke()

      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
    }

    let animationProgress = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const flow = flows[activeFlowIndex]
      const startNode = nodes.find(n => n.id === flow.from)
      const endNode = nodes.find(n => n.id === flow.to)
      if (startNode && endNode) {
        const progress = animationProgress <= 1 ? animationProgress : 2 - animationProgress
        drawGlowingLine(startNode, endNode, progress, flow.width, flow.customControlPoints)
      }

      animationProgress += 0.005
      if (animationProgress > 2) {
        animationProgress = 0
        setActiveFlowIndex((prevIndex) => (prevIndex + 1) % flows.length)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animate as unknown as number)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [activeFlowIndex])

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0"
      />
      <svg className="w-full h-full absolute inset-0 pointer-events-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="1.5%"
              fill="#ff69b4"
              filter="url(#glow)"
            />
            <text
              x={`${node.x}%`}
              y={`${node.y + 4}%`}
              textAnchor="middle"
              className="text-[0.7rem] sm:text-xs md:text-sm fill-current font-medium"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

