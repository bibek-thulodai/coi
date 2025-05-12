import CtaSection from "@/components/home/cta-section"

export default function CtaSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">CTA Section Component</h1>
      <div className="border rounded-lg p-4">
        <CtaSection />
      </div>
    </div>
  )
}
