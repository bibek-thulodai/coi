"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Check, Mail, ArrowRight, Bell } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the email to your backend
    console.log("Subscribing email:", email)
    setSubmitted(true)
    setEmail("")
    // Reset the success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-light-teal/20 via-white to-light-teal/10 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-dark-teal/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-dark-teal/5 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-dark-teal/5 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 items-stretch">
              {/* Left colored section */}
              <AnimatedSection
                animation="slide-in-left"
                className="md:col-span-2 bg-dark-teal p-8 text-white flex flex-col justify-center"
              >
                <div className="mb-6 inline-block p-3 bg-white/10 rounded-full">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6 text-white/80">
                  Get the latest opportunities, events, and updates delivered directly to your inbox.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="h-5 w-5 text-white" />
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center space-x-2 text-sm mt-2">
                  <Check className="h-5 w-5 text-white" />
                  <span>Exclusive opportunities</span>
                </div>
                <div className="flex items-center space-x-2 text-sm mt-2">
                  <Check className="h-5 w-5 text-white" />
                  <span>No spam, unsubscribe anytime</span>
                </div>
              </AnimatedSection>

              {/* Right form section */}
              <AnimatedSection animation="slide-in-right" className="md:col-span-3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-dark-teal mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-medium-teal mb-6">Join our community and never miss an opportunity.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-teal h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="pl-10 border-light-teal focus:border-dark-teal"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-dark-teal hover:bg-dark-teal/90 text-white flex items-center justify-center"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <span className="flex items-center">
                        <Check size={16} className="mr-2" />
                        Subscribed!
                      </span>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-medium-teal/80 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
