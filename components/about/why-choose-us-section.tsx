import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Extensive Network",
      description: "We have built a vast network of partners and collaborators across various sectors and countries.",
    },
    {
      title: "Personalized Approach",
      description: "We tailor our services to meet the specific needs and aspirations of each individual.",
    },
    {
      title: "Proven Track Record",
      description: "We have a history of successfully connecting individuals with life-changing opportunities.",
    },
    {
      title: "Comprehensive Support",
      description: "We provide end-to-end support, from identifying opportunities to preparing for success.",
    },
    {
      title: "Global Reach",
      description: "We facilitate access to opportunities both locally and internationally.",
    },
    {
      title: "Commitment to Excellence",
      description: "We maintain high standards in all our services and initiatives.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Why Choose Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Discover the unique advantages of partnering with Creating Opportunities International.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-[#0e9aa7] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e] mb-2">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
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
