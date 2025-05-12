"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CompetitionDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const competition = {
    id: params.id,
    title: "Global Innovation Challenge 2024",
    organizer: "Tech Innovators Alliance",
    deadline: "August 15, 2024",
    benefits: "$25,000 + Mentorship",
    eligibility: [
      "Open to individuals and teams of up to 4 members",
      "Participants must be 18 years or older",
      "No geographical restrictions",
    ],
    description:
      "The Global Innovation Challenge is an international competition that brings together creative minds to solve pressing global problems through technology. Participants will develop innovative solutions addressing sustainability, healthcare, education, or financial inclusion.",
    country: "United States",
    region: "Virtual (Final Round in San Francisco)",
    applicationList: ["Submit team information", "Provide project concept", "Complete registration form"],
    image: "/placeholder.svg?height=300&width=500",
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{competition.title}</h1>
              <p className="text-lg mb-6">{competition.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <strong>Organizer:</strong> {competition.organizer}
                </div>
                <div>
                  <strong>Deadline:</strong> {competition.deadline}
                </div>
                <div>
                  <strong>Benefits:</strong> {competition.benefits}
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={handleRegisterClick}
              >
                Register Now
              </Button>
            </div>
            <div className="md:w-1/3">
            
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Eligibility Criteria</h2>
            <ul className="space-y-3">
              {competition.eligibility.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={competition.image} alt={competition.title} className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Application Process</h2>
          <ul className="space-y-3">
            {competition.applicationList.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Location</h2>
          <p>
            <strong>Country:</strong> {competition.country}
          </p>
          <p>
            <strong>Region:</strong> {competition.region}
          </p>
        </section>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for the Competition</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false); // Close modal after submission
            }}
          >
            <div className="space-y-4">
              <Input placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Input placeholder="Title" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Textarea placeholder="Message" rows={4} />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Submit
              </Button>
              <Button variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
