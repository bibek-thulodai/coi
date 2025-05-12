import AmbassadorApplicationForm from "@/components/forms/ambassador-application-form"

export default function AmbassadorApplicationFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Ambassador Application Form Component</h1>
      <div className="border rounded-lg p-4">
        <AmbassadorApplicationForm />
      </div>
    </div>
  )
}
