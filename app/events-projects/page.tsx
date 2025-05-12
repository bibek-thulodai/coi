import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"


export default async function EventsProjectsPage() {

  return (
    <>
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Events & Projects"
          subtitle="Discover our upcoming events, ongoing projects, and collaborative initiatives"
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-left">Featured Events & Projects</h2>

          
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-left">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/events-projects/our-projects">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-[#0e9aa7]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#121d3e] mb-2">Our Projects</h3>
                  <p className="text-gray-600">
                    Long-term initiatives designed to create sustainable impact in communities.
                  </p>
                </div>
              </Link>

              <Link href="/events-projects/our-initiatives">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-[#0e9aa7]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#121d3e] mb-2">Our Initiatives</h3>
                  <p className="text-gray-600">
                    Programs and activities initiated by Creating Opportunities International.
                  </p>
                </div>
              </Link>

              <Link href="/events-projects/collaborative-events">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-[#0e9aa7]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#121d3e] mb-2">Collaborative Events</h3>
                  <p className="text-gray-600">
                    Events organized in partnership with other organizations and institutions.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.3}>
        <section className="py-16 bg-[#121d3e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-left">Want to collaborate?</h2>
            <p className="max-w-2xl mb-8 text-lg">
              We're always looking for partners to collaborate on impactful projects and events.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}
