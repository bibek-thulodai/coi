"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mic,
  BookOpen,
  Target,
  Lightbulb,
  Users,
  MapPin,
  Clock,
  ArrowUpRight,
  Building,
  CheckCircle2,
  BarChart3,
  Users2,
  Globe,
} from "lucide-react"

// Initiative data
const initiatives = [
  {
    id: "opportunity-talk",
    title: "🎤 Opportunity Talk",
    description:
      "A recurring online/in-person series featuring change-makers, entrepreneurs, and global leaders sharing insights on seizing and creating opportunities.",
    icon: Mic,
    category: "Knowledge Sharing",
    format: "Recurring Series",
    location: "Online & In-person",
    frequency: "Monthly",
    hasTabs: true,
    editions: [
      {
        id: "first-edition",
        title: "First Edition",
        date: "March 2023",
        speakers: ["Jane Doe, Social Entrepreneur", "John Smith, Tech Innovator", "Maria Garcia, Policy Expert"],
        topics: ["Social Innovation", "Digital Transformation", "Policy Advocacy"],
        participants: "250+ attendees from 15 countries",
        highlights: [
          "Panel discussion on 'Creating Opportunities in Challenging Times'",
          "Interactive Q&A session with audience",
          "Networking session connecting participants with speakers",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "second-edition",
        title: "Second Edition",
        date: "June 2023",
        speakers: [
          "David Chen, Impact Investor",
          "Sarah Johnson, Education Innovator",
          "Michael Kim, Climate Activist",
        ],
        topics: ["Impact Investment", "Education Innovation", "Climate Action"],
        participants: "300+ attendees from 20 countries",
        highlights: [
          "Keynote on 'Funding Opportunities for Social Enterprises'",
          "Lightning talks by emerging leaders",
          "Virtual expo of innovative projects",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
    fullDescription:
      "Opportunity Talk is a dynamic platform that brings together change-makers, entrepreneurs, and global leaders to share their insights, experiences, and wisdom on creating and seizing opportunities. Through engaging conversations, presentations, and interactive sessions, participants gain valuable knowledge, inspiration, and practical strategies they can apply to their own journeys. The series features diverse speakers from various sectors, ensuring a rich tapestry of perspectives and approaches to opportunity creation and utilization.",
    impact:
      "20+ talks conducted, 3,000+ participants engaged, 85% of participants report applying insights to their work",
    partners: "Global Entrepreneurship Network, Innovation Hub, Leadership Academy",
    objectives: [
      "Provide access to insights from successful change-makers and leaders",
      "Inspire action through real-world success stories and lessons",
      "Create a platform for knowledge exchange and networking",
      "Democratize access to valuable insights regardless of geographic location",
    ],
    achievements: [
      "Established a loyal community of regular participants",
      "Created a digital library of talks accessible to global audiences",
      "Facilitated numerous connections leading to collaborations and mentorships",
      "Expanded from online-only to hybrid format reaching diverse audiences",
    ],
  },
  {
    id: "project-aawasar",
    title: "📚 Project Aawasar",
    description:
      "A grassroots initiative that takes skill-building, mentorship, and leadership training to rural and underserved areas.",
    icon: BookOpen,
    category: "Skill Development",
    format: "Grassroots Program",
    location: "Rural Areas",
    frequency: "Ongoing",
    hasTabs: true,
    editions: [
      {
        id: "first-edition",
        title: "First Edition",
        date: "2022-2023",
        locations: ["Dhading District", "Kavre District", "Sindhupalchok District"],
        skills: ["Digital Literacy", "Financial Management", "Leadership Development", "Communication Skills"],
        participants: "500+ youth from 15 villages",
        highlights: [
          "Mobile skill labs bringing technology to remote villages",
          "Train-the-trainer program creating local skill champions",
          "Community projects addressing local challenges",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "second-edition",
        title: "Second Edition",
        date: "2023-2024",
        locations: ["Dolakha District", "Ramechhap District", "Okhaldhunga District"],
        skills: [
          "Entrepreneurship",
          "Sustainable Agriculture",
          "Digital Marketing",
          "Project Management",
          "Civic Leadership",
        ],
        participants: "750+ youth from 20 villages",
        highlights: [
          "Entrepreneurship incubation program for rural youth",
          "Agricultural innovation workshops for farmers",
          "Youth-led community development initiatives",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
    fullDescription:
      "Project Aawasar is a comprehensive grassroots initiative designed to bridge the opportunity gap between urban and rural areas by bringing essential skill-building, mentorship, and leadership training directly to underserved communities. The program employs a mobile training approach, setting up temporary skill labs in villages and remote areas where access to quality education and skill development opportunities is limited. Through a combination of hands-on workshops, mentorship sessions, and community projects, participants develop practical skills while addressing local challenges.",
    impact:
      "1,250+ youth trained across 35 villages, 80+ community projects implemented, 40% of participants report increased income",
    partners: "Rural Development Foundation, Digital Empowerment Initiative, Local Government Bodies",
    objectives: [
      "Bridge the urban-rural opportunity divide through accessible skill development",
      "Empower rural youth with market-relevant skills and leadership capabilities",
      "Foster community-driven development through local projects",
      "Create a network of rural change-makers and entrepreneurs",
    ],
    achievements: [
      "Established mobile skill labs reaching the most remote communities",
      "Created a curriculum specifically designed for rural contexts and needs",
      "Developed a network of local trainers ensuring program sustainability",
      "Facilitated the launch of 30+ rural micro-enterprises",
    ],
  },
  {
    id: "opportunity-bootcamp",
    title: "🎯 Opportunity Bootcamp",
    description:
      "Intensive workshops designed to train youth on resume writing, personal branding, project pitching, and opportunity access.",
    icon: Target,
    category: "Career Development",
    format: "Intensive Workshop",
    location: "Multiple Locations",
    frequency: "Quarterly",
    hasTabs: false,
    fullDescription:
      "Opportunity Bootcamp offers intensive, hands-on workshops designed to equip youth with the essential skills needed to access and create professional opportunities. Each bootcamp focuses on practical skills including resume writing, personal branding, project pitching, interview preparation, and opportunity identification. The program employs a learning-by-doing approach, with participants working on real-world projects and receiving personalized feedback from industry professionals. The bootcamps create a supportive yet challenging environment where participants can develop their skills, expand their networks, and gain the confidence needed to pursue their career goals.",
    impact: "2,000+ youth trained, 75% report improved job prospects, 40% secured internships or jobs within 3 months",
    partners: "Career Development Institute, Professional Mentors Network, Corporate Partners",
    objectives: [
      "Develop essential career readiness skills among youth",
      "Bridge the gap between education and employment requirements",
      "Build confidence through practical application and feedback",
      "Connect participants with professional opportunities and networks",
    ],
    achievements: [
      "Developed a comprehensive curriculum covering all aspects of opportunity access",
      "Created a digital resource library accessible to all participants",
      "Established partnerships with employers for internship and job placements",
      "Implemented a mentorship program connecting participants with professionals",
    ],
    bootcampModules: [
      {
        title: "Personal Branding",
        description:
          "Developing a compelling personal brand, creating professional online profiles, and crafting your unique value proposition.",
      },
      {
        title: "Resume Mastery",
        description:
          "Creating impactful resumes, tailoring applications to specific opportunities, and highlighting relevant skills and experiences.",
      },
      {
        title: "Pitch Perfect",
        description:
          "Developing and delivering compelling project and personal pitches, communicating value effectively, and engaging different audiences.",
      },
      {
        title: "Opportunity Navigation",
        description:
          "Identifying and evaluating opportunities, developing application strategies, and leveraging networks for access.",
      },
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "innovate-x",
    title: "💡 Innovate X",
    description:
      "A virtual fellowship empowering South Asian undergraduate students with entrepreneurial training, mentorship, and networking.",
    icon: Lightbulb,
    category: "Entrepreneurship",
    format: "Virtual Fellowship",
    location: "South Asia",
    frequency: "Annual Cohort",
    hasTabs: true,
    editions: [
      {
        id: "first-edition",
        title: "First Edition",
        date: "2022",
        fellows: "50 undergraduate students from 5 South Asian countries",
        mentors: "25 experienced entrepreneurs and industry experts",
        projects: "20 innovative ventures launched across various sectors",
        highlights: [
          "12-week intensive entrepreneurship curriculum",
          "One-on-one mentorship with successful entrepreneurs",
          "Virtual Demo Day with potential investors and partners",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "second-edition",
        title: "Second Edition",
        date: "2023",
        fellows: "75 undergraduate students from 7 South Asian countries",
        mentors: "35 experienced entrepreneurs and industry experts",
        projects: "30 innovative ventures launched across various sectors",
        highlights: [
          "Expanded curriculum with sector-specific tracks",
          "Masterclasses by global innovation leaders",
          "Seed funding competition for top ventures",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
    fullDescription:
      "Innovate X is a comprehensive virtual fellowship program designed to empower undergraduate students across South Asia with the knowledge, skills, and networks needed to become successful entrepreneurs and innovators. The program combines structured learning modules, personalized mentorship, peer collaboration, and networking opportunities to create a holistic entrepreneurial development experience. Fellows work on developing their own venture ideas throughout the program, receiving guidance and feedback from experienced mentors and ultimately pitching their concepts to potential supporters and investors.",
    impact:
      "125+ fellows trained across 7 countries, 50+ ventures launched, $500,000+ in funding secured by fellow ventures",
    partners: "South Asian Entrepreneurship Network, Global Innovation Fund, Regional Universities",
    objectives: [
      "Develop entrepreneurial mindsets and skills among South Asian youth",
      "Provide access to quality mentorship and networks across borders",
      "Support the development of innovative solutions to regional challenges",
      "Create a community of young entrepreneurs across South Asia",
    ],
    achievements: [
      "Created a cross-border entrepreneurial community in South Asia",
      "Developed a comprehensive virtual entrepreneurship curriculum",
      "Established a mentor network of 60+ experienced entrepreneurs",
      "Facilitated funding and partnership opportunities for fellow ventures",
    ],
  },
  {
    id: "opportunity-conclave",
    title: "🏛️ Opportunity Conclave",
    description:
      "A flagship annual event bringing together educators, youth leaders, innovators, and organizations to discuss actionable solutions for global challenges.",
    icon: Users,
    category: "Global Forum",
    format: "Annual Conference",
    location: "Rotating Locations",
    frequency: "Annual",
    hasTabs: false,
    fullDescription:
      "The Opportunity Conclave is our flagship annual event that serves as a convergence point for diverse stakeholders committed to creating and expanding opportunities for all. The conclave brings together educators, youth leaders, innovators, policymakers, and organizations from around the world to discuss challenges, share insights, and develop actionable solutions to pressing global issues. Through keynote speeches, panel discussions, workshops, and networking sessions, the conclave fosters cross-sector collaboration and catalyzes initiatives that continue long after the event concludes.",
    impact:
      "5 successful conclaves held, 2,500+ participants from 40+ countries, 30+ collaborative initiatives launched",
    partners: "United Nations Agencies, International NGOs, Corporate Partners, Academic Institutions",
    objectives: [
      "Create a platform for meaningful dialogue on opportunity creation and access",
      "Facilitate cross-sector and cross-border collaborations",
      "Showcase innovative approaches and solutions from around the world",
      "Develop actionable roadmaps for addressing key challenges",
    ],
    achievements: [
      "Established the conclave as a premier global forum on opportunity creation",
      "Created a diverse community of change-makers across sectors and borders",
      "Facilitated the launch of numerous collaborative initiatives",
      "Published annual reports influencing policy and practice",
    ],
    conclaveComponents: [
      {
        title: "Keynote Addresses",
        description: "Thought-provoking speeches by global leaders and visionaries setting the tone for the conclave.",
      },
      {
        title: "Panel Discussions",
        description:
          "In-depth conversations on key themes featuring diverse perspectives from experts and practitioners.",
      },
      {
        title: "Interactive Workshops",
        description: "Hands-on sessions developing practical skills and approaches to opportunity creation.",
      },
      {
        title: "Innovation Showcase",
        description: "Exhibition of innovative solutions and approaches from around the world.",
      },
      {
        title: "Networking Sessions",
        description: "Structured and unstructured opportunities to build meaningful connections and collaborations.",
      },
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
]

export default function InitiativesList() {
  const [selectedInitiative, setSelectedInitiative] = useState<(typeof initiatives)[0] | null>(null)
  const [activeTab, setActiveTab] = useState("first-edition")

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative) => (
          <Card
            key={initiative.id}
            className="group overflow-hidden border border-gray-200 hover:border-[#0a7d89] hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl"
            onClick={() => {
              setSelectedInitiative(initiative)
              if (initiative.hasTabs) {
                setActiveTab("first-edition")
              }
            }}
          >
            <div className="h-52 bg-gradient-to-br from-[#0a7d89]/10 to-[#0a7d89]/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#0a7d89]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <initiative.icon className="h-20 w-20 text-[#0a7d89] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">{initiative.category}</Badge>
                <Badge variant="outline" className="text-gray-500 border-gray-300">
                  {initiative.format}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#0a7d89] transition-colors">
                {initiative.title}
              </h3>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <div className="pt-4 border-t border-dashed border-gray-200 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-[#0a7d89]" /> {initiative.location}
                  </span>
                  <span className="inline-flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-[#0a7d89]" /> {initiative.frequency}
                  </span>
                </div>
                <span className="inline-flex items-center font-medium text-[#0a7d89]">
                  View Details <ArrowUpRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedInitiative} onOpenChange={(open) => !open && setSelectedInitiative(null)}>
        {selectedInitiative && (
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2 text-[#0a7d89]">
                {selectedInitiative.title}
              </DialogTitle>
              <DialogDescription className="text-base flex flex-wrap gap-3 mt-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="h-3 w-3" /> {selectedInitiative.location}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {selectedInitiative.frequency}
                </Badge>
                <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">{selectedInitiative.category}</Badge>
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                  <Building className="h-5 w-5 mr-2" /> About the Initiative
                </h3>
                <p className="text-gray-700">{selectedInitiative.fullDescription}</p>
              </div>

              {selectedInitiative.hasTabs ? (
                <Tabs defaultValue="first-edition" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 mb-6">
                    {selectedInitiative.editions?.map((edition) => (
                      <TabsTrigger key={edition.id} value={edition.id} className="text-sm">
                        {edition.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {selectedInitiative.editions?.map((edition) => (
                    <TabsContent key={edition.id} value={edition.id} className="mt-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="bg-[#0a7d89]/5 p-5 rounded-lg">
                            <h4 className="font-semibold text-[#0a7d89] mb-3">{edition.title} Overview</h4>
                            <p className="text-gray-700 mb-2">
                              <span className="font-medium">Date:</span> {edition.date}
                            </p>
                            {edition.speakers && (
                              <div className="mb-2">
                                <p className="font-medium">Featured Speakers:</p>
                                <ul className="list-disc pl-5 text-gray-700">
                                  {edition.speakers.map((speaker, index) => (
                                    <li key={index}>{speaker}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {edition.topics && (
                              <div className="mb-2">
                                <p className="font-medium">Key Topics:</p>
                                <ul className="list-disc pl-5 text-gray-700">
                                  {edition.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {edition.locations && (
                              <div className="mb-2">
                                <p className="font-medium">Locations:</p>
                                <ul className="list-disc pl-5 text-gray-700">
                                  {edition.locations.map((location, index) => (
                                    <li key={index}>{location}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {edition.skills && (
                              <div className="mb-2">
                                <p className="font-medium">Skills Covered:</p>
                                <ul className="list-disc pl-5 text-gray-700">
                                  {edition.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {edition.fellows && (
                              <p className="text-gray-700 mb-2">
                                <span className="font-medium">Fellows:</span> {edition.fellows}
                              </p>
                            )}
                            {edition.mentors && (
                              <p className="text-gray-700 mb-2">
                                <span className="font-medium">Mentors:</span> {edition.mentors}
                              </p>
                            )}
                            {edition.projects && (
                              <p className="text-gray-700 mb-2">
                                <span className="font-medium">Projects:</span> {edition.projects}
                              </p>
                            )}
                            <p className="text-gray-700 mb-2">
                              <span className="font-medium">Participants:</span> {edition.participants}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-[#0a7d89] mb-3">Highlights</h4>
                            <ul className="space-y-2">
                              {edition.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-[#0a7d89] mr-2">✓</span>
                                  <span className="text-gray-700">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-[#0a7d89] mb-3">Gallery</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {edition.gallery.map((image, index) => (
                              <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                                <Image
                                  src={image || "/placeholder.svg"}
                                  alt={`${selectedInitiative.title} ${edition.title} image ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                        <Target className="h-5 w-5 mr-2" /> Objectives
                      </h3>
                      <ul className="space-y-2">
                        {selectedInitiative.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#0a7d89]/10 text-[#0a7d89] text-xs mr-2 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-2" /> Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedInitiative.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#0a7d89] mr-2">✓</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedInitiative.bootcampModules && (
                      <div>
                        <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">Bootcamp Modules</h3>
                        <div className="space-y-4">
                          {selectedInitiative.bootcampModules.map((module, index) => (
                            <div key={index} className="bg-[#0a7d89]/5 p-4 rounded-lg">
                              <h4 className="font-medium mb-1">{module.title}</h4>
                              <p className="text-gray-600 text-sm">{module.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedInitiative.conclaveComponents && (
                      <div>
                        <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">Conclave Components</h3>
                        <div className="space-y-4">
                          {selectedInitiative.conclaveComponents.map((component, index) => (
                            <div key={index} className="bg-[#0a7d89]/5 p-4 rounded-lg">
                              <h4 className="font-medium mb-1">{component.title}</h4>
                              <p className="text-gray-600 text-sm">{component.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      {selectedInitiative.gallery.map((image, index) => (
                        <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedInitiative.title} image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#0a7d89]/5 p-5 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" /> Impact
                      </h3>
                      <p className="text-gray-700">{selectedInitiative.impact}</p>
                    </div>

                    <div className="bg-[#0a7d89]/5 p-5 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                        <Users2 className="h-5 w-5 mr-2" /> Partners
                      </h3>
                      <p className="text-gray-700">{selectedInitiative.partners}</p>
                    </div>

                    <div className="p-5 border border-dashed border-[#0a7d89]/30 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">Get Involved</h3>
                      <p className="text-gray-700 mb-4">
                        Interested in participating in or supporting this initiative? Contact us to learn about upcoming
                        opportunities.
                      </p>
                        <button
                        onClick={() => window.location.href = "/contact"}
                        className="w-full bg-[#0a7d89] text-white py-2 rounded-md hover:bg-[#0a7d89]/90 transition-colors"
                        >
                        Contact Us
                        </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
