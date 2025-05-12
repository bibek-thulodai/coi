import TimelineSection from "@/components/about/timeline-section"

export default function TimelineSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Timeline Section Component</h1>
      <div className="border rounded-lg p-4">
        <TimelineSection />
      </div>
    </div>
  )
}
