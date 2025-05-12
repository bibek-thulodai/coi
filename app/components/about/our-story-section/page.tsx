import OurStorySection from "@/components/about/our-story-section"

export default function OurStorySectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Story Section Component</h1>
      <div className="border rounded-lg p-4">
        <OurStorySection />
      </div>
    </div>
  )
}
