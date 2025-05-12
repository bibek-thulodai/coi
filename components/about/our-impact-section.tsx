import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, GraduationCap, Globe, Heart, Home } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function OurImpactSection() {
  const impactAreas = [
    {
      icon: Users,
      title: "Individual Development",
      description: "We have empowered thousands of individuals to develop their skills and realize their potential.",
      stat: "10,000+",
      label: "Individuals Empowered",
    },
    {
      icon: Briefcase,
      title: "Career Advancement",
      description: "We have facilitated career growth and advancement for professionals across various sectors.",
      stat: "5,000+",
      label: "Career Opportunities Created",
    },
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "We have improved access to quality education and training programs for underserved populations.",
      stat: "3,000+",
      label: "Educational Opportunities",
    },
    {
      icon: Globe,
      title: "Global Connections",
      description:
        "We have established international connections and pathways for cross-cultural exchange and learning.",
      stat: "50+",
      label: "Countries Reached",
    },
    {
      icon: Heart,
      title: "Community Development",
      description: "We have contributed to the development and well-being of communities across Nepal.",
      stat: "100+",
      label: "Community Initiatives",
    },
    {
      icon: Home,
      title: "Organizational Growth",
      description: "We have supported the growth and development of partner organizations and institutions.",
      stat: "200+",
      label: "Partner Organizations",
    },
  ]

  return (
    <section className="py-16 bg-light-teal/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-teal mb-4">Our Impact</h2>
            <p className="text-medium-teal max-w-3xl mx-auto">
              Explore the difference we've made in the lives of individuals, communities, and organizations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactAreas.map((area, index) => (
            <AnimatedSection key={index} animation="zoom-in" delay={0.1 * index}>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-dark-teal/5 rounded-full -mt-10 -mr-10 group-hover:bg-dark-teal/10 transition-all duration-500"></div>

                  <div className="w-16 h-16 bg-dark-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="text-dark-teal" size={32} />
                  </div>

                  <h3 className="font-bold text-xl text-dark-teal mb-3">{area.title}</h3>
                  <p className="text-medium-teal mb-5">{area.description}</p>

                  <div className="border-t border-light-teal pt-4 mt-auto">
                    <div className="text-3xl font-bold text-dark-teal">{area.stat}</div>
                    <p className="text-medium-teal text-sm">{area.label}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
