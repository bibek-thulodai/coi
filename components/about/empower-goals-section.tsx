import { Card, CardContent } from "@/components/ui/card"
import { Target, Globe, Users } from "lucide-react"

export default function EmpowerGoalsSection() {
  const goals = [
    {
      icon: Target,
      title: "We Empower Your Goals",
      description:
        "At Creating Opportunities International, we are committed to empowering individuals to achieve their personal and professional goals. We provide the resources, guidance, and connections needed to turn aspirations into achievements.",
    },
    {
      icon: Users,
      title: "Goal 1: Empowering Young Changemakers",
      description:
        "We aim to empower young individuals with the skills, knowledge, and opportunities they need to become effective changemakers in their communities and beyond.",
    },
    {
      icon: Globe,
      title: "Goal 2: Global Access to Opportunities",
      description:
        "We strive to create and facilitate access to global opportunities for talented individuals, breaking down geographical barriers and opening doors to international experiences and growth.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Goals</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We are driven by clear goals that guide our efforts and initiatives to create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mb-6">
                  <goal.icon className="text-[#0e9aa7]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#121d3e] mb-4">{goal.title}</h3>
                <p className="text-gray-700">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
