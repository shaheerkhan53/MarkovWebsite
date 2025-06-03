"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Headset, Database, ClipboardList, TrendingUp, ShieldCheck, Users, ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ContactLinkButton } from "@/components/ui/contact-link-button"

export default function BPOServicesPage() {
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
      

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 md:py-24 overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/BPO_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay to darken video for readability */}
  <div className="absolute inset-0 bg-teal-800 bg-opacity-60 z-10"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 z-20">
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">BPO Services</h1>
        <p className="text-lg text-teal-100 mb-6 max-w-3xl">
          Our comprehensive Business Process Outsourcing services help you streamline operations, 
          reduce costs, and focus on your core business while we handle the rest.
        </p>
        <Headset className="w-12 h-12 text-teal-300 mb-6" />
      </motion.div>
    </motion.div>
  </div>
</section>

        {/* Key Offerings Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our BPO Offerings</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We provide a wide range of business process outsourcing services to meet 
              your unique business needs and help you achieve operational excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer Support",
                  description: "Comprehensive customer service solutions including inbound and outbound support, multi-channel engagement, and 24/7 availability.",
                  icon: <Headset className="w-10 h-10 text-teal-600 mb-3" />,
                },
                {
                  title: "Technical Support",
                  description: "Expert technical assistance and troubleshooting services for software, hardware, and other IT-related issues.",
                  icon: <Database className="w-10 h-10 text-teal-600 mb-3" />,
                },
                {
                  title: "Data Entry",
                  description: "Accurate and efficient data processing services including data entry, data mining, data cleansing, and validation.",
                  icon: <ClipboardList className="w-10 h-10 text-teal-600 mb-3" />,
                },
                {
                  title: "Back-Office Management",
                  description: "End-to-end back-office support including accounting, HR operations, order processing, and administrative tasks.",
                  icon: <ClipboardList className="w-10 h-10 text-teal-600 mb-3" />,
                },
                {
                  title: "Order Processing",
                  description: "Streamlined order management from receipt to fulfillment, ensuring prompt and accurate processing.",
                  icon: <ClipboardList className="w-10 h-10 text-teal-600 mb-3" />,
                },
                {
                  title: "Quality Assurance",
                  description: "Comprehensive quality control and assurance services to maintain high standards in all processes.",
                  icon: <ShieldCheck className="w-10 h-10 text-teal-600 mb-3" />,
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Markov for BPO?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cost Reduction",
                  description: "Significantly reduce operational costs while maintaining high quality standards. Our BPO services help you save on infrastructure, training, and staffing expenses.",
                  icon: <TrendingUp className="w-6 h-6 text-white" />,
                  gradientFrom: "#FFB800",
                  gradientTo: "#FF8A00",
                },
                {
                  title: "Operational Efficiency",
                  description: "Streamline your business processes with our expertise and best practices. We help you optimize workflows and increase productivity across your organization.",
                  icon: <ShieldCheck className="w-6 h-6 text-white" />,
                  gradientFrom: "#2DD8D4",
                  gradientTo: "#1A6B68",
                },
                {
                  title: "Scalable Solutions",
                  description: "Easily scale your operations up or down based on business needs without the hassle of hiring or downsizing. Our flexible models adapt to your requirements.",
                  icon: <Users className="w-6 h-6 text-white" />,
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
                    title: "Initial Consultation",
                    description: "We begin with a thorough understanding of your business needs, challenges, and objectives to create a tailored solution.",
                  },
                  {
                    step: 2,
                    title: "Custom Solution Design",
                    description: "Our team develops a customized BPO strategy aligned with your business goals and specific requirements.",
                  },
                  {
                    step: 3,
                    title: "Implementation & Training",
                    description: "We carefully implement the solution, ensuring your team is fully trained and comfortable with the new processes.",
                  },
                  {
                    step: 4,
                    title: "Ongoing Optimization",
                    description: "We continuously monitor, evaluate, and refine our services to ensure optimal performance and results.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      {index < 3 && (
                        <div className="w-0.5 h-12 bg-teal-600 mx-auto mt-4"></div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">BPO Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Global E-commerce Company",
                  description: "Reduced customer support response times by 40% and increased CSAT scores through our multilingual customer service solution.",
                  image: "/eccomerce.png",
                  tag: "Customer Support",
                },
                {
                  title: "Financial Services Provider",
                  description: "Improved data processing accuracy to 99.9% while reducing operational costs by 30% through our back-office management services.",
                  image: "/Financial-service.png",
                  tag: "Back-Office Management",
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
                    <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs px-2 py-1 rounded">
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
        <section className="bg-gradient-to-r from-teal-900 to-teal-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Business Processes?</h2>
              <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                Partner with Markov International and transform your business operations. 
                Our BPO services are designed to help you reduce costs, improve efficiency, and focus on what matters most.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                  Get a BPO Quote
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