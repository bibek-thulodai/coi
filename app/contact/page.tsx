import Link from "next/link"
import ContactForm from "@/components/forms/contact-form"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Contact Us"
          subtitle="We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries"
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      {/* Contact Categories */}
      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#121d3e]">How Can We Help You?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">General Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  Have a question about our organization or services? We're here to help.
                </p>
                <Link href="#contact-form" className="text-[#0d9488] font-medium hover:underline">
                  Send a message
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Support</h3>
                <p className="text-gray-600 mb-4">
                  Need assistance with an event, service, or have technical issues? Contact our support team.
                </p>
                <Link href="tel:+1234567890" className="text-[#0d9488] font-medium hover:underline">
                  Call us
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Partnerships</h3>
                <p className="text-gray-600 mb-4">
                  Interested in partnering with us or exploring collaboration opportunities? Let's connect.
                </p>
                <Link href="/get-involved/become-partner" className="text-[#0d9488] font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form and Info */}
      <AnimatedSection animation="slide-in-left" delay={0.3}>
        <section
          id="contact-form"
          className="py-16 bg-gradient-to-br from-white via-gray-100 to-gray-50"
        >
          <div className="container mx-auto px-4 bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#121d3e] animate-fade-in">Send Us a Message</h2>
                <p className="text-gray-600 mb-8 animate-slide-in-left">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#121d3e] animate-fade-in">Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md animate-slide-in-right">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-[#0d9488] mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:info@creatingoppo.com" className="text-gray-600 hover:text-[#0d9488]">
                          creatingoppo@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-[#0d9488] mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+1234567890" className="text-gray-600 hover:text-[#0d9488]">
                          +977 9808068870
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-[#0d9488] mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <address className="text-gray-600 not-italic">
                          123 Opportunity Street
                          <br />
                          Suite 456
                          <br />
                          City, State 12345
                        </address>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-[#0d9488] mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-md animate-fade-in">
                  <div className="bg-gray-300 h-64 w-full flex items-center justify-center">
                    <p className="text-gray-600">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection animation="fade-in" delay={0.2}>
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-lg mb-8">
                Subscribe to our newsletter to receive updates on our programs, events, and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" />
                <Button className="bg-[#0d9488] hover:bg-[#0c8b98] text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
