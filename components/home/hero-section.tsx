"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  backgroundColor?: string
}

export default function HeroSection({
  title = "Creating Opportunities", // Default title updated
  subtitle = "Creating Opportunities International is a premier platform dedicated to empowering individuals across Nepal and beyond.", // Default subtitle updated
  backgroundImage,
  backgroundColor = "#013A87",
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const controls = useAnimation()

  // Mouse parallax effect with enhanced sensitivity
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const moveX = useTransform(smoothMouseX, [-500, 500], [-25, 25]) // Enhanced movement range
  const moveY = useTransform(smoothMouseY, [-500, 500], [-25, 25]) // Enhanced movement range

  // Scroll parallax effect
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  // Enhanced particle system with more variety
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      color: string
      direction: number
      pulse: boolean
      pulseSpeed: number
      trail: boolean
      trailLength: number
    }>
  >([])

  // 3D objects rotation state with enhanced dynamics
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })

  // Magnetic effect for buttons
  const primaryBtnRef = useRef<HTMLButtonElement | null>(null)
  const secondaryBtnRef = useRef<HTMLButtonElement | null>(null)

  // Text animation sequence control
  const [textAnimationComplete, setTextAnimationComplete] = useState(false)

  // Magnetic button effect
  const applyMagneticEffect = (e: MouseEvent, btnRef: React.RefObject<HTMLButtonElement>, strength = 0.5) => {
    if (!btnRef.current) return

    const rect = btnRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Calculate distance from center
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const radius = Math.max(rect.width, rect.height) * 1.5

    if (distance < radius) {
      // Apply magnetic pull based on distance
      const pull = (radius - distance) / radius
      btnRef.current.style.transform = `translate(${distanceX * strength * pull}px, ${distanceY * strength * pull}px) scale(${1 + pull * 0.05})`
    } else {
      btnRef.current.style.transform = "translate(0, 0) scale(1)"
    }
  }

  useEffect(() => {
    // Initialize enhanced particles with varied behaviors
    const newParticles = Array.from({ length: 120 }, () => {
      // Increased particle count
      const colorChoice = Math.random()
      let color

      if (colorChoice < 0.25) {
        color = "#017489" // Teal accent
      } else if (colorChoice < 0.5) {
        color = "#017489" // Lighter teal accent
      } else if (colorChoice < 0.75) {
        color = "#006955" // Dark teal accent
      } else if (colorChoice < 0.95) {
        color = "#02609E" // Indigo-900 accent
      } else {
        color = "#ffffff" // White
      }

      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 1, // Larger particles
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.7 + 0.2,
        color,
        direction: Math.random() > 0.5 ? 1 : -1,
        pulse: Math.random() > 0.7, // Some particles will pulse
        pulseSpeed: Math.random() * 0.02 + 0.01,
        trail: Math.random() > 0.8, // Some particles will have trails
        trailLength: Math.floor(Math.random() * 3) + 1,
      }
    })
    setParticles(newParticles)

    // Handle mouse move for parallax and magnetic effects
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = sectionRef.current?.getBoundingClientRect()
      if (rect) {
        // Update 3D object rotation based on mouse position with enhanced sensitivity
        const rotX = (clientY - rect.top - rect.height / 2) / 15
        const rotY = (clientX - rect.left - rect.width / 2) / 15
        setRotation({ x: rotX, y: rotY, z: 0 })
      }
    }

    // Reset button position when mouse leaves
    const handleMouseLeave = () => {
      if (primaryBtnRef.current) {
        primaryBtnRef.current.style.transform = "translate(0, 0) scale(1)"
      }
      if (secondaryBtnRef.current) {
        secondaryBtnRef.current.style.transform = "translate(0, 0) scale(1)"
      }
    }

    // Animate particles with varied behaviors and effects
    let animationFrameId: number
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Calculate new opacity for pulsing particles
          let newOpacity = particle.opacity
          if (particle.pulse) {
            newOpacity = particle.opacity + Math.sin(Date.now() * particle.pulseSpeed) * 0.2
            newOpacity = Math.max(0.1, Math.min(0.9, newOpacity))
          }

          return {
            ...particle,
            x: particle.x + Math.sin(Date.now() * 0.001) * 0.15 * particle.direction,
            y: (particle.y - particle.speed) % 100,
            opacity: newOpacity,
          }
        }),
      )
      animationFrameId = requestAnimationFrame(animateParticles)
    }

    // Start animations
    setIsVisible(true)
    controls.start("visible")
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("scroll", handleScroll)
    animationFrameId = requestAnimationFrame(animateParticles)

    // Set text animation complete after delay
    const timer = setTimeout(() => {
      setTextAnimationComplete(true)
    }, 2000)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(timer)
    }
  }, [mouseX, mouseY, controls])

  // Text animation variants
  const titleCharVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  // Split title into characters for animation
  const titleChars = (typeof title === "string" ? title : "Default Title").split("")

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Enhanced noise texture overlay with animation */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none noise-texture animate-subtle-noise"></div>

      {/* Background with enhanced parallax effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundColor: !backgroundImage ? backgroundColor : "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
          translateY: scrollY * 0.4, // Enhanced parallax
        }}
      />

      {/* Enhanced gradient overlay with multiple animated layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#006955]/40 via-[#013A87]/30 to-[#02609E]/30"
        animate={{
          opacity: [0.7, 0.8, 0.7],
          background: [
            "linear-gradient(to bottom right, rgba(0,105,85,0.4), rgba(1,58,135,0.3), rgba(2,96,158,0.3))",
            "linear-gradient(to bottom right, rgba(0,105,85,0.5), rgba(1,58,135,0.4), rgba(2,96,158,0.4))",
            "linear-gradient(to bottom right, rgba(0,105,85,0.4), rgba(1,58,135,0.3), rgba(2,96,158,0.3))",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#006955]/20 via-transparent to-transparent"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#013A87]/30"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
      />

      {/* Enhanced radial glow effects with animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full radial-glow opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full radial-glow-accent opacity-15 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
      />

      {/* New floating light orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-[#017489] blur-sm"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 0.9, 0.6],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-[#017489] blur-sm"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-white blur-sm"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 10, 0],
          y: [0, 10, 0],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-[#02609E] blur-sm"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1.2 }}
      />

      {/* Enhanced particles system with trails */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              filter: `blur(${particle.size > 3 ? 1 : 0}px)`,
            }}
            animate={
              particle.pulse
                ? {
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={
              particle.pulse
                ? {
                    duration: 2 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }
                : {}
            }
          >
            {/* Particle trails */}
            {particle.trail &&
              Array.from({ length: particle.trailLength }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${particle.size * (1 - i * 0.2)}px`,
                    height: `${particle.size * (1 - i * 0.2)}px`,
                    backgroundColor: particle.color,
                    opacity: particle.opacity * (1 - i * 0.3),
                    top: `${i * 2}px`,
                    filter: `blur(${particle.size > 3 ? 1 : 0}px)`,
                  }}
                />
              ))}
          </motion.div>
        ))}
      </div>

      {/* Enhanced 3D geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D cube with enhanced effects */}
        <motion.div
          className="absolute top-1/4 right-[15%] w-40 h-40 md:w-60 md:h-60 hidden md:block"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              rotateX: rotation.x,
              rotateY: rotation.y,
              rotateZ: rotation.z,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [15, 30, 15],
            }}
            transition={{
              rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              rotateX: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatType: "reverse" },
            }}
          >
            {/* Enhanced cube faces with glowing edges */}
            <motion.div
              className="absolute w-full h-full bg-gradient-to-br from-[#017489]/20 to-[#017489]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform translate-z-[30px]"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(74,95,157,0.3)",
                  "0 0 15px rgba(74,95,157,0.5)",
                  "0 0 5px rgba(74,95,157,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute w-full h-full bg-gradient-to-br from-[#017489]/20 to-[#017489]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform -translate-z-[30px]"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(138,111,189,0.3)",
                  "0 0 15px rgba(138,111,189,0.5)",
                  "0 0 5px rgba(138,111,189,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
            />
            <motion.div
              className="absolute w-full h-full bg-gradient-to-br from-[#017489]/20 to-[#017489]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-y-90 translate-z-[30px]"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(74,95,157,0.3)",
                  "0 0 15px rgba(74,95,157,0.5)",
                  "0 0 5px rgba(74,95,157,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            />
            <motion.div
              className="absolute w-full h-full bg-gradient-to-br from-[#017489]/20 to-[#017489]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-y-90 -translate-z-[30px]"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(138,111,189,0.3)",
                  "0 0 15px rgba(138,111,189,0.5)",
                  "0 0 5px rgba(138,111,189,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1.5 }}
            />
            <motion.div
              className="absolute w-full h-full bg-gradient-to-br from-[#017489]/20 to-[#017489]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-x-90 translate-z-[30px]"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(74,95,157,0.3)",
                  "0 0 15px rgba(74,95,157,0.5)",
                  "0 0 5px rgba(74,95,157,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
            />
            <motion.div
              className="absolute w-full h-full bg-gradient-to-br from-[#017489]/20 to-[#017489]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-x-90 -translate-z-[30px]"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(138,111,189,0.3)",
                  "0 0 15px rgba(138,111,189,0.5)",
                  "0 0 5px rgba(138,111,189,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced floating pyramid with glowing edges */}
        <motion.div
          className="absolute bottom-1/3 left-[10%] w-32 h-32 md:w-48 md:h-48 hidden md:block"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              rotateX: rotation.x * 0.7,
              rotateY: rotation.y * 0.7,
              rotateZ: rotation.z,
            }}
            animate={{
              rotateY: [0, -360],
              rotateX: [15, 25, 15],
            }}
            transition={{
              rotateY: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              rotateX: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatType: "reverse" },
            }}
          >
            {/* Enhanced pyramid faces with glowing edges */}
            <motion.div
              className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#006955]/20 transform-style-3d transform -translate-y-1/2"
              animate={{
                borderBottomColor: ["rgba(106,127,189,0.2)", "rgba(106,127,189,0.4)", "rgba(106,127,189,0.2)"],
                filter: [
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                  "drop-shadow(0 0 15px rgba(106,127,189,0.5))",
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#006955]/20 transform-style-3d transform -translate-y-1/2 rotate-y-90"
              animate={{
                borderBottomColor: ["rgba(106,127,189,0.2)", "rgba(106,127,189,0.4)", "rgba(106,127,189,0.2)"],
                filter: [
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                  "drop-shadow(0 0 15px rgba(106,127,189,0.5))",
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
            />
            <motion.div
              className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#006955]/20 transform-style-3d transform -translate-y-1/2 rotate-y-180"
              animate={{
                borderBottomColor: ["rgba(106,127,189,0.2)", "rgba(106,127,189,0.4)", "rgba(106,127,189,0.2)"],
                filter: [
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                  "drop-shadow(0 0 15px rgba(106,127,189,0.5))",
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            />
            <motion.div
              className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#006955]/20 transform-style-3d transform -translate-y-1/2 rotate-y-270"
              animate={{
                borderBottomColor: ["rgba(106,127,189,0.2)", "rgba(106,127,189,0.4)", "rgba(106,127,189,0.2)"],
                filter: [
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                  "drop-shadow(0 0 15px rgba(106,127,189,0.5))",
                  "drop-shadow(0 0 5px rgba(106,127,189,0.3))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1.5 }}
            />
          </motion.div>
        </motion.div>

        {/* New floating ring */}
        <motion.div
          className="absolute top-2/3 right-1/4 w-20 h-20 md:w-32 md:h-32 hidden md:block"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative w-full h-full rounded-full border-2 border-[#017489]/30"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateY: [0, 180],
              rotateX: [30, 60, 30],
              boxShadow: [
                "0 0 5px rgba(138,111,189,0.3)",
                "0 0 15px rgba(138,111,189,0.5)",
                "0 0 5px rgba(138,111,189,0.3)",
              ],
            }}
            transition={{
              rotateY: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              rotateX: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatType: "reverse" },
              boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
            }}
          >
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-[#017489]/20"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(74,95,157,0.3)",
                  "0 0 15px rgba(74,95,157,0.5)",
                  "0 0 5px rgba(74,95,157,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content with enhanced animations */}
      <div className="container mx-auto h-full relative z-20 flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-4xl">
          {/* Enhanced title with character-by-character animation */}
          <div className="overflow-hidden mb-6 relative">
            <div className="absolute -left-8 top-1/2 w-6 h-[2px] bg-gradient-to-r from-[#017489] to-transparent"></div>

            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-white overflow-hidden flex flex-wrap">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={titleCharVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === " " ? "mr-4" : ""}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              {/* Enhanced animated underline with glow */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#017489] to-[#017489]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{
                  boxShadow: "0 0 10px rgba(138,111,189,0.7)",
                }}
              />
            </motion.div>

            <div className="absolute -right-8 top-1/2 w-6 h-[2px] bg-gradient-to-l from-[#017489] to-transparent"></div>

            {/* Enhanced decorative elements with glow */}
            <motion.div
              className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-[#017489] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                boxShadow: "0 0 8px rgba(138,111,189,0.6)",
              }}
            />
            <motion.div
              className="absolute -bottom-4 left-24 w-40 h-1 bg-gradient-to-r from-[#017489] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ duration: 1.2, delay: 1.2 }}
              style={{
                boxShadow: "0 0 8px rgba(74,95,157,0.6)",
              }}
            />
          </div>

          {/* Enhanced stylized subtitle with reveal animation and glow */}
          {subtitle && (
            <div className="overflow-hidden relative">
              <motion.div
                className="absolute -left-4 top-1/2 w-3 h-3 rounded-full bg-[#017489]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                style={{
                  boxShadow: "0 0 15px rgba(138,111,189,0.8)",
                }}
              />
              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed pl-2 backdrop-blur-sm bg-[#013A87]/10 rounded-md p-4 border-l-2 border-[#017489]"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                  boxShadow: "0 4px 20px rgba(18,29,62,0.3)",
                }}
              >
                {subtitle}
              </motion.p>
            </div>
          )}

          {/* Enhanced CTA buttons with magnetic effect */}
          <motion.div
            className="mt-10 flex flex-wrap gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="/opportunities" // Link to the opportunities page
              className="px-10 py-4 rounded-md bg-gradient-to-r from-[#006955] to-[#017489] text-white font-medium relative overflow-hidden group shadow-lg shadow-[#013A87]/20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(42, 63, 125, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  className="mr-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </motion.span>
                Explore Opportunities {/* Button text updated */}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#017489] to-[#006955]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <motion.span
                className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-[#017489] via-[#02609E] to-[#006955] transition-all duration-500"
                style={{ zIndex: -1 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator with pulse effect */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.span
          className="text-white/70 text-sm mb-2 tracking-widest uppercase "
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          Explore
        </motion.span>
        <motion.div
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-1 relative overflow-hidden"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0.3)",
              "0 0 15px rgba(255,255,255,0.5)",
              "0 0 0px rgba(255,255,255,0.3)",
            ],
            borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.3)"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full relative z-10"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            style={{
              boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#017489]/30 to-transparent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </motion.div>
      </motion.div>

      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes subtle-noise {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        .noise-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          background-size: 200px;
        }
        .animate-subtle-noise {
          animation: subtle-noise 8s linear infinite;
        }
        .radial-glow {
          background: radial-gradient(circle, rgba(1,116,137,0.4) 0%, rgba(1,116,137,0) 70%);
        }
        .radial-glow-accent {
          background: radial-gradient(circle, rgba(1,116,137,0.4) 0%, rgba(1,116,137,0) 70%);
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-270 {
          transform: rotateY(270deg);
        }
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        .translate-z-\\[30px\\] {
          transform: translateZ(30px);
        }
        .-translate-z-\\[30px\\] {
          transform: translateZ(-30px);
        }
      `}</style>
    </section>
  )
}
