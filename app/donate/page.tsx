import Link from "next/link"
import Image from "next/image"
import DonationForm from "@/components/forms/donation-form"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Support Our Mission"
          subtitle="Your donation helps us create opportunities and transform lives in our community."
          backgroundColor="#0e9aa7" // Using dark-teal color
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-8 bg-light-teal/20">
          <div className="container mx-auto px-4 text-center">
            <Link
              href="#donate-form"
              className="inline-block bg-light-teal hover:bg-light-teal/90 text-dark-teal font-bold py-3 px-8 rounded-full transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Information Section */}
      <AnimatedSection animation="slide-in-left" delay={0.3}>
        <section className="py-16 bg-light-teal/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-dark-teal mb-6 text-center">
                  How Your Donation Makes a Difference
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <Image
                      src="/assets/donate.jpg"
                      alt="Students in a classroom"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-700 mb-4">
                      At Creating Opportunities, we believe in the power of education and community support to transform
                      lives. Your generous donations directly fund our programs that provide:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-dark-teal mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Educational resources and scholarships
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-dark-teal mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Career development workshops and job placement assistance
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-dark-teal mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Community outreach and support services
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-dark-teal mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Mentorship programs for youth and young adults
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-light-teal/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-dark-teal mb-4">Your Impact by the Numbers</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4">
                      <div className="text-3xl font-bold text-dark-teal">500+</div>
                      <div className="text-sm text-gray-600">Students Supported</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-dark-teal">25</div>
                      <div className="text-sm text-gray-600">Community Programs</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-dark-teal">85%</div>
                      <div className="text-sm text-gray-600">Program Success Rate</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-dark-teal">12</div>
                      <div className="text-sm text-gray-600">Partner Organizations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Donation Form Section */}
      <AnimatedSection animation="fade-up" delay={0.2}>
        <section id="donate-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-dark-teal">Make Your Donation Today</h2>
              <DonationForm />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Other Ways to Support */}
      <AnimatedSection animation="slide-in-right" delay={0.3}>
        <section className="py-16 bg-light-teal/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-dark-teal">Other Ways to Support</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-dark-teal rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Volunteer</h3>
                <p className="text-gray-600 text-center mb-4">
                  Share your time and skills to help us make a difference in our community.
                </p>
                <div className="text-center">
                  <Link href="/get-involved/become-volunteer" className="text-dark-teal font-medium hover:underline">
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-dark-teal rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Corporate Partnership</h3>
                <p className="text-gray-600 text-center mb-4">
                  Partner with us to create meaningful impact while enhancing your CSR initiatives.
                </p>
                <div className="text-center">
                  <Link href="/get-involved/become-partner" className="text-dark-teal font-medium hover:underline">
                    Explore partnerships
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-dark-teal rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">In-Kind Donations</h3>
                <p className="text-gray-600 text-center mb-4">
                  Donate goods, services, or expertise to support our programs and initiatives.
                </p>
                <div className="text-center">
                  <Link href="/contact" className="text-dark-teal font-medium hover:underline">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animation="fade-in" delay={0.2}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-dark-teal">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-light-teal/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-dark-teal">Is my donation tax-deductible?</h3>
                  <p className="text-gray-700">
                    Yes, Creating Opportunities is a registered 501(c)(3) nonprofit organization, and all donations are
                    tax-deductible to the extent allowed by law. You will receive a tax receipt for your records.
                  </p>
                </div>
                <div className="bg-light-teal/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-dark-teal">Can I make a recurring donation?</h3>
                  <p className="text-gray-700">
                    Yes, our donation form allows you to set up monthly, quarterly, or annual recurring donations to
                    provide sustainable support for our programs and initiatives.
                  </p>
                </div>
                <div className="bg-light-teal/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-dark-teal">How is my donation used?</h3>
                  <p className="text-gray-700">
                    Your donation directly supports our programs and operational costs. We maintain transparency about
                    our finances and publish annual reports detailing how funds are allocated. Approximately 85% of all
                    donations go directly to program services.
                  </p>
                </div>
                <div className="bg-light-teal/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-dark-teal">
                    Can I donate in honor or memory of someone?
                  </h3>
                  <p className="text-gray-700">
                    Yes, you can make a tribute donation in honor or memory of a loved one. Please contact us directly
                    at donations@creatingopportunities.org to arrange this special type of gift.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
