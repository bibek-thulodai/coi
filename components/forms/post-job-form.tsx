"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

export function PostJobForm() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="space-y-8">
      {step === 1 && (
        <>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Job Details</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="job-title">Job Title *</Label>
                <Input id="job-title" placeholder="e.g. Senior Project Manager" required />
              </div>

              <div>
                <Label htmlFor="company-name">Company Name *</Label>
                <Input id="company-name" placeholder="e.g. Tech Innovations" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="job-location">Location *</Label>
                  <Input id="job-location" placeholder="e.g. Kathmandu, Nepal" required />
                </div>

                <div>
                  <Label htmlFor="job-type">Job Type *</Label>
                  <Select>
                    <SelectTrigger id="job-type">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="job-category">Category *</Label>
                  <Select>
                    <SelectTrigger id="job-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience-level">Experience Level *</Label>
                  <Select>
                    <SelectTrigger id="experience-level">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="application-deadline">Application Deadline *</Label>
                <Input id="application-deadline" type="date" required />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={nextStep}>Next Step</Button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Job Description & Requirements</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="job-description">Job Description *</Label>
                <Textarea
                  id="job-description"
                  placeholder="Provide a detailed description of the job role, responsibilities, and expectations."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="job-requirements">Requirements *</Label>
                <Textarea
                  id="job-requirements"
                  placeholder="List the qualifications, skills, and experience required for this position."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="benefits">Benefits & Perks (Optional)</Label>
                <Textarea
                  id="benefits"
                  placeholder="Describe the benefits, perks, and other incentives offered with this position."
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="salary-range">Salary Range (Optional)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input id="salary-min" placeholder="Minimum (e.g. $30,000)" />
                  <Input id="salary-max" placeholder="Maximum (e.g. $50,000)" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Previous Step
            </Button>
            <Button onClick={nextStep}>Next Step</Button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact & Application Details</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Contact Person *</Label>
                <Input id="contact-name" placeholder="e.g. John Smith" required />
              </div>

              <div>
                <Label htmlFor="contact-email">Contact Email *</Label>
                <Input id="contact-email" type="email" placeholder="e.g. john@company.com" required />
              </div>

              <div>
                <Label htmlFor="contact-phone">Contact Phone (Optional)</Label>
                <Input id="contact-phone" placeholder="e.g. +977 9812345678" />
              </div>

              <div>
                <Label>How should candidates apply? *</Label>
                <RadioGroup defaultValue="email" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="apply-email" />
                    <Label htmlFor="apply-email">Email application to the contact email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="website" id="apply-website" />
                    <Label htmlFor="apply-website">Apply through company website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="platform" id="apply-platform" />
                    <Label htmlFor="apply-platform">Apply through this platform</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="application-url">Application URL (if applying through website)</Label>
                <Input id="application-url" placeholder="e.g. https://company.com/careers/apply" />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Previous Step
            </Button>
            <Button onClick={nextStep}>Next Step</Button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Review & Submit</h3>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Listing Type:</span>
                    <span>Job</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Visibility Period:</span>
                    <span>30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="font-bold">$99.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <a href="/terms" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="newsletter" className="text-sm font-normal">
                    Subscribe to our newsletter to receive updates on new features and opportunities
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Previous Step
            </Button>
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]">Submit Job Posting</Button>
          </div>
        </>
      )}
    </div>
  )
}
