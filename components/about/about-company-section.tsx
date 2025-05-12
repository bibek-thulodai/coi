import Image from "next/image"

export default function AboutCompanySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">About Company</h2>
            <p className="text-gray-700 mb-4">
              Creating Opportunities International is a premier platform dedicated to empowering individuals across
              Nepal and beyond. We connect talented individuals with life-changing opportunities, fostering growth and
              success.
            </p>
            <p className="text-gray-700 mb-4">
              Our organization was founded with a vision to become Nepal's leading platform for creating and
              facilitating access to opportunities that transform lives and communities.
            </p>
            <p className="text-gray-700">
              With a dedicated team of professionals and a wide network of partners, we work tirelessly to identify,
              create, and deliver opportunities that align with the aspirations and potential of our beneficiaries.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/about.jpg"
              alt="About Creating Opportunities"
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
