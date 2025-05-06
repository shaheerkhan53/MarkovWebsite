"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Lock, Database, Eye, FileText, Bell, UserCheck, Globe, Phone } from "lucide-react"

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  
  // Define sections for the privacy policy
  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "information-collection", title: "Information Collection", icon: Database },
    { id: "information-usage", title: "Information Usage", icon: Eye },
    { id: "cookies", title: "Cookies Policy", icon: FileText },
    { id: "third-party", title: "Third-Party Disclosure", icon: Globe },
    { id: "user-rights", title: "Your Rights", icon: UserCheck },
    { id: "data-security", title: "Data Security", icon: Lock },
    { id: "policy-updates", title: "Policy Updates", icon: Bell },
  ]

  // Register section refs
  const registerSection = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Find the section that is currently in view
      const currentSection = Object.entries(sectionRefs.current).find(([_, ref]) => {
        if (!ref) return false
        const { offsetTop, offsetHeight } = ref
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight
      })

      if (currentSection) {
        setActiveSection(currentSection[0])
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section
  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id]
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      })
    }
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  // Last updated date
  const lastUpdated = "January 15, 2024"

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
              className="max-w-4xl mx-auto text-center"
            >
              <Lock className="w-16 h-16 mx-auto mb-6 text-teal-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-300 mb-2">
                Last Updated: {lastUpdated}
              </p>
              <p className="text-md text-gray-400">
                This document outlines how we collect, use, and protect your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:w-1/4">
                <div className="sticky top-24 bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contents</h3>
                  <nav>
                    <ul className="space-y-3">
                      {sections.map((section) => {
                        const Icon = section.icon
                        return (
                          <li key={section.id}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left flex items-center p-2 rounded-lg transition-colors ${
                                activeSection === section.id
                                  ? "bg-teal-50 text-teal-700"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              <Icon className={`w-5 h-5 mr-2 ${
                                activeSection === section.id ? "text-teal-600" : "text-gray-500"
                              }`} />
                              <span>{section.title}</span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="prose prose-lg max-w-none">
                  {/* Introduction */}
                  <section
                    id="introduction"
                    ref={(ref) => registerSection("introduction", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        Markov International ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and protect information about you when you visit our website, use our services, or otherwise interact with us.
                      </p>
                      <p className="text-gray-700 mb-4">
                        By accessing or using our services, you agree to this Privacy Policy. If you do not agree with our policies and practices, you should not use our services. This Privacy Policy may change from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                      </p>
                      <p className="text-gray-700">
                        We encourage you to review the Privacy Policy whenever you access our services to stay informed about our information practices and the choices available to you.
                      </p>
                    </div>
                  </section>

                  {/* Information Collection */}
                  <section
                    id="information-collection"
                    ref={(ref) => registerSection("information-collection", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Database className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Information Collection</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide to Us</h3>
                      <p className="text-gray-700 mb-4">
                        We collect information you provide directly to us when you:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Fill out forms on our website, including contact forms and service request forms</li>
                        <li>Create an account or register for our services</li>
                        <li>Subscribe to our newsletters or marketing communications</li>
                        <li>Apply for a job at our company</li>
                        <li>Participate in surveys, contests, or promotions</li>
                        <li>Communicate with us via email, phone, or social media</li>
                      </ul>

                      <p className="text-gray-700 mb-4">
                        The types of information we may collect include:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Contact information (such as name, email address, phone number, and mailing address)</li>
                        <li>Company information (such as company name, industry, and size)</li>
                        <li>Account credentials (such as username and password)</li>
                        <li>Employment information (such as resume, work history, and references)</li>
                        <li>Payment information (such as billing address and payment method details)</li>
                        <li>Communications and correspondence you send to us</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Information Collected Automatically</h3>
                      <p className="text-gray-700 mb-4">
                        When you access or use our services, we may automatically collect information about you, including:
                      </p>
                      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>Device information (such as your IP address, device type, operating system, and browser type)</li>
                        <li>Usage information (such as pages visited, time spent on the site, and links clicked)</li>
                        <li>Location information (such as general geographic location based on your IP address)</li>
                        <li>Log data (such as access times, hardware and software information)</li>
                      </ul>
                    </div>
                  </section>

                  {/* Information Usage */}
                  <section
                    id="information-usage"
                    ref={(ref) => registerSection("information-usage", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Eye className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Information Usage</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        We use the information we collect for various purposes, including to:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process and complete transactions</li>
                        <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                        <li>Respond to your comments, questions, and requests</li>
                        <li>Communicate with you about products, services, offers, promotions, and events</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                        <li>Detect, prevent, and address fraud, unauthorized access, and other illegal activities</li>
                        <li>Personalize and improve your experience with our services</li>
                        <li>Comply with legal and regulatory requirements</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Basis for Processing (EU/UK Users)</h3>
                      <p className="text-gray-700 mb-4">
                        If you are located in the European Union or United Kingdom, we collect and process your personal information on the following legal bases:
                      </p>
                      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li><span className="font-medium">Contractual Necessity:</span> To perform our contractual obligations to you, including providing our services</li>
                        <li><span className="font-medium">Legitimate Interests:</span> For our legitimate business interests, such as improving our services and growing our business</li>
                        <li><span className="font-medium">Consent:</span> With your consent, which you may withdraw at any time</li>
                        <li><span className="font-medium">Legal Obligation:</span> To comply with applicable laws and regulations</li>
                      </ul>
                    </div>
                  </section>

                  {/* Cookies Policy */}
                  <section
                    id="cookies"
                    ref={(ref) => registerSection("cookies", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <FileText className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Cookies Policy</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        Cookies are small text files that are placed on your device when you visit a website. We use cookies and similar technologies to enhance your experience, analyze usage, and optimize functionality.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use</h3>
                      <ul className="mb-6 text-gray-700 space-y-4">
                        <li>
                          <span className="font-medium">Essential Cookies:</span> These cookies are necessary for the website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                        </li>
                        <li>
                          <span className="font-medium">Performance Cookies:</span> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                        </li>
                        <li>
                          <span className="font-medium">Functional Cookies:</span> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                        </li>
                        <li>
                          <span className="font-medium">Targeting Cookies:</span> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Managing Cookies</h3>
                      <p className="text-gray-700 mb-4">
                        Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The Help portion of the toolbar on most browsers will tell you how to prevent your computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. 
                      </p>
                      <p className="text-gray-700 mb-4">
                        Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our services.
                      </p>
                    </div>
                  </section>

                  {/* Third-Party Disclosure */}
                  <section
                    id="third-party"
                    ref={(ref) => registerSection("third-party", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Globe className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Third-Party Disclosure</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        We may share your information with third parties in the following circumstances:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>With service providers, consultants, and other third-party vendors who perform services on our behalf</li>
                        <li>With business partners with whom we jointly offer products or services</li>
                        <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
                        <li>If we believe that disclosure is reasonably necessary to comply with any applicable law, regulation, legal process, or governmental request</li>
                        <li>To protect the rights, property, and safety of Markov International, our customers, or the public</li>
                        <li>With your consent or at your direction</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Services</h3>
                      <p className="text-gray-700 mb-4">
                        Our services may contain links to third-party websites, products, or services. Information collected by third parties is governed by their privacy policies, not ours. We encourage you to read the privacy policies of any third-party websites you visit.
                      </p>
                    </div>
                  </section>

                  {/* Your Rights */}
                  <section
                    id="user-rights"
                    ref={(ref) => registerSection("user-rights", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <UserCheck className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Your Rights</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        Depending on your location, you may have certain rights regarding your personal information. These may include:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>The right to access personal information we hold about you</li>
                        <li>The right to request that we correct or update your personal information</li>
                        <li>The right to request that we delete your personal information</li>
                        <li>The right to object to processing of your personal information</li>
                        <li>The right to data portability (receiving your data in a structured, machine-readable format)</li>
                        <li>The right to withdraw consent at any time, where processing is based on consent</li>
                        <li>The right to lodge a complaint with a supervisory authority</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Exercise Your Rights</h3>
                      <p className="text-gray-700 mb-4">
                        To exercise any of these rights, please contact us at <a href="mailto:privacy@markovinternational.com" className="text-teal-600 hover:text-teal-800">privacy@markovinternational.com</a>. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Please note that we may ask you to verify your identity before responding to such requests, and in some cases, we may not be able to comply with your request due to legal obligations or legitimate business purposes.
                      </p>
                    </div>
                  </section>

                  {/* Data Security */}
                  <section
                    id="data-security"
                    ref={(ref) => registerSection("data-security", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Lock className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Data Security</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        We take the security of your personal information seriously and use appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Our security measures include:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Encryption of sensitive data</li>
                        <li>Regular security assessments and vulnerability testing</li>
                        <li>Restricted access to personal information to employees who need it</li>
                        <li>Employee training on privacy and security practices</li>
                        <li>Physical security measures at our facilities</li>
                      </ul>
                      <p className="text-gray-700 mb-4">
                        However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                      </p>
                      <p className="text-gray-700">
                        If you have reason to believe that your interaction with us is no longer secure, please immediately notify us at <a href="mailto:security@markovinternational.com" className="text-teal-600 hover:text-teal-800">security@markovinternational.com</a>.
                      </p>
                    </div>
                  </section>

                  {/* Policy Updates */}
                  <section
                    id="policy-updates"
                    ref={(ref) => registerSection("policy-updates", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Bell className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Policy Updates</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws and regulations. The updated Privacy Policy will be effective when it is posted on this page.
                      </p>
                      <p className="text-gray-700 mb-4">
                        If we make material changes to this Privacy Policy, we will notify you by:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Posting a notice on our website</li>
                        <li>Sending an email to the email address we have on file for you</li>
                        <li>Updating the "Last Updated" date at the top of this Privacy Policy</li>
                      </ul>
                      <p className="text-gray-700">
                        Your continued use of our services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. We encourage you to review the Privacy Policy whenever you access our services to stay informed about our information practices.
                      </p>
                    </div>
                  </section>

                  {/* Contact Us */}
                  <section className="mb-12">
                    <div className="flex items-center mb-4">
                      <Phone className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> <a href="mailto:privacy@markovinternational.com" className="text-teal-600 hover:text-teal-800">privacy@markovinternational.com</a></p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Address:</span> Markov International, 123 Business Ave, Suite 500, New York, NY 10001</p>
                        <p className="text-gray-700"><span className="font-semibold">Phone:</span> <a href="tel:+12125551234" className="text-teal-600 hover:text-teal-800">+1 (212) 555-1234</a></p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 