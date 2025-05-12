import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Building, GraduationCap, Heart } from "lucide-react"

export default function NetworkSection() {
  const networks = [
    {
      icon: Globe,
      title: "Global Network",
      description: "We have established connections with organizations and individuals across 50+ countries.",
      count: "50+",
      label: "Countries",
    },
    {
      icon: Users,
      title: "Individual Network",
      description: "Our network includes thousands of talented individuals seeking opportunities for growth.",
      count: "10,000+",
      label: "Individuals",
    },
    {
      icon: Building,
      title: "Corporate Network",
      description: "We collaborate with businesses and corporations across various sectors and industries.",
      count: "100+",
      label: "Corporations",
    },
    {
      icon: GraduationCap,
      title: "Educational Network",
      description: "We partner with educational institutions to create learning and development opportunities.",
      count: "50+",
      label: "Institutions",
    },
    {
      icon: Heart,
      title: "Non-Profit Network",
      description: "We work with non-profit organizations to create social impact and community development.",
      count: "75+",
      label: "Non-Profits",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Network</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore our extensive network of partners, collaborators, and beneficiaries across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networks.map((network, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <network.icon className="text-[#0e9aa7]" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#121d3e] mb-2">{network.title}</h3>
                <p className="text-gray-700 mb-4">{network.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-[#0e9aa7]">{network.count}</span>
                  <span className="text-gray-600">{network.label}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
