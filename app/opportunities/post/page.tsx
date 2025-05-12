"use client"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PostOpportunityPage() {
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    let particles: any[] = []
    const particleCount = 100

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 500
    }

    const createParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 1,
      }))
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(1, 116, 137, 0.4)"
        ctx.fill()
      })
    }

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()
    window.addEventListener("resize", resizeCanvas)

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <>
      <div className="relative w-full h-[375px] md:h-[450px] bg-gradient-to-r from-[#013A87] to-[#017489] text-white overflow-hidden">
        <canvas id="particleCanvas" className="absolute inset-0"></canvas>
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-[#017489] opacity-30 rounded-full blur-3xl -top-20 -left-40 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-[#013A87] opacity-40 rounded-full blur-2xl -bottom-20 -right-20 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3 z-10">
          <div className="flex items-center space-x-2 mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              New
            </span>
            <span className="text-sm text-gray-300">Post your opportunity today!</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Post an Opportunity
            </span>
          </h1>
          <p className="text-lg mb-8 max-w-3xl animate-fade-in-up delay-200">
            Connect with talented individuals by posting your job or internship opportunities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold text-[#02609E]">Post Opportunity Details</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill in the details of the opportunity you want to advertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter the opportunity title"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="Enter the organization name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                      Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
                      Benefits
                    </label>
                    <textarea
                      id="benefits"
                      name="benefits"
                      rows={3}
                      placeholder="List the benefits of this opportunity"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700">
                      Eligibility
                    </label>
                    <textarea
                      id="eligibility"
                      name="eligibility"
                      rows={3}
                      placeholder="Specify eligibility criteria"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Full Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      placeholder="Provide a detailed description of the opportunity"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Enter the country"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                      Region
                    </label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      placeholder="Enter the region"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="applicationList" className="block text-sm font-medium text-gray-700">
                      Application List
                    </label>
                    <textarea
                      id="applicationList"
                      name="applicationList"
                      rows={3}
                      placeholder="Provide application instructions or links"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Enter the category of the opportunity"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="chooseCategory" className="block text-sm font-medium text-gray-700">
                      Choose a Category
                    </label>
                    <select
                      id="chooseCategory"
                      name="chooseCategory"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    >
                      <option value="">Select a category</option>
                      <option value="job">Job</option>
                      <option value="internship">Internship</option>
                      <option value="fellowship">Fellowship</option>
                      <option value="scholarship">Scholarship</option>
                      <option value="competition">Competition</option>
                      <option value="workshop">Workshop</option>
                      <option value="miscellaneous">Miscellaneous</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#017489] focus:border-[#017489] transition duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#013A87] to-[#017489] text-white py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-[#006955] hover:to-[#017489] transition duration-200"
                  >
                    Submit
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
