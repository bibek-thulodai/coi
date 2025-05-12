"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export default function ResumeSubmissionForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    highestEducation: "",
    fieldOfStudy: "",
    yearsOfExperience: "",
    currentPosition: "",
    preferredIndustries: [],
    jobTypes: [],
    locationPreference: "",
    additionalInfo: "",
    agreeToTerms: false,
    receiveUpdates: true,
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "You must agree to the terms and conditions to proceed.",
        variant: "destructive",
      })
      return
    }

    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume to complete your submission.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success
      toast({
        title: "Resume Submitted!",
        description: "Your resume has been successfully submitted to our talent pool.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        highestEducation: "",
        fieldOfStudy: "",
        yearsOfExperience: "",
        currentPosition: "",
        preferredIndustries: [],
        jobTypes: [],
        locationPreference: "",
        additionalInfo: "",
        agreeToTerms: false,
        receiveUpdates: true,
      })
      setResumeFile(null)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your resume. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#121d3e]">Submit Your Resume</h2>
          <p className="text-gray-600">Join our talent pool to be notified of relevant opportunities.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121d3e]">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121d3e]">Education & Experience</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="highestEducation">
                  Highest Education <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.highestEducation}
                  onValueChange={(value) => handleSelectChange("highestEducation", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your highest education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy">
                  Field of Study <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  placeholder="E.g., Computer Science, Business, etc."
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="yearsOfExperience">
                  Years of Experience <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.yearsOfExperience}
                  onValueChange={(value) => handleSelectChange("yearsOfExperience", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentPosition">Current/Most Recent Position</Label>
                <Input
                  id="currentPosition"
                  name="currentPosition"
                  placeholder="E.g., Software Engineer, Marketing Manager"
                  value={formData.currentPosition}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121d3e]">Job Preferences</h3>

            <div className="space-y-2">
              <Label htmlFor="locationPreference">
                Location Preference <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.locationPreference}
                onValueChange={(value) => handleSelectChange("locationPreference", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your preferred location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kathmandu">Kathmandu Valley</SelectItem>
                  <SelectItem value="outside-kathmandu">Outside Kathmandu</SelectItem>
                  <SelectItem value="remote">Remote Work</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Preferred Job Types (Select all that apply)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {["Full-time", "Part-time", "Contract", "Freelance", "Internship", "Remote"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`job-type-${type.toLowerCase()}`}
                      checked={formData.jobTypes.includes(type.toLowerCase())}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData((prev) => ({
                            ...prev,
                            jobTypes: [...prev.jobTypes, type.toLowerCase()],
                          }))
                        } else {
                          setFormData((prev) => ({
                            ...prev,
                            jobTypes: prev.jobTypes.filter((t) => t !== type.toLowerCase()),
                          }))
                        }
                      }}
                    />
                    <label
                      htmlFor={`job-type-${type.toLowerCase()}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Preferred Industries (Select all that apply)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {[
                  "Technology",
                  "Finance",
                  "Healthcare",
                  "Education",
                  "Manufacturing",
                  "Retail",
                  "Hospitality",
                  "Non-profit",
                ].map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <Checkbox
                      id={`industry-${industry.toLowerCase()}`}
                      checked={formData.preferredIndustries.includes(industry.toLowerCase())}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData((prev) => ({
                            ...prev,
                            preferredIndustries: [...prev.preferredIndustries, industry.toLowerCase()],
                          }))
                        } else {
                          setFormData((prev) => ({
                            ...prev,
                            preferredIndustries: prev.preferredIndustries.filter((i) => i !== industry.toLowerCase()),
                          }))
                        }
                      }}
                    />
                    <label
                      htmlFor={`industry-${industry.toLowerCase()}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {industry}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121d3e]">Resume Upload</h3>

            <div className="space-y-2">
              <Label htmlFor="resume">
                Resume/CV <span className="text-red-500">*</span>
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    {resumeFile ? (
                      <p className="text-sm font-medium text-[#0e9aa7]">{resumeFile.name}</p>
                    ) : (
                      <>
                        <p className="text-sm font-medium">Click to upload your resume</p>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Any additional information you'd like to share with us..."
                className="min-h-[100px]"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked === true)}
                required
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500">
                  By submitting your resume, you agree to our{" "}
                  <a href="/terms" className="text-[#0e9aa7] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-[#0e9aa7] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="updates"
                checked={formData.receiveUpdates}
                onCheckedChange={(checked) => handleCheckboxChange("receiveUpdates", checked === true)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="updates"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I would like to receive job alerts and updates
                </label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                SUBMITTING...
              </>
            ) : (
              "SUBMIT RESUME"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
