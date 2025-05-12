import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Award, ExternalLink, Search, Trophy } from "lucide-react"
import { Input } from "@/components/ui/input"

import HeroSection from "@/components/hero-section";

export default function CompetitionsPage() {
  return (
    <>
      <HeroSection
             title="Competitions Opportunities"
             subtitle="Kickstart your career with valuable competitions experiences across various fields."
             backgroundColor="#121d3e"
           />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Link href="/opportunities/post">
            <Button className="bg-[#0e9aa7] text-white hover:bg-[#0c8b98]">
              Post a Competition
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
        


          <div>
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">All Competitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                title: "Hackathon for Social Good",
                organization: "Tech Community",
                location: "Kathmandu, Nepal",
                category: "Technology",
                deadline: "June 20, 2025",
                link: "/opportunities/competitions/hackathon-social-good",
              }].map((competition, index) => (
                <CompetitionCard
                  key={index}
                  title={competition.title}
                  organization={competition.organization}
                  location={competition.location}
                  category={competition.category}
                  deadline={competition.deadline}
                  link={competition.link}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="px-6">
              Load More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Why Participate in Competitions?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Competitions offer unique opportunities to showcase your skills, network with professionals, and win
              valuable prizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Trophy size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Recognition & Rewards</h3>
                <p className="text-gray-600">
                  Win prizes, gain recognition, and add prestigious achievements to your resume.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Networking</h3>
                <p className="text-gray-600">
                  Connect with industry experts, potential employers, and like-minded peers.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
                <p className="text-gray-600">
                  Challenge yourself, receive feedback, and improve your abilities through practical application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

function CompetitionCard({
  title,
  organization,
  location,
  category,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  category: string
  deadline: string
  link: string
}) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-2 text-gray-500" />
            <span>Category: {category}</span>
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

function FeaturedCompetitionCard({
  title,
  organization,
  location,
  category,
  prize,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  category: string
  prize: string
  deadline: string
  link: string
}) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative overflow-hidden border-2 border-[#0e9aa7]">
      <div className="absolute top-0 right-0">
        <Badge className="bg-[#0e9aa7] text-white m-2">Featured</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-2 text-gray-500" />
            <span>Category: {category}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="h-4 w-4 mr-2 text-gray-500" />
            <span>Prize: {prize}</span>
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
