"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({})

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message || 'Thank you for subscribing!'
        })
        // Clear form after successful submission
        setEmail("")
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || 'Failed to subscribe. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="py-16 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-16%20%281%29-cBHB3u0H1zs8eIRklquP5aJtbkauXC.png"
                alt="Markov Logo"
                width={30}
                height={30}
                className="w-auto h-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2DD8D4] to-white bg-clip-text text-transparent">
                Markov
              </span>
            </Link>
            <p className="mb-6 text-gray-400 leading-relaxed">
              We specialize in system integration, e-commerce management, BPO services, telecommunications, and call
              center support, helping businesses improve efficiency, reduce costs, and drive growth.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white bg-gray-800 hover:bg-[#2DD8D4] rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white bg-gray-800 hover:bg-[#2DD8D4] rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white bg-gray-800 hover:bg-[#2DD8D4] rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
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
              <li>
                <Link href="/services/call-center-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Call Center Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#2DD8D4] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD8D4] mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#2DD8D4] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD8D4] mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#2DD8D4] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD8D4] mr-2"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#2DD8D4] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD8D4] mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2DD8D4] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD8D4] mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span>Info@markovinternational.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span>021-36930725</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>Regional Office: R-18, Sector-10, North Karachi.</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold text-gray-300">Subscribe to our newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#2DD8D4]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-2 text-white bg-[#2DD8D4] rounded-r-md hover:bg-[#2DD8D4]/80 transition-colors flex items-center justify-center min-w-[80px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
                
                {submitStatus.success !== undefined && (
                  <div className={`mt-2 px-3 py-2 rounded-md text-sm ${
                    submitStatus.success 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Markov International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}