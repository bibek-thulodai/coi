import type { Metadata } from "next";
import Image from "next/image";
import ProjectsList from "@/components/projects/projects-list";
import { ArrowRight, Award, Globe, HandHeart, Users } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/hero-section";
import { AnimatedSection } from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Partnership Projects & Events",
  description:
    "Environmental conservation campaigns and leadership initiatives in partnership with schools, local governments, and youth groups.",
};

export default function PartnershipProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Partnership Projects &  Events"
          subtitle="Environmental conservation campaigns and leadership initiatives in partnership with schools, local governments, and youth groups."
                   backgroundColor="#121d3e"
        />
      </AnimatedSection>
     

      {/* About Our Partnerships Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                About Our <span className="text-[#0a7d89]">Partnerships</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our partnership initiatives bring together diverse stakeholders
                to address pressing global challenges. Through collaborative
                efforts with schools, local governments, youth groups, and
                international organizations, we create sustainable solutions
                that drive meaningful change.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Each partnership is built on shared values, mutual respect, and
                a commitment to creating positive impact. We leverage the unique
                strengths and resources of our partners to implement innovative
                projects that address environmental conservation, social
                welfare, leadership development, and good governance.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border-l-4 border-[#0a7d89] pl-4">
                  <h4 className="font-bold text-gray-800">Our Approach</h4>
                  <p className="text-gray-600">
                    Collaborative, inclusive, and impact-driven
                  </p>
                </div>
                <div className="border-l-4 border-[#0a7d89] pl-4">
                  <h4 className="font-bold text-gray-800">Our Focus</h4>
                  <p className="text-gray-600">
                    Sustainability, empowerment, and innovation
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0a7d89]/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0a7d89]/20 rounded-lg"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Partnership in action"
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
            Our <span className="text-[#0a7d89]">Projects & Events</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of partnership initiatives that are
            making a difference across communities worldwide. Click on any
            project to learn more about its impact and implementation.
          </p>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
}
