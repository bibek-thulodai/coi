import type { Metadata } from "next"
import Image from "next/image"
import InitiativesList from "@/components/initiatives/initiatives-list"
import { ArrowRight, Lightbulb, Users, Target, Rocket, Award } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/hero-section";
import { AnimatedSection } from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Our Initiatives",
  description:
    "Innovative programs and events empowering youth and communities through education, leadership, and opportunity creation.",
}

export default function OurInitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Overlay */}
        <AnimatedSection animation="fade-in">
              <HeroSection
                title="Our Initiatives"
                subtitle="Innovative programs and events empowering youth and communities through education, leadership, and opportunity creation."
                backgroundColor="#121d3e"
              />
            </AnimatedSection>
           
   



      {/* About Our Initiatives Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                About Our <span className="text-[#0a7d89]">Initiatives</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our initiatives represent our commitment to creating platforms that empower individuals and communities
                to reach their full potential. Each program is designed to address specific needs while contributing to
                our broader mission of fostering opportunity, leadership, and positive change.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From grassroots skill-building in rural areas to global conclaves bringing together thought leaders, our
                initiatives span diverse formats and audiences but share a common purpose: to equip people with the
                knowledge, skills, and networks they need to create and seize opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border-l-4 border-[#0a7d89] pl-4">
                  <h4 className="font-bold text-gray-800">Our Approach</h4>
                  <p className="text-gray-600">Innovative, inclusive, and impact-driven</p>
                </div>
                <div className="border-l-4 border-[#0a7d89] pl-4">
                  <h4 className="font-bold text-gray-800">Our Reach</h4>
                  <p className="text-gray-600">From local communities to global platforms</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0a7d89]/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0a7d89]/20 rounded-lg"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our initiatives in action"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Initiatives Section */}
      <div id="initiatives" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center mb-12"> {/* Adjusted max width */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-[#0a7d89]">Initiatives</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto"> {/* Adjusted max width */}
            Explore our diverse portfolio of initiatives designed to create opportunities and empower communities. Click
            on any initiative to learn more about its impact and implementation.
          </p>
        </div>
        <InitiativesList />
      </div>
    </div>
  )
}
