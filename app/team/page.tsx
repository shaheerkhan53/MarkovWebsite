"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Linkedin, Twitter, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
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
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership Team</h1>
                <p className="text-lg text-gray-300 mb-6 max-w-3xl">
                  Meet the talented individuals who lead Markov International, bringing decades of expertise and innovation to help businesses transform and succeed.
                </p>
                <Users className="w-12 h-12 text-teal-300 mb-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Executive Leadership</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
              <p className="text-gray-600">
                Our executive team brings together diverse expertise from technology, operations, and business strategy to lead Markov International's global initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center max-w-4xl mx-auto gap-8 mb-16">
              {[                
                {
                  name: "Olivia Chen",
                  title: "Chief Financial Officer",
                  image: "/placeholder.svg?height=400&width=400&text=CFO",
                  bio: "Olivia manages our financial strategy and operations, ensuring sustainable growth and financial health. Her expertise in international finance has been crucial to our global expansion.",
                  linkedin: "#",
                  twitter: "#",
                  email: "olivia@markovintl.com"
                },
                {
                  name: "Robert Kim",
                  title: "Chief Information Officer",
                  image: "/placeholder.svg?height=400&width=400&text=CIO",
                  bio: "Robert oversees our internal IT infrastructure and systems, ensuring security, reliability, and efficiency. His leadership in digital transformation enhances our operational capabilities.",
                  linkedin: "#",
                  twitter: "#",
                  email: "robert@markovintl.com"
                },
              ].map((executive, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="relative h-96 md:h-80">
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{executive.name}</h3>
                    <p className="text-teal-600 font-medium mb-4">{executive.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{executive.bio}</p>
                    <div className="flex space-x-4">
                      <a href={executive.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href={executive.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href={`mailto:${executive.email}`} className="text-gray-400 hover:text-teal-600 transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Leaders Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Department Leaders</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Management Team</h2>
              <p className="text-gray-600">
                Our management team brings specialized expertise to each service area, ensuring the highest quality solutions for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center max-w-4xl mx-auto gap-6">
              {[
                {
                  name: "Grace Liu",
                  title: "Head of Call Center",
                  image: "/placeholder.svg?height=300&width=300&text=Call+Center+Director"
                },
                {
                  name: "Raj Patel",
                  title: "Head of Human Resources",
                  image: "/placeholder.svg?height=300&width=300&text=HR+Director"
                },
                {
                  name: "Emma Thompson",
                  title: "Head of Customer Success",
                  image: "/placeholder.svg?height=300&width=300&text=Customer+Success+Director"
                },
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="relative h-64">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{leader.name}</h3>
                    <p className="text-teal-600 text-sm">{leader.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                  <p className="text-teal-100 mb-6">
                    We're always looking for talented individuals who are passionate about technology and innovation. 
                    Explore our open positions and become part of a dynamic, global team making a difference.
                  </p>
                  <Button asChild className="bg-white text-teal-800 hover:bg-teal-100 transition-colors">
                    <Link href="/careers" className="flex items-center">
                      View Open Positions <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Join+Our+Team"
                    alt="Join Our Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 