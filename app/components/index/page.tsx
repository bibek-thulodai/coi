import Link from "next/link"

export default function ComponentsIndexPage() {
  const components = [
    // Home components
    { name: "Hero Section", path: "/components/home/hero-section" },
    { name: "Video Section", path: "/components/home/video-section" },
    { name: "Services Section", path: "/components/home/services-section" },
    { name: "Testimonials Section", path: "/components/home/testimonials-section" },
    { name: "Partners Section", path: "/components/home/partners-section" },
    { name: "Stats Section", path: "/components/home/stats-section" },
    { name: "News Section", path: "/components/home/news-section" },
    { name: "CTA Section", path: "/components/home/cta-section" },
    { name: "Newsletter Section", path: "/components/home/newsletter-section" },
    { name: "Join Community Section", path: "/components/home/join-community-section" },
    { name: "Services Showcase Section", path: "/components/home/services-showcase-section" },
    { name: "Get Involved Section", path: "/components/home/get-involved-section" },

    // About components
    { name: "About Hero Section", path: "/components/about/hero-section" },
    { name: "Values Section", path: "/components/about/values-section" },
    { name: "Timeline Section", path: "/components/about/timeline-section" },
    { name: "Achievements Section", path: "/components/about/achievements-section" },
    { name: "About CTA Section", path: "/components/about/cta-section" },
    { name: "Our Story Section", path: "/components/about/our-story-section" },
    { name: "Mission Vision Section", path: "/components/about/mission-vision-section" },
    { name: "About Company Section", path: "/components/about/about-company-section" },
    { name: "Empower Goals Section", path: "/components/about/empower-goals-section" },
    { name: "Messages Section", path: "/components/about/messages-section" },
    { name: "Identity Values Section", path: "/components/about/identity-values-section" },
    { name: "Why Choose Us Section", path: "/components/about/why-choose-us-section" },
    { name: "Facts Section", path: "/components/about/facts-section" },
    { name: "Who We Are Section", path: "/components/about/who-we-are-section" },
    {
      name: "Why Choose Creating Opportunities Section",
      path: "/components/about/why-choose-creating-opportunities-section",
    },
    { name: "Partner Organizations Section", path: "/components/about/partner-organizations-section" },
    { name: "Our Impact Section", path: "/components/about/our-impact-section" },
    { name: "Team Section", path: "/components/about/team-section" },
    { name: "Team Section", path: "/components/about/team-section" },
    { name: "Partners Section", path: "/components/about/partners-section" },
    { name: "Network Section", path: "/components/about/network-section" },
    { name: "Kudos Mentions Section", path: "/components/about/kudos-mentions-section" },
    { name: "About Testimonials Section", path: "/components/about/testimonials-section" },
    { name: "FAQ Section", path: "/components/about/faq-section" },
    { name: "Media Mentions Section", path: "/components/about/media-mentions-section" },
    { name: "Join Section", path: "/components/about/join-section" },

    // Forms components
    { name: "Contact Form", path: "/components/forms/contact-form" },
    { name: "Job Application Form", path: "/components/forms/job-application-form" },
    { name: "Event Registration Form", path: "/components/forms/event-registration-form" },
    { name: "Resume Submission Form", path: "/components/forms/resume-submission-form" },
    { name: "Feedback Form", path: "/components/forms/feedback-form" },
    { name: "Newsletter Form", path: "/components/forms/newsletter-form" },
    { name: "Ambassador Application Form", path: "/components/forms/ambassador-application-form" },
    { name: "Lifetime Member Form", path: "/components/forms/lifetime-member-form" },
    { name: "Advertise Form", path: "/components/forms/advertise-form" },
    { name: "Product Purchase Form", path: "/components/forms/product-purchase-form" },
    { name: "Donation Form", path: "/components/forms/donation-form" },
    { name: "Post Job Form", path: "/components/forms/post-job-form" },
    { name: "Post Internship Form", path: "/components/forms/post-internship-form" },

    // Layout components
    { name: "Header", path: "/components/header" },
    { name: "Footer", path: "/components/footer" },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Components Index</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component, index) => (
          <Link
            key={index}
            href={component.path}
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            {component.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
