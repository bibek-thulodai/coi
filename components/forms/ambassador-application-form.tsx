"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export default function AmbassadorApplicationForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    motivation: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
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
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success
      toast({
        title: "Application Submitted!",
        description:
          "Your ambassador application has been successfully submitted. We'll review it and get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        motivation: "",
        agreeToTerms: false,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
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
          <h2 className="text-2xl font-bold text-[#121d3e]">Ambassador Application Form</h2>
          <p className="text-gray-600">Please fill out the form below to apply to become a COI Ambassador.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
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

            <div className="space-y-2">
              <Label htmlFor="motivation">
                Why do you want to become a COI Ambassador? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="motivation"
                name="motivation"
                placeholder="Please share your motivation for becoming a COI Ambassador..."
                className="min-h-[150px]"
                value={formData.motivation}
                onChange={handleChange}
                required
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
                  By submitting this application, you agree to our{" "}
                  <a href="/terms" className="text-[#0e9aa7] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-[#0e9aa7] hover:underline">
                    Privacy Policy
                  </a>
                  . You also agree to fulfill the responsibilities of a COI Ambassador.
                </p>
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
                SUBMITTING APPLICATION...
              </>
            ) : (
              "SUBMIT APPLICATION"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
