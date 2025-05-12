import NewsletterForm from "@/components/forms/newsletter-form"

export default function NewsletterFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Newsletter Form Component</h1>
      <div className="border rounded-lg p-4">
        <NewsletterForm />
      </div>
    </div>
  )
}
