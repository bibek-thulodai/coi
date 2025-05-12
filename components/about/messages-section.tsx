"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Quote, ChevronRight } from "lucide-react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"

export default function MessagesSection() {
  const messages = [
    {
      role: "CEO & COFOUNDER",
      name: "Sujit Kumar Chaudary",
      message:
        "At Creating Opportunities, we believe that every person deserves access to opportunities to reach their full potential and live more fulfilling lives. However, unequal access persists, and systemic barriers prevent individuals from accessing opportunities in education, employment, entrepreneurship, wellbeing, and beyond. That is why we built Creating Opportunities – to connect people with life-changing experiences that empower personal growth, career development, and global understanding. Through our global platform, we are breaking down barriers to provide diverse, meaningful opportunities.",
      image: "/assets/sujit.jpg",
    },
    {
      role: "Strategic Advisor",
      name: "Prajwal Bhattrai",
      message:
        "As a Project Management Strategist and Youth Mentor, I wholeheartedly endorse the mission of Creating Opportunities International (CO) in bridging the information gap among young people globally. CO's commitment to providing a diverse array of educational and developmental opportunities is commendable and has the potential to catalyze positive change on a global scale. The transformative power of educational opportunities for young individuals cannot be overstated. Through CO's extensive database, encompassing scholarships, training, conferences, fellowships, grants, and employment avenues, young people are empowered to cultivate their skills, expand their knowledge, and effect meaningful change in their communities and beyond.",
      image: "/assets/prajwal.jpeg",
    },
    {
      role: "Project Advisor",
      name: "Anil Pokhrel",
      message:
        "Creating opportunities for youngsters is essential for their personal and professional development, as well as for the overall progress of society and the economy. Young people are more likely to become successful, productive, and involved members of society when they are given opportunities to explore their interests, acquire skills, and participate in meaningful activities. Creating opportunities for kids also assists in reducing poverty, inequality, and social exclusion, as well as contributing to a prosperous and sustainable future for all. His expertise and contribution have been fundamental to the expansion of Creating Opportunities International.",
      image: "/assets/anil.jpg",
    },
  ]

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#121d3e] mb-4 relative inline-block">
            Messages from Our Leadership
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-[#0e9aa7] rounded-full"
            ></motion.span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg mt-6">
            Hear from the visionaries who guide our organization's mission and initiatives.
          </p>
        </motion.div>

        <div className="space-y-24">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
            >
              {/* Image Column */}
              <div className="md:w-1/3 flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#0e9aa7]/10 to-transparent z-0"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  ></motion.div>

                  <motion.div
                    className="absolute -inset-8 border-2 border-dashed border-[#0e9aa7]/20 rounded-full z-0"
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  ></motion.div>

                  {/* Main image */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                    <Image
                      src={message.image || "/placeholder.svg?height=400&width=400"}
                      alt={message.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Role badge */}
                  <motion.div
                    initial={{ x: index % 2 === 1 ? 50 : -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className={`absolute -bottom-4 ${index % 2 === 1 ? "left-0" : "right-0"} z-20 py-2 px-4 bg-[#121d3e] text-white rounded-full shadow-lg`}
                  >
                    <span className="text-sm font-medium">{message.role}</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content Column */}
              <div className="md:w-2/3">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative bg-white p-8 rounded-2xl shadow-xl"
                >
                  {/* Quote icon */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    className="absolute -top-6 left-8 bg-[#0e9aa7] text-white p-3 rounded-full shadow-lg"
                  >
                    <Quote size={24} />
                  </motion.div>

                  {/* Decorative corner */}
                  <div
                    className={`absolute ${index % 2 === 1 ? "right" : "left"}-0 top-1/2 transform ${index % 2 === 1 ? "translate-x-1/2" : "-translate-x-1/2"} -translate-y-1/2 text-[#121d3e]`}
                  >
                    <ChevronRight size={24} className={index % 2 === 1 ? "rotate-180" : ""} />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-4 mt-4">{message.name}</h3>

                  {/* Message */}
                  <div className="relative">
                    <span className="absolute -left-2 top-0 text-6xl text-[#0e9aa7]/10 font-serif">"</span>
                    <p className="text-gray-700 leading-relaxed relative z-10 pl-4">{message.message}</p>
                    <span className="absolute -bottom-6 right-0 text-6xl text-[#0e9aa7]/10 font-serif">"</span>
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "40%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="h-0.5 bg-gradient-to-r from-[#0e9aa7] to-transparent mt-8"
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
