"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    interests: {
      events: true,
      opportunities: true,
      training: false,
      news: false,
    },
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: checked,
      },
    }))
  }

  const handleTermsChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
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

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      toast({
        title: "Subscription Successful!",
        description: "You have been added to our newsletter.",
      })

      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          interests: {
            events: true,
            opportunities: true,
            training: false,
            news: false,
          },
          agreeToTerms: false,
        })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#121d3e]">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600">Stay updated with the latest opportunities, events, and news.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
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

        <div className="space-y-2">
          <Label>I'm interested in (select all that apply):</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interest-events"
                checked={formData.interests.events}
                onCheckedChange={(checked) => handleInterestChange("events", checked === true)}
              />
              <label
                htmlFor="interest-events"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Events & Workshops
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interest-opportunities"
                checked={formData.interests.opportunities}
                onCheckedChange={(checked) => handleInterestChange("opportunities", checked === true)}
              />
              <label
                htmlFor="interest-opportunities"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Job Opportunities
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interest-training"
                checked={formData.interests.training}
                onCheckedChange={(checked) => handleInterestChange("training", checked === true)}
              />
              <label
                htmlFor="interest-training"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Training Programs
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interest-news"
                checked={formData.interests.news}
                onCheckedChange={(checked) => handleInterestChange("news", checked === true)}
              />
              <label
                htmlFor="interest-news"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company News
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={handleTermsChange} required />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500">
              By subscribing, you agree to our{" "}
              <a href="/terms" className="text-[#0e9aa7] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-[#0e9aa7] hover:underline">
                Privacy Policy
              </a>
              . You can unsubscribe at any time.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white w-full"
          disabled={isSubmitting || submitted}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              SUBSCRIBING...
            </>
          ) : submitted ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              SUBSCRIBED!
            </>
          ) : (
            "SUBSCRIBE"
          )}
        </Button>
      </form>
    </div>
  )
}
