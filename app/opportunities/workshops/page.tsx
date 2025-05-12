import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HeroSection from "@/components/hero-section";

export default function WorkshopsPage() {
  return (
    <>
      <HeroSection
        title="Workshops Opportunities"
        subtitle="Enhance your skills and knowledge with our curated workshops."
        backgroundColor="#121d3e"
      />
    

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Upcoming Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Data Analysis with Python",
                organization: "Tech Institute",
                deadline: "May 25, 2025",
                benefits: "Certificate of Completion, Networking Opportunities",
                eligibility: "Open to all professionals and students",
                description: "Learn data analysis techniques using Python in this comprehensive workshop.",
                country: "USA",
                region: "Virtual",
                image: "/images/workshop-python.jpg",
              },
            ].map((workshop, index) => (
              <WorkshopCard
                key={index}
                title={workshop.title}
                organization={workshop.organization}
                deadline={workshop.deadline}
                benefits={workshop.benefits}
                eligibility={workshop.eligibility}
                description={workshop.description}
                country={workshop.country}
                region={workshop.region}
                image={workshop.image}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-[#121d3e] border-[#121d3e] hover:bg-[#121d3e]/10">
                All Opportunities
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
                Post a Workshop
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

interface WorkshopCardProps {
  title: string
  organization: string
  deadline: string
  benefits: string
  eligibility: string
  description: string
  country: string
  region: string
  image: string
}

function WorkshopCard({
  title,
  organization,
  deadline,
  benefits,
  eligibility,
  description,
  country,
  region,
  image,
}: WorkshopCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm mb-2"><strong>Deadline:</strong> {deadline}</p>
        <p className="text-sm mb-2"><strong>Benefits:</strong> {benefits}</p>
        <p className="text-sm mb-2"><strong>Eligibility:</strong> {eligibility}</p>
        <p className="text-sm mb-2"><strong>Description:</strong> {description}</p>
        <p className="text-sm mb-2"><strong>Country:</strong> {country}</p>
        <p className="text-sm"><strong>Region:</strong> {region}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  )
}
