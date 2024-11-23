"use client"

import { motion } from "framer-motion"

export function NetworkGraph({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 50, y: 50 },
    { x: 150, y: 100 },
    { x: 250, y: 50 },
    { x: 100, y: 150 },
    { x: 200, y: 150 },
  ]

  const connections = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
  ]

  return (
    <div className={className}>
      <svg
        viewBox="0 0 300 200"
        className="w-full h-auto"
      >
        {connections.map(([start, end], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            stroke="rgba(244, 114, 182, 0.2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="8"
            fill="rgb(244, 114, 182)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

