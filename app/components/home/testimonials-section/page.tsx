import TestimonialsSection from "@/components/home/testimonials-section"

export default function TestimonialsSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Testimonials Section Component</h1>
      <div className="border rounded-lg p-4">
        <TestimonialsSection />
      </div>
    </div>
  )
}
