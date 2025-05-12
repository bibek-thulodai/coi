import HeroSection from "@/components/hero-section"
import AboutCompanySection from "@/components/about/about-company-section"
import EmpowerGoalsSection from "@/components/about/empower-goals-section"
import MessagesSection from "@/components/about/messages-section"
import IdentityValuesSection from "@/components/about/identity-values-section"
import WhyChooseUsSection from "@/components/about/why-choose-us-section"
import FactsSection from "@/components/about/facts-section"
import WhoWeAreSection from "@/components/about/who-we-are-section"
import WhyChooseCreatingOpportunitiesSection from "@/components/about/why-choose-creating-opportunities-section"
import PartnerOrganizationsSection from "@/components/about/partner-organizations-section"
import OurImpactSection from "@/components/about/our-impact-section"
import TeamSection from "@/components/about/team-section"

import NetworkSection from "@/components/about/network-section"
import KudosMentionsSection from "@/components/about/kudos-mentions-section"

import FAQSection from "@/components/about/faq-section"
import MediaMentionsSection from "@/components/about/media-mentions-section"
import JoinSection from "@/components/about/join-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function AboutPage() {
  return (
    <>
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="About Us"
          subtitle="Learn about our mission, vision, and the team behind Creating Opportunities International"
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <AboutCompanySection />
      </AnimatedSection>

      <AnimatedSection animation="slide-in-right" delay={0.3}>
        <EmpowerGoalsSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.2}>
        <MessagesSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-in-left" delay={0.3}>
        <IdentityValuesSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <WhyChooseUsSection />
      </AnimatedSection>

      <AnimatedSection animation="zoom-in" delay={0.3}>
        <FactsSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.2}>
        <WhoWeAreSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-in-right" delay={0.3}>
        <WhyChooseCreatingOpportunitiesSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <PartnerOrganizationsSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-in-left" delay={0.3}>
        <OurImpactSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.2}>
        <TeamSection />
      </AnimatedSection>

    

      <AnimatedSection animation="slide-in-right" delay={0.2}>
        <NetworkSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.3}>
        <KudosMentionsSection />
      </AnimatedSection>

   

      <AnimatedSection animation="fade-up" delay={0.3}>
        <FAQSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-in-left" delay={0.2}>
        <MediaMentionsSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.3}>
        <JoinSection />
      </AnimatedSection>
    </>
  )
}
