"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductPurchaseFormProps {
  productId: string
  productName: string
}

export default function ProductPurchaseForm({ productId, productName }: ProductPurchaseFormProps) {
  const router = useRouter()
  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormSubmitted(true)

    // Redirect after successful submission
    setTimeout(() => {
      router.push("/services/merchandise")
    }, 3000)
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  if (formSubmitted) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-green-600">Order Submitted Successfully!</CardTitle>
          <CardDescription className="text-center">
            Thank you for your purchase. Your order has been received and is being processed.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="mb-2">
            Order Reference: <span className="font-bold">ORD-{Math.floor(Math.random() * 10000)}</span>
          </p>
          <p>You will receive a confirmation email shortly.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => router.push("/services/merchandise")}>Return to Shop</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Purchase {productName}</CardTitle>
          <CardDescription>
            Complete the form below to purchase this product. All fields marked with * are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {formStep === 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Customer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" required />
              </div>
            </div>
          )}

          {formStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Shipping Information</h3>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input id="address" placeholder="Enter your street address" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="Enter your city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province *</Label>
                  <Input id="state" placeholder="Enter your state or province" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip/Postal Code *</Label>
                  <Input id="zipCode" placeholder="Enter your zip code" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="shippingNotes">Shipping Notes (Optional)</Label>
                <Textarea id="shippingNotes" placeholder="Add any special instructions for shipping" rows={3} />
              </div>
            </div>
          )}

          {formStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Payment Information</h3>
              <Tabs defaultValue="credit-card" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                  <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  <TabsTrigger value="bank-transfer">Bank Transfer</TabsTrigger>
                </TabsList>
                <TabsContent value="credit-card" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card *</Label>
                    <Input id="cardName" placeholder="Enter the name on your card" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input id="cardNumber" placeholder="Enter your card number" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input id="expiryDate" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input id="cvv" placeholder="Enter CVV" required />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="paypal" className="space-y-4 mt-4">
                  <p>You will be redirected to PayPal to complete your payment after submitting the form.</p>
                </TabsContent>
                <TabsContent value="bank-transfer" className="space-y-4 mt-4">
                  <p>You will receive our bank details via email after submitting the form.</p>
                </TabsContent>
              </Tabs>
              <div className="pt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-[#0e9aa7] hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#0e9aa7] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    *
                  </Label>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {formStep > 0 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}
          {formStep < 2 ? (
            <Button type="button" onClick={nextStep} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button type="submit" className="ml-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Complete Purchase"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </form>
  )
}
