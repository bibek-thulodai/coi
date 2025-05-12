import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Building, Handshake, Globe, Award, Users } from "lucide-react"

export default function BecomePartnerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#121d3e] text-white py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/background-pattern.png')] bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
            <p className="text-xl mb-8">
              Join our network of change-makers and help us create more opportunities for communities worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#partnership-form"
                className="bg-[#0e76bc] hover:bg-[#0a5a8e] text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Become a Partner
              </Link>
              <Link
                href="#partnership-types"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Creating Opportunities?</h2>
            <p className="text-gray-600 text-lg">
              Our partnerships are built on mutual growth, shared values, and collective impact. Together, we can
              achieve more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Globe className="w-12 h-12 text-[#0e76bc]" />}
              title="Expanded Reach"
              description="Access new audiences and markets through our extensive network of communities and stakeholders."
            />
            <BenefitCard
              icon={<Award className="w-12 h-12 text-[#0e76bc]" />}
              title="Enhanced Reputation"
              description="Associate your brand with meaningful social impact and community development initiatives."
            />
            <BenefitCard
              icon={<Users className="w-12 h-12 text-[#0e76bc]" />}
              title="Community Engagement"
              description="Connect directly with communities and create authentic relationships with potential customers."
            />
            <BenefitCard
              icon={<Building className="w-12 h-12 text-[#0e76bc]" />}
              title="Resource Sharing"
              description="Pool resources, expertise, and infrastructure to maximize efficiency and impact."
            />
            <BenefitCard
              icon={<Handshake className="w-12 h-12 text-[#0e76bc]" />}
              title="Collaborative Innovation"
              description="Co-create solutions to complex social challenges through diverse perspectives and expertise."
            />
            <BenefitCard
              icon={<CheckCircle className="w-12 h-12 text-[#0e76bc]" />}
              title="Measurable Impact"
              description="Track and showcase the tangible difference your partnership makes in communities."
            />
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-gray-600 text-lg">
              We offer various partnership models tailored to your organization's goals, capacity, and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PartnershipTypeCard
              title="Strategic Partners"
              description="Long-term, comprehensive partnerships focused on shared strategic goals and systemic change."
              features={[
                "Joint program development",
                "Shared resources and infrastructure",
                "Co-branded initiatives",
                "Multi-year commitment",
                "Executive engagement",
              ]}
            />
            <PartnershipTypeCard
              title="Program Partners"
              description="Collaborate on specific programs or initiatives aligned with your expertise and interests."
              features={[
                "Project-based collaboration",
                "Technical expertise sharing",
                "Targeted community impact",
                "Defined timeframes",
                "Focused resource allocation",
              ]}
            />
            <PartnershipTypeCard
              title="Resource Partners"
              description="Provide financial or in-kind support to enable our work and expand our reach."
              features={[
                "Financial contributions",
                "Pro-bono services",
                "Equipment or technology donation",
                "Facility sharing",
                "Volunteer engagement",
              ]}
            />
            <PartnershipTypeCard
              title="Knowledge Partners"
              description="Share expertise, research, and insights to strengthen our approaches and methodologies."
              features={[
                "Research collaboration",
                "Training and capacity building",
                "Knowledge exchange",
                "Best practice sharing",
                "Innovation workshops",
              ]}
            />
            <PartnershipTypeCard
              title="Advocacy Partners"
              description="Join forces to amplify voices, influence policy, and drive systemic change."
              features={[
                "Joint advocacy campaigns",
                "Policy development",
                "Stakeholder engagement",
                "Public awareness initiatives",
                "Coalition building",
              ]}
            />
            <PartnershipTypeCard
              title="Community Partners"
              description="Local organizations and groups that help us connect with and understand community needs."
              features={[
                "Community liaison",
                "Local implementation",
                "Cultural context expertise",
                "Grassroots mobilization",
                "Sustainability planning",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Success Stories</h2>
            <p className="text-gray-600 text-lg">
              See how our partnerships have created meaningful impact in communities around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SuccessStoryCard
              image="/placeholder.svg?height=300&width=500"
              title="Youth Skills Initiative with TechCorp"
              description="Our partnership with TechCorp trained over 500 young people in digital skills, with 78% securing employment or starting businesses within six months."
              partner="TechCorp"
            />
            <SuccessStoryCard
              image="/placeholder.svg?height=300&width=500"
              title="Community Health Program with HealthAlliance"
              description="Working with HealthAlliance, we established 12 community health centers serving over 25,000 people in underserved areas."
              partner="HealthAlliance"
            />
            <SuccessStoryCard
              image="/placeholder.svg?height=300&width=500"
              title="Environmental Sustainability Project with GreenFuture"
              description="Our partnership with GreenFuture led to the restoration of 150 acres of degraded land and trained 300 community members in sustainable agriculture."
              partner="GreenFuture"
            />
            <SuccessStoryCard
              image="/placeholder.svg?height=300&width=500"
              title="Education Access Program with LearnGlobal"
              description="Together with LearnGlobal, we provided scholarships to 1,000 students from marginalized communities, with a 92% program completion rate."
              partner="LearnGlobal"
            />
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Partners Say</h2>
            <p className="text-gray-600 text-lg">
              Hear directly from organizations that have partnered with us to create change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with Creating Opportunities has allowed us to extend our impact far beyond what we could achieve alone. Their community-centered approach ensures sustainable outcomes."
              name="Sarah Johnson"
              title="CSR Director, Global Innovations"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The team at Creating Opportunities brings unparalleled expertise in community engagement. Our partnership has opened doors to new markets while making a real difference."
              name="Michael Chen"
              title="CEO, TechForward"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="From day one, our partnership has been characterized by transparency, mutual respect, and shared commitment to measurable outcomes."
              name="Amara Okafor"
              title="Executive Director, Community Health Network"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partnership Process</h2>
            <p className="text-gray-600 text-lg">
              We've designed a straightforward process to establish meaningful and effective partnerships.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#0e76bc]"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <TimelineItem
                  step="1"
                  title="Initial Conversation"
                  description="We start with a conversation to understand your organization's goals, values, and interests."
                  isLeft={true}
                />
                <TimelineItem
                  step="2"
                  title="Exploration & Alignment"
                  description="We explore potential areas of collaboration and assess alignment with our mission and programs."
                  isLeft={false}
                />
                <TimelineItem
                  step="3"
                  title="Partnership Design"
                  description="Together, we design a partnership model that maximizes impact and meets both organizations' objectives."
                  isLeft={true}
                />
                <TimelineItem
                  step="4"
                  title="Agreement & Planning"
                  description="We formalize our partnership through an agreement and develop a detailed implementation plan."
                  isLeft={false}
                />
                <TimelineItem
                  step="5"
                  title="Implementation"
                  description="We launch our collaborative work with regular check-ins and adaptations as needed."
                  isLeft={true}
                />
                <TimelineItem
                  step="6"
                  title="Evaluation & Growth"
                  description="We regularly evaluate our impact and identify opportunities to strengthen and expand our partnership."
                  isLeft={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Partnership Journey</h2>
            <p className="text-gray-300 text-lg">
              Fill out the form below to express your interest in partnering with Creating Opportunities.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Name*
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person*
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position/Title*
                  </label>
                  <input
                    type="text"
                    id="position"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
                  Partnership Type of Interest
                </label>
                <select
                  id="partnershipType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                >
                  <option value="">Select a partnership type</option>
                  <option value="strategic">Strategic Partner</option>
                  <option value="program">Program Partner</option>
                  <option value="resource">Resource Partner</option>
                  <option value="knowledge">Knowledge Partner</option>
                  <option value="advocacy">Advocacy Partner</option>
                  <option value="community">Community Partner</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="youthEmpowerment" className="mr-2" />
                    <label htmlFor="youthEmpowerment">Youth Empowerment</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="communityDevelopment" className="mr-2" />
                    <label htmlFor="communityDevelopment">Community Development</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="globalImpact" className="mr-2" />
                    <label htmlFor="globalImpact">Global Impact</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="networkBuilding" className="mr-2" />
                    <label htmlFor="networkBuilding">Network Building</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="entrepreneurial" className="mr-2" />
                    <label htmlFor="entrepreneurial">Entrepreneurial Mindset</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="aspirational" className="mr-2" />
                    <label htmlFor="aspirational">Aspirational Youth</label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your organization and partnership goals*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0e76bc] focus:border-[#0e76bc]"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="newsletter" className="mr-2" />
                <label htmlFor="newsletter">Subscribe to our newsletter for partnership opportunities</label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#0e76bc] hover:bg-[#0a5a8e] text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Submit Partnership Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about partnering with Creating Opportunities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="What is the minimum commitment period for partnerships?"
              answer="While we're flexible in our approach, most partnerships benefit from at least a one-year commitment to allow for proper planning, implementation, and evaluation. However, we also engage in shorter-term project-based collaborations when appropriate."
            />
            <FAQItem
              question="Do you only partner with large organizations?"
              answer="Not at all! We partner with organizations of all sizes, from grassroots community groups to multinational corporations. What matters most is alignment of values and goals, not organizational size."
            />
            <FAQItem
              question="How do you measure the impact of partnerships?"
              answer="We work with each partner to establish clear metrics and evaluation frameworks at the outset. These typically include both quantitative measures (e.g., number of people served, resources mobilized) and qualitative assessments (e.g., participant feedback, case studies)."
            />
            <FAQItem
              question="Can we customize a partnership model to fit our specific needs?"
              answer="While we've outlined common partnership types, we recognize that each organization is unique. We're happy to work with you to design a customized partnership model that aligns with your specific goals, capacity, and interests."
            />
            <FAQItem
              question="What resources are required to become a partner?"
              answer="Resource commitments vary widely depending on the partnership type and scope. Some partnerships involve primarily financial support, while others focus on sharing expertise, networks, or in-kind contributions. During our initial conversations, we'll explore what resources make the most sense for your organization."
            />
            <FAQItem
              question="How long does it typically take to establish a partnership?"
              answer="The timeline varies depending on the complexity of the partnership and the decision-making processes of both organizations. Simple collaborations might be established within a few weeks, while more comprehensive strategic partnerships typically take 2-3 months to finalize."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0e76bc] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact Together?</h2>
            <p className="text-xl mb-8">
              Join our network of partners creating positive change in communities worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#partnership-form"
                className="bg-white text-[#0e76bc] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Become a Partner
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for benefit cards
function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Component for partnership type cards
function PartnershipTypeCard({
  title,
  description,
  features,
}: { title: string; description: string; features: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-[#0e76bc] mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component for success story cards
function SuccessStoryCard({
  image,
  title,
  description,
  partner,
}: { image: string; title: string; description: string; partner: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center">
          <span className="text-sm font-medium text-[#0e76bc]">Partner: {partner}</span>
        </div>
      </div>
    </div>
  )
}

// Component for testimonial cards
function TestimonialCard({ quote, name, title, image }: { quote: string; name: string; title: string; image: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="mb-4">
        <svg className="w-8 h-8 text-[#0e76bc] opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  )
}

// Component for timeline items
function TimelineItem({
  step,
  title,
  description,
  isLeft,
}: { step: string; title: string; description: string; isLeft: boolean }) {
  return (
    <div className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}>
      <div className="md:w-1/2"></div>

      {/* Circle on timeline */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#0e76bc] text-white flex items-center justify-center z-10">
        {step}
      </div>

      <div
        className={`md:w-1/2 bg-white p-6 rounded-lg shadow-md border border-gray-100 ${isLeft ? "md:mr-8" : "md:ml-8"} mt-4 md:mt-0`}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

// Component for FAQ items
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
