import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutCTASection() {
  return (
    <section className="py-16 bg-[#121d3e] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Journey</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Be a part of our mission to create opportunities and transform lives across Nepal. Whether you're looking for
          opportunities, want to partner with us, or are interested in supporting our initiatives, we'd love to connect
          with you.
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
              className="border-white text-white hover:bg-white hover:text-[#121d3e] px-8 py-6 rounded font-bold text-lg"
            >
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
