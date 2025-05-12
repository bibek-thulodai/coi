"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, Users, ExternalLink, CheckCircle, Mail } from "lucide-react";

// This is a mock function to simulate fetching workshop data
// In a real application, this would fetch data from an API or database
function getWorkshopData(id: string) {
  // Sample data for demonstration
  const workshops = {
    "digital-marketing": {
      title: "Digital Marketing Masterclass",
      organization: "Marketing Academy",
      location: "Kathmandu, Nepal",
      format: "In-Person",
      duration: "2 Days",
      date: "June 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      deadline: "May 20, 2025",
      fee: "NPR 5,000",
      seats: "30",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "This comprehensive Digital Marketing Masterclass is designed for professionals looking to enhance their digital marketing skills. From social media strategies to SEO, content marketing, and analytics, this workshop covers all essential aspects of modern digital marketing.",
      topics: [
        "Social Media Marketing Strategies",
        "Search Engine Optimization (SEO)",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Digital Analytics and Reporting",
        "Paid Advertising",
        "Mobile Marketing",
        "Marketing Automation",
      ],
      instructors: [
        {
          name: "Sarah Johnson",
          title: "Digital Marketing Director",
          company: "Global Marketing Solutions",
          bio: "Sarah has over 15 years of experience in digital marketing and has worked with Fortune 500 companies.",
          image: "/placeholder.svg?height=150&width=150",
        },
        {
          name: "Michael Chen",
          title: "SEO Specialist",
          company: "Search Rank Pro",
          bio: "Michael is an expert in search engine optimization with a track record of improving search rankings for major brands.",
          image: "/placeholder.svg?height=150&width=150",
        },
      ],
      testimonials: [
        {
          text: "This workshop completely transformed my approach to digital marketing. The practical exercises were incredibly valuable.",
          author: "Rajesh Sharma",
          company: "Tech Startup",
        },
        {
          text: "The instructors were knowledgeable and engaging. I left with actionable strategies I could implement immediately.",
          author: "Priya Patel",
          company: "E-commerce Business",
        },
      ],
    },
    "leadership-development": {
      title: "Leadership Development Workshop",
      organization: "Professional Growth Institute",
      location: "Virtual",
      format: "Online",
      duration: "3 Days",
      date: "July 5-7, 2025",
      time: "10:00 AM - 4:00 PM",
      deadline: "June 10, 2025",
      fee: "NPR 7,500",
      seats: "50",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Develop essential leadership skills in this intensive three-day workshop. Learn effective communication, team management, strategic thinking, and how to lead through change and challenges.",
      topics: [
        "Effective Communication",
        "Team Building and Management",
        "Strategic Decision Making",
        "Conflict Resolution",
        "Change Management",
        "Emotional Intelligence",
        "Delegation and Empowerment",
        "Performance Management",
      ],
      instructors: [
        {
          name: "Dr. James Wilson",
          title: "Leadership Coach",
          company: "Executive Leadership Institute",
          bio: "Dr. Wilson has trained executives at leading companies worldwide and is the author of three books on leadership.",
          image: "/placeholder.svg?height=150&width=150",
        },
      ],
      testimonials: [
        {
          text: "This workshop helped me identify my leadership strengths and areas for improvement. I'm now a more confident leader.",
          author: "Anita Gurung",
          company: "Financial Services",
        },
        {
          text: "The practical exercises and case studies made complex leadership concepts easy to understand and apply.",
          author: "Bikash Thapa",
          company: "Manufacturing",
        },
      ],
    },
    "web-development": {
      title: "Web Development Bootcamp",
      organization: "Tech Training Center",
      location: "Pokhara, Nepal",
      format: "In-Person",
      duration: "5 Days",
      date: "August 1-5, 2025",
      time: "9:00 AM - 6:00 PM",
      deadline: "July 5, 2025",
      fee: "NPR 12,000",
      seats: "25",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "This intensive bootcamp will take you from beginner to confident web developer in just 5 days. Learn HTML, CSS, JavaScript, and modern frameworks through hands-on projects and expert guidance.",
      topics: [
        "HTML5 and CSS3 Fundamentals",
        "JavaScript Programming",
        "Responsive Web Design",
        "Frontend Frameworks (React)",
        "Backend Basics (Node.js)",
        "Database Integration",
        "Version Control with Git",
        "Deployment and Hosting",
      ],
      instructors: [
        {
          name: "Ravi Kumar",
          title: "Senior Web Developer",
          company: "TechSolutions",
          bio: "Ravi has developed websites for international clients and specializes in modern JavaScript frameworks.",
          image: "/placeholder.svg?height=150&width=150",
        },
        {
          name: "Sunita Rai",
          title: "UX/UI Designer",
          company: "Creative Digital",
          bio: "Sunita combines technical expertise with design principles to create beautiful, functional websites.",
          image: "/placeholder.svg?height=150&width=150",
        },
      ],
      testimonials: [
        {
          text: "I had no coding experience before this bootcamp, and now I can build my own websites. The instructors were patient and thorough.",
          author: "Dipesh Shrestha",
          company: "Student",
        },
        {
          text: "This was the most practical training I've ever attended. We built real projects that I could add to my portfolio.",
          author: "Sabina Maharjan",
          company: "Graphic Designer",
        },
      ],
    },
  };

  // Return the workshop data for the given ID, or a default if not found
  return workshops[id as keyof typeof workshops] || workshops["digital-marketing"];
}

export default function WorkshopDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workshop = getWorkshopData(params.id);

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Register for {workshop.title}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Contact</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  className="bg-gray-200 text-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-[#0e9aa7] text-white">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-[#0e9aa7] hover:bg-[#0c8b98]">Workshop</Badge>
            {workshop.featured && (
              <Badge variant="outline" className="text-white border-white">
                Featured
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{workshop.title}</h1>
          <p className="text-lg mb-6">Organized by {workshop.organization}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/opportunities/workshops">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                All Workshops
              </Button>
            </Link>
            <Button
              className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white"
              onClick={() => setIsModalOpen(true)}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-4">About This Workshop</h2>
                <p className="text-gray-700 mb-6">{workshop.description}</p>
                <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {workshop.topics.map((topic, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-4">Meet Your Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workshop.instructors.map((instructor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-1/3 h-[150px]">
                          <Image
                            src={instructor.image || "/placeholder.svg"}
                            alt={instructor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="sm:w-2/3 p-4">
                          <h3 className="font-bold text-lg">{instructor.name}</h3>
                          <p className="text-sm text-gray-500">
                            {instructor.title}, {instructor.company}
                          </p>
                          <p className="mt-2 text-sm">{instructor.bio}</p>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-bold text-[#121d3e] mb-4">Workshop Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">{workshop.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-gray-600">{workshop.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{workshop.location}</p>
                      <p className="text-gray-600">{workshop.format}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-gray-600">{workshop.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Available Seats</p>
                      <p className="text-gray-600">{workshop.seats}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <div>
                      <p className="font-medium">Registration Fee</p>
                      <p className="text-gray-600">{workshop.fee}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Registration Deadline</p>
                      <p className="text-gray-600">{workshop.deadline}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Button
                    className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Register Now <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
