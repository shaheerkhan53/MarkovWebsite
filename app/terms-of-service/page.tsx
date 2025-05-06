"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Scale, 
  FileText, 
  ShieldAlert, 
  GanttChart, 
  Copyright, 
  AlertTriangle, 
  Globe, 
  FilePen, 
  Phone
} from "lucide-react"

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  
  // Define sections for the terms of service
  const sections = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "acceptance", title: "Acceptance of Terms", icon: ShieldAlert },
    { id: "service-usage", title: "Service Usage", icon: GanttChart },
    { id: "intellectual-property", title: "Intellectual Property", icon: Copyright },
    { id: "liability", title: "Limitation of Liability", icon: AlertTriangle },
    { id: "governing-law", title: "Governing Law", icon: Scale },
    { id: "international-use", title: "International Use", icon: Globe },
    { id: "modifications", title: "Modifications to Terms", icon: FilePen },
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
              <Scale className="w-16 h-16 mx-auto mb-6 text-teal-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-300 mb-2">
                Last Updated: {lastUpdated}
              </p>
              <p className="text-md text-gray-400">
                Please read these terms carefully before using our services.
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
                      <FileText className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        Welcome to Markov International. These Terms of Service ("Terms") govern your access to and use of our website, services, products, and content (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Our Services are offered by Markov International ("we," "our," or "us"), located at 123 Business Ave, Suite 500, New York, NY 10001. We provide various business solutions including but not limited to IT services, telecommunications, digital marketing, e-commerce management, business process outsourcing, and call center solutions.
                      </p>
                      <p className="text-gray-700">
                        Please read these Terms carefully, as they constitute a legal agreement between you and Markov International. These Terms may be updated from time to time. Any changes will be effective immediately upon posting on this website. Your continued use of our Services after any changes indicates your acceptance of the modified Terms.
                      </p>
                    </div>
                  </section>

                  {/* Acceptance of Terms */}
                  <section
                    id="acceptance"
                    ref={(ref) => registerSection("acceptance", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <ShieldAlert className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Acceptance of Terms</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        By accessing or using our Services, you affirm that:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>You are at least 18 years of age or the age of legal majority in your jurisdiction</li>
                        <li>You have the legal capacity to enter into a binding contract with Markov International</li>
                        <li>You agree to comply with these Terms and all applicable local, state, national, and international laws, rules, and regulations</li>
                        <li>If you are using our Services on behalf of a company, organization, or other entity, you have the authority to bind that entity to these Terms</li>
                      </ul>
                      <p className="text-gray-700 mb-4">
                        If you do not meet all of these requirements, you must not access or use our Services. If you are using our Services on behalf of a company, organization, or other entity, then "you" refers to both you and that entity, and you represent and warrant that you are authorized to bind that entity to these Terms and that you agree to these Terms on that entity's behalf.
                      </p>
                    </div>
                  </section>

                  {/* Service Usage */}
                  <section
                    id="service-usage"
                    ref={(ref) => registerSection("service-usage", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <GanttChart className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Service Usage</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Responsibilities</h3>
                      <p className="text-gray-700 mb-4">
                        If you create an account with us, you are responsible for maintaining the security of your account, and you are fully responsible for all activities that occur under the account and any other actions taken in connection with the account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security.
                      </p>
                      <p className="text-gray-700 mb-6">
                        We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Uses</h3>
                      <p className="text-gray-700 mb-4">
                        You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                        <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                        <li>To impersonate or attempt to impersonate Markov International, our employees, another user, or any other person or entity</li>
                        <li>To engage in any activity that could disable, overburden, damage, or impair the Services or interfere with any other party's use of the Services</li>
                        <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services or any server, computer, database, or network connected to the Services</li>
                        <li>To use the Services to transmit or send unsolicited commercial communications or advertisements</li>
                        <li>To use the Services to transmit any material that contains viruses, Trojan horses, worms, or any other harmful programs or code</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Availability</h3>
                      <p className="text-gray-700 mb-4">
                        We will use commercially reasonable efforts to make our Services available 24/7. However, we cannot guarantee that our Services will always be available or error-free. We reserve the right to suspend or restrict access to our Services for maintenance, improvements, or other business and operational reasons. We will attempt to provide reasonable notice of any major scheduled service disruptions, but we are not liable for any temporary unavailability of the Services.
                      </p>
                    </div>
                  </section>

                  {/* Intellectual Property */}
                  <section
                    id="intellectual-property"
                    ref={(ref) => registerSection("intellectual-property", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Copyright className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Intellectual Property</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Content</h3>
                      <p className="text-gray-700 mb-4">
                        The Services and all content, features, and functionality on the Services (including but not limited to all information, software, text, displays, images, video, audio, and the design, selection, and arrangement thereof) are owned by Markov International, its licensors, or other providers of such material, and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Unless specifically stated, no portion of the Services, its content, or any copyright, trademark, trade name, service mark, or any other proprietary information that appears on or through the Services may be used, copied, duplicated, republished, uploaded, posted, transmitted, or distributed in any way without our express prior written permission.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Content</h3>
                      <p className="text-gray-700 mb-4">
                        You retain ownership of any intellectual property rights you hold in content you submit, post, or display on or through the Services. By submitting, posting, or displaying content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods now known or later developed.
                      </p>
                      <p className="text-gray-700 mb-4">
                        You represent and warrant that:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>You own or control all rights to the content you submit, post, or display on or through the Services</li>
                        <li>The content does not violate the privacy rights, publicity rights, copyright, contract rights, or any other rights of any person or entity</li>
                        <li>The content does not contain material that is false, intentionally misleading, or defamatory</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Trademarks</h3>
                      <p className="text-gray-700 mb-4">
                        The Markov International name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Markov International or its affiliates or licensors. You may not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on the Services are the trademarks of their respective owners.
                      </p>
                    </div>
                  </section>

                  {/* Limitation of Liability */}
                  <section
                    id="liability"
                    ref={(ref) => registerSection("liability", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Limitation of Liability</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MARKOV INTERNATIONAL, ITS AFFILIATES, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES</li>
                        <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES</li>
                        <li>ANY CONTENT OBTAINED FROM THE SERVICES</li>
                        <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
                      </ul>
                      <p className="text-gray-700 mb-4">
                        WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                      </p>
                      <p className="text-gray-700 mb-4">
                        IN NO EVENT WILL OUR AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATED TO THE SERVICES EXCEED THE GREATER OF $100 USD OR THE AMOUNT YOU PAID US, IF ANY, IN THE LAST SIX MONTHS.
                      </p>
                      <p className="text-gray-700 mb-4">
                        THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN MARKOV INTERNATIONAL AND YOU. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                      </p>
                      <p className="text-gray-700">
                        THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                      </p>
                    </div>
                  </section>

                  {/* Governing Law */}
                  <section
                    id="governing-law"
                    ref={(ref) => registerSection("governing-law", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Scale className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Governing Law</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the State of New York, without giving effect to any choice or conflict of law provision or rule.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the federal courts of the United States or the courts of the State of New York, in each case located in New York City. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
                      </p>
                      <p className="text-gray-700 mb-4">
                        NOTWITHSTANDING THE FOREGOING, WE RESERVE THE RIGHT TO BRING ANY SUIT, ACTION, OR PROCEEDING AGAINST YOU FOR BREACH OF THESE TERMS OR ANY OTHER LEGAL MATTER IN THE COURTS OF THE JURISDICTION WHERE YOU RESIDE OR ANY OTHER RELEVANT JURISDICTION. YOU WAIVE ANY RIGHT TO OBJECT TO THE EXERCISE OF JURISDICTION OVER YOU BY SUCH COURTS.
                      </p>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Dispute Resolution</h3>
                      <p className="text-gray-700 mb-4">
                        In the event of any dispute, claim, question, or disagreement arising from or relating to these Terms or the breach thereof, the parties shall use their best efforts to settle the dispute, claim, question, or disagreement. To this effect, the parties shall consult and negotiate with each other in good faith and, recognizing their mutual interests, attempt to reach a just and equitable solution satisfactory to both parties.
                      </p>
                      <p className="text-gray-700 mb-4">
                        If the parties do not reach a solution within a period of 60 days, then upon notice by either party to the other, all disputes, claims, questions, or differences shall be finally settled by arbitration administered by the American Arbitration Association in accordance with the provisions of its Commercial Arbitration Rules.
                      </p>
                    </div>
                  </section>

                  {/* International Use */}
                  <section
                    id="international-use"
                    ref={(ref) => registerSection("international-use", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <Globe className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">International Use</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        The Services are controlled, operated, and administered by Markov International from our offices within the United States. If you access the Services from a location outside the United States, you are responsible for compliance with all local laws. You agree that you will not use the Services in any country or in any manner prohibited by any applicable laws, restrictions, or regulations.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We make no representations or warranties that the Services are appropriate or available for use in other locations. Those who access or use the Services from other jurisdictions do so at their own volition and are responsible for compliance with local law.
                      </p>
                      <p className="text-gray-700 mb-4">
                        You understand and acknowledge that:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>The Services may be subject to export control and sanctions laws of the United States and other countries</li>
                        <li>You must comply with all such applicable laws and regulations</li>
                        <li>You agree not to export, re-export, or transfer, directly or indirectly, any technical data acquired from the Services to any country, entity, or individual where such export would be prohibited under applicable laws and regulations</li>
                      </ul>
                    </div>
                  </section>

                  {/* Modifications to Terms */}
                  <section
                    id="modifications"
                    ref={(ref) => registerSection("modifications", ref)}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="flex items-center mb-4">
                      <FilePen className="w-8 h-8 text-teal-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-800">Modifications to Terms</h2>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-4">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                      </p>
                      <p className="text-gray-700 mb-4">
                        By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the Services.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We may also, in the future, offer new services and/or features through the Services (including the release of new tools and resources). Such new features and/or services shall be subject to these Terms.
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
                        If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> <a href="mailto:legal@markovinternational.com" className="text-teal-600 hover:text-teal-800">legal@markovinternational.com</a></p>
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