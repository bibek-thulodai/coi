import Image from "next/image"
import { CheckCircle } from "lucide-react"
import AmbassadorApplicationForm from "@/components/forms/ambassador-application-form"

export default function BecomeAmbassadorPage() {
  const responsibilities = [
    "Represent Creating Opportunities International in your community",
    "Promote our mission, vision, and initiatives",
    "Identify and connect potential beneficiaries with our opportunities",
    "Organize and facilitate community events and activities",
    "Provide feedback and insights from your community",
    "Collaborate with other ambassadors and team members",
  ]

  const benefits = [
    "Leadership and communication skills development",
    "Networking opportunities with like-minded individuals",
    "Recognition as an official representative of our organization",
    "Access to exclusive resources and training",
    "Certificate of recognition and recommendation letter",
    "Opportunity to make a positive impact in your community",
  ]

  return (
    <>
      <header className="relative">
        <Image
          src="/assets/ambasador.jpg"
          alt="Ambassador Header"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      
      </header>

   

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/ambass.png"
                alt="Our Ambassadors"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">What is a COI Ambassador?</h2>
              <p className="text-gray-700 mb-6">
                COI Ambassadors are passionate individuals who represent Creating Opportunities International in their
                communities. They are advocates for our mission and help connect people with the opportunities we
                provide. Ambassadors play a crucial role in expanding our reach and impact.
              </p>
              <p className="text-gray-700 mb-6">
                As an ambassador, you will be the face and voice of Creating Opportunities in your community, helping us
                bridge the gap between opportunities and those who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Ambassador Responsibilities</h2>
              <div className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Benefits of Being an Ambassador</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-center">Apply to Become an Ambassador</h2>
          <div className="max-w-4xl mx-auto">
            <AmbassadorApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
