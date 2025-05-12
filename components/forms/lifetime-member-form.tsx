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
import { Loader2, CreditCard } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export default function LifetimeMemberForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    dateOfBirth: "",
    gender: "",
    occupation: "",
    organization: "",
    interests: [],
    howHeard: "",
    motivation: "",
    membershipType: "lifetime",
    paymentMethod: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    agreeToTerms: false,
    receiveUpdates: true,
  })

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

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
        title: "Membership Application Submitted!",
        description: "Your lifetime membership application has been successfully submitted. Welcome to our community!",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        dateOfBirth: "",
        gender: "",
        occupation: "",
        organization: "",
        interests: [],
        howHeard: "",
        motivation: "",
        membershipType: "lifetime",
        paymentMethod: "",
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        agreeToTerms: false,
        receiveUpdates: true,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem processing your membership. Please try again.",
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
          <h2 className="text-2xl font-bold text-[#121d3e]">Lifetime Membership Application</h2>
          <p className="text-gray-600">Join our community as a lifetime member and support our mission.</p>
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

            <div className="space-y-2">
              <Label htmlFor="address">
                Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">
                  Country <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => handleSelectChange("country", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nepal">Nepal</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">
                  Date of Birth <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="occupation">
                  Occupation <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="occupation"
                  name="occupation"
                  placeholder="Enter your occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization/Institution</Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="Enter your organization or institution"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121d3e]">Membership Information</h3>

            <div className="space-y-2">
              <Label>
                Areas of Interest (Select all that apply) <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {[
                  "Education",
                  "Healthcare",
                  "Environment",
                  "Technology",
                  "Arts & Culture",
                  "Community Development",
                  "Youth Empowerment",
                  "Women's Rights",
                  "Economic Development",
                  "Social Justice",
                ].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={`interest-${interest.toLowerCase().replace(/\s+/g, "-")}`}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={(checked) => handleInterestChange(interest, checked === true)}
                    />
                    <label
                      htmlFor={`interest-${interest.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {interest}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="howHeard">
                How did you hear about us? <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.howHeard}
                onValueChange={(value) => handleSelectChange("howHeard", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="friend">Friend or Colleague</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">
                Why do you want to become a lifetime member? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="motivation"
                name="motivation"
                placeholder="Please share your motivation for becoming a lifetime member..."
                className="min-h-[150px]"
                value={formData.motivation}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121d3e]">Payment Information</h3>
            <div className="p-4 bg-[#f9f9f9] rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-lg text-[#121d3e]">Lifetime Membership Fee</div>
                <div className="font-bold text-xl text-[#0e9aa7]">$500.00</div>
              </div>
              <p className="text-gray-600 text-sm">
                Your lifetime membership gives you exclusive access to all our events, resources, and networking
                opportunities. It also supports our mission to create opportunities and transform lives.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="paymentMethod">
                Payment Method <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => handleRadioChange("paymentMethod", value)}
                className="flex flex-col space-y-1"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="font-normal">
                    Credit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="debit-card" id="debit-card" />
                  <Label htmlFor="debit-card" className="font-normal">
                    Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="font-normal">
                    PayPal
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {(formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card") && (
              <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="cardName">
                    Name on Card <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    placeholder="Enter the name on your card"
                    value={formData.cardName}
                    onChange={handleChange}
                    required={formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">
                    Card Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="Enter your card number"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required={formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card"}
                    />
                    <CreditCard
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">
                      Expiry Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required={formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cvv">
                      CVV <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleChange}
                      required={formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card"}
                    />
                  </div>
                </div>
              </div>
            )}
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
                  . You also agree to the membership terms and conditions.
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
                  I would like to receive updates about events, opportunities, and news
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
                PROCESSING PAYMENT...
              </>
            ) : (
              "COMPLETE MEMBERSHIP REGISTRATION"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
