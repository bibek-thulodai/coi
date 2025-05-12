import { Fingerprint, Heart, Shield, Globe, Users, Star } from "lucide-react"

export default function IdentityValuesSection() {
  const values = [
    {
      icon: Fingerprint,
      title: "Uniqueness",
      description: "We recognize and celebrate the unique potential and aspirations of each individual.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach our work with empathy and understanding for the challenges individuals face.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, ethics, and transparency in all our interactions.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We embrace a global outlook, connecting local talent with international opportunities.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and collaborative efforts to create meaningful impact.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting high standards for our services.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">OUR IDENTITY</h2>
            <p className="text-gray-700 mb-4">
              Creating Opportunities International is defined by our commitment to connecting talent with opportunity.
              We are a platform that bridges the gap between aspiration and achievement, providing the resources,
              guidance, and connections needed for success.
            </p>
            <p className="text-gray-700">
              Our identity is rooted in our belief in the potential of every individual and our dedication to creating
              pathways for growth and development. We are innovators, connectors, and enablers, working tirelessly to
              transform lives through meaningful opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">OUR VALUES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-[#0e9aa7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#121d3e] mb-1">{value.title}</h3>
                    <p className="text-gray-700 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
