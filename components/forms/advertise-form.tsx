"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export default function AdvertiseForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
    agreeToTerms: false,
  })
  const [docFile, setDocFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocFile(e.target.files[0])
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

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success
      toast({
        title: "Advertising Request Submitted!",
        description: "Your advertising request has been successfully submitted. Our team will contact you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        details: "",
        agreeToTerms: false,
      })
      setDocFile(null)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
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
          <h2 className="text-2xl font-bold text-[#121d3e]">Advertise With Us</h2>
          <p className="text-gray-600">
            Complete the form below to request advertising on our platform. Our team will contact you with more details.
          </p>
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
              <Label htmlFor="details">
                Details <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="details"
                name="details"
                placeholder="Please provide details about your advertising request..."
                className="min-h-[150px]"
                value={formData.details}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="document">Upload Documents</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="document"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                <label htmlFor="document" className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    {docFile ? (
                      <p className="text-sm font-medium text-[#0e9aa7]">{docFile.name}</p>
                    ) : (
                      <>
                        <p className="text-sm font-medium">Click to upload documents</p>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX, JPG, PNG (Max 5MB)</p>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300 text-[#0e9aa7] focus:ring-[#0e9aa7]"
                checked={formData.agreeToTerms}
                onChange={(e) => handleCheckboxChange("agreeToTerms", e.target.checked)}
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
                  By submitting this form, you agree to our{" "}
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
          </div>

          <Button
            type="submit"
            className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                SUBMITTING REQUEST...
              </>
            ) : (
              "SUBMIT ADVERTISING REQUEST"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
