import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, InstagramIcon as TiktokIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden">
      {/* Animated background instead of static image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e1e25] via-[#1a3e4a] to-[#21d3ee] animate-gradient-background -z-10"></div>

      {/* Animated particles/bubbles effect */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="transform transition-transform duration-500 hover:translate-y-[-5px]">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/logo1.png"
                alt="Creating Opportunities Logo"
                width={120}
                height={120}
                className="h-auto"
              />
            </Link>
            <p className="text-sm md:text-base mb-4 transition-all duration-300 hover:text-[#21d3ee]">
              Creating Opportunities International is Nepal's foremost platform for educational and professional
              opportunities.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://youtube.com" icon={<Youtube size={18} />} label="YouTube" />
              <SocialLink href="https://tiktok.com" icon={<TiktokIcon size={18} />} label="TikTok" />
            </div>
          </div>

          <div className="transform transition-transform duration-500 hover:translate-y-[-5px]">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#21d3ee] after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/services" label="Our Services" />
              <FooterLink href="/events-projects" label="Events & Projects" />
              <FooterLink href="/portfolio" label="Portfolio" />
              <FooterLink href="/contact" label="Contact Us" />
              <FooterLink href="/donate" label="Donate" />
            </ul>
          </div>

          <div className="transform transition-transform duration-500 hover:translate-y-[-5px]">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#21d3ee] after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
              Opportunities
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <FooterLink href="/opportunities/jobs" label="Jobs" />
              <FooterLink href="/opportunities/internships" label="Internships" />
              <FooterLink href="/opportunities/fellowships" label="Fellowships" />
              <FooterLink href="/opportunities/scholarships" label="Scholarships" />
              <FooterLink href="/opportunities/competitions" label="Competitions" />
              <FooterLink href="/opportunities/workshops" label="Workshops" />
            </ul>
          </div>

          <div className="transform transition-transform duration-500 hover:translate-y-[-5px]">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#21d3ee] after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
              Contact Us
            </h3>
            <address className="not-italic text-sm md:text-base">
              <p className="mb-2 transition-all duration-300 hover:text-[#21d3ee] hover:translate-x-1">
                Kathmandu, Nepal
              </p>
              <p className="mb-2 transition-all duration-300 hover:translate-x-1">
                <a href="mailto:info@creatingoppo.com" className="hover:text-[#21d3ee]">
                  info@creatingoppo.com
                </a>
              </p>
              <p className="mb-2 transition-all duration-300 hover:translate-x-1">
                <a href="tel:+9771234567890" className="hover:text-[#21d3ee]">
                  +977 1234 567 890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p className="animate-pulse-slow">
            &copy; {new Date().getFullYear()} Creating Opportunities International. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="transition-all duration-300 hover:text-[#21d3ee] hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-all duration-300 hover:text-[#21d3ee] hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li className="transform transition-all duration-300 hover:translate-x-2">
      <Link href={href} className="relative overflow-hidden group">
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#21d3ee]">{label}</span>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#21d3ee] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 overflow-hidden transition-all duration-300 hover:bg-[#21d3ee] hover:scale-110 group"
      aria-label={label}
    >
      <span className="absolute inset-0 bg-[#21d3ee] opacity-0 group-hover:opacity-20 animate-ping-slow"></span>
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{icon}</span>
    </Link>
  )
}
