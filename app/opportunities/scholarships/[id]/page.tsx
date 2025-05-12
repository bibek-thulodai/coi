"use client"
import { useState } from "react"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ScholarshipDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Simplified mock data (assume this comes from the backend)
  const scholarship = {
    id: params.id,
    title: "Global Excellence Scholarship 2024",
    organization: "International Education Foundation",
    deadline: "June 30, 2024",
    country: "Global",
    region: "Online Application",
    description:
      "The Global Excellence Scholarship supports outstanding students pursuing undergraduate or graduate studies in any field. It recognizes academic excellence, leadership potential, and community service commitment.",
    image: "/placeholder.svg?height=300&width=600",
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 w-full">
        <div className="container mx-auto px-4 flex flex-col justify-end h-full">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{scholarship.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Deadline: {scholarship.deadline}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{scholarship.country} ({scholarship.region})</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Two-Column Grid Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img src={scholarship.image} alt="Scholarship" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Details Section */}
        <div>
          
          <p className="text-lg mb-6">{scholarship.description}</p>
              {/* Quick Information */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Organization</p>
              <p className="font-medium">{scholarship.organization}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Application Deadline</p>
              <p className="font-medium">{scholarship.deadline}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Country</p>
              <p className="font-medium">{scholarship.country}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Region</p>
              <p className="font-medium">{scholarship.region}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button className="w-full" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </Button>
          </div>
        </Card>
  
        </div>
      </div>

      {/* Quick Information */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
   

    
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-bold mb-4">Apply for {scholarship.title}</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Enter your email"
                />
              </div>
            </form>
            <div className="mt-6 flex justify-end space-x-4">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white"
              >
                Close
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit Application</Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
