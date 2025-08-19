import React from 'react'
import { motion } from 'framer-motion'

interface LoadingSkeletonProps {
  className?: string
  variant?: 'card' | 'text' | 'image' | 'button'
  lines?: number
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  variant = 'card',
  lines = 3
}) => {
  const pulseAnimation = {
    initial: { opacity: 0.6 },
    animate: { opacity: 1 },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as const
    }
  }

  if (variant === 'text') {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded animate-pulse"
            style={{ width: `${Math.random() * 40 + 60}%` }}
            {...pulseAnimation}
          />
        ))}
      </div>
    )
  }

  if (variant === 'image') {
    return (
      <motion.div
        className={`bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-lg animate-pulse ${className}`}
        {...pulseAnimation}
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    )
  }

  if (variant === 'button') {
    return (
      <motion.div
        className={`h-12 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded-xl animate-pulse ${className}`}
        {...pulseAnimation}
      />
    )
  }

  return (
    <motion.div
      className={`bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-emerald-100 overflow-hidden ${className}`}
      {...pulseAnimation}
    >
      <div className="h-48 bg-gradient-to-br from-emerald-100 to-yellow-100 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded animate-pulse w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded animate-pulse" />
          <div className="h-4 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded animate-pulse w-5/6" />
        </div>
        <div className="flex space-x-2">
          <div className="h-6 w-16 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded-full animate-pulse" />
        </div>
      </div>
    </motion.div>
  )
}
