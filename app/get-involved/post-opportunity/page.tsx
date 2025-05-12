import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Plus } from "lucide-react"

export default function PostOpportunityPage() {
  const benefits = [
    "Reach a diverse pool of talented individuals",
    "Simple and streamlined posting process",
    "Targeted visibility to relevant candidates",
    "Support in promoting your opportunity",
    "Access to our network of partners and collaborators",
    "Contribute to our mission of creating opportunities",
  ]

  const opportunityTypes = [
    "Job Opportunity",
    "Internship",
    "Volunteer Position",
    "Scholarship",
    "Training Program",
    "Workshop/Event",
    "Grant/Funding",
    "Exchange Program",
    "Research Opportunity",
    "Other",
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Post an Opportunity</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Share your opportunity with our community and connect with talented individuals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Opportunity Details</h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">
                        Opportunity Title <span className="text-red-500">*</span>
                      </Label>
                      <Input id="title" placeholder="Enter the title of your opportunity" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">
                        Opportunity Type <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select opportunity type" />
                        </SelectTrigger>
                        <SelectContent>
                          {opportunityTypes.map((type, index) => (
                            <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, "-")}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="organization">
                          Organization Name <span className="text-red-500">*</span>
                        </Label>
                        <Input id="organization" placeholder="Enter your organization name" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">
                          Location <span className="text-red-500">*</span>
                        </Label>
                        <Input id="location" placeholder="Enter the location" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Opportunity Description <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Provide a detailed description of the opportunity"
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="deadline">Application Deadline</Label>
                        <Input id="deadline" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Website/Application Link</Label>
                        <Input id="website" placeholder="Enter the application URL" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="List the requirements for this opportunity"
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact">
                        Contact Information <span className="text-red-500">*</span>
                      </Label>
                      <Input id="contact" placeholder="Enter contact information for applicants" required />
                    </div>

                    <Button type="submit" className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
                      <Plus size={16} className="mr-2" />
                      Post Opportunity
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Why Post with Us?</h2>
              <p className="text-gray-700 mb-6">
                By posting your opportunity on our platform, you gain access to a diverse pool of talented individuals
                eager to contribute and grow. Your opportunity will be shared with our community of professionals,
                students, and organizations.
              </p>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Post an Opportunity"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
