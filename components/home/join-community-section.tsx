"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserPlus, Handshake, FileText, Megaphone, PlusCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function JoinCommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const communityOptions = [
    {
      icon: Users,
      title: "Become a Member / Volunteer",
      description: "Join our community and contribute your skills and time to make a difference.",
      link: "/get-involved/become-member",
    },
    {
      icon: UserPlus,
      title: "Become a COI Ambassador",
      description: "Represent Creating Opportunities in your community and help spread our mission.",
      link: "/get-involved/become-ambassador",
    },
    {
      icon: Handshake,
      title: "Be Our Partner Organization",
      description: "Collaborate with us to create greater impact through strategic partnership.",
      link: "/get-involved/become-partner",
    },
    {
      icon: FileText,
      title: "COI Brochure",
      description: "Download our brochure to learn more about our programs and initiatives.",
      link: "/brochure",
    },
    {
      icon: Megaphone,
      title: "Advertise with us",
      description: "Reach our network of professionals and organizations with your message.",
      link: "/get-involved/advertise",
    },
    {
      icon: PlusCircle,
      title: "Post an Opportunity",
      description: "Share job openings, internships, scholarships, and other opportunities with our community.",
      link: "/opportunities/post",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  // Intersection Observer for section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#121d3e]/5"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#121d3e]/5"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-[#121d3e]/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#121d3e] mb-4 relative inline-block">
            JOIN OUR COMMUNITY
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#121d3e]"></span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-lg">
            Be part of our growing community and help us create more opportunities for individuals across Nepal and
            beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {communityOptions.map((option, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="border-none rounded-xl overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white">
                <CardContent className="p-0">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 bg-[#121d3e]/10 rounded-2xl flex items-center justify-center">
                        <option.icon className="text-[#121d3e]" size={28} />
                      </div>
                      <div className="absolute w-8 h-8 bg-[#121d3e] rounded-full -right-2 -bottom-2 animate-pulse"></div>
                    </div>
                    <h3 className="font-bold text-xl text-[#121d3e] mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{option.description}</p>
                    <Link href={option.link} className="mt-auto">
                      <Button
                        variant="outline"
                        className="w-full border-[#121d3e] text-[#121d3e] hover:bg-[#121d3e] hover:text-white transition-colors duration-300 rounded-lg py-5"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-[#121d3e] to-[#121d3e]/60"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
