import ServicesSection from "@/components/home/services-section"

export default function ServicesSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Services Section Component</h1>
      <div className="border rounded-lg p-4">
        <ServicesSection />
      </div>
    </div>
  )
}
