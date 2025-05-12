import WhoWeAreSection from "@/components/about/who-we-are-section"

export default function WhoWeAreSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Who We Are Section Component</h1>
      <div className="border rounded-lg p-4">
        <WhoWeAreSection />
      </div>
    </div>
  )
}
