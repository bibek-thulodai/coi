import MediaMentionsSection from "@/components/about/media-mentions-section"

export default function MediaMentionsSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Media Mentions Section Component</h1>
      <div className="border rounded-lg p-4">
        <MediaMentionsSection />
      </div>
    </div>
  )
}
