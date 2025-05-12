import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Globe, Award } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Excellence in Service",
      description: "Recognized for our outstanding contribution to career development and opportunity creation.",
      year: "2023",
    },
    {
      icon: Users,
      title: "10,000+ Individuals Served",
      description: "Successfully connected over ten thousand individuals with life-changing opportunities.",
      year: "2022",
    },
    {
      icon: Globe,
      title: "International Partnerships",
      description: "Established partnerships with organizations across 15 countries to create global opportunities.",
      year: "2021",
    },
    {
      icon: Award,
      title: "Community Impact Award",
      description: "Honored for our significant impact on underserved communities across Nepal.",
      year: "2020",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Achievements</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Milestones that mark our journey and impact in creating opportunities and transforming lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-2 bg-[#0e9aa7]"></div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon className="text-[#0e9aa7]" size={24} />
                </div>
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold text-[#121d3e] mb-2">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
