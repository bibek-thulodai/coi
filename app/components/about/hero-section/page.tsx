import HeroSection from "@/components/about/hero-section"

export default function HeroSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Hero Section Component</h1>
      <div className="border rounded-lg p-4">
        <HeroSection />
      </div>
    </div>
  )
}
