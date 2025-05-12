export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "Creating Opportunities International was established with a vision to connect talent with opportunities.",
    },
    {
      year: "2016",
      title: "First Partnership",
      description: "Formed our first strategic partnership with a leading educational institution in Nepal.",
    },
    {
      year: "2017",
      title: "Expansion of Services",
      description: "Expanded our services to include career counseling, skills training, and job placement.",
    },
    {
      year: "2018",
      title: "Digital Platform Launch",
      description: "Launched our digital platform to reach more individuals across Nepal.",
    },
    {
      year: "2019",
      title: "International Collaboration",
      description: "Established partnerships with international organizations to create global opportunities.",
    },
    {
      year: "2020",
      title: "Virtual Programs",
      description: "Adapted to the pandemic by developing virtual training programs and online events.",
    },
    {
      year: "2021",
      title: "Community Outreach",
      description: "Initiated community outreach programs to serve underrepresented populations.",
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Received recognition for our impact on career development and opportunity creation in Nepal.",
    },
    {
      year: "2023",
      title: "Research Initiative",
      description: "Launched research initiatives to better understand the evolving landscape of opportunities.",
    },
    {
      year: "2024",
      title: "Nationwide Presence",
      description: "Established a nationwide presence with representatives in major cities across Nepal.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Journey</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            A timeline of key milestones in our mission to create opportunities and transform lives.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0e9aa7]/20 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                >
                  {/* Year marker for desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0e9aa7] text-white flex items-center justify-center font-bold z-10">
                    {event.year}
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    }`}
                  >
                    {/* Year marker for mobile */}
                    <div className="md:hidden w-12 h-12 rounded-full bg-[#0e9aa7] text-white flex items-center justify-center font-bold mb-4 mx-auto">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#121d3e] mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
