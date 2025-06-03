"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Wifi, Radio, Network, BarChart4, Satellite, Router, Signal, ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function TelecommunicationPage() {
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
      <source src="/telecom.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-orange-400/10 "></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 container mx-auto px-4">
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Telecommunication Services</h1>
        <p className="text-lg text-orange-100 mb-6 max-w-3xl">
          Our advanced telecommunication solutions deliver reliable connectivity and infrastructure,
          enabling seamless communication and data transmission for businesses of all sizes.
        </p>
        <Satellite className="w-12 h-12 text-orange-300 mb-6" />
      </motion.div>
    </motion.div>
  </div>
</section>


        {/* Key Offerings Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Telecommunication Solutions</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From network design to satellite communications, we provide comprehensive solutions
              to keep your business connected, secure, and future-ready.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "LAN/WAN Design & Implementation",
                  description: "Comprehensive network architecture design and implementation services that optimize performance, security, and reliability for your business needs.",
                  icon: <Network className="w-10 h-10 text-orange-600 mb-3" />,
                },
                {
                  title: "VSAT & Satellite Technology",
                  description: "Reliable satellite communication solutions for remote locations and challenging environments, ensuring connectivity regardless of geographic constraints.",
                  icon: <Satellite className="w-10 h-10 text-orange-600 mb-3" />,
                },
                {
                  title: "Network Audits & Optimization",
                  description: "Thorough assessment and optimization of existing network infrastructure to enhance performance, identify vulnerabilities, and reduce operational costs.",
                  icon: <BarChart4 className="w-10 h-10 text-orange-600 mb-3" />,
                },
                {
                  title: "IP Services & VoIP Solutions",
                  description: "Advanced IP-based communication services including VoIP, unified communications, and IP telephony to streamline your business communications.",
                  icon: <Phone className="w-10 h-10 text-orange-600 mb-3" />,
                },
                {
                  title: "Wireless Networking",
                  description: "Secure, high-performance wireless solutions including Wi-Fi networks, point-to-point links, and cellular connectivity for mobility and flexibility.",
                  icon: <Wifi className="w-10 h-10 text-orange-600 mb-3" />,
                },
                {
                  title: "Multimedia Delivery Systems",
                  description: "End-to-end solutions for content delivery, video streaming, and multimedia distribution across various platforms and devices.",
                  icon: <Radio className="w-10 h-10 text-orange-600 mb-3" />,
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Markov for Telecommunication?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Reliable Connectivity",
                  description: "Our solutions are engineered for maximum uptime and reliability, with redundancy measures and failover protocols to ensure your communication infrastructure remains operational 24/7.",
                  icon: <Signal className="w-6 h-6 text-white" />,
                  gradientFrom: "#F97316",
                  gradientTo: "#C2410C",
                },
                {
                  title: "Extensive Coverage",
                  description: "We provide solutions with comprehensive coverage capabilities, connecting even the most remote locations with reliable, high-quality telecommunication services.",
                  icon: <Satellite className="w-6 h-6 text-white" />,
                  gradientFrom: "#2DD8D4",
                  gradientTo: "#1A6B68",
                },
                {
                  title: "Future-Proof Technology",
                  description: "Our telecommunication infrastructure is designed with scalability and future expansion in mind, allowing you to adapt to new technologies and growing demands.",
                  icon: <Router className="w-6 h-6 text-white" />,
                  gradientFrom: "#845EEE",
                  gradientTo: "#5634B3",
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
                    title: "Network Assessment",
                    description: "We begin with a comprehensive analysis of your current infrastructure, business requirements, and communication challenges to design the optimal solution.",
                  },
                  {
                    step: 2,
                    title: "Solution Design",
                    description: "Our experts create a tailored telecommunication architecture that addresses your specific needs, incorporating the right technologies and planning for future growth.",
                  },
                  {
                    step: 3,
                    title: "Implementation & Testing",
                    description: "We deploy your solution with minimal disruption, ensuring proper integration with existing systems and conducting thorough testing of all components.",
                  },
                  {
                    step: 4,
                    title: "Monitoring & Maintenance",
                    description: "Our relationship continues with proactive network monitoring, regular maintenance, and responsive support to ensure optimal performance and reliability.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      {index < 3 && (
                        <div className="w-0.5 h-12 bg-orange-600 mx-auto mt-4"></div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Telecommunication Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Remote Energy Company",
                  description: "Implemented VSAT satellite solutions for multiple remote sites, enabling real-time monitoring and reliable communications in previously unreachable locations.",
                  image: "/remote.png",
                  tag: "Satellite Communications",
                },
                {
                  title: "National Retail Chain",
                  description: "Designed and deployed a nationwide WAN infrastructure connecting over 200 retail locations, reducing network costs by 35% while improving performance.",
                  image: "/LAN.png",
                  tag: "Network Design",
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
                    <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-2 py-1 rounded">
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
                    <Button className="flex items-center gap-2 px-4 py-2 bg-white text-teal-600 hover:text-white hover:bg-teal-600 border border-teal-600 transition duration-300 rounded-full shadow-sm">
  Read Case Study
  <ArrowRight className="h-4 w-4" />
</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="mx-auto flex items-center px-6 py-2 bg-teal-600 text-white hover:bg-teal-700 transition duration-300 rounded-full shadow-md">
  <Link href="/case-studies" className="flex items-center gap-2">
    View All Case Studies
    <ArrowRight className="h-4 w-4" />
  </Link>
</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strengthen Your Network</h2>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                Partner with Markov International to build a robust telecommunications infrastructure that 
                connects your business reliably and securely across all locations and devices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                  Get a Network Assessment
                </Button>
                <Button className="border-white text-white hover:bg-white/10 border">
                  Schedule a Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 