"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Career Development",
      description:
        "Comprehensive career guidance and support for professionals at all levels.",
      icon: Briefcase,
      link: "/services/career-development",
    },
    {
      title: "Skills Training",
      description:
        "Enhance your skills with our specialized training programs and workshops.",
      icon: GraduationCap,
      link: "/services/skills-training",
    },
    {
      title: "Networking Events",
      description:
        "Connect with industry leaders and like-minded professionals.",
      icon: Users,
      link: "/services/networking",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-[#121d3e] mb-3 md:mb-4"
            variants={titleVariants}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
            variants={titleVariants}
          >
            We offer a range of services designed to help you achieve your
            professional goals and aspirations.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-3 md:mb-4"
                    initial="initial"
                    animate="animate"
                  >
                    <service.icon className="text-[#0e9aa7]" size={20} />
                  </motion.div>
                  <CardTitle className="text-lg md:text-xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={service.link}
                    className="group inline-flex items-center text-[#0e9aa7] font-medium text-sm md:text-base"
                  >
                    Learn More
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ArrowRight
                        size={14}
                        className="ml-2 transition-transform duration-200"
                      />
                    </motion.span>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white text-sm md:text-base">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
