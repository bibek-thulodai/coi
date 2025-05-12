import FactsSection from "@/components/about/facts-section"

export default function FactsSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Facts Section Component</h1>
      <div className="border rounded-lg p-4">
        <FactsSection />
      </div>
    </div>
  )
}
