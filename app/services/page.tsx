"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Package,
  Building,
  Briefcase,
  BarChart,
  Mail,
  Truck,
  X,
  Check,
  Award,
  Calendar,
  Users,
  FileText,
  Globe,
  TrendingUp,
  Sparkles,
  Send,
  CheckCircle2,
  CalendarDays,
} from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ServicesPage() {
  // Services modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Mouse position for background effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    contact: "",
    category: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          contact: "",
          category: "",
        })
      }, 3000)
    }, 1500)
  }

  // Animation variants
  const [productsRef, productsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Product features data
  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "ISO 21001:2018 Certification & Quality Audit",
      description:
        "Ensure your school adheres to international education management standards with third-party audits and certification.",
      color: "from-[#0e9aa7] to-[#0a7d89]",
      lightColor: "bg-[#e6f7f9]",
      borderColor: "border-[#b3e6ec]",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Presence: Social Media & Marketing Bundle",
      description:
        "Amplify your school's online visibility with tailored content plans, digital strategy, and brand identity kits.",
      color: "from-[#0e9aa7] to-[#0a7d89]",
      lightColor: "bg-[#e6f7f9]",
      borderColor: "border-[#b3e6ec]",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Growth Plan: Long-Term Development",
      description: "Strategic blueprints to help your school grow sustainably with a strong value proposition.",
      color: "from-[#0e9aa7] to-[#0a7d89]",
      lightColor: "bg-[#e6f7f9]",
      borderColor: "border-[#b3e6ec]",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Teachers Training & Club Modality",
      description: "Professional development training for educators with integrated co-curricular club frameworks.",
      color: "from-[#0e9aa7] to-[#0a7d89]",
      lightColor: "bg-[#e6f7f9]",
      borderColor: "border-[#b3e6ec]",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "School Profiling & Reform Documentation",
      description:
        "Ready-to-use templates and expert support in building your school profile, policies, and reform agendas.",
      color: "from-[#0e9aa7] to-[#0a7d89]",
      lightColor: "bg-[#e6f7f9]",
      borderColor: "border-[#b3e6ec]",
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Global Accreditation & Academic Calendar",
      description:
        "Structured yearly academic calendar aligned with global education systems and international recognition pathways.",
      color: "from-[#0e9aa7] to-[#0a7d89]",
      lightColor: "bg-[#e6f7f9]",
      borderColor: "border-[#b3e6ec]",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#e6f7f9] z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0e9aa7] via-[#0c8b97] to-[#0a7d89]"></div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#0e9aa7]/10 to-[#0a7d89]/10 blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 50 }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#0a7d89]/10 to-[#0e9aa7]/10 blur-3xl"
        animate={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        transition={{ type: "spring", damping: 50 }}
      />

      {/* Hero Section */}
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Our Services"
          subtitle="Explore our range of services designed to help you succeed in today's competitive landscape"
        />
      </AnimatedSection>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <motion.div
              className="w-32 h-1 bg-[#0e9aa7] mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
              We offer a wide range of services designed to meet your business needs and help you succeed in today's
              competitive landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} openModal={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Reform Package Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-3">
              <motion.div
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89] text-white px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Premium Solution</span>
              </motion.div>
            </div>

            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0e9aa7] via-[#0c8b97] to-[#0a7d89] mb-3 tracking-tight">
              Our Products
            </h2>

            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              All-in-One Academic Reform Package
            </motion.h3>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              A comprehensive solution for schools striving for educational excellence, global recognition, and
              operational transformation.
            </motion.p>
          </motion.div>

          <div className="mb-16">
            <motion.h4
              className="text-xl font-semibold text-gray-800 mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89]">
                What&apos;s Inside
              </span>
            </motion.h4>

            <motion.div
              ref={productsRef}
              variants={containerVariants}
              initial="hidden"
              animate={productsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} className="h-full">
                  <Card
                    className={`h-full border-2 ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-xl`}
                  >
                    <CardContent className="p-0">
                      <div className={`h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
                      <div className="p-6">
                        <div className="flex flex-col items-start gap-4">
                          <div
                            className={`${feature.lightColor} p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}
                          >
                            <div className={`bg-gradient-to-br ${feature.color} rounded-lg p-2 text-white`}>
                              {feature.icon}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-3">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.3, type: "spring" }}
                                className="bg-green-100 rounded-full p-1 mr-2 flex-shrink-0 border border-green-200"
                              >
                                <Check className="w-4 h-4 text-green-600" />
                              </motion.div>
                              <h5 className="font-bold text-gray-800 text-lg">{feature.title}</h5>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-3">
              <motion.div
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89] text-white px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book Your Consultation</span>
              </motion.div>
            </div>

            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89] mb-3">
              Ready to Transform Your School?
            </h2>

            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Fill out the form below to book a consultation with our education experts
            </motion.p>
          </motion.div>

          <motion.div variants={formVariants} initial="hidden" animate="visible" className="relative">
            <Card className="border-2 border-[#b3e6ec] shadow-xl overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89]"></div>

              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-gray-800">Booking Form</CardTitle>
                <CardDescription>Please provide your details to schedule a consultation</CardDescription>
              </CardHeader>

              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="h-12 border-[#b3e6ec] focus:border-[#0e9aa7] focus:ring-[#0e9aa7]"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="h-12 border-[#b3e6ec] focus:border-[#0e9aa7] focus:ring-[#0e9aa7]"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="contact" className="text-sm font-medium">
                          Contact Number
                        </Label>
                        <Input
                          id="contact"
                          name="contact"
                          placeholder="Enter your contact number"
                          value={formState.contact}
                          onChange={handleChange}
                          required
                          className="h-12 border-[#b3e6ec] focus:border-[#0e9aa7] focus:ring-[#0e9aa7]"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="category" className="text-sm font-medium">
                          Interested In
                        </Label>
                        <Select value={formState.category} onValueChange={handleSelectChange} required>
                          <SelectTrigger
                            id="category"
                            className="h-12 border-[#b3e6ec] focus:border-[#0e9aa7] focus:ring-[#0e9aa7]"
                          >
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all-in-one">All-in-One Academic Reform Package</SelectItem>
                            <SelectItem value="iso-certification">
                              ISO 21001:2018 Certification & Quality Audit
                            </SelectItem>
                            <SelectItem value="digital-presence">
                              Digital Presence: Social Media & Marketing Bundle
                            </SelectItem>
                            <SelectItem value="growth-plan">Growth Plan: Long-Term Development</SelectItem>
                            <SelectItem value="teacher-training">Teachers Training & Club Modality</SelectItem>
                            <SelectItem value="school-profiling">School Profiling & Reform Documentation</SelectItem>
                            <SelectItem value="global-accreditation">
                              Global Accreditation & Academic Calendar
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89] hover:from-[#0c8b97] hover:to-[#086570] text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? "Processing..." : "Book Consultation"}
                          <Send className="w-4 h-4" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#0a7d89] to-[#0e9aa7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ opacity: 1 }}
                        />
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <CheckCircle2 className="w-16 h-16 text-[#0e9aa7]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your booking request has been submitted successfully. Our team will contact you shortly.
                    </p>
                  </motion.div>
                )}
              </CardContent>

              <CardFooter className="bg-gray-50 border-t border-gray-100 flex justify-between text-sm text-gray-500 px-6 py-4">
                <p>Your information is secure and encrypted</p>
                <p>* Required fields</p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {isModalOpen && <RegistrationModal closeModal={closeModal} selectedService={selectedService} />}
      </AnimatePresence>
    </div>
  )
}

function ServiceCard({
  service,
  index,
  openModal,
}: {
  service: Service
  index: number
  openModal: (title: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-100px" }}
      className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="p-8 h-full flex flex-col">
        <motion.div
          className="w-20 h-20 rounded-full bg-[#0e9aa7]/10 flex items-center justify-center mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-[#0e9aa7]">{service.icon}</div>
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {service.title}
        </motion.h3>

        <motion.div
          className="w-16 h-1 bg-[#0e9aa7] mb-5"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-gray-600 mb-8 flex-grow text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {service.description}
        </motion.p>

        <motion.button
          onClick={() => openModal(service.title)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto py-3 px-6 bg-[#0e9aa7] text-white font-medium rounded-lg shadow-lg hover:bg-[#0a7d89] transition-colors duration-300 flex items-center justify-center"
        >
          Register for this Service
        </motion.button>
      </div>
    </motion.div>
  )
}

function RegistrationModal({
  closeModal,
  selectedService,
}: {
  closeModal: () => void
  selectedService: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 bg-gradient-to-r from-[#0e9aa7] to-[#0a7d89] text-white">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold mb-2">Register for Service</h3>
          <p className="opacity-90">{selectedService}</p>
        </div>

        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="modal-name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e9aa7] focus:border-transparent outline-none transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="modal-email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e9aa7] focus:border-transparent outline-none transition-all"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="modal-phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e9aa7] focus:border-transparent outline-none transition-all"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Category
              </label>
              <select
                id="modal-service"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e9aa7] focus:border-transparent outline-none transition-all"
                defaultValue={selectedService}
                required
              >
                <option value="">Select a service</option>
                <option value="Opportunity Sharing Package">Opportunity Sharing Package</option>
                <option value="Corporate Event & Training Management">Corporate Event & Training Management</option>
                <option value="HR Management">HR Management</option>
                <option value="Project & Event Consultation">Project & Event Consultation</option>
                <option value="Opportunity Matching & Application Support">
                  Opportunity Matching & Application Support
                </option>
                <option value="Logistics & Vendor Management">Logistics & Vendor Management</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 mt-4 bg-[#0e9aa7] text-white font-medium rounded-lg shadow-lg hover:bg-[#0a7d89] transition-colors duration-300"
              type="submit"
            >
              Submit Registration
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface Service {
  title: string
  description: string
  icon: React.ReactNode
}

const services = [
  {
    title: "📦 Opportunity Sharing Package",
    description:
      "Comprehensive packages designed to connect businesses with the right opportunities for growth and expansion, tailored to your specific industry needs.",
    icon: <Package size={32} />,
  },
  {
    title: "🏢 Corporate Event & Training Management",
    description:
      "End-to-end management of corporate events and training programs, ensuring seamless execution and maximum impact for your organization.",
    icon: <Building size={32} />,
  },
  {
    title: "💼 HR Management",
    description:
      "Complete human resource management solutions including recruitment, onboarding, training, performance evaluation, and employee development strategies.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "📊 Project & Event Consultation",
    description:
      "Expert consultation services for project planning, execution, and evaluation, helping you achieve your business objectives efficiently.",
    icon: <BarChart size={32} />,
  },
  {
    title: "📨 Opportunity Matching & Application Support",
    description:
      "Specialized services to match your business with relevant opportunities and provide comprehensive support throughout the application process.",
    icon: <Mail size={32} />,
  },
  {
    title: "🚛 Logistics & Vendor Management",
    description:
      "Streamlined logistics operations and vendor relationship management to optimize your supply chain and ensure quality partnerships.",
    icon: <Truck size={32} />,
  },
]
