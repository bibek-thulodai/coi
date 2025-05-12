"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in" | "bounce"
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(section)
        }
      },
      {
        threshold,
      },
    )

    observer.observe(section)

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    if (!isVisible) {
      return "opacity-0"
    }

    const baseClasses = `opacity-100 transition-all duration-${Math.round(duration * 1000)} delay-${delay * 1000}`

    switch (animation) {
      case "fade-up":
        return isVisible ? `${baseClasses} translate-y-0` : `${baseClasses} translate-y-10 opacity-0`
      case "fade-in":
        return isVisible ? `${baseClasses} opacity-100` : `${baseClasses} opacity-0`
      case "slide-in-left":
        return isVisible ? `${baseClasses} translate-x-0` : `${baseClasses} -translate-x-20 opacity-0`
      case "slide-in-right":
        return isVisible ? `${baseClasses} translate-x-0` : `${baseClasses} translate-x-20 opacity-0`
      case "zoom-in":
        return isVisible ? `${baseClasses} scale-100` : `${baseClasses} scale-90 opacity-0`
      case "bounce":
        return isVisible ? `${baseClasses} animate-bounce` : `${baseClasses} opacity-0`
      default:
        return isVisible ? `${baseClasses} opacity-100` : `${baseClasses} opacity-0`
    }
  }

  return (
    <div
      ref={sectionRef}
      className={cn(getAnimationClass(), className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
