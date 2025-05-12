"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  Target,
  Users2,
  ArrowUpRight,
  Clock,
  Building,
  Heart,
  CheckCircle2,
  BarChart3,
} from "lucide-react"

// Project data
const projects = [
  {
    id: "project-shiksha",
    title: "🎓 Project Shiksha",
    description:
      "A scholarship program offering fully funded higher secondary education (Grade 11–12) for marginalized students across Nepal, including food and accommodation.",
    icon: GraduationCap,
    category: "Education",
    year: "2020-Present",
    location: "Nepal",
    duration: "Ongoing",
    website: "https://hundredgroupnepal.org/case/project-shiksha/",
    fullDescription:
      "Project Shiksha is a comprehensive scholarship program that provides fully funded higher secondary education (Grade 11-12) for marginalized students across Nepal. The program covers not only tuition fees but also food, accommodation, and essential learning materials, ensuring that financial constraints do not hinder talented students from pursuing quality education. This initiative is a collaboration between 100 Group, RONB, Sowers Action Nepal, and Dari Club USA, with Creating Opportunities acting as the technical partner for execution.",
    impact: "100+ scholarships awarded, 85% graduation rate, 70% of graduates pursuing higher education",
    partners: "100 Group, RONB, Sowers Action Nepal, Dari Club USA",
    objectives: [
      "Provide access to quality education for marginalized students",
      "Remove financial barriers to higher secondary education",
      "Create a supportive learning environment for scholars",
      "Develop future leaders from underrepresented communities",
    ],
    achievements: [
      "Established partnerships with 15 quality educational institutions across Nepal",
      "Created a mentorship program connecting scholars with professionals",
      "Developed a comprehensive selection process ensuring support reaches the most deserving students",
      "Implemented a monitoring system to track academic progress and provide timely interventions",
    ],
    beneficiaries: [
      "Students from economically disadvantaged backgrounds",
      "First-generation learners",
      "Students from remote and underserved regions",
      "Talented youth facing systemic barriers to education",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "liberty-camp",
    title: "🌍 Liberty Camp",
    description:
      "In partnership with the Language of Liberty Institute, this camp educates youth on personal freedom, critical thinking, and leadership through experiential learning.",
    icon: BookOpen,
    category: "Leadership Development",
    year: "2019-Present",
    location: "Multiple locations in Nepal",
    duration: "Annual",
    website: "https://language-of-liberty.org/liberty-camp-nepal-2024/",
    fullDescription:
      "Liberty Camp is an innovative educational initiative conducted in partnership with the Language of Liberty Institute. The camp provides a unique platform for youth to explore concepts of personal freedom, critical thinking, and leadership through experiential learning methodologies. Participants engage in interactive workshops, discussions, debates, and team-building activities designed to foster a deeper understanding of liberty, responsibility, and civic engagement. The camp creates a diverse learning community where young people from different backgrounds can exchange ideas and develop practical skills for promoting freedom and democracy in their communities.",
    impact:
      "500+ youth trained, camps conducted in 8 different locations, 90% of participants report improved understanding of liberty concepts",
    partners: "Language of Liberty Institute, Local educational institutions, Civil society organizations",
    objectives: [
      "Educate youth on principles of personal freedom and responsibility",
      "Develop critical thinking and leadership skills",
      "Foster cross-cultural understanding and dialogue",
      "Empower youth to become advocates for liberty in their communities",
    ],
    achievements: [
      "Developed a comprehensive curriculum on liberty and leadership",
      "Created a network of Liberty Camp alumni across Nepal",
      "Established a train-the-trainer program for sustainable knowledge transfer",
      "Implemented community action projects led by camp graduates",
    ],
    beneficiaries: [
      "High school and university students",
      "Young professionals and emerging leaders",
      "Youth activists and community organizers",
      "Educators and youth workers",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
]

export default function LongTermProjectsList() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden border border-gray-200 hover:border-[#0a7d89] hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-[#0a7d89]/20 to-[#0a7d89]/5 flex items-center justify-center p-8">
                <project.icon className="h-24 w-24 text-[#0a7d89] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-6 md:w-3/5">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">{project.category}</Badge>
                  <Badge variant="outline" className="text-gray-500 border-gray-300 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {project.duration}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#0a7d89] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-[#0a7d89]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#0a7d89]" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
                  <span className="inline-flex items-center text-sm font-medium text-[#0a7d89]">
                    View Details <ArrowUpRight className="h-4 w-4 ml-1" />
                  </span>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-gray-500 hover:text-[#0a7d89] transition-colors"
                  >
                    Visit Website →
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2 text-[#0a7d89]">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-base flex flex-wrap gap-3 mt-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {selectedProject.year}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {selectedProject.location}
                </Badge>
                <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">{selectedProject.category}</Badge>
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                    <Building className="h-5 w-5 mr-2" /> About the Project
                  </h3>
                  <p className="text-gray-700">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2" /> Objectives
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.objectives.map((objective, index) => (
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
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#0a7d89] mr-2">✓</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                    <Heart className="h-5 w-5 mr-2" /> Beneficiaries
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.beneficiaries.map((beneficiary, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#0a7d89] mr-2">•</span>
                        <span className="text-gray-700">{beneficiary}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  {selectedProject.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProject.title} image ${index + 1}`}
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
                  <p className="text-gray-700">{selectedProject.impact}</p>
                </div>

                <div className="bg-[#0a7d89]/5 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3 flex items-center">
                    <Users2 className="h-5 w-5 mr-2" /> Partners
                  </h3>
                  <p className="text-gray-700">{selectedProject.partners}</p>
                </div>

                <div className="p-5 border border-dashed border-[#0a7d89]/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">Support This Project</h3>
                  <p className="text-gray-700 mb-4">
                    Interested in supporting this long-term initiative? There are multiple ways to get involved, from
                    donations to volunteering.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="bg-[#0a7d89] hover:bg-[#0a7d89]/90 flex-1"
                      onClick={() => window.location.href = "/donate"}
                    >
                      Donate Now
                    </Button>
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-1 text-center"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#0a7d89]/5 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a7d89] mb-4">Project Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#0a7d89]/30"></div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0a7d89] flex items-center justify-center text-white">
                    1
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Project Initiation</h4>
                  <p className="text-gray-600">
                    {selectedProject.id === "project-shiksha"
                      ? "Launched in 2020 with the first cohort of 20 scholars selected from across Nepal."
                      : "First Liberty Camp conducted in 2019 with 50 participants from diverse backgrounds."}
                  </p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0a7d89] flex items-center justify-center text-white">
                    2
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Expansion Phase</h4>
                  <p className="text-gray-600">
                    {selectedProject.id === "project-shiksha"
                      ? "Expanded to include 50 scholars and partnered with additional educational institutions across more regions."
                      : "Expanded to multiple locations across Nepal, reaching more diverse youth populations."}
                  </p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0a7d89] flex items-center justify-center text-white">
                    3
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Program Enhancement</h4>
                  <p className="text-gray-600">
                    {selectedProject.id === "project-shiksha"
                      ? "Added mentorship component and career guidance services to support scholars beyond academics."
                      : "Developed advanced curriculum modules and introduced alumni-led sessions to enrich the learning experience."}
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0a7d89] flex items-center justify-center text-white">
                    4
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Current Status</h4>
                  <p className="text-gray-600">
                    {selectedProject.id === "project-shiksha"
                      ? "Currently supporting 100+ scholars with comprehensive educational support and preparing to expand to new regions."
                      : "Annual camps now established as a premier leadership development program with international recognition and participation."}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
