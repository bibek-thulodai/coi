import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake } from "lucide-react"

export default function PartnerOrganizationsSection() {
  const benefits = [
    "Access to a wide network of talented individuals",
    "Collaboration on impactful projects and initiatives",
    "Enhanced visibility and recognition",
    "Opportunity to contribute to positive social change",
    "Participation in events and programs",
    "Shared resources and expertise",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Be Our Partner Organization</h2>
            <p className="text-gray-700 mb-6">
              Join our network of partner organizations and be part of our mission to create opportunities and transform
              lives. We collaborate with a diverse range of organizations, from educational institutions and businesses
              to non-profits and government agencies.
            </p>
            <div className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Handshake className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Become a Partner</Button>
          </div>
          <div>
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/assets/partnerorgn.jpg"
                  alt="Partner Organizations"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#121d3e] mb-3">Our Partnership Approach</h3>
                  <p className="text-gray-700">
                    We believe in building meaningful, mutually beneficial partnerships that create lasting impact. Our
                    approach is collaborative, transparent, and focused on achieving shared goals and objectives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
