import Header from "@/components/header"

export default function HeaderPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Header Component</h1>
      <div className="border rounded-lg p-4">
        <Header />
      </div>
    </div>
  )
}
