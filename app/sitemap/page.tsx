"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, User, Briefcase, Phone, FileText, Lightbulb, Building, PieChart } from "lucide-react"

export default function SitemapPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
              <p className="text-lg text-gray-300 mb-6 max-w-3xl">
                Find all the pages on our website organized by category for easy navigation.
              </p>
              <MapPin className="w-12 h-12 text-teal-400" />
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Main Pages */}
              <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Main Pages</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Services</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/it-solutions" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      IT Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/bpo" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      BPO
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/telecommunication" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Telecommunication
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/digital-marketing" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/e-commerce-management" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      E-Commerce Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/call-center-solutions" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Call Center Solutions
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Industries */}
              <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Industries</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/industries/healthcare" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/finance" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/e-commerce" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/education" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/entertainment" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Entertainment
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Legal Pages */}
              <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Legal Pages</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* About Us Section */}
              <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">About Us</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about#our-story" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#mission-vision" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#our-team" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#core-values" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Core Values
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact#contact-form" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Contact Form
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact#locations" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Our Locations
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact#support" className="text-teal-600 hover:text-teal-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Additional Resources Section */}
            <motion.div 
              className="mt-12 bg-gray-50 rounded-xl p-8 shadow-sm"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-teal-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Additional Resources</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Case Studies</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/case-studies#healthcare-case" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Healthcare Success Story
                      </Link>
                    </li>
                    <li>
                      <Link href="/case-studies#finance-case" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Finance Industry Transformation
                      </Link>
                    </li>
                    <li>
                      <Link href="/case-studies#retail-case" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Retail Digital Evolution
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Career Opportunities</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/careers#current-openings" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Current Openings
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers#internships" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Internship Programs
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers#benefits" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Employee Benefits
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Support Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/contact#support" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Technical Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact#faq" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact#schedule-demo" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                        Schedule a Demo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 