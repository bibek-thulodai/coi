import Image from "next/image"
import { CheckCircle, Megaphone } from "lucide-react"
import AdvertiseForm from "@/components/forms/advertise-form"

export default function AdvertisePage() {
  const benefits = [
    "Reach a targeted audience of professionals, students, and organizations",
    "Enhance your brand visibility within our community",
    "Support our mission while promoting your products or services",
    "Access to various advertising platforms and formats",
    "Customized advertising solutions to meet your specific needs",
    "Analytics and reporting on your advertisement performance",
  ]

  const adOptions = [
    {
      title: "Website Advertising",
      description: "Banner ads, sidebar ads, and sponsored content on our website.",
      price: "Starting from $100/month",
    },
    {
      title: "Newsletter Advertising",
      description: "Sponsored content and ads in our regular newsletters sent to our subscribers.",
      price: "Starting from $150/issue",
    },
    {
      title: "Event Sponsorship",
      description: "Sponsor our events and gain visibility among attendees and participants.",
      price: "Starting from $500/event",
    },
    {
      title: "Social Media Promotion",
      description: "Sponsored posts and mentions across our social media platforms.",
      price: "Starting from $75/post",
    },
    {
      title: "Job Listings",
      description: "Feature your job openings on our opportunities platform.",
      price: "Starting from $50/listing",
    },
    {
      title: "Custom Packages",
      description: "Tailored advertising solutions designed to meet your specific needs and goals.",
      price: "Contact us for pricing",
    },
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white w-full h-[400px] relative">
        <div className="container mx-auto h-full">
          <div className="absolute bottom-12 left-4 md:left-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advertise with Us</h1>
            <p className="max-w-3xl text-lg">
              Reach our network of professionals, students, and organizations with your message.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/advertise.jpg"
                alt="Advertise with Us"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Why Advertise with Us?</h2>
              <p className="text-gray-700 mb-6">
                Creating Opportunities International offers a unique platform to reach a diverse audience of
                professionals, students, organizations, and communities. By advertising with us, you not only promote
                your products or services but also support our mission to create opportunities and transform lives.
              </p>
              <div className="space-y-3 mb-6">
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Advertising Options</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer various advertising options to help you reach your target audience effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="text-[#0e9aa7]" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#121d3e] mb-2">{option.title}</h3>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <div className="text-[#0e9aa7] font-bold">{option.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-center">Request Advertising</h2>
          <div className="max-w-4xl mx-auto">
            <AdvertiseForm />
          </div>
        </div>
      </section>
    </>
  )
}
