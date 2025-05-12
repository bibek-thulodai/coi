import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 bg-white text-[#121d3e]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to explore opportunities?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Join our platform today and discover a world of possibilities that can transform your future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/opportunities">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              EXPLORE OPPORTUNITIES
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-[#121d3e] text-[#121d3e] hover:bg-[#121d3e] hover:text-white px-8 py-6 rounded font-bold text-lg"
            >
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
