"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { PhoneCall, Headset, MessageSquare, CalendarClock, Users, Globe, BarChart, Clock, ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ContactLinkButton } from "@/components/ui/contact-link-button"

export default function CallCenterSolutionsPage() {
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
        <section className="relative bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-16 md:py-24 overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/call-center.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="container relative z-10 mx-auto px-4">
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Call Center Solutions</h1>
        <p className="text-lg text-blue-100 mb-6 max-w-3xl">
          Elevate your customer experience with our professional call center services designed 
          to improve communication, boost satisfaction, and drive business growth.
        </p>
        <Headset className="w-12 h-12 text-blue-300 mb-6" />
      </motion.div>
    </motion.div>
  </div>
</section>


        {/* Key Offerings Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Call Center Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We provide comprehensive call center solutions that help businesses connect with their customers
              effectively, resolve issues promptly, and build lasting relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Inbound Support",
                  description: "Professional handling of customer inquiries, technical support, and order processing with personalized attention to every caller.",
                  icon: <PhoneCall className="w-10 h-10 text-indigo-600 mb-3" />,
                },
                {
                  title: "Outbound Campaigns",
                  description: "Strategic telemarketing, lead generation, appointment setting, and follow-up calls to expand your customer base.",
                  icon: <Headset className="w-10 h-10 text-indigo-600 mb-3" />,
                },
                {
                  title: "Multilingual Support",
                  description: "Break language barriers with our diverse team of agents proficient in multiple languages to serve your global customer base.",
                  icon: <Globe className="w-10 h-10 text-indigo-600 mb-3" />,
                },
                {
                  title: "Omnichannel Communication",
                  description: "Seamless customer service across voice, email, chat, SMS, and social media channels for a unified experience.",
                  icon: <MessageSquare className="w-10 h-10 text-indigo-600 mb-3" />,
                },
                {
                  title: "Appointment Scheduling",
                  description: "Efficient booking, confirmation, and rescheduling services to optimize your business calendar and reduce no-shows.",
                  icon: <CalendarClock className="w-10 h-10 text-indigo-600 mb-3" />,
                },
                {
                  title: "Performance Analytics",
                  description: "Comprehensive reporting and analytics on call metrics, agent performance, and customer satisfaction to drive continuous improvement.",
                  icon: <BarChart className="w-10 h-10 text-indigo-600 mb-3" />,
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Markov for Call Center Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Enhanced Customer Experience",
                  description: "Our trained agents deliver personalized and empathetic service that builds customer loyalty and reduces churn by up to 25%.",
                  icon: <Users className="w-6 h-6 text-white" />,
                  gradientFrom: "#4F46E5",
                  gradientTo: "#2D3A8C",
                },
                {
                  title: "Operational Efficiency",
                  description: "Reduce response times by 40% and increase first-call resolution rates with our streamlined processes and trained professionals.",
                  icon: <Clock className="w-6 h-6 text-white" />,
                  gradientFrom: "#2DD8D4",
                  gradientTo: "#1A6B68",
                },
                {
                  title: "Cost-Effectiveness",
                  description: "Save up to 50% on operational costs compared to in-house call centers while maintaining superior service quality.",
                  icon: <BarChart className="w-6 h-6 text-white" />,
                  gradientFrom: "#FFB800",
                  gradientTo: "#FF8A00",
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Call Center Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Needs Assessment",
                    description: "We thoroughly analyze your business requirements, target audience, and communication goals to design a tailored call center strategy.",
                  },
                  {
                    step: 2,
                    title: "Agent Selection & Training",
                    description: "Our rigorous recruitment and comprehensive training program ensures that all agents are technically proficient and aligned with your brand voice.",
                  },
                  {
                    step: 3,
                    title: "Implementation & Integration",
                    description: "We set up the necessary technology, integrate with your existing systems, and establish clear workflows and protocols for every interaction.",
                  },
                  {
                    step: 4,
                    title: "Continuous Improvement",
                    description: "Regular performance reviews, quality monitoring, and customer feedback analysis drive ongoing enhancements to our service delivery.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      {index < 3 && (
                        <div className="w-0.5 h-12 bg-indigo-600 mx-auto mt-4"></div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Call Center Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Healthcare Provider Support Line",
                  description: "Implemented a 24/7 patient support line for a healthcare network, reducing patient wait times by 68% and increasing satisfaction scores by 42%.",
                  image: "/HealthCare1.png",
                  tag: "Healthcare",
                },
                {
                  title: "Retail Customer Service Transformation",
                  description: "Helped a retail chain overhaul their customer service operations, resulting in 35% higher resolution rates and a 28% increase in post-purchase sales.",
                  image: "/Retail.png",
                  tag: "Retail",
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
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
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
        <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Customer Support</h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                Partner with Markov International to deliver exceptional customer experiences that 
                drive loyalty, satisfaction, and business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ContactLinkButton href="/contact?type=call-center" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                  Get a Call Center Quote
                </ContactLinkButton>
                <ContactLinkButton href="/contact?type=call-center" className="border-white text-white hover:bg-white/10 border">
                  Schedule a Consultation
                </ContactLinkButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 