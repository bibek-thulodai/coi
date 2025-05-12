import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Globe, Award, Shield, Lightbulb } from "lucide-react"

export default function WhyChooseCreatingOpportunitiesSection() {
  const reasons = [
    {
      icon: Target,
      title: "Focused Approach",
      description:
        "We take a targeted approach to identifying and creating opportunities that match specific needs and aspirations.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Our team of experienced professionals is committed to providing exceptional service and support.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "We have established a vast network of partners and collaborators across the globe.",
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "We have a track record of successfully connecting individuals with transformative opportunities.",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description:
        "We are a trusted partner for individuals, organizations, and communities seeking growth and development.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We continuously develop innovative solutions to address evolving needs and challenges.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Why Choose Creating Opportunities</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Discover what sets us apart and why we are the preferred platform for opportunity creation and access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="text-[#0e9aa7]" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#121d3e] mb-2">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
