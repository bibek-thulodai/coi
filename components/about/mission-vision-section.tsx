export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-12">Our Mission & Vision</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#0e9aa7] mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To create a dynamic platform that connects talented individuals with opportunities that align with their
              aspirations, fostering growth and success for all stakeholders involved.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#0e9aa7] mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be recognized as Nepal's premier opportunity provider, known for our commitment to excellence,
              innovation, and the transformative impact we have on individuals and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
