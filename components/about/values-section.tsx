import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Award, Shield, Globe } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, ethics, and transparency in all our interactions.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We embrace diversity and ensure equal access to opportunities for all individuals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek new and better ways to create and deliver opportunities.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting high standards for our services.",
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "We take responsibility for our actions and their impact on individuals and communities.",
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "We believe in the power of partnerships and collaborative efforts to create meaningful impact.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Core Values</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            These principles guide our decisions, shape our culture, and define how we interact with our stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-[#0e9aa7]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#121d3e] mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
