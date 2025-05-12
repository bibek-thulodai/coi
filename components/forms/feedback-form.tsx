"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export default function FeedbackForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "",
    serviceUsed: "",
    satisfaction: "",
    feedback: "",
    improvements: "",
    recommendRating: "5",
    agreeToShare: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToShare: checked }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, satisfaction: value }))
  }

  const handleRecommendChange = (value: string) => {
    setFormData((prev) => ({ ...prev, recommendRating: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your valuable feedback.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        feedbackType: "",
        serviceUsed: "",
        satisfaction: "",
        feedback: "",
        improvements: "",
        recommendRating: "5",
        agreeToShare: false,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your feedback. Please try again.",
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
          <h2 className="text-2xl font-bold text-[#121d3e]">Share Your Feedback</h2>
          <p className="text-gray-600">We value your opinion and would love to hear about your experience.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

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
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedbackType">
                Feedback Type <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.feedbackType}
                onValueChange={(value) => handleSelectChange("feedbackType", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select feedback type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Feedback</SelectItem>
                  <SelectItem value="service">Service Feedback</SelectItem>
                  <SelectItem value="event">Event Feedback</SelectItem>
                  <SelectItem value="website">Website Feedback</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.feedbackType === "service" && (
              <div className="space-y-2">
                <Label htmlFor="serviceUsed">
                  Service Used <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.serviceUsed}
                  onValueChange={(value) => handleSelectChange("serviceUsed", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select the service you used" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="career-development">Career Development</SelectItem>
                    <SelectItem value="skills-training">Skills Training</SelectItem>
                    <SelectItem value="consulting">Consulting Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label>
                Overall Satisfaction <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.satisfaction}
                onValueChange={handleRadioChange}
                className="flex flex-col space-y-1"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                  <Label htmlFor="very-satisfied" className="font-normal">
                    Very Satisfied
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="satisfied" id="satisfied" />
                  <Label htmlFor="satisfied" className="font-normal">
                    Satisfied
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neutral" id="neutral" />
                  <Label htmlFor="neutral" className="font-normal">
                    Neutral
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                  <Label htmlFor="dissatisfied" className="font-normal">
                    Dissatisfied
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
                  <Label htmlFor="very-dissatisfied" className="font-normal">
                    Very Dissatisfied
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">
                Your Feedback <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="feedback"
                name="feedback"
                placeholder="Please share your experience with us..."
                className="min-h-[150px]"
                value={formData.feedback}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="improvements">Suggestions for Improvement</Label>
              <Textarea
                id="improvements"
                name="improvements"
                placeholder="How can we improve our services?"
                className="min-h-[100px]"
                value={formData.improvements}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>
                How likely are you to recommend us to others? <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">Not likely</span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        formData.recommendRating === rating.toString()
                          ? "bg-[#0e9aa7] text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => handleRecommendChange(rating.toString())}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <span className="text-sm">Very likely</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="agreeToShare" checked={formData.agreeToShare} onCheckedChange={handleCheckboxChange} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="agreeToShare"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree that my feedback can be shared on your website and promotional materials
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
              "SUBMIT FEEDBACK"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
