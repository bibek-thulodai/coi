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

export function PostInternshipForm() {
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
            <h3 className="text-xl font-semibold">Internship Details</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="internship-title">Internship Title *</Label>
                <Input id="internship-title" placeholder="e.g. Marketing Intern" required />
              </div>

              <div>
                <Label htmlFor="company-name">Company Name *</Label>
                <Input id="company-name" placeholder="e.g. Global Solutions" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="internship-location">Location *</Label>
                  <Input id="internship-location" placeholder="e.g. Kathmandu, Nepal" required />
                </div>

                <div>
                  <Label htmlFor="internship-type">Internship Type *</Label>
                  <Select>
                    <SelectTrigger id="internship-type">
                      <SelectValue placeholder="Select internship type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="internship-field">Field *</Label>
                  <Select>
                    <SelectTrigger id="internship-field">
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="internship-duration">Duration *</Label>
                  <Select>
                    <SelectTrigger id="internship-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-12-months">6-12 months</SelectItem>
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
            <h3 className="text-xl font-semibold">Internship Description & Requirements</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="internship-description">Internship Description *</Label>
                <Textarea
                  id="internship-description"
                  placeholder="Provide a detailed description of the internship role, responsibilities, and expectations."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="internship-requirements">Requirements *</Label>
                <Textarea
                  id="internship-requirements"
                  placeholder="List the qualifications, skills, and experience required for this internship."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="learning-opportunities">Learning Opportunities *</Label>
                <Textarea
                  id="learning-opportunities"
                  placeholder="Describe what interns will learn and the skills they will develop during this internship."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div>
                <Label>Is this a paid internship? *</Label>
                <RadioGroup defaultValue="paid" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paid" id="paid" />
                    <Label htmlFor="paid">Yes, this is a paid internship</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unpaid" id="unpaid" />
                    <Label htmlFor="unpaid">No, this is an unpaid internship</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="stipend">Stipend Amount (if paid)</Label>
                <Input id="stipend" placeholder="e.g. $500 per month" />
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
                <Input id="contact-name" placeholder="e.g. Jane Smith" required />
              </div>

              <div>
                <Label htmlFor="contact-email">Contact Email *</Label>
                <Input id="contact-email" type="email" placeholder="e.g. jane@company.com" required />
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
                    <span>Internship</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Visibility Period:</span>
                    <span>30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="font-bold">$49.00</span>
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
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]">Submit Internship Posting</Button>
          </div>
        </>
      )}
    </div>
  )
}
