"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  to: number
  duration?: number // duration in milliseconds
  suffix?: string // like '+', '%', etc.
  className?: string
}

export default function Counter({ to, duration = 2000, suffix = "", className = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = to / (duration / 16) // approx 60fps
    const step = () => {
      start += increment
      if (start < to) {
        setCount(Math.floor(start))
        requestAnimationFrame(step)
      } else {
        setCount(to)
      }
    }
    step()
  }, [to, duration])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}
