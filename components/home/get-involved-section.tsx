import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Mic, Handshake } from "lucide-react"

export default function GetInvolvedSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Globe className="mx-auto h-16 w-16 text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold text-[#121d3e] mb-4">Who we are</h3>
            <p className="text-gray-700 mb-6">
              We are creating this portal to bridge the information gap among young people globally.
            </p>
            <Link href="/about">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]">LEARN MORE</Button>
            </Link>
          </div>

          <div className="text-center">
            <Mic className="mx-auto h-16 w-16 text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold text-[#121d3e] mb-4">Be our ambassador</h3>
            <p className="text-gray-700 mb-6">
              People we help at Creating Opportunities and their families can choose from a variety of services.
            </p>
            <Link href="/get-involved/become-ambassador">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]">SIGN UP NOW</Button>
            </Link>
          </div>

          <div className="text-center">
            <Handshake className="mx-auto h-16 w-16 text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold text-[#121d3e] mb-4">Be our Partner</h3>
            <p className="text-gray-700 mb-6">
              Be our partner and spread the message of creating better opportunity in your own domain.
            </p>
            <Link href="/get-involved/become-partner">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]">BE A PARTNER</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
