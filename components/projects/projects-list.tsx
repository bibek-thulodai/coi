"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Utensils, Globe, Award, Users, Scale, Calendar, MapPin, Target, Users2 } from "lucide-react"

// Project data
const projects = [
  {
    id: "tree-plantation",
    title: "🌿 Tree Plantation Drive",
    description:
      "Environmental conservation campaigns in partnership with schools, local governments, and youth groups.",
    icon: Leaf,
    category: "Environmental",
    year: "2023",
    location: "Multiple Regions",
    fullDescription:
      "Our Tree Plantation Drive brings together schools, local governments, and youth groups to combat deforestation and promote environmental awareness. Through collaborative efforts, we've planted thousands of native trees across various regions, creating sustainable green spaces and educating communities about the importance of forest conservation.",
    impact: "5,000+ trees planted, 20+ schools engaged, 1,000+ youth volunteers mobilized",
    partners: "Local Environmental Department, Green Earth NGO, Regional School Network",
    objectives: [
      "Restore degraded forest areas with native tree species",
      "Educate youth about environmental conservation",
      "Build community ownership of green spaces",
      "Create carbon sinks to combat climate change",
    ],
    achievements: [
      "Established 15 community forests",
      "Conducted 30+ environmental education workshops",
      "Reduced soil erosion in 5 critical watersheds",
      "Created habitat for local wildlife species",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "hunger-walk",
    title: "🕊️ Hunger Walk",
    description:
      "A symbolic march and awareness campaign to tackle food insecurity and hunger, engaging communities and local leaders.",
    icon: Utensils,
    category: "Social Welfare",
    year: "2023",
    location: "Urban and Rural Communities",
    fullDescription:
      "The Hunger Walk is our flagship awareness campaign addressing food insecurity in vulnerable communities. This symbolic march brings together community members, local leaders, and organizations to raise awareness and funds for sustainable food programs. The initiative includes educational workshops, food distribution drives, and advocacy for policy changes.",
    impact: "Raised $50,000 for food security programs, 2,000+ participants, 15 communities reached",
    partners: "Food Security Alliance, Community Welfare Department, Local Businesses",
    objectives: [
      "Raise awareness about hunger and food insecurity",
      "Mobilize resources for sustainable food programs",
      "Advocate for policy changes to address root causes",
      "Build solidarity between food-secure and food-insecure communities",
    ],
    achievements: [
      "Established 8 community food banks",
      "Provided emergency food assistance to 500+ families",
      "Influenced local food security policies",
      "Created a volunteer network of 300+ food security advocates",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "youth-climate-action",
    title: "🌐 Youth for Climate Action",
    description:
      "Workshops and action projects focusing on climate education, community resilience, and youth-led sustainability movements.",
    icon: Globe,
    category: "Climate Action",
    year: "2023",
    location: "Global",
    fullDescription:
      "Youth for Climate Action empowers young people to lead the charge against climate change through education, advocacy, and community projects. Our comprehensive program includes workshops on climate science, training in sustainable practices, and support for youth-led initiatives that address local environmental challenges.",
    impact:
      "30+ youth-led climate projects implemented, 500+ young climate leaders trained, 25+ communities strengthened against climate impacts",
    partners: "Climate Action Network, Ministry of Environment, International Youth Climate Coalition",
    objectives: [
      "Build youth capacity in climate science and advocacy",
      "Support youth-led climate adaptation and mitigation projects",
      "Create a global network of young climate leaders",
      "Influence climate policy through youth participation",
    ],
    achievements: [
      "Developed a climate education curriculum adopted by 15 schools",
      "Implemented renewable energy projects in 10 communities",
      "Trained 50 youth climate ambassadors",
      "Presented youth climate demands at 3 international forums",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "asian-youth-leaders",
    title: "🏅 Asian Youth Leaders Summit 2022",
    description:
      "A prestigious regional summit that gathered young leaders across Asia for dialogue, recognition, and collaboration.",
    icon: Users,
    category: "Leadership",
    year: "2022",
    location: "Bangkok, Thailand",
    fullDescription:
      "The Asian Youth Leaders Summit 2022 brought together emerging leaders from across Asia to exchange ideas, build networks, and collaborate on regional challenges. The summit featured keynote speeches from prominent leaders, interactive workshops, and recognition ceremonies for outstanding youth contributions to social development.",
    impact:
      "300+ young leaders from 20+ Asian countries, 50+ collaborative projects initiated, 15 policy recommendations submitted to regional bodies",
    partners: "Asian Leadership Institute, Regional Youth Council, International Development Agency",
    objectives: [
      "Foster cross-cultural dialogue among Asian youth leaders",
      "Recognize outstanding youth contributions to development",
      "Build regional networks for collaboration",
      "Develop shared strategies for addressing common challenges",
    ],
    achievements: [
      "Created an ongoing Asian Youth Leaders Network",
      "Published a compendium of youth-led development approaches",
      "Established 5 bilateral youth exchange programs",
      "Secured commitments from 10 governments to enhance youth participation",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "world-leaders-conference",
    title: "🌏 World Leaders Conference and Award 2023",
    description:
      "A global forum featuring international speakers and awarding global change-makers who have made a lasting impact.",
    icon: Award,
    category: "Global Leadership",
    year: "2023",
    location: "New York, USA",
    fullDescription:
      "The World Leaders Conference and Award 2023 celebrated exceptional individuals driving positive change globally. This prestigious event featured thought-provoking discussions, networking opportunities, and a gala ceremony recognizing outstanding contributions to sustainable development, peace-building, and humanitarian efforts.",
    impact:
      "500+ attendees from 40+ countries, 20 global change-makers awarded, Media coverage reaching millions worldwide",
    partners: "Global Leadership Foundation, International Peace Institute, World Development Forum",
    objectives: [
      "Recognize outstanding contributions to global development",
      "Facilitate knowledge exchange among global leaders",
      "Highlight innovative approaches to global challenges",
      "Build partnerships for collaborative action",
    ],
    achievements: [
      "Established the prestigious World Leaders Award",
      "Created a global mentorship program connecting awardees with emerging leaders",
      "Published conference proceedings reaching 100,000+ readers",
      "Facilitated 25+ new international partnerships",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "good-governance",
    title: "⚖️ Good Governance Champion Fellowship",
    description:
      "A fellowship empowering youth to advocate for transparency, accountability, and good governance through civic bootcamps and creative initiatives.",
    icon: Scale,
    category: "Governance",
    year: "2023",
    location: "Multiple Countries",
    fullDescription:
      "The Good Governance Champion Fellowship equips young advocates with the knowledge, skills, and networks to promote transparency and accountability in their communities. Through intensive bootcamps, mentorship, and project support, fellows develop innovative approaches to addressing governance challenges and fostering civic engagement.",
    impact:
      "100+ governance champions trained, 30+ accountability initiatives launched, Engagement with 50+ government institutions",
    partners: "Transparency International, Civil Society Alliance, Public Policy Institute",
    objectives: [
      "Build youth capacity in governance and accountability",
      "Support innovative approaches to transparency",
      "Create a network of governance champions",
      "Strengthen civil society engagement with government",
    ],
    achievements: [
      "Developed an anti-corruption toolkit used by 20+ organizations",
      "Improved public service delivery in 15 communities",
      "Created 10 citizen monitoring mechanisms",
      "Influenced 5 governance reform policies",
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
]

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden border border-gray-200 hover:border-[#0a7d89] hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl"
            onClick={() => setSelectedProject(project)}
          >
            <div className="h-52 bg-gradient-to-br from-[#0a7d89]/10 to-[#0a7d89]/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#0a7d89]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <project.icon className="h-20 w-20 text-[#0a7d89] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">{project.category}</Badge>
                <Badge variant="outline" className="text-gray-500 border-gray-300">
                  {project.year}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#0a7d89] transition-colors">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="pt-4 border-t border-dashed border-gray-200 flex items-center text-sm text-gray-500">
                <span className="inline-flex items-center">
                  <Target className="h-4 w-4 mr-1 text-[#0a7d89]" /> View Details
                </span>
              </div>
            </CardContent>
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
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">About the Project</h3>
                  <p className="text-gray-700">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">Objectives</h3>
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
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#0a7d89] mr-2">✓</span>
                        <span className="text-gray-700">{achievement}</span>
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
                    <Target className="h-5 w-5 mr-2" /> Impact
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
                  <h3 className="text-lg font-semibold text-[#0a7d89] mb-3">Get Involved</h3>
                  <p className="text-gray-700 mb-4">
                    Interested in supporting or participating in this project? Contact our partnerships team for more
                    information.
                  </p>
                  <Link href="/contact">
                    <button className="w-full bg-[#0a7d89] text-white py-2 rounded-md hover:bg-[#0a7d89]/90 transition-colors">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
