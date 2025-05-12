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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  MapPin,
  Briefcase,
  Search,
  Filter,
  ExternalLink,
} from "lucide-react";
import HeroSection from "@/components/hero-section";

export default function JobsPage() {
  return (
    <>
      <HeroSection
        title="Job Opportunities"
        subtitle="Find your dream job from our curated list of opportunities across various industries"
        backgroundColor="#121d3e"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Available Jobs</h2>
                <div className="text-sm text-gray-500">
                  Showing 12 of 36 jobs
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "senior-project-manager",
                    title: "Senior Project Manager",
                    company: "Tech Innovations",
                    location: "Kathmandu, Nepal",
                    type: "Full-time",
                    deadline: "May 15, 2025",
                    featured: true,
                  },
                ].map((job) => (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    type={job.type}
                    deadline={job.deadline}
                    featured={job.featured}
                  />
                ))}
              </div>

           
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">
            Are You an Employer?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Reach qualified candidates by posting your job opportunities on our
            platform.
          </p>
          <Link href="/opportunities/post">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              POST A JOB
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

function JobCard({
  id,
  title,
  company,
  location,
  type,
  deadline,
  featured,
}: {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  deadline: string;
  featured: boolean;
}) {
  return (
    <Card
      className={`h-full flex flex-col hover:shadow-lg transition-shadow duration-300 ${
        featured ? "border-l-4 border-[#f39c12]" : ""
      }`}
    >
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
            <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/opportunities/jobs/${id}`} className="w-full">
          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">
            View Job <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
