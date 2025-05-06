"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Server, DatabaseZap, Network, ShieldCheck, Cpu, Cloud, HardDrive, ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ContactLinkButton } from "@/components/ui/contact-link-button"

export default function ITSolutionsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Handle scroll for header
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Copied from Home Page for consistency */}


      <main>
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/it_solution.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-blue-400/10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Solutions</h1>
                <p className="text-lg text-blue-100 mb-6 max-w-3xl">
                  Our comprehensive IT solutions leverage cutting-edge technology to solve complex business challenges,
                  enhance operational efficiency, and secure your digital infrastructure.
                </p>
                <Server className="w-12 h-12 text-blue-300 mb-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Key Offerings Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our IT Solutions</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We deliver a wide range of IT services and solutions tailored to your specific business needs,
              from system integration to advanced security implementations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "System Integration",
                  description: "Seamlessly connect your systems, applications, and data sources to create a unified technology ecosystem that enhances efficiency and data flow.",
                  icon: <Server className="w-10 h-10 text-blue-600 mb-3" />,
                },
                {
                  title: "Data Recovery & Storage",
                  description: "Comprehensive data protection solutions including backup systems, disaster recovery planning, and secure cloud and on-premises storage solutions.",
                  icon: <DatabaseZap className="w-10 h-10 text-blue-600 mb-3" />,
                },
                {
                  title: "Network Management",
                  description: "End-to-end network design, implementation, monitoring, and management to ensure optimal performance, security, and reliability.",
                  icon: <Network className="w-10 h-10 text-blue-600 mb-3" />,
                },
                {
                  title: "IT Security",
                  description: "Robust security measures including threat detection, vulnerability management, endpoint protection, and security audits to safeguard your business.",
                  icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />,
                },
                {
                  title: "Hardware Solutions",
                  description: "Expert procurement, installation, and maintenance of servers, workstations, networking equipment, and specialized hardware to meet your needs.",
                  icon: <HardDrive className="w-10 h-10 text-blue-600 mb-3" />,
                },
                {
                  title: "Cloud Services",
                  description: "Comprehensive cloud solutions including migration, implementation, management, and optimization across public, private, and hybrid cloud environments.",
                  icon: <Cloud className="w-10 h-10 text-blue-600 mb-3" />,
                },
              ].map((offering, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-gray-50 hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      {offering.icon}
                      <CardTitle className="text-xl font-semibold">{offering.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{offering.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Markov for IT Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Expertise",
                  description: "Our team of certified IT professionals brings extensive experience across multiple technologies, platforms, and industries to ensure optimal solutions for your business.",
                  icon: <Cpu className="w-6 h-6 text-white" />,
                  gradientFrom: "#3B82F6",
                  gradientTo: "#1E3A8A",
                },
                {
                  title: "Proactive Security",
                  description: "We implement industry-leading security protocols and proactive monitoring to protect your systems and data from evolving cyber threats and vulnerabilities.",
                  icon: <ShieldCheck className="w-6 h-6 text-white" />,
                  gradientFrom: "#10B981",
                  gradientTo: "#065F46",
                },
                {
                  title: "Future-Ready Solutions",
                  description: "Our forward-thinking approach ensures your IT infrastructure is not just suitable for today's needs but scalable and adaptable for future technological advancements.",
                  icon: <Cloud className="w-6 h-6 text-white" />,
                  gradientFrom: "#8B5CF6",
                  gradientTo: "#4C1D95",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[${benefit.gradientFrom}] to-[${benefit.gradientTo}]`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Assessment & Discovery",
                    description: "We begin with a thorough analysis of your current IT infrastructure, business requirements, pain points, and objectives to create a strategic roadmap.",
                  },
                  {
                    step: 2,
                    title: "Solution Design",
                    description: "Our team designs a tailored IT solution that addresses your specific needs, incorporating the right technologies, security measures, and scalability considerations.",
                  },
                  {
                    step: 3,
                    title: "Implementation",
                    description: "We deploy your solution with minimal disruption to your operations, ensuring proper integration with existing systems and thorough testing at every stage.",
                  },
                  {
                    step: 4,
                    title: "Monitoring & Support",
                    description: "Our relationship continues with ongoing monitoring, maintenance, and responsive support to ensure your IT infrastructure performs optimally and evolves with your business.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      {index < 3 && (
                        <div className="w-0.5 h-12 bg-blue-600 mx-auto mt-4"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">IT Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Manufacturing Enterprise",
                  description: "Implemented a comprehensive system integration solution that reduced operational costs by 25% and improved production efficiency by 30%.",
                  image: "/Manufacture.png",
                  tag: "System Integration",
                },
                {
                  title: "Healthcare Provider",
                  description: "Deployed advanced cybersecurity measures that protected patient data, ensured HIPAA compliance, and prevented potential data breaches.",
                  image: "/healthCare.png",
                  tag: "IT Security",
                },
              ].map((study, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {study.tag}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{study.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/case-studies" passHref>
                      <Button className="flex items-center gap-2 px-4 py-2 bg-blue text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 transition duration-300 rounded-full shadow-sm">
                        Read Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="mx-auto flex items-center px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-full shadow-md">
                <Link href="/case-studies" className="flex items-center gap-2">
                  View All Case Studies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your IT Infrastructure</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Partner with Markov International to transform your IT operations and create a secure,
                efficient, and future-ready technology foundation for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white border-none">
                  Get an IT Assessment
                </Button>
                <Button className="border-white text-white hover:bg-white/10 border">
                  Schedule a Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer - Simplified version from Home Page */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-16%20%281%29-cBHB3u0H1zs8eIRklquP5aJtbkauXC.png"
                  alt="Markov Logo"
                  width={40}
                  height={40}
                  className="w-auto h-10"
                />
                <span className="text-2xl font-bold">Markov</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Business Process Outsourcing & Digital Solutions provider helping businesses worldwide streamline operations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/bpo" className="text-gray-400 hover:text-white transition-colors">
                    BPO Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/it-solutions" className="text-gray-400 hover:text-white transition-colors">
                    IT Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/telecommunication" className="text-gray-400 hover:text-white transition-colors">
                    Telecommunication
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Karachi, Pakistan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">021-36930725</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">info@markovintl.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Markov International LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 