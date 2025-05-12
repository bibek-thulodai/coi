import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  MapPin,
  Users,
  ExternalLink,
  Search,
} from "lucide-react";
import HeroSection from "@/components/hero-section";

export default function FellowshipsPage() {
  return (
    <>
      <HeroSection
        title="Fellowship Opportunities"
        subtitle="Kickstart your career with valuable Fellowship experiences across various fields."
        backgroundColor="#121d3e"
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">
              All Fellowship Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Research Fellowship",
                  organization: "Science Foundation",
                  location: "Kathmandu, Nepal",
                  duration: "2 Years",
                  deadline: "May 25, 2025",
                  link: "/opportunities/fellowships/research-fellowship",
                },
              ].map((fellowship, index) => (
                <FellowshipCard
                  key={index}
                  title={fellowship.title}
                  organization={fellowship.organization}
                  location={fellowship.location}
                  duration={fellowship.duration}
                  deadline={fellowship.deadline}
                  link={fellowship.link}
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
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">
              Why Apply for Fellowships?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Fellowships offer unique opportunities for professional growth,
              networking, and making a meaningful impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Professional Development
                </h3>
                <p className="text-gray-600">
                  Gain specialized skills and knowledge through structured
                  programs and mentorship.
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
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Financial Support
                </h3>
                <p className="text-gray-600">
                  Receive stipends, grants, or living allowances to focus on
                  your work without financial stress.
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Network</h3>
                <p className="text-gray-600">
                  Connect with like-minded professionals and build relationships
                  that last beyond the fellowship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#121d3e]">
            Ready to Apply for a Fellowship?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
            Post your fellowship opportunities and help others kickstart their careers.
          </p>
          <div className="flex justify-center">
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] text-white hover:bg-[#0c8b98]">
                Post a Fellowship
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FellowshipCard({
  title: cardTitle,
  organization: cardOrganization,
  location: cardLocation,
  duration: cardDuration,
  deadline: cardDeadline,
  link: cardLink,
}: {
  title: string;
  organization: string;
  location: string;
  duration: string;
  deadline: string;
  link: string;
}) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{cardTitle}</CardTitle>
        <CardDescription>{cardOrganization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{cardLocation}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {cardDuration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {cardDeadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={cardLink} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function FeaturedFellowshipCard({
  title,
  organization,
  location,
  duration,
  stipend,
  deadline,
  link,
}: {
  title: string;
  organization: string;
  location: string;
  duration: string;
  stipend: string;
  deadline: string;
  link: string;
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
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-gray-500"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span>Stipend: {stipend}</span>
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
  );
}
