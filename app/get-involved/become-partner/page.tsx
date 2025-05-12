"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building, GraduationCap, Heart } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    organizationName: "",
    chiefName: "",
    chiefDesignation: "",
    chiefWhatsapp: "",
    isRegistered: "no",
    registrationNumber: "",
    organizationEmail: "",
    website: "",
    facebookPage: "",
    organizationExperience: "",
    applicantName: "",
    applicantPosition: "",
    applicantWhatsapp: "",
    applicantEmail: "",
  })

  const [logo, setLogo] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, isRegistered: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the data to your backend
    // For demonstration, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // Reset form after successful submission
      setFormData({
        organizationName: "",
        chiefName: "",
        chiefDesignation: "",
        chiefWhatsapp: "",
        isRegistered: "no",
        registrationNumber: "",
        organizationEmail: "",
        website: "",
        facebookPage: "",
        organizationExperience: "",
        applicantName: "",
        applicantPosition: "",
        applicantWhatsapp: "",
        applicantEmail: "",
      })
      setLogo(null)
    }, 1500)
  }

  const benefits = [
    "Access to a wide network of talented individuals",
    "Collaboration on impactful projects and initiatives",
    "Enhanced visibility and recognition",
    "Opportunity to contribute to positive social change",
    "Participation in events and programs",
    "Shared resources and expertise",
  ]

  const partnerTypes = [
    {
      icon: Building,
      title: "Corporate Partners",
      description: "Businesses and corporations that support our mission through funding, resources, and expertise.",
    },
    {
      icon: GraduationCap,
      title: "Educational Partners",
      description:
        "Schools, colleges, universities, and other educational institutions that collaborate on programs and initiatives.",
    },
    {
      icon: Heart,
      title: "Non-Profit Partners",
      description: "Non-profit organizations that share our vision and work with us to create greater impact.",
    },
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Be Our Partner Organization</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Join our network of partner organizations and be part of our mission to create opportunities and transform
            lives.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Why Partner With Us?</h2>
              <p className="text-gray-700 mb-6">
                Creating Opportunities International collaborates with a diverse range of organizations, from
                educational institutions and businesses to non-profits and government agencies. Our partnerships are
                built on shared values and a commitment to creating positive impact.
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
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/partnerorgn.jpg"
                alt="Partner Organizations"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Types of Partnerships</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer various types of partnerships to accommodate different organizations and their unique
              contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="text-[#0e9aa7]" size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-[#121d3e] mb-2">{type.title}</h3>
                  <p className="text-gray-700">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Partnership Approach</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We believe in building meaningful, mutually beneficial partnerships that create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-700">
                We begin with a thorough consultation to understand your organization's goals and values.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Partnership Design</h3>
              <p className="text-gray-700">
                We work together to design a partnership that aligns with both our missions and objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-700">
                We implement the partnership with clear communication and regular check-ins.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Evaluation & Growth</h3>
              <p className="text-gray-700">
                We regularly evaluate our partnership and explore opportunities for growth and expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Partner Organization Application</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Fill out the form below to apply to become a partner organization. We'll review your application and get
              back to you soon.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted Successfully!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for your interest in partnering with Creating Opportunities International. We'll review your
                  application and contact you soon.
                </p>
                <Button onClick={() => setSubmitSuccess(false)} className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#121d3e]">Organization Information</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="organizationName">
                        Name of Organization <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="organizationName"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="chiefName">
                        Name of Chief of Organization <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="chiefName"
                        name="chiefName"
                        value={formData.chiefName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="chiefDesignation">
                        Designation/Status/Tag of Chief in your organization <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="chiefDesignation"
                        name="chiefDesignation"
                        value={formData.chiefDesignation}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="chiefWhatsapp">
                        Whatsapp Number of Chief <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="chiefWhatsapp"
                        name="chiefWhatsapp"
                        value={formData.chiefWhatsapp}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label>
                        Is your organization registered? <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={formData.isRegistered}
                        onValueChange={handleRadioChange}
                        className="flex space-x-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="registered-yes" />
                          <Label htmlFor="registered-yes" className="cursor-pointer">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="registered-no" />
                          <Label htmlFor="registered-no" className="cursor-pointer">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="registrationNumber">Registration Number</Label>
                      <Input
                        id="registrationNumber"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        disabled={formData.isRegistered === "no"}
                      />
                    </div>

                    <div>
                      <Label htmlFor="organizationEmail">
                        Email Address of Organization <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="organizationEmail"
                        name="organizationEmail"
                        type="email"
                        value={formData.organizationEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="website">Website (Optional)</Label>
                      <Input id="website" name="website" value={formData.website} onChange={handleChange} />
                    </div>

                    <div>
                      <Label htmlFor="facebookPage">
                        Facebook Page <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="facebookPage"
                        name="facebookPage"
                        value={formData.facebookPage}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="organizationExperience">
                        Can you tell us about the projects/Activities or Experiences of your org? (Optional)
                      </Label>
                      <Textarea
                        id="organizationExperience"
                        name="organizationExperience"
                        value={formData.organizationExperience}
                        onChange={handleChange}
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="logo">
                        Logo of Organization <span className="text-red-500">*</span>
                      </Label>
                      <div className="mt-1">
                        <Input
                          id="logo"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          required={!logo}
                          className="cursor-pointer"
                        />
                      </div>
                      {logo && <p className="text-sm text-green-600 mt-1">File selected: {logo.name}</p>}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#121d3e]">Applicant Information</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="applicantName">
                        Name Of Applicant <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="applicantName"
                        name="applicantName"
                        value={formData.applicantName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="applicantPosition">
                        Position of Applicant <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="applicantPosition"
                        name="applicantPosition"
                        value={formData.applicantPosition}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="applicantWhatsapp">
                        WhatsApp of Applicant <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="applicantWhatsapp"
                        name="applicantWhatsapp"
                        value={formData.applicantWhatsapp}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="applicantEmail">
                        Email of Applicant <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="applicantEmail"
                        name="applicantEmail"
                        type="email"
                        value={formData.applicantEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98] text-white py-6 text-lg font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Have Questions?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            If you have any questions about our partnership program, please don't hesitate to contact us.
          </p>
          <Link href="/contact">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
