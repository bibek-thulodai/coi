"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ChevronLeft } from "lucide-react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobId = params?.id;

  // Updated mock data
  const job = {
    id: jobId,
    title: "Software Engineer",
    deadline: "June 30, 2025",
    benefits: [
      "Health insurance",
      "Flexible working hours",
      "Remote work options",
      "Professional development programs",
    ],
    eligibility: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in JavaScript, React, and Node.js",
      "Strong problem-solving skills",
    ],
    fullDescription: `
      <p>We are looking for a skilled Software Engineer to join our team. You will be responsible for developing and maintaining high-quality software solutions.</p>
      
      <h4>Responsibilities:</h4>
      <ul>
        <li>Write clean, maintainable, and efficient code</li>
        <li>Collaborate with cross-functional teams</li>
        <li>Participate in code reviews</li>
        <li>Ensure software quality through testing</li>
      </ul>
    `,
    country: "USA",
    region: "California",
    applicationList: [
      { name: "John Doe", email: "john.doe@example.com", position: "Software Engineer" },
      { name: "Jane Smith", email: "jane.smith@example.com", position: "Software Engineer" },
    ],
    image: "/images/software-engineer.jpg",
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <Link href="/opportunities/jobs" className="flex items-center text-white/80 hover:text-white mb-4 md:mb-0">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Jobs
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
          <div className="flex flex-wrap items-center text-white/80 gap-x-6 gap-y-2 mb-6">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{job.region}, {job.country}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>Deadline: {job.deadline}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-white text-[#121d3e]">Software Development</Badge>
            <Badge className="bg-[#0e9aa7]">Featured</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>Apply for {job.title}</ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Position" placeholder="Enter the position you're applying for" />
            <Textarea label="Experience" placeholder="Describe your experience" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload CV</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Submit Application</Button>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <img src={job.image} alt={job.title} className="w-full h-full object-cover rounded mb-6" />
                  <h2 className="text-2xl font-bold mb-6">Full Description</h2>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.fullDescription }} />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
                  <ul className="list-disc pl-6">
                    {job.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                  <ul className="list-disc pl-6">
                    {job.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:w-1/3">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Job Overview</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Deadline:</span>
                      <span className="font-medium">{job.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Country:</span>
                      <span className="font-medium">{job.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Region:</span>
                      <span className="font-medium">{job.region}</span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]" onClick={() => setIsModalOpen(true)}>
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
