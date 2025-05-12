import Image from "next/image"

export default function OurStorySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Creating Opportunities International was founded with a vision to become Nepal's leading platform for
              connecting talented individuals with life-changing opportunities.
            </p>
            <p className="text-gray-700 mb-4">
              Since our inception, we have been dedicated to fostering growth, nurturing aspirations, and creating
              pathways to success for countless individuals across Nepal.
            </p>
            <p className="text-gray-700">
              Our journey has been marked by a commitment to excellence, innovation, and a deep understanding of the
              evolving landscape of opportunities in Nepal and beyond.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Our Story"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
