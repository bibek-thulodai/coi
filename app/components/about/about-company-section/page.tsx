import AboutCompanySection from "@/components/about/about-company-section"

export default function AboutCompanySectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About Company Section Component</h1>
      <div className="border rounded-lg p-4">
        <AboutCompanySection />
      </div>
    </div>
  )
}
