import Image from "next/image"

export default function WhoWeAreSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/whychoose.jpg"
              alt="Who We Are"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">WHO CHOOSE US</h2>
            <p className="text-gray-700 mb-4">
              Creating Opportunities International is a dynamic platform dedicated to connecting talented individuals
              with life-changing opportunities. We are a team of passionate professionals committed to fostering growth,
              nurturing aspirations, and creating pathways to success.
            </p>
            <p className="text-gray-700 mb-4">
              Our organization was founded on the belief that everyone deserves access to opportunities that can
              transform their lives and careers. We work tirelessly to identify, create, and facilitate these
              opportunities, ensuring they reach those who can benefit most from them.
            </p>
            <p className="text-gray-700">
              With a focus on innovation, inclusivity, and impact, we have established ourselves as a leading platform
              for opportunity creation and access in Nepal and beyond. Our approach is collaborative, our vision is
              global, and our commitment to excellence is unwavering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
