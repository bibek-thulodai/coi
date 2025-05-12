import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  MapPin,
  Search,
  Filter,
  Users,
  GraduationCap,
  Award,
  Sparkles,
  Clock,
  ExternalLink,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AllOpportunitiesPage() {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Opportunities</h1>
          <p className="text-lg mb-8 max-w-3xl">
            Explore all available opportunities including fellowships, scholarships, competitions, workshops, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Opportunities Home
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Post an Opportunity</Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <h2 className="text-xl font-semibold text-[#121d3e]">Filter Opportunities</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} /> Advanced Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Search opportunities..." className="pl-10" />
              </div>
            
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Looking for Something Specific?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            If you can't find what you're looking for, you can set up alerts to be notified when new opportunities
            matching your criteria are posted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Set Up Alerts</Button>
            <Button variant="outline">Contact Our Team</Button>
          </div>
        </div>
      </section>
    </>
  )
}

interface OpportunityCardProps {
  title: string
  organization: string
  location: string
  type: string
  duration: string
  deadline: string
  icon: React.ReactNode
  link: string
}

function OpportunityCard({
  title,
  organization,
  location,
  type,
  duration,
  deadline,
  icon,
  link,
}: OpportunityCardProps) {
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
            {icon}
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{duration}</span>
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

interface FeaturedOpportunityCardProps {
  title: string
  organization: string
  location: string
  type: string
  duration: string
  deadline: string
  icon: React.ReactNode
  link: string
}

function FeaturedOpportunityCard({
  title,
  organization,
  location,
  type,
  duration,
  deadline,
  icon,
  link,
}: FeaturedOpportunityCardProps) {
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
            {icon}
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{duration}</span>
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
