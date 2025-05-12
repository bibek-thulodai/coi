import NewsSection from "@/components/home/news-section"

export default function NewsSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">News Section Component</h1>
      <div className="border rounded-lg p-4">
        <NewsSection />
      </div>
    </div>
  )
}
