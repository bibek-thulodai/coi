import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  MapPin,
  Clock,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function OpportunitiesPage() {
  return (
    <>
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Explore Opportunities"
          subtitle="Discover a world of possibilities to advance your career, education, and personal growth"
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="featured" className="w-full">
              

              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
            
                </div>
              </TabsContent>

              {/* Other tab contents remain the same */}
            </Tabs>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="slide-in-left" delay={0.3}>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Opportunity Categories</h2>
                <p className="text-lg text-gray-600">
                  Explore our diverse range of opportunities to find what suits your goals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <CategoryCard
                  title="Jobs"
                  description="Full-time and part-time employment opportunities"
                  icon={<Briefcase className="h-8 w-8" />}
                  link="/opportunities/jobs"
                />
                <CategoryCard
                  title="Internships"
                  description="Gain practical experience in your field of interest"
                  icon={<GraduationCap className="h-8 w-8" />}
                  link="/opportunities/internships"
                />
                <CategoryCard
                  title="Fellowships"
                  description="Professional development programs for emerging leaders"
                  icon={<Users className="h-8 w-8" />}
                  link="/opportunities/fellowships"
                />
                <CategoryCard
                  title="Scholarships"
                  description="Financial support for educational pursuits"
                  icon={<BookOpen className="h-8 w-8" />}
                  link="/opportunities/scholarships"
                />
                <CategoryCard
                  title="Competitions"
                  description="Showcase your skills and win prizes"
                  icon={<Award className="h-8 w-8" />}
                  link="/opportunities/competitions"
                />
                <CategoryCard
                  title="Workshops"
                  description="Short-term learning and skill development sessions"
                  icon={<Sparkles className="h-8 w-8" />}
                  link="/opportunities/workshops"
                />
             
                <CategoryCard
                  title="All Opportunities"
                  description="View all opportunities in one place"
                  icon={<ExternalLink className="h-8 w-8" />}
                  link="/opportunities/all-opportunities"
                  highlight={true}
                />
                <CategoryCard
                  title="Post Opportunity"
                  description="Share your opportunity with our community"
                  icon={<ExternalLink className="h-8 w-8" />}
                  link="/opportunities/post"
                  highlight={true}
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Are You an Employer or Organization?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Reach qualified candidates by posting your opportunities on our platform.
            </p>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                POST AN OPPORTUNITY
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.3}>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Can't find what you're looking for?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Submit your resume to our talent pool, and we'll notify you when relevant opportunities become available.
            </p>
            <Link href="/opportunities/post">
              <Button className="bg-[#121d3e] hover:bg-[#1a2a57] text-white px-8 py-6 rounded font-bold text-lg">
                SUBMIT YOUR RESUME
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}

function OpportunityCard({
  title,
  company,
  location,
  type,
  deadline,
  link,
  icon,
}: {
  title: string
  company: string
  location: string
  type: string
  deadline: string
  link: string
  icon: React.ReactNode
}) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            {icon}
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function FeaturedOpportunityCard({
  title,
  company,
  location,
  type,
  category,
  deadline,
  featured,
  link,
  icon,
}: {
  title: string
  company: string
  location: string
  type: string
  category: string
  deadline: string
  featured: boolean
  link: string
  icon: React.ReactNode
}) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      {featured && (
        <div className="absolute top-0 right-0">
          <Badge className="bg-[#f39c12] text-white m-2">Featured</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            {icon}
            <span className="ml-2">{type}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{category}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">
            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function CategoryCard({
  title,
  description,
  icon,
  link,
  highlight = false,
}: {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  highlight?: boolean
}) {
  return (
    <Link href={link}>
      <Card
        className={`h-full hover:shadow-lg transition-shadow duration-300 ${highlight ? "border-[#0e9aa7] border-2" : ""}`}
      >
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${highlight ? "bg-[#0e9aa7] text-white" : "bg-gray-100 text-[#121d3e]"}`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
