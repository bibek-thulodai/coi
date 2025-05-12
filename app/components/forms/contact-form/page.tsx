import ContactForm from "@/components/forms/contact-form"

export default function ContactFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Form Component</h1>
      <div className="border rounded-lg p-4">
        <ContactForm />
      </div>
    </div>
  )
}
