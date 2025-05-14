"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Download, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const packageItems = [
  {
    id: "iso",
    title: "ISO 21001:2018 Certification & Quality Audit",
    description:
      "Comprehensive quality management system specifically designed for educational organizations to enhance student satisfaction and improve educational processes.",
  },
  {
    id: "digital",
    title: "Digital Presence: Social Media & Marketing Bundle",
    description:
      "Complete digital marketing strategy including social media management, content creation, and online reputation management tailored for educational institutions.",
  },
  {
    id: "growth",
    title: "Growth Plan: Long-Term Development & Strategy",
    description:
      "Strategic roadmap for sustainable growth, including enrollment projections, facility planning, and academic program expansion.",
  },
  {
    id: "training",
    title: "Teachers Training & Club Modality",
    description:
      "Professional development programs for educators and extracurricular club frameworks to enhance student engagement and learning outcomes.",
  },
  {
    id: "profiling",
    title: "School Profiling, Policy & Reform Docs",
    description:
      "Comprehensive documentation package including school profile development, policy manuals, and reform implementation guidelines.",
  },
  {
    id: "accreditation",
    title: "Global Accreditation & Academic Calendar",
    description:
      "Support for international accreditation processes and optimized academic calendar planning for maximum educational effectiveness.",
  },
]

export default function AcademicReformPackage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

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

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-gray-900">
            ACADEMIC CALENDAR & SCHOOL REFORM TOOLKITS
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-teal-600">ALL-IN-ONE ACADEMIC REFORM PACKAGE</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A complete toolkit for schools seeking excellence and impact.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {packageItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 128, 128, 0.1)",
                borderColor: "rgba(20, 184, 166, 0.5)",
              }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="bg-teal-500 rounded-full p-1 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8"
        >
          <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 transition-all group">
            <Download className="mr-2 h-4 w-4 group-hover:text-teal-700" /> Download Brochure
          </Button>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white border-none shadow-lg">
                <ShoppingCart className="mr-2 h-4 w-4" /> Place an Order
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-w-[95vw] p-4 sm:p-6 bg-white text-gray-800 border-gray-200 overflow-y-auto max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl text-teal-700">Academic Reform Package</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Complete toolkit for educational excellence and institutional transformation
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="bg-gray-100 border border-gray-200 w-full flex flex-wrap">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white text-xs sm:text-sm flex-1"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white text-xs sm:text-sm flex-1"
                  >
                    Package Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="pricing"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white text-xs sm:text-sm flex-1"
                  >
                    Pricing
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      The All-in-One Academic Reform Package provides educational institutions with comprehensive tools
                      and resources to transform their operations, enhance quality, and achieve global recognition.
                    </p>
                    <p className="text-gray-700">
                      This complete solution addresses every aspect of educational excellence from quality management
                      and teacher development to digital presence and strategic growth.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="mb-4 sm:mb-0">
                        <p className="text-xl font-bold text-gray-900">
                          $4,999 <span className="text-sm font-normal text-gray-500">one-time purchase</span>
                        </p>
                        <p className="text-sm text-gray-500">Maintenance and support plans available</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-4">
                  <div className="space-y-6">
                    {packageItems.map((item) => (
                      <div key={item.id} className="border-b border-gray-200 pb-4 last:border-0">
                        <h4 className="text-lg font-medium text-gray-800 mb-2 break-words">{item.title}</h4>
                        <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                      <h4 className="text-base sm:text-lg font-medium mb-2 text-gray-800">Complete Package</h4>
                      <p className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">$4,999</p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">
                        One-time purchase with 12 months of support
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-1 text-teal-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">All 6 toolkit components included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-1 text-teal-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">Implementation support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-1 text-teal-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">Quarterly review sessions</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500">
                      Custom packages and individual components also available. Contact our sales team for more
                      information.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
                <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-teal-600 hover:bg-teal-700">Request Custom Quote</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] max-w-[95vw] p-4 sm:p-6 bg-white text-gray-800 border-gray-200 overflow-y-auto max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-teal-700">Request a Custom Quote</DialogTitle>
                      <DialogDescription className="text-gray-600">
                        Fill out the form below and we'll prepare a customized quote for your institution.
                      </DialogDescription>
                    </DialogHeader>

                    <form className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Full Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="institution" className="text-sm font-medium text-gray-700">
                            Institution Name
                          </label>
                          <input
                            id="institution"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="ABC School"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="size" className="text-sm font-medium text-gray-700">
                          Institution Size
                        </label>
                        <select
                          id="size"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          required
                        >
                          <option value="">Select size</option>
                          <option value="small">Small (&lt; 500 students)</option>
                          <option value="medium">Medium (500-1000 students)</option>
                          <option value="large">Large (1000-2000 students)</option>
                          <option value="xlarge">Very Large (2000+ students)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="requirements" className="text-sm font-medium text-gray-700">
                          Specific Requirements
                        </label>
                        <textarea
                          id="requirements"
                          rows={4}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Please describe your specific needs or requirements..."
                        ></textarea>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" required />
                          <span className="text-sm text-gray-700">I agree to be contacted about my quote request</span>
                        </label>
                      </div>

                      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                        Submit Request
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  )
}
