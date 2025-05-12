import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function KudosMentionsSection() {
  const awards = [
    {
      title: "Mausam Koirala ",
      organization: "youth activist",
      year: "2023",
      description: "Recognized for outstanding contribution to career development and opportunity creation.",
      logo: "/assets/mausam.jpg",
    },
    {
      title: "Alish jung  Karki",
      organization: "Program Participant",
      year: "2022",
      description: "Honored for creating significant social impact through our initiatives and programs.",
      logo: "/assets/alish.jpg",
    },
    {
      title: "Prakash Bhandari",
      organization: "Engineer",
      year: "2021",
      description: "Awarded for innovative approaches to educational opportunity creation and access.",
      logo: "/assets/prakash.jpg",
    },
    {
      title: "Partima Khadgi",
      organization: "Progtram Participant",
      year: "2020",
      description: "Recognized for contributions to community development and empowerment.",
      logo: "/assets/pratima.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50"> {/* Increased height by changing py-16 to py-20 */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">KUDOS & MENTIONS</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Recognition and acknowledgments we've received for our work and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-32 h-32 rounded overflow-hidden flex-shrink-0 border-2 border-[#0e9aa7]"> {/* Adjusted w-25 h-20 to w-32 h-32 */}
                    <Image
                      src={award.logo || "/placeholder.svg"}
                      alt={award.organization}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Award className="text-[#0e9aa7] mr-2" size={16} />
                     
                    </div>
                    <h3 className="font-bold text-lg text-[#121d3e] mb-1">{award.title}</h3>
                    <p className="text-[#0e9aa7] text-sm mb-2">{award.organization}</p>
                    <p className="text-gray-700">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
