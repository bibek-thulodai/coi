import LifetimeMemberForm from "@/components/forms/lifetime-member-form"

export default function LifetimeMemberFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Lifetime Member Form Component</h1>
      <div className="border rounded-lg p-4">
        <LifetimeMemberForm />
      </div>
    </div>
  )
}
