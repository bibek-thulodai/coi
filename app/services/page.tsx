"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Users, GraduationCap, Code, Handshake, Calendar, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingModal } from "@/components/booking-modal"

import HeroSection from "@/components/hero-section"
import AcademicReformPackage from "@/components/academic-reform-package"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  intro: string
  offerings: string[]
  audience: string[]
  benefits: string[]
  onBookService: () => void
  variants: any
}

function ServiceCard({ icon, title, intro, offerings, audience, benefits, onBookService, variants }: ServiceCardProps) {
  return (<>
  
    <motion.div
      variants={variants}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-md">
        <CardHeader>
          <div className="mb-4 text-[#0c8b98]">{icon}</div>
          <CardTitle className="text-2xl text-[#0c8b98]">{title}</CardTitle>
          <CardDescription className="text-base mt-2">{intro}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Detailed Offering:</h3>
              <ul className="space-y-1">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#0c8b98] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Who It's For:</h3>
              <ul className="space-y-1">
                {audience.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#0c8b98] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Key Benefits:</h3>
              <ul className="space-y-1">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#0c8b98] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onBookService} className="w-full bg-[#0c8b98] hover:bg-[#0a7a86] text-white">
            <span className="flex items-center justify-center gap-2">
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
    </>
  )
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Mouse position for background effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <HeroSection
        title="Our Services"
        subtitle="High-quality Services that represent our mission and values"
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      />
      <div className="container mx-auto py-16 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight mb-4 text-[#0c8b98]">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your organizational needs and drive sustainable growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Example Service */}
          <ServiceCard
            icon={<Users className="h-10 w-10" />}
            title="Corporate Services"
            intro="COI provides strategic and administrative solutions to support corporate clients with streamlined operations, capacity building and impactful CSR initiatives."
            offerings={[
              "HR & Talent Management",
              "ISO Education Consultation",
              "Corporate Social Responsibility Program Design",
              "Policy & Strategic Planning Consultation",
              "Vendor & Logistics Management",
            ]}
            audience={["Corporations, SMEs, NGOs", "CSR and HR departments"]}
            benefits={[
              "End-to-end corporate support",
              "Increased compliance and operational efficiency",
              "Tailored strategic alignment",
            ]}
            onBookService={() => openModal("Corporate Services")}
            variants={item}
          />
           {/* Educational Services */}
          <ServiceCard
            icon={<GraduationCap className="h-10 w-10" />}
            title="Educational Services"
            intro="We empower educational institutions with resources, tools and consultancy to enhance academic quality, operations and global positioning."
            offerings={[
              "Academic Calendar Development",
              "School Reform Toolkit Implementation",
              "CPD UK-Aligned Trainings",
              "School Website & Social Media Bundles",
              "International School Accreditation Support",
            ]}
            audience={["Private/Public Schools, Colleges", "School Networks & Franchises"]}
            benefits={["Better academic planning", "Competitive positioning", "Higher student/parent satisfaction"]}
            onBookService={() => openModal("Educational Services")}
            variants={item}
          />
           <ServiceCard
            icon={<Code className="h-10 w-10" />}
            title="Tech & Outsourcing"
            intro="We offer tech-based services and outsourcing support to help you scale faster and smarter with reliable, expert-backed execution."
            offerings={[
              "IT Project Outsourcing (Web, App, CRM)",
              "Document Digitization & Security",
              "Proposal Writing & Grant Design",
              "CRM Setup & Maintenance",
              "UI/UX & Technical Audit",
            ]}
            audience={["Startups, Development Projects, Educational Institutions"]}
            benefits={[
              "Reliable, cost-effective solutions",
              "Access to skilled tech teams",
              "Custom and scalable output",
            ]}
            onBookService={() => openModal("Tech & Outsourcing")}
            variants={item}
          />

          {/* CSR & Startup Programs */}
          <ServiceCard
            icon={<Handshake className="h-10 w-10" />}
            title="CSR & Startup Programs"
            intro="Bridge your corporate social responsibility with innovation by supporting vetted, high-impact startups aligned with the SDGs."
            offerings={[
              "CSR Program Design for Startups",
              "Startup Scouting, Matching & Incubation",
              "Grant & Mentorship Management",
              "Impact Reporting & Communication",
            ]}
            audience={["Corporate CSR Teams", "Development Agencies", "Social Impact Investors"]}
            benefits={["Tangible, measurable CSR impact", "Enhanced brand reputation", "Youth innovation empowerment"]}
            onBookService={() => openModal("CSR & Startup Programs")}
            variants={item}
          />

          {/* Event & Training Management */}
          <ServiceCard
            icon={<Calendar className="h-10 w-10" />}
            title="Event & Training Management"
            intro="Delivering end-to-end event and training solutions, from corporate workshops to large-scale educational and community events."
            offerings={[
              "Event Planning & Coordination",
              "Corporate & Youth Bootcamps",
              "Training Module Design",
              "Speaker & Venue Management",
              "Conference & Expo Support",
            ]}
            audience={["Companies, Institutions, INGOs", "Fellowship & Leadership Programs"]}
            benefits={[
              "Zero-hassle execution",
              "Creative, tailored learning experiences",
              "Strong branding and outreach",
            ]}
            onBookService={() => openModal("Event & Training Management")}
            variants={item}
          />

          {/* Application & Opportunity Support */}
          <ServiceCard
            icon={<Award className="h-10 w-10" />}
            title="Application & Opportunity Support"
            intro="Helping youth and professionals unlock global opportunities through curated guidance, mentoring and application assistance."
            offerings={[
              "Opportunity Matching (Fellowships, Scholarships, Conferences)",
              "Application Mentorship & Draft Reviews",
              "SOP/LOI Writing & Proofreading",
              "Opportunity Talks & Webinars",
              "Exclusive Opportunity Subscription Packages",
            ]}
            audience={["Students, Early-career Professionals, Emerging Leaders"]}
            benefits={[
              "Better acceptance rates",
              "Access to verified global opportunities",
              "Continuous development support",
            ]}
            onBookService={() => openModal("Application & Opportunity Support")}
            variants={item}
          />
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceTitle={selectedService || ""} />
         <AcademicReformPackage />

    </div>
  )
}


