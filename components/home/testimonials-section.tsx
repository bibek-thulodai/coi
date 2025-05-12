import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Bablu Gupta",
      position: "youth activist",

      quote: "Creating Opportunities International has been a game-changer for me. The resources and support they provide are invaluable.",
      image: "/assets/bablu.jpg",
    },
    {
      name: "Dr Sharma Husnain",
      position: "CEO",

      quote: "i have been blown away by the level of support and resources available. The team is incredibly knowledgeable and always willing to help.",
      image: "/assets/husain.png",
    },
    {
      name: "Raina Lampopu",
      position: "Global Educationist",
     
      quote: "I love the fact that Creating Opportunities international is so user-friendly  and accessible..",
      image: "/assets/raina.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from individuals who have transformed their careers with our support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 text-[#0e9aa7]">
                  <Quote size={32} />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121d3e]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, 
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
