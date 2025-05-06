"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Package, CreditCard, Store, TrendingUp, Truck, BarChart, Users, ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ContactLinkButton } from "@/components/ui/contact-link-button"

export default function ECommerceManagementPage() {
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
        <section className="relative bg-gradient-to-r from-emerald-600 to-teal-800 text-white py-16 md:py-24 overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-13"
          >
            <source src="/ecommerce.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">E-Commerce Management Services</h1>
                <p className="text-lg text-emerald-100 mb-6 max-w-3xl">
                  Streamline your online store operations and maximize sales with our comprehensive
                  e-commerce management solutions tailored for growth-focused businesses.
                </p>
                <ShoppingCart className="w-12 h-12 text-emerald-300 mb-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Key Offerings Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our E-Commerce Management Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From product management to customer service, we provide end-to-end solutions to
              help you manage and scale your online store efficiently and profitably.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Product Listing Optimization",
                  description: "Enhance your product listings with SEO-focused descriptions, high-quality images, and competitive pricing strategies to improve visibility and conversion rates.",
                  icon: <Store className="w-10 h-10 text-emerald-600 mb-3" />,
                },
                {
                  title: "Inventory Management",
                  description: "Keep track of stock levels, set reorder points, and manage multiple warehouses with our advanced inventory management system to prevent stockouts and overstock situations.",
                  icon: <Package className="w-10 h-10 text-emerald-600 mb-3" />,
                },
                {
                  title: "Order Processing",
                  description: "Streamline your order fulfillment from receipt to delivery with automated workflows, order tracking, and efficient return management processes.",
                  icon: <Truck className="w-10 h-10 text-emerald-600 mb-3" />,
                },
                {
                  title: "Payment Processing",
                  description: "Implement secure and diverse payment options for your customers while maintaining PCI compliance and minimizing transaction fees.",
                  icon: <CreditCard className="w-10 h-10 text-emerald-600 mb-3" />,
                },
                {
                  title: "E-Commerce Platform Management",
                  description: "Expert management of your online store on platforms like Shopify, WooCommerce, Magento, or custom solutions with regular updates and optimizations.",
                  icon: <ShoppingCart className="w-10 h-10 text-emerald-600 mb-3" />,
                },
                {
                  title: "Analytics & Performance Tracking",
                  description: "Gain actionable insights from comprehensive reports on sales, customer behavior, and marketing effectiveness to drive data-informed business decisions.",
                  icon: <BarChart className="w-10 h-10 text-emerald-600 mb-3" />,
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Markov for E-Commerce Management?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sales Growth",
                  description: "Our optimization strategies and data-driven approach have helped clients achieve an average of 40% increase in sales within the first 6 months.",
                  icon: <TrendingUp className="w-6 h-6 text-white" />,
                  gradientFrom: "#10B981",
                  gradientTo: "#047857",
                },
                {
                  title: "Operational Efficiency",
                  description: "Streamline your e-commerce operations with automated workflows, reducing manual tasks by up to 70% and minimizing costly errors.",
                  icon: <Package className="w-6 h-6 text-white" />,
                  gradientFrom: "#2DD8D4",
                  gradientTo: "#1A6B68",
                },
                {
                  title: "Customer Satisfaction",
                  description: "Enhance the customer experience with smooth ordering processes, reliable fulfillment, and responsive support, leading to higher retention rates.",
                  icon: <Users className="w-6 h-6 text-white" />,
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our E-Commerce Management Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Audit & Analysis",
                    description: "We conduct a comprehensive audit of your existing e-commerce operations, identifying strengths, weaknesses, and opportunities for improvement.",
                  },
                  {
                    step: 2,
                    title: "Strategy Development",
                    description: "Based on our analysis, we create a tailored e-commerce management strategy aligned with your business goals and market positioning.",
                  },
                  {
                    step: 3,
                    title: "Implementation",
                    description: "Our team executes the strategy, setting up systems, optimizing listings, configuring inventory management, and streamlining order processing.",
                  },
                  {
                    step: 4,
                    title: "Monitoring & Optimization",
                    description: "We continuously monitor performance metrics, making data-driven adjustments to enhance sales, efficiency, and customer satisfaction.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      {index < 3 && (
                        <div className="w-0.5 h-12 bg-emerald-600 mx-auto mt-4"></div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">E-Commerce Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Fashion Retailer Expansion",
                  description: "Helped a boutique clothing brand scale their e-commerce operations, resulting in a 215% increase in online sales and 30% reduction in fulfillment costs.",
                  image: "/store.png",
                  tag: "Retail & Fashion",
                },
                {
                  title: "Multi-Channel Integration",
                  description: "Integrated inventory and order management across 5 marketplaces for an electronics seller, eliminating overselling and reducing order processing time by 65%.",
                  image: "/inventory3.png",
                  tag: "Electronics",
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
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
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
        <section className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Online Store Today</h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Partner with Markov International to optimize your e-commerce operations,
                increase sales, and deliver exceptional customer experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                  Request a Store Audit
                </Button>
                <Button className="border-white text-white hover:bg-white/10 border">
                  View E-Commerce Solutions
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
                <li>
                  <Link href="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/e-commerce-management" className="text-gray-400 hover:text-white transition-colors">
                    E-Commerce Management
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