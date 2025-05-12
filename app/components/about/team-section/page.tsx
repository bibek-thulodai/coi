import TeamSection from "@/components/about/team-section"

export default function TeamSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Team Section Component</h1>
      <div className="border rounded-lg p-4">
        <TeamSection />
      </div>
    </div>
  )
}
