import Image from "next/image"
import { CheckCircle } from "lucide-react"
import Header from "@/components/header"

export default function BecomeMemberPage() {
  return (
    <>
      

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/assets/members.jpg"
              alt="Mountain landscape"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#121d3e] mb-8">TOP MOST REASON TO JOIN COI</h1>

            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckCircle className="text-[#0e9aa7] mt-1 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg">
                  Earn a Certificate, Award and Letter of Recommendation on Completion of the Tenure.
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="text-[#0e9aa7] mt-1 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg">
                  Earning Opportunity of up to 20% on getting Registrations of our events.
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="text-[#0e9aa7] mt-1 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg">
                  Free Publication to all representatives in our Blog Section of the website (Basic Level).
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="text-[#0e9aa7] mt-1 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg">
                  Top 25 Representatives at the Completion of the Tenure would avail a Certificate of Excellence and
                  Award.
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="text-[#0e9aa7] mt-1 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg">
                  All Representatives get 1 Advanced Certified Online Course Free of Cost.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-center">Membership Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#121d3e] mb-4">Networking Opportunities</h3>
              <p className="text-gray-700">
                Connect with like-minded individuals, professionals, and organizations from around the world.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#121d3e] mb-4">Professional Development</h3>
              <p className="text-gray-700">
                Access exclusive training, workshops, and resources to enhance your skills and knowledge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#121d3e] mb-4">Recognition & Credibility</h3>
              <p className="text-gray-700">
                Gain recognition for your contributions and build credibility in your professional network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-center">Apply for Membership</h2>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e9aa7]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e9aa7]"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="reasons" className="block text-lg font-medium text-gray-700 mb-2">
                  Reasons for Applying
                </label>
                <select
                  id="reasons"
                  name="reasons"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e9aa7]"
                >
                  <option value="" disabled>
                    Select your primary reason
                  </option>
                  <option value="professional-development">Professional Development</option>
                  <option value="networking">Networking Opportunities</option>
                  <option value="certificate">Certificate and Recognition</option>
                  <option value="publication">Publication Opportunities</option>
                  <option value="events">Access to Events</option>
                  <option value="community">Join a Community of Changemakers</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="additional-reasons" className="block text-lg font-medium text-gray-700 mb-2">
                  Additional Reasons (Optional)
                </label>
                <textarea
                  id="additional-reasons"
                  name="additional-reasons"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e9aa7]"
                  placeholder="Please share any additional reasons for wanting to become a member"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
                >
                  SUBMIT APPLICATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
