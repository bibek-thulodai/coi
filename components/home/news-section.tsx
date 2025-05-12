import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export default function NewsSection() {
  // Get the 3 most recent blog posts
  const recentBlogPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e]">Latest News & Events</h2>
          <Link href="/portfolio/blog" className="text-[#0e9aa7] font-medium hover:underline flex items-center">
            View All
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-48 relative">
                <Image src={post.image || "/assets/cover1.jpg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="font-bold text-lg text-[#121d3e] line-clamp-2">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/portfolio/blog/${post.slug}`} className="text-[#0e9aa7] font-medium hover:underline">
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
