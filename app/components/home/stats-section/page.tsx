import StatsSection from "@/components/home/stats-section"

export default function StatsSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Stats Section Component</h1>
      <div className="border rounded-lg p-4">
        <StatsSection />
      </div>
    </div>
  )
}
