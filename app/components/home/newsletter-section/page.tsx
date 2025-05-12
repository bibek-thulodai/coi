import NewsletterSection from "@/components/home/newsletter-section"

export default function NewsletterSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Newsletter Section Component</h1>
      <div className="border rounded-lg p-4">
        <NewsletterSection />
      </div>
    </div>
  )
}
