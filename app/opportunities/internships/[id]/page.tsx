"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { ChevronLeft, Calendar, Globe } from "lucide-react"

export default function InternshipDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleApplyNow = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const internship = {
    id: params.id,
    title: "Marketing Intern",
    organization: "Global Solutions",
    deadline: "April 30, 2025",
    benefits: [
      "Hands-on experience in marketing strategies",
      "Skill development in social media management",
      "Exposure to brand management principles",
    ],
    eligibility: [
      "Currently pursuing a Bachelor's degree in Marketing or related field",
      "Strong interest in marketing and social media",
      "Excellent communication skills",
    ],
    description: `
      <p>We are looking for an enthusiastic Marketing Intern to join our marketing department and provide creative ideas to help achieve our goals. You will have administrative duties in developing and implementing marketing strategies.</p>
    `,
    country: "Remote",
    region: "Global",
    applications: [
      { name: "John Doe", email: "john.doe@example.com" },
      { name: "Jane Smith", email: "jane.smith@example.com" },
    ],
    image: "/path/to/image.jpg",
  }

  return (
    <>
      <section className="bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/opportunities/internships"
            className="flex items-center text-white/80 hover:text-white mb-4"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Internships
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{internship.title}</h1>
          <div className="flex items-center mb-2">
            <span className="flex items-center mr-4">
              <Calendar className="mr-2 h-5 w-5" />
              Deadline: {internship.deadline}
            </span>
            <span className="flex items-center mr-4">
              <Globe className="mr-2 h-5 w-5" />
              Country: {internship.country}
            </span>
            <span className="flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Region: {internship.region}
            </span>
          </div>
          <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-4 rounded font-bold text-lg" onClick={handleApplyNow}>
            Apply Now
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <img src={internship.image} alt={internship.title} className="w-full h-auto mb-8 rounded" />
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Full Description</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: internship.description }} />
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="list-disc pl-6">
                {internship.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
              <ul className="list-disc pl-6">
                {internship.eligibility.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {internship.title}</DialogTitle>
          </DialogHeader>
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </form>
          <DialogFooter>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]" onClick={closeModal}>
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
