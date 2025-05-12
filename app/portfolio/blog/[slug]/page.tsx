"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Mail, Search } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/slug/${params.slug}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setPost(data);
      } catch {
        setError(true);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (error) {
    return <div className="text-center py-16">Failed to load the blog post.</div>;
  }

  if (!post) {
    return <div className="text-center py-16">Loading...</div>;
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const readTime = calculateReadTime(post.content);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.createdAt));

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen text-white"
        style={{
          backgroundImage: `url(${post.featuredImage && post.featuredImage.startsWith("/") ? `http://localhost:5000${post.featuredImage}` : "/placeholder.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-8 left-8 z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-sm">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-5xl font-semibold mb-4">{post.summary}</h2>
              <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-4">
                  {/* ...existing code... */}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-[#121d3e] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">Stay updated with our latest news and articles.</p>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
