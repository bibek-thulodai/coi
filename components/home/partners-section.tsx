"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ExternalLink } from "lucide-react"

export default function PartnersSection() {
  const partners = [
    { name: "YFC-KU", logo: "/assets/yfc.jpg" },
    { name: "Scholostic Foundation", logo: "/assets/sf.jpg" },
    { name: "DELIGHT", logo: "/assets/delight.jpg" },
    { name: "Language Of Liberty", logo: "/assets/liberty.jpg" },
    { name: "FountED", logo: "/assets/fount.jpg" },
    { name: "AVIXANTA", logo: "/assets/avainta.jpg" },
    { name: "BAN", logo: "/assets/ban.jpeg" },
    { name: "Coding Olynpics Nepal", logo: "/assets/coding.png" },
    { name: "Rotaract", logo: "/assets/rotract.png" },
    { name: "jaya Nepal", logo: "/assets/jaya.jpg" },
    { name: "lola", logo: "/assets/lola.jpg" },
  ]

  const marqueeRef = useRef<HTMLDivElement>(null)

  // Parallax effect for decorative elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const decorElements = document.querySelectorAll(".decor-element")

      decorElements.forEach((el, index) => {
        const element = el as HTMLElement
        const speed = index % 2 === 0 ? 0.05 : 0.08
        element.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-light-teal/5 to-white">
      {/* Decorative elements */}
      <div className="decor-element absolute -top-20 -left-20 w-64 h-64 rounded-full bg-light-teal/10 blur-3xl"></div>
      <div className="decor-element absolute top-40 right-10 w-32 h-32 rounded-full bg-dark-teal/5 blur-xl"></div>
      <div className="decor-element absolute bottom-20 -left-10 w-40 h-40 rounded-full bg-medium-teal/10 blur-xl"></div>
      <div className="decor-element absolute -bottom-20 right-20 w-80 h-80 rounded-full bg-light-teal/10 blur-3xl"></div>

      {/* Animated pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2399E1D9' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            animation: "patternMove 30s linear infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-3">
            <span className="inline-block px-4 py-1.5 bg-light-teal/20 text-dark-teal rounded-full text-sm font-medium relative overflow-hidden group">
              <span className="relative z-10">Trusted Partners</span>
              <span className="absolute inset-0 bg-dark-teal w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
            </span>
          </div>
          <h2 className="text-5xl font-bold text-dark-teal mb-6 relative">
            Our Partners
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-medium-teal rounded-full"></span>
          </h2>
          <p className="text-medium-teal max-w-2xl mx-auto text-lg">
            We collaborate with leading organizations to create valuable opportunities and drive meaningful change.
          </p>
        </motion.div>

        {/* Desktop view - Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 max-w-6xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-light-teal/20 shadow-sm h-48 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-light-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-all duration-300"></div>

              <div className="relative flex flex-col items-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="max-h-32 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute -bottom-10 group-hover:bottom-0 left-0 right-0 text-center transition-all duration-300 ease-in-out">
                  <span className="text-sm font-medium text-dark-teal bg-white/80 px-3 py-1.5 rounded-full">
                    {partner.name}
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 group-hover:bottom-2 group-hover:right-2 transition-all duration-300 ease-in-out">
                <div className="w-8 h-8 rounded-full bg-light-teal/20 flex items-center justify-center">
                  <ExternalLink className="w-3 h-3 text-dark-teal" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view - Marquee */}
        <div className="md:hidden relative overflow-hidden py-8" ref={marqueeRef}>
          <div className="flex animate-marquee space-x-6">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 group relative p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-light-teal/20 shadow-sm h-40 w-60 flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-h-24 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-xs font-medium text-dark-teal">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-dark-teal text-white rounded-full hover:bg-medium-teal transition-colors duration-300 group"
          >
            <span>View all partners</span>
            <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes patternMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
