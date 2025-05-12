import AdvertiseForm from "@/components/forms/advertise-form"

export default function AdvertiseFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Advertise Form Component</h1>
      <div className="border rounded-lg p-4">
        <AdvertiseForm />
      </div>
    </div>
  )
}
