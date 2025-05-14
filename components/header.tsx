"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Track scroll position to change header appearance
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10)
  })

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Social icon hover animation variants
  const socialIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.3 },
    },
  }

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Nav item animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-lg shadow-gray-300" : ""}`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <motion.nav
        className={`py-2 px-4 transition-all duration-300 ${scrolled ? "py-1" : "py-2"}`}
        variants={navItemVariants}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo1.png"
                alt="Creating Opportunities Logo"
                width={80}
                height={80}
                className={`h-auto transition-all duration-300 ${scrolled ? "w-16 h-16" : "w-20 h-20"}`}
                priority
              />
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-3">
            {[
              { href: "/", label: "Home", type: "link" },
              { href: "/about", label: "About", type: "link" },
              {
                label: "Events & Projects",
                type: "dropdown",
                items: [
                  { href: "/events-projects/our-initiatives", label: "Our Initiatives" },
                  { href: "/events-projects/partner-project", label: "Partner Projects" },
                  { href: "/events-projects/long-projects", label: "Longterm Projects" },
                ],
              },
              {
                label: "Our Portfolio",
                type: "dropdown",
                items: [
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/portfolio/gallery", label: "Gallery" },
                  { href: "/portfolio/blog", label: "Blog" },
                ],
              },
              {
                label: "Our Services",
                type: "dropdown",
                items: [
                  { href: "/services", label: "Services" },
                  { href: "/services/merchandise", label: "Merchandise" },
                ],
              },
              {
                label: "Contact Us",
                type: "dropdown",
                items: [
                  { href: "/contact", label: "Contact Form" },
                  { href: "/donate", label: "Donate" },
                ],
              },
              {
                label: "Opportunities",
                type: "dropdown",
                items: [
                  { href: "/opportunities", label: "All Opportunities" },
                  { href: "/opportunities/jobs", label: "Jobs" },
                  { href: "/opportunities/internships", label: "Internships" },
                  { href: "/opportunities/fellowships", label: "Fellowships" },
                  { href: "/opportunities/scholarships", label: "Scholarships" },
                  { href: "/opportunities/competitions", label: "Competitions" },
                  { href: "/opportunities/workshops", label: "Workshops" },
                  { href: "/opportunities/post", label: "Post Opportunity" },
                ],
              },
            ].map((item, index) => (
              <motion.div key={item.label} variants={navItemVariants} custom={index} className="flex items-center  ">
                {item.type === "link" ? (
                  <NavLink href={item.href}  label={item.label}  />
                ) : (
                  <NavDropdown label={item.label} items={item.items} />
                )}
              </motion.div>
            ))}
          </div>
          <motion.button
            className="md:hidden focus:outline-none bg-[#0e766e] text-white border border-[#0e766e] p-2 rounded-lg"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu with AnimatePresence for smooth enter/exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute w-full z-50 max-h-[80vh] overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="py-2 px-4">
              <MobileNavLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/about" label="About" onClick={() => setMobileMenuOpen(false)} />

              <MobileNavAccordion label="Events & Projects">
                <MobileNavLink
                  href="/events-projects/our-initiatives"
                  label="Our Initiatives"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink
                  href="/events-projects/long-projects"
                  label="Longterm Projects"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink
                  href="/events-projects/partner-project"
                  label="Partner Projects"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </MobileNavAccordion>

              <MobileNavAccordion label="Our Portfolio">
                <MobileNavLink href="/portfolio" label="Portfolio" onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink href="/portfolio/gallery" label="Gallery" onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink href="/portfolio/blog" label="Blog" onClick={() => setMobileMenuOpen(false)} />
              </MobileNavAccordion>

              <MobileNavAccordion label="Our Services">
                <MobileNavLink href="/services" label="Services" onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink
                  href="/services/merchandise"
                  label="Merchandise"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </MobileNavAccordion>

              <MobileNavAccordion label="Contact Us">
                <MobileNavLink href="/contact" label="Contact Form" onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink href="/donate" label="Donate" onClick={() => setMobileMenuOpen(false)} />
              </MobileNavAccordion>

              <MobileNavAccordion label="Opportunities">
                <MobileNavLink
                  href="/opportunities"
                  label="All Opportunities"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink href="/opportunities/jobs" label="Jobs" onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink
                  href="/opportunities/internships"
                  label="Internships"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink
                  href="/opportunities/fellowships"
                  label="Fellowships"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink
                  href="/opportunities/scholarships"
                  label="Scholarships"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink
                  href="/opportunities/competitions"
                  label="Competitions"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink
                  href="/opportunities/workshops"
                  label="Workshops"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavLink
                  href="/opportunities/post"
                  label="Post Opportunity"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </MobileNavAccordion>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} className="relative overflow-hidden group">
        <motion.div
          className="px-4 py-2 rounded-lg bg-dark-teal text-white font-medium relative z-10 overflow-hidden"
          whileHover={{
            boxShadow: ["0 0 5px rgba(0,0,0,0.1)", "0 0 15px rgba(0,0,0,0.2)", "0 0 5px rgba(0,0,0,0.1)"],
          }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          {label}
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

function NavDropdown({
  label,
  items,
}: {
  label: string
  items: { href: string; label: string }[]
}) {
  return (
    <div className="relative group">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button className="relative overflow-hidden px-4 py-2 rounded-lg bg-dark-teal text-white font-medium flex items-center group">
          {label}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>

          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{
              boxShadow: ["0 0 5px rgba(0,0,0,0.1)", "0 0 15px rgba(0,0,0,0.2)", "0 0 5px rgba(0,0,0,0.1)"],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </button>
      </motion.div>

      <motion.div
        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50"
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 0, y: 10, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: "top center",
          pointerEvents: "none",
          transitionProperty: "opacity, visibility, transform",
          transitionDuration: "300ms",
        }}
      >
        <div className="py-1 rounded-md overflow-hidden backdrop-blur-sm bg-gray-100 border border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{ pointerEvents: "auto" }}
              whileHover={{
                backgroundColor: "rgba(0,128,128,1)",
                transition: { duration: 0.2 },
              }}
            >
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick: () => void
}) {
  return (
    <motion.div whileTap={{ scale: 0.98 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        className="block py-2 text-gray-700 hover:text-gray-900 border-b border-gray-300 transition-colors duration-200"
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  )
}

function MobileNavAccordion({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-300">
      <motion.button
        className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-gray-900 font-medium"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
      >
        {label}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
