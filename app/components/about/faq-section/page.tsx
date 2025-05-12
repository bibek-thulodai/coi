import FaqSection from "@/components/about/faq-section"

export default function FaqSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQ Section Component</h1>
      <div className="border rounded-lg p-4">
        <FaqSection />
      </div>
    </div>
  )
}
