"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TilesProps {
  className?: string
  rows?: number
  cols?: number
  tileClassName?: string
  tileSize?: "sm" | "md" | "lg"
}

const tileSizes = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
}

export function Tiles({
  className,
  rows = 100,
  cols = 10,
  tileClassName,
  tileSize = "md",
}: TilesProps) {
  const rowsArray = new Array(rows).fill(1)
  const colsArray = new Array(cols).fill(1)

  return (
    <div 
      className={cn(
        "absolute inset-0 z-0 flex flex-wrap",
        className
      )}
    >
      {rowsArray.map((_, i) => 
        colsArray.map((_, j) => {
          // Create wave-like animation delay based on position
          const animationDelay = (i + j) * 0.01 + Math.random() * 1
          
          return (
            <motion.div
              key={`tile-${i}-${j}`}
              className={cn(
                tileSizes[tileSize],
                "border-[0.5px] border-gray-300/60 relative",
                tileClassName
              )}
              initial={{ backgroundColor: "rgba(0,0,0,0)" }}
              animate={{ 
                backgroundColor: [
                  "rgba(0,0,0,0)",
                  "rgba(0,0,0,0.015)",
                  "rgba(0,0,0,0)",
                ]
              }}
              transition={{
                duration: 3,
                delay: animationDelay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              whileHover={{
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                borderColor: "rgba(59, 130, 246, 0.3)",
                transition: { duration: 0 }
              }}
            />
          )
        })
      ))
    </div>
  )
}