import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/services-section"

import TestimonialsSection from "@/components/home/testimonials-section"
import PartnersSection from "@/components/home/partners-section"
import StatsSection from "@/components/home/stats-section"
import NewsSection from "@/components/home/news-section"
import CtaSection from "@/components/home/cta-section"
import NewsletterSection from "@/components/home/newsletter-section"
import JoinCommunitySection from "@/components/home/join-community-section"
import GetInvolvedSection from "@/components/home/get-involved-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      
      
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <GetInvolvedSection />
      <NewsSection />
      <JoinCommunitySection />
      <NewsletterSection />
      <CtaSection />
    </div>
  )
}
