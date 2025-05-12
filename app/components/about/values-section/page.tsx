import ValuesSection from "@/components/about/values-section"

export default function ValuesSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Values Section Component</h1>
      <div className="border rounded-lg p-4">
        <ValuesSection />
      </div>
    </div>
  )
}
