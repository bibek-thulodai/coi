import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Creating Opportunities International?",
      answer:
        "Creating Opportunities International is a youth-driven organization dedicated to connecting individuals and institutions with life-changing opportunities. We empower communities through academic reforms, skills development programs, events, fellowships, and global partnerships.",
    },
    {
      question: "What does Creating Opportunities do?",
      answer:
        "•	Academic Calendar & School Reform Toolkits,Youth Empowerment Initiatives like Bootcamps, Talks, and Fellowships,Opportunity Sharing, Matching & Mentorship,Event Management & Consultation Services,	Merchandise and Educational Materials, Long-term projects focused on education, governance, and climate action",
    },
    {
      question: "How can organizations partner with you?",
      answer:
        "Organizations can partner with us in various ways, including offering opportunities to our network, collaborating on projects and initiatives, providing resources and support, and participating in our events and programs. Contact us to discuss partnership possibilities.",
    },
    {
      question: "What types of opportunities do you offer?",
      answer:
        "We offer a wide range of opportunities, including educational scholarships, career development programs, skill enhancement workshops, networking events, mentorship programs, and more. The opportunities are tailored to meet diverse needs and aspirations.",
    },
    {
      question: "Do you operate only in Nepal?",
      answer:
        "While we are based in Nepal, our reach extends globally. We have partnerships and connections in over 50 countries, allowing us to facilitate international opportunities and experiences for our beneficiaries.",
    },
    {
      question: "How can I support your mission?",
      answer:
        "You can support our mission by becoming a partner, volunteering your time and expertise, contributing resources, spreading awareness about our work, and participating in our events and initiatives. Contact us to learn more about how you can get involved.",
    },
    {
      question: "Are your services free?",
      answer:
        "Many of our services are offered free of charge, especially to underserved populations. Some specialized programs and services may have associated costs, but we strive to keep them affordable and accessible. We also offer scholarships and financial assistance where possible.",
    },
    {
      question: "How do I stay updated on new opportunities?",
      answer:
        "You can stay updated on new opportunities by subscribing to our newsletter, following us on social media, regularly checking our website, and joining our network. We regularly share information about new opportunities and initiatives through these channels.",
    },
    {
      question: "Who can benefit from your services?",
      answer:
        "Our services are ideal for:\n• Schools and educational institutions\n• Youth and students seeking global opportunities\n• NGOs and community-based organizations\n• Corporate and government entities\n• Event planners and training organizers",
    },
    {
      question: "What is included in your Academic calendar & School Reform Package?",
      answer:
        "Our all-in-one package includes:\n• ISO 21001:2018 Certification Support\n• Digital Presence (Social Media & Marketing)\n• Long-Term Development Plans\n• Teacher Training & Clubs Modality\n• School Policy & Reform Documentation\n• Global Accreditation & Academic Calendar",
    },
    {
      question: "How can I get involved in your initiatives?",
      answer:
        "You can participate in our events, volunteer in programs, become an ambassador, or partner with us. Visit the 'Partner With Us' section or contact us directly to learn more.",
    },
    {
      question: "What is Innovate X?",
      answer:
        "Innovate X is our flagship virtual fellowship program for South Asian undergraduates. It focuses on entrepreneurship, innovation, and global networking, helping students turn ideas into action.",
    },
    {
      question: "Do you provide consultation for international projects?",
      answer:
        "Yes. We offer project and event consultation for both local and international initiatives, helping partners with planning, execution, logistics, and impact tracking.",
    },
    {
      question: "Can schools outside Nepal access your toolkits?",
      answer:
        "Absolutely. Our toolkits are designed for scalability and can be customized for schools across South Asia and beyond. We also support virtual onboarding and international shipping of materials.",
    },
    {
      question: "What types of merchandise do you offer?",
      answer:
        "We offer inspirational and educational merchandise like branded t-shirts, notebooks, tote bags, and posters. These items support our fundraising and outreach efforts.",
    },
    {
      question: "How can I support Creating Opportunities?",
      answer:
        "You can:\n• Donate or sponsor a project\n• Purchase merchandise\n• Volunteer your skills or time\n• Partner with us on events or training\n• Promote us on social media\nVisit our [Support Us] page to explore more ways to get involved.",
    },
    {
      question: "What kind of opportunities does Creating Opportunities provide?",
      answer:
        "Creating Opportunities offers a diverse range of support in education, employment, entrepreneurship, community development, health and wellness, arts and culture, and environmental sustainability. We focus on scholarships, training, mentorship, grants, and global exposure to empower individuals and communities.",
    },
    {
      question: "How can I apply for an opportunity provided by Creating Opportunities?",
      answer:
        "You can apply directly through the Opportunities section on our website. Each program has its own guidelines, so be sure to check eligibility, deadlines, and required documents. Follow the instructions provided and reach out if you need support—we’re here to help!",
    },
    {
      question: "How can I contact Creating Opportunities if I have questions or concerns?",
      answer:
        "You can reach us via:\n📧 Email: creatingoppo@gmail.com\n📞 Phone: +977-9808068870\n💬 Contact Form: Available on our website\n📱 Social Media: Message us on Facebook, Instagram, or LinkedIn\nWe're here to help and respond as soon as possible!",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our organization, services, and impact.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-[#121d3e] hover:text-[#0e9aa7]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
