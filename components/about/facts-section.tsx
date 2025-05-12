"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Globe, LayoutGrid, Trophy, Clock } from "lucide-react"

export default function FactsSection() {
  const facts = [
    {
      icon: Users,
      value: "200000+",
      numericValue: 200000,
      label: "Reach",
    },
    {
      icon: Globe,
      value: "50+",
      numericValue: 50,
      label: "Countries",
    },
    {
      icon: LayoutGrid,
      value: "10+",
      numericValue: 10,
      label: "Projects",
    },
    {
      icon: Trophy,
      value: "20+",
      numericValue: 20,
      label: "Awards",
    },
    {
      icon: Clock,
      value: "1500+",
      numericValue: 1500,
      label: "Monthly Beneficiaries",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 text-white relative overflow-hidden" ref={ref}>
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/footer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />

      {/* Gradient overlay - changed to teal colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-600/80 z-0" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-white rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
            Facts About Us
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-teal-100/90">
            Key statistics that highlight our impact and reach in creating opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {facts.map((fact, index) => (
            <FactCard key={index} fact={fact} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FactCard({ fact, index, variants }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Counter animation
  useEffect(() => {
    if (!isInView) return

    let startValue = 0
    const endValue = fact.numericValue
    const duration = 2000
    const increment = Math.ceil(endValue / (duration / 16))

    const timer = setInterval(() => {
      startValue += increment
      if (startValue > endValue) {
        setCount(endValue)
        clearInterval(timer)
      } else {
        setCount(startValue)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, fact.numericValue])

  return (
    <motion.div ref={ref} variants={variants} className="relative group">
      <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 h-full transform transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-teal-500/20">
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -5, 5, 0],
            transition: { duration: 0.5 },
          }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <fact.icon className="mx-auto mb-6 text-teal-200 relative z-10" size={48} strokeWidth={1.5} />
        </motion.div>

        <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-teal-200">
          {isInView ? (
            <>
              {count.toLocaleString()}
              {fact.value.includes("+") && "+"}
            </>
          ) : (
            "0"
          )}
        </div>

        <p className="text-lg text-teal-100 font-medium">{fact.label}</p>
      </div>
    </motion.div>
  )
}
