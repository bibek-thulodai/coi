"use client"
import Image from "next/image"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from "@/components/hero-section"

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Gallery"
        subtitle="Explore our visual journey through impactful events, projects, and collaborations."
        backgroundColor="#0e9aa7" // Using dark-teal color
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="people">People</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Gallery Image ${item}`}
                    category={item % 3 === 0 ? "Event" : item % 3 === 1 ? "Project" : "People"}
                    image={`/placeholder.svg?height=600&width=800`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[3, 6, 9].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Event Image ${item}`}
                    category="Event"
                    image={`/placeholder.svg?height=600&width=800`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 4, 7].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Project Image ${item}`}
                    category="Project"
                    image={`/placeholder.svg?height=600&width=800`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="people">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[2, 5, 8].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`People Image ${item}`}
                    category="People"
                    image={`/placeholder.svg?height=600&width=800`}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

    </>
  )
}

function GalleryItem({
  title,
  category,
  image,
}: {
  title: string
  category: string
  image: string
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[4/3]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-dark-teal">{title}</h3>
            <span className="inline-block bg-dark-teal px-3 py-1 rounded-full text-xs text-white">{category}</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-4xl">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

// Updated type definition for GalleryItem to remove description, date, and location
interface GalleryItemProps {
  title: string;
  category: string;
  image: string;
}
