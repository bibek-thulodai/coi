import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/hero-section";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function PortfolioPage() {
  return (
    <>
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Our Portfolio"
          subtitle="Explore our past projects and success stories."
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      <AnimatedSection animation="slide-in-left" delay={0.3}>
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-8 text-center max-w-screen-2xl">
            {/* Increased container size */}
            <h2 className="text-5xl font-extrabold text-[#121d3e] mb-16">
              Our Impact
            </h2>
            {/* Increased font size and margin */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/* Adjusted grid to show 3 items per row */}
              <div className="bg-white p-16 rounded-lg shadow-xl">
                <div className="text-6xl font-extrabold text-[#0e9aa7] mb-6">
                  20,000+
                </div>
                <p className="text-xl text-gray-700">Jobs Listed</p>
              </div>
              <div className="bg-white p-16 rounded-lg shadow-xl">
                <div className="text-6xl font-extrabold text-[#0e9aa7] mb-6">
                  $5M+
                </div>
                <p className="text-xl text-gray-700">Worth of Scholarships</p>
              </div>
              <div className="bg-white p-16 rounded-lg shadow-xl">
                <div className="text-6xl font-extrabold text-[#0e9aa7] mb-6">
                  1,000+
                </div>
                <p className="text-xl text-gray-700">Startups Supported</p>
              </div>
              <div className="bg-white p-16 rounded-lg shadow-xl">
                <div className="text-6xl font-extrabold text-[#0e9aa7] mb-6">
                  20,000+
                </div>
                <p className="text-xl text-gray-700">Hours of Mentorship</p>
              </div>
              <div className="bg-white p-16 rounded-lg shadow-xl">
                <div className="text-6xl font-extrabold text-[#0e9aa7] mb-6">
                  200+
                </div>
                <p className="text-xl text-gray-700">Interns Recruited</p>
              </div>
              <div className="bg-white p-16 rounded-lg shadow-xl">
                <div className="text-6xl font-extrabold text-[#0e9aa7] mb-6">
                  50+
                </div>
                <p className="text-xl text-gray-700">Featured Partners</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.4}>
        <section className="py-32 bg-white">
          <div className="container mx-auto px-8 text-center max-w-screen-2xl">
            <h2 className="text-5xl font-extrabold text-[#121d3e] mb-16">
              Foundations of Excellence: Our Core 6 Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Enhance on a global journey of possibilities with our platform offering
               opportunities in over 100 countries across diverse 
               industries such as technology, healthcare, education, 
               and sustainability. Experience a personalized approach through algorithm-
               driven matches tailored to your skills and interests, providing choices
                ranging from jobs and internships to volunteering, courses, and conferences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="text-[#0e9aa7] text-6xl mb-4">
                  <i className="fas fa-globe"></i> {/* Icon for Global Platform */}
                </div>
                <h3 className="text-2xl font-bold text-[#121d3e] mb-2">Global Platform</h3>
                <p className="text-gray-600">
                  We connect people to opportunities in over 100 countries around the world.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-[#0e9aa7] text-6xl mb-4">
                  <i className="fas fa-user-check"></i> {/* Icon for Personalized Matches */}
                </div>
                <h3 className="text-2xl font-bold text-[#121d3e] mb-2">Personalized Matches</h3>
                <p className="text-gray-600">
                  Our algorithms provide personalized recommendations based on your skills and interests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-[#0e9aa7] text-6xl mb-4">
                  <i className="fas fa-chalkboard-teacher"></i> {/* Icon for Expert Guidance */}
                </div>
                <h3 className="text-2xl font-bold text-[#121d3e] mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Receive mentorship and advice from industry leaders throughout your experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-[#0e9aa7] text-6xl mb-4">
                  <i className="fas fa-layer-group"></i> {/* Icon for Diverse Options */}
                </div>
                <h3 className="text-2xl font-bold text-[#121d3e] mb-2">Diverse Options</h3>
                <p className="text-gray-600">
                  Choose from jobs, internships, volunteering, courses, conferences, and more.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-[#0e9aa7] text-6xl mb-4">
                  <i className="fas fa-industry"></i> {/* Icon for All Industries */}
                </div>
                <h3 className="text-2xl font-bold text-[#121d3e] mb-2">All Industries</h3>
                <p className="text-gray-600">
                  Opportunities available across all industries - technology, healthcare, education, sustainability, and more.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-[#0e9aa7] text-6xl mb-4">
                  <i className="fas fa-check-circle"></i> {/* Icon for Verified Providers */}
                </div>
                <h3 className="text-2xl font-bold text-[#121d3e] mb-2">Verified Providers</h3>
                <p className="text-gray-600">
                  We vet every opportunity provider to ensure quality experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#121d3e] mb-4">
                Explore More
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Discover our gallery of images and read our latest blog posts to
                learn more about our work and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our Gallery"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Photo Gallery</h3>
                      <p className="mb-4">
                        Browse our collection of images from events, projects,
                        and more.
                      </p>
                      <Link href="/portfolio/gallery">
                        <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
                          View Gallery
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our Blog"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Blog & News</h3>
                      <p className="mb-4">
                        Read our latest articles, insights, and updates.
                      </p>
                      <Link href="/portfolio/blog">
                        <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
                          Read Blog
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.3}>
        <section className="py-16 bg-white text-[#121d3e]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to start your project?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
              Let's collaborate to bring your vision to life. Contact us today
              to discuss your project.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0e766e] hover:bg-[#0d9488] text-white px-6 py-4 rounded-lg font-bold text-md shadow-md">
                START A PROJECT
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}

function PortfolioItem({
  title,
  category,
  image,
  link,
}: {
  title: string;
  category: string;
  image: string;
  link: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block bg-[#0e9aa7] px-3 py-1 rounded-full text-xs mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <Link href={link}>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-[#121d3e]"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
