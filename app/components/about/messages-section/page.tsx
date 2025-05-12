import MessagesSection from "@/components/about/messages-section"

export default function MessagesSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Messages Section Component</h1>
      <div className="border rounded-lg p-4">
        <MessagesSection />
      </div>
    </div>
  )
}
