"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Removed the comprehensive list of countries
const countries = []

export default function DonationForm() {
  const [frequency, setFrequency] = useState<string>("one-time")
  const [selectedCountry, setSelectedCountry] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your donation! This is a demo - no actual payment will be processed.")
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-dark-teal to-medium-teal p-6 text-white">
        <h2 className="text-2xl font-bold">Make a Donation</h2>
        <p className="mt-2 opacity-90">Your support helps us create more opportunities for those in need</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Donation Frequency */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Donation Frequency</h3>
          <RadioGroup value={frequency} onValueChange={setFrequency} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <Label htmlFor="one-time">One-time donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="quarterly" id="quarterly" />
              <Label htmlFor="quarterly">Quarterly donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="annually" id="annually" />
              <Label htmlFor="annually">Annual donation</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Your Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="full-name">Full Name *</Label>
              <Input id="full-name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                required
                className="mt-1"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full py-6 text-lg bg-dark-teal hover:bg-dark-teal/90">
          Complete Donation
        </Button>

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>Your payment information is securely processed and we never store your card details.</p>
          <p>
            Creating Opportunities is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to
            the extent allowed by law.
          </p>
        </div>
      </form>
    </div>
  )
}
