import DonationForm from "@/components/forms/donation-form"

export default function DonationFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Donation Form Component</h1>
      <div className="border rounded-lg p-4">
        <DonationForm />
      </div>
    </div>
  )
}
