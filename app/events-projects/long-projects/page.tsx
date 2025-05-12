import type { Metadata } from "next"
import Image from "next/image"
import LongTermProjectsList from "@/components/projects/long-term-projects-list"
import { ArrowRight, BookOpen, GraduationCap, School, Users } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Long-Term Projects",
  description: "Sustainable initiatives focused on education, leadership, and youth development with lasting impact.",
}

export default function LongTermProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Overlay */}
      <AnimatedSection animation="fade-in">
              <HeroSection
                title="Long Term Projects"
                subtitle="Sustainable initiatives focused on education, leadership, and youth development with lasting impact."
              
                backgroundColor="#121d3e"
              />
            </AnimatedSection>
      

      

      {/* About Our Long-Term Projects Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                About Our <span className="text-[#0a7d89]">Long-Term Projects</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our long-term projects represent our commitment to creating sustainable change through continuous
                engagement and support. Unlike one-time events, these initiatives are designed to deliver lasting impact
                by addressing systemic challenges in education, leadership development, and community empowerment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Each project is built on strong partnerships with local and international organizations, ensuring that
                resources are leveraged effectively and interventions are culturally appropriate and responsive to
                community needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border-l-4 border-[#0a7d89] pl-4">
                  <h4 className="font-bold text-gray-800">Our Commitment</h4>
                  <p className="text-gray-600">Long-term support and sustainable impact</p>
                </div>
                <div className="border-l-4 border-[#0a7d89] pl-4">
                  <h4 className="font-bold text-gray-800">Our Vision</h4>
                  <p className="text-gray-600">Empowered communities and transformed lives</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0a7d89]/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0a7d89]/20 rounded-lg"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Long-term project impact"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

   

      {/* Projects Section */}
      <div id="projects" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-[#0a7d89]">Long-Term Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our flagship long-term initiatives that are creating sustainable change and empowering communities.
            Click on any project to learn more about its impact and implementation.
          </p>
        </div>
        <LongTermProjectsList />
      </div>
    </div>
  )
}
