"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/ui/modal";
import { CalendarDays, MapPin } from "lucide-react";

// Simplified mock function to fetch fellowship data
function getFellowshipData(id: string) {
  const fellowships = {
    "global-leadership": {
      title: "Global Leadership Fellowship",
      organization: "International Development Institute",
      deadline: "June 30, 2025",
      benefits: [
        "Monthly stipend of $25,000 for the year",
        "Health insurance coverage",
        "Professional development allowance",
      ],
      eligibility: "Graduate degree holders with 2-5 years of professional experience",
      description:
        "The Global Leadership Fellowship is designed for emerging leaders committed to addressing global challenges. Fellows will engage in leadership training, field placements, and collaborative projects while receiving mentorship from experienced professionals in international development.",
      country: "Multiple Locations",
      region: "Global",
      image: "/placeholder.svg?height=400&width=600",
    },
  };

  return fellowships[id as keyof typeof fellowships] || fellowships["global-leadership"];
}

export default function FellowshipDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fellowship = getFellowshipData(params.id);

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <Badge className="bg-[#0e9aa7] hover:bg-[#0c8b98]">Fellowship</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{fellowship.title}</h1>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
              <p className="text-gray-300">{fellowship.country} ({fellowship.region})</p>
            </div>
            <div className="flex items-start">
              <CalendarDays className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
              <p className="text-gray-300">Application Deadline: {fellowship.deadline}</p>
            </div>
            <div className="flex items-start">
              <p className="text-gray-300 font-medium">Eligibility: {fellowship.eligibility}</p>
            </div>
          </div>
          <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white mt-4" onClick={() => setIsModalOpen(true)}>
            Apply Now
          </Button>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src={fellowship.image || "/placeholder.svg"}
              alt={fellowship.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#121d3e] mb-4">About This Fellowship</h2>
            <p className="text-gray-700 mb-6">{fellowship.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#121d3e] mb-4">Fellowship Benefits</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {fellowship.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>Apply for {fellowship.title}</ModalHeader>
        <ModalBody>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsModalOpen(false)} className="bg-gray-500 hover:bg-gray-600 text-white">
            Close
          </Button>
          <Button type="submit" className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
            Submit Application
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
