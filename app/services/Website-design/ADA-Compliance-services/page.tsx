"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";

export default function ADAComplianceServicesPage() {
  const router = useRouter();
  
  // Function to navigate to contact page with specific parameters
  const navigateToContact = (serviceType: string = 'ada-compliance') => {
    router.push(`/contact?type=website-design&service=${serviceType}`);
  };
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Combined animation for card with hover effect
  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e7eaeb] to-[#f5f7f8] opacity-70"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-3xl mx-auto text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl font-bold text-gray-800 mb-3"
            variants={fadeInUp}
          >
            ADA Compliance Services
          </motion.h1>

          <motion.p 
            className="text-xl text-[#374548] mb-8 font-medium"
            variants={fadeInUp}
          >
            Make Your Website Accessible to Everyone and Avoid Legal Risks
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center bg-white p-3 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-200"
            variants={fadeInUp}
          >
            <div className="relative w-full mb-2 md:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#374548] h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter Website Address"
                className="pl-10 pr-4 py-3 bg-white text-gray-700 text-sm border border-gray-200 focus:ring-2 focus:ring-[#374548] focus:border-[#374548] w-full rounded-md"
              />
            </div>

            <Button
              className="w-full md:w-auto md:ml-2 bg-[#4B5320] hover:bg-[#394016] text-white text-sm font-semibold px-6 py-3 rounded-md transition transform hover:scale-105"
              onClick={() => navigateToContact('ada-audit')}
            >
              GET YOUR FREE ADA AUDIT
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Website <span className="text-[#4B5320]">ADA Compliance</span> Matters
              </h2>
              
              <p className="text-gray-700 mb-4">
                The Americans with Disabilities Act (ADA) requires that all electronic and information technology must be accessible to people with disabilities. This includes websites, mobile applications, and other digital platforms.
              </p>

              <p className="text-gray-700 mb-4">
                Non-compliance with ADA standards not only limits your audience but also exposes your business to legal risks. Since 2018, website accessibility lawsuits have increased by over 300%, with businesses of all sizes being targeted.
              </p>

              <p className="text-gray-700 mb-6">
                At MarkovWeb, we provide comprehensive ADA compliance services to make your website accessible to all users, protect your business from legal issues, and expand your digital reach to the 61 million adults in the US living with a disability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#4B5320] hover:bg-[#394016] text-white"
                  onClick={() => navigateToContact('ada-get-started')}
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#4B5320] text-[#4B5320]"
                  onClick={() => navigateToContact('ada-wcag-guidelines')}
                >
                  Learn About WCAG Guidelines
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/ada-compliance.jpg"
                  alt="Person using ADA compliance tools at desk"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">70%+ of websites</p>
                    <p className="text-gray-600 text-sm">are not ADA compliant</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADA Compliance Guidelines - NEW SECTION WITH UNIQUE THEME */}
      <section className="py-20 bg-gradient-to-b from-[#394016] to-[#394016]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              The Goal of <span className="text-[#A9BD68]">Americans with Disabilities Act</span> and Web Content Accessibility Guidelines
            </h2>
            <div className="h-1 w-32 bg-[#A9BD68] mx-auto mb-6"></div>
            <p className="text-gray-100 text-center max-w-3xl mx-auto">
              Creating barrier-free digital experiences for all users regardless of disabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#A9BD68]">What is WCAG 2.0?</h3>
                <p className="mb-6">
                  WCAG 2.0 serves as the technical standard that helps developers and content creators make web content more accessible to people with disabilities. These guidelines are organized into three levels of conformance:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#A9BD68] flex items-center justify-center text-[#252A0D] font-bold mr-2">A</div>
                      <h4 className="font-bold text-lg">Level A</h4>
                    </div>
                    <p className="text-sm">Basic web accessibility features that are absolutely necessary for users with disabilities.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#A9BD68] flex items-center justify-center text-[#252A0D] font-bold mr-2">AA</div>
                      <h4 className="font-bold text-lg">Level AA</h4>
                    </div>
                    <p className="text-sm">Addresses the biggest barriers for users with disabilities. This is the standard most organizations aim for.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#A9BD68] flex items-center justify-center text-[#252A0D] font-bold mr-2">AAA</div>
                      <h4 className="font-bold text-lg">Level AAA</h4>
                    </div>
                    <p className="text-sm">The highest level of accessibility, going beyond AA requirements to provide optimal accessibility.</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3 text-[#A9BD68]">Four Core Principles of WCAG:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#A9BD68] flex items-center justify-center text-[#252A0D] font-bold mr-3 mt-1 flex-shrink-0">P</div>
                    <div>
                      <span className="font-semibold block">Perceivable</span>
                      <p className="text-sm">Information must be presentable to users in ways they can perceive, regardless of disability.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#A9BD68] flex items-center justify-center text-[#252A0D] font-bold mr-3 mt-1 flex-shrink-0">O</div>
                    <div>
                      <span className="font-semibold block">Operable</span>
                      <p className="text-sm">Interface elements must be navigable and usable by all users.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#A9BD68] flex items-center justify-center text-[#252A0D] font-bold mr-3 mt-1 flex-shrink-0">U</div>
                    <div>
                      <span className="font-semibold block">Understandable</span>
                      <p className="text-sm">Information and operation of the user interface must be easily understood.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#A9BD68] flex items-center justify-center text-[#252A0D] font-bold mr-3 mt-1 flex-shrink-0">R</div>
                    <div>
                      <span className="font-semibold block">Robust</span>
                      <p className="text-sm">Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#A9BD68] flex items-center justify-center shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#252A0D" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white">
                <h3 className="text-2xl font-bold mb-6 text-[#A9BD68]">Does My Website Need to be ADA Compliant?</h3>
                
                <p className="mb-6">
                  If your business falls under Title I (employers) or Title III (public accommodations) of the ADA, your website should be ADA compliant. Businesses that are generally required to comply include:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#A9BD68] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Private employers with 15 or more employees</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#A9BD68] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Businesses that operate for the benefit of the public</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#A9BD68] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>State and local government agencies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#A9BD68] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Nonprofit organizations that either have 15+ employees or operate as public accommodations</span>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold mb-4 text-[#A9BD68]">Benefits of ADA Compliance:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-[#A9BD68] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <h5 className="font-semibold">Legal Protection</h5>
                    </div>
                    <p className="text-sm">Avoid costly lawsuits and legal complaints by maintaining compliance with ADA standards.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-[#A9BD68] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h5 className="font-semibold">Expanded Audience</h5>
                    </div>
                    <p className="text-sm">Reach the 61+ million adults with disabilities in the U.S. who represent $490 billion in disposable income.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-[#A9BD68] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <h5 className="font-semibold">SEO Benefits</h5>
                    </div>
                    <p className="text-sm">Many accessibility improvements also enhance SEO, helping your site rank better in search results.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-[#A9BD68] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h5 className="font-semibold">Better User Experience</h5>
                    </div>
                    <p className="text-sm">Accessible websites are generally more user-friendly for everyone, not just those with disabilities.</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button 
                    className="bg-[#A9BD68] hover:bg-[#1A1A1A] text-[#252A0D] text-base font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => navigateToContact('ada-assessment')}
                  >
                    Get Your Free ADA Compliance Assessment
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADA Compliance Tool Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Get ADA Assistance and Enhance <br />
              <span className="text-[#394016]">Your Website&apos;s Functionality and Usability</span>
            </h2>
            <Button 
              onClick={() => navigateToContact('ada-consultation')}
              className="mt-4 bg-[#F0AD4E] hover:bg-[#1A1A1A] text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              LET&apos;S TALK
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-xl p-8 lg:p-12 shadow-lg border border-gray-100 mb-16"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#394016] mb-4">ADA Compliance Tool</h3>
              <p className="text-gray-600 max-w-4xl mx-auto">
                These features collectively make up one of the strongest ADA compliance solutions. Our offer of comprehensive ADA compliance ensures that users can experience Web Content Accessibility Guidelines (WCAG) compliance on your website, ensuring that they&#39;re accessible to people with various disabilities.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
              <div className="w-full lg:w-7/12">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {/* Feature grid will go here */}
                </motion.div>
              </div>
              <div className="w-full lg:w-5/12">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/ada-compliance.jpg"
                    alt="Team members analyzing ADA compliance"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First row of features */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Restore Site Profile</h4>
                    <p className="text-sm text-gray-600">
                      Reset website to its default state after any accessibility adjustments have been made, allowing users to start fresh.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Visually Impaired Profile</h4>
                    <p className="text-sm text-gray-600">
                      Adjusts content for users with visual impairments, providing enhanced contrast and optimized font sizes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cognitive Disability Profile</h4>
                    <p className="text-sm text-gray-600">
                      Simplifies content for users with cognitive disabilities, reducing distractions and making text more readable.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Second row of features */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">ADHD-Friendly Profile</h4>
                    <p className="text-sm text-gray-600">
                      Reduces distractions and creates a more focused browsing experience for users with attention disorders.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Blind Users Support</h4>
                    <p className="text-sm text-gray-600">
                      Enables screen readers to better interpret website content, ensuring blind users can navigate and access information.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Keyboard Navigation</h4>
                    <p className="text-sm text-gray-600">
                      Allows users to navigate the website using only keyboard inputs, essential for those with motor impairments.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Third row of features */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Content Adjustments</h4>
                    <p className="text-sm text-gray-600">
                      Modifies text size, spacing, and alignment to make content easier to read for users with various disabilities.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Color Adjustments</h4>
                    <p className="text-sm text-gray-600">
                      Enhances contrast ratios and offers color modifications to ensure content is accessible for users with color blindness.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8F0D9]">
                    <svg className="w-5 h-5 text-[#394016]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Orientation Adjustments</h4>
                    <p className="text-sm text-gray-600">
                      Optimizes layout for different screen orientations and devices, ensuring accessibility across all platforms.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tool Advantage Section */}
          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-[#394016] mb-6">MarkovWeb&apos;s ADA Compliance Tool Advantage</h3>
                <p className="text-gray-700 mb-6">
                  Maintaining compliance with accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), ensures that your website is accessible to people with disabilities. These features have been designed to maintain your ADA compliance while enhancing the user experience for all visitors.
                </p>
                <p className="text-gray-700 mb-6">
                  Our ADA compliance solution ensures that your digital content is accessible to users with various disabilities, ensuring that you meet legal requirements while also expanding your audience reach.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Meets WCAG 2.1 AA compliance standards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Regular updates to stay current with evolving accessibility guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">User-friendly interface that can be easily implemented on any website</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Comprehensive reporting on accessibility compliance status</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/ADA-tool.jpg"
                  alt="Team members analyzing ADA compliance"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute -top-6 -right-6 bg-[#394016] p-5 rounded-lg shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm font-medium">Compliance</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Frequently Asked <span className="text-[#394016]">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about ADA compliance and web accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">What is WCAG and why does it matter?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    WCAG (Web Content Accessibility Guidelines) is a set of international standards for web accessibility developed by the World Wide Web Consortium (W3C). It matters because these guidelines serve as the primary framework for making web content accessible to people with disabilities, and they're often referenced in legal requirements worldwide, including ADA compliance in the US.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">Is ADA compliance legally required for my website?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    If your business falls under Title I (employers with 15+ employees) or Title III (public accommodations) of the ADA, your website should be accessible. Courts have increasingly interpreted the ADA to include websites as places of public accommodation. Even if not legally required in your specific case, accessibility is still best practice to expand your audience and provide equal access.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">What are the risks of non-compliance?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    Non-compliance risks include lawsuits (which have increased by over 300% since 2018), legal fees, settlements (typically $10,000-$50,000), damage to brand reputation, and lost business from the 61 million adults with disabilities in the US who represent $490 billion in disposable income.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">How long does it take to make my website ADA compliant?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    Timeline varies based on website size and complexity. A small site might take 2-4 weeks, while larger sites can take 1-3 months. Our process includes initial audit (1-2 weeks), remediation (varies by site), testing, and ongoing monitoring to maintain compliance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">Do I need an accessibility statement on my website?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    Yes, an accessibility statement is recommended. It demonstrates your commitment to accessibility, provides information about your compliance level, offers assistance for users experiencing difficulties, and may provide some legal protection by showing good faith efforts toward compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">Will ADA compliance affect my website's design?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    When implemented properly, ADA compliance can enhance design rather than limit it. While some adjustments may be necessary (such as color contrast, text size, and navigation elements), modern accessibility practices can be integrated with beautiful design. The result is often a cleaner, more user-friendly website for all visitors.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">Are automatic accessibility plugins sufficient for compliance?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    Automated plugins can address some accessibility issues but typically only solve 30-40% of potential problems. Comprehensive compliance requires a combination of automated testing, manual review, remediation, and ongoing monitoring. Relying solely on plugins may create a false sense of security while leaving significant compliance gaps.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:bg-gray-50">
                    <h3 className="text-base font-medium text-left text-gray-800">Does ADA compliance improve SEO?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-600">
                    Yes! Many accessibility improvements directly benefit SEO. Adding proper alt text to images, using semantic HTML structure, improving site navigation, providing video transcripts, and ensuring mobile responsiveness all contribute to both better accessibility and improved search engine rankings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What Our <span className="text-[#394016]">Clients Say</span> About Our ADA Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our ADA compliance solutions have helped businesses avoid legal issues and expand their audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md relative"
            >
              <div className="mb-8">
                <svg className="w-10 h-10 text-[#394016]/20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.72,11.72a1,1,0,0,0-1.44,1.44,9,9,0,0,1,0,12.73A1,1,0,1,0,10.72,27.33a11,11,0,0,0,0-15.62Zm10,0a1,1,0,1,0-1.44,1.44,9,9,0,0,1,0,12.73,1,1,0,1,0,1.44,1.44,11,11,0,0,0,0-15.62Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "After implementing MarkovWeb's ADA compliance solutions, not only did we avoid a potential lawsuit, but we saw a 15% increase in our overall website engagement. Their team made the process seamless and provided great education for our staff."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <Image
                    src="/3.jpg"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Marketing Director, HealthFirst Medical</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md relative md:mt-8"
            >
              <div className="mb-8">
                <svg className="w-10 h-10 text-[#394016]/20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.72,11.72a1,1,0,0,0-1.44,1.44,9,9,0,0,1,0,12.73A1,1,0,1,0,10.72,27.33a11,11,0,0,0,0-15.62Zm10,0a1,1,0,1,0-1.44,1.44,9,9,0,0,1,0,12.73,1,1,0,1,0,1.44,1.44,11,11,0,0,0,0-15.62Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We received a legal complaint about our website's accessibility, and MarkovWeb's team responded quickly. Within three weeks, they had audited our site, fixed all issues, and provided documentation that helped us resolve the complaint without going to court."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <Image
                    src="/1.webp"
                    alt="David Chen"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">David Chen</h4>
                  <p className="text-sm text-gray-600">CEO, Retail Solutions Inc.</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md relative"
            >
              <div className="mb-8">
                <svg className="w-10 h-10 text-[#394016]/20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.72,11.72a1,1,0,0,0-1.44,1.44,9,9,0,0,1,0,12.73A1,1,0,1,0,10.72,27.33a11,11,0,0,0,0-15.62Zm10,0a1,1,0,1,0-1.44,1.44,9,9,0,0,1,0,12.73,1,1,0,1,0,1.44,1.44,11,11,0,0,0,0-15.62Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We were surprised to learn that over 20% of our customers had some form of disability. MarkovWeb's ADA compliance service has made our e-commerce website accessible to this important audience, and we've seen a significant ROI with increased sales and customer loyalty."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <Image
                    src="/1.webp"
                    alt="Michelle Rodriguez"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Michelle Rodriguez</h4>
                  <p className="text-sm text-gray-600">E-Commerce Manager, Fashion Forward</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              ADA Compliance <span className="text-[#394016]">Pricing Packages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right accessibility solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Standard Package</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#394016]">$1,499</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for small businesses and personal websites looking to achieve basic ADA compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Initial accessibility audit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Basic WCAG 2.1 AA compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Accessibility statement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">One-time fixes implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">30 days of support</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800"
                  onClick={() => navigateToContact('ada-basic-package')}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Professional Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#394016] relative transition-transform hover:scale-105 transform-gpu scale-105 z-10"
            >
              <div className="absolute top-0 right-0 bg-[#394016] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Package</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#394016]">$2,999</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive solution for medium-sized businesses with more complex websites.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Comprehensive accessibility audit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Full WCAG 2.1 AA compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Custom accessibility statement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Complete remediation implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">ADA compliance certificate</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">90 days of support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Staff training session</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-[#394016] hover:bg-[#4B5320] text-white"
                  onClick={() => navigateToContact('ada-professional-package')}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise Package</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#394016]">Custom</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Tailored solution for large businesses with complex websites and legal compliance needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Everything in Professional package</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">WCAG 2.1 AAA compliance options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Ongoing compliance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Multiple staff training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Legal compliance documentation</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800"
                  onClick={() => navigateToContact('ada-enterprise-package')}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              Not sure which package is right for you? <span onClick={() => navigateToContact('ada-custom-quote')} className="text-[#394016] font-medium underline cursor-pointer">Contact us</span> for a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our ADA Compliance <span className="text-[#394016]">Implementation Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to making your website fully accessible
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center mb-16"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Initial Assessment & Discovery</h3>
                <p className="text-gray-600">
                  We analyze your website's current state, gather requirements, and identify target accessibility levels for compliance.
                </p>
                <p className="text-sm text-gray-500 mt-2">Typical duration: 1 week</p>
              </div>
              <div className="flex items-center justify-center z-10 bg-white">
                <div className="w-12 h-12 rounded-full bg-[#394016] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="md:bg-gray-50 md:p-6 md:rounded-lg md:shadow-sm mt-6 md:mt-0">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Website structure evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Stakeholder interviews</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Compliance goals definition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col md:flex-row-reverse items-center mb-16"
            >
              <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Audit</h3>
                <p className="text-gray-600">
                  We conduct a thorough assessment using both automated tools and manual testing to identify all accessibility issues.
                </p>
                <p className="text-sm text-gray-500 mt-2">Typical duration: 1-2 weeks</p>
              </div>
              <div className="flex items-center justify-center z-10 bg-white">
                <div className="w-12 h-12 rounded-full bg-[#394016] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <div className="md:bg-gray-50 md:p-6 md:rounded-lg md:shadow-sm mt-6 md:mt-0">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Automated WCAG 2.1 testing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Manual expert review</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Assistive technology testing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Detailed audit report creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col md:flex-row items-center mb-16"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Remediation Planning</h3>
                <p className="text-gray-600">
                  We develop a prioritized plan to address all accessibility issues identified during the audit phase.
                </p>
                <p className="text-sm text-gray-500 mt-2">Typical duration: 1 week</p>
              </div>
              <div className="flex items-center justify-center z-10 bg-white">
                <div className="w-12 h-12 rounded-full bg-[#394016] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="md:bg-gray-50 md:p-6 md:rounded-lg md:shadow-sm mt-6 md:mt-0">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Issue prioritization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Solution recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Implementation timeline creation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Resource allocation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col md:flex-row-reverse items-center mb-16"
            >
              <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation & Remediation</h3>
                <p className="text-gray-600">
                  Our expert developers implement all necessary changes to make your website fully accessible according to WCAG guidelines.
                </p>
                <p className="text-sm text-gray-500 mt-2">Typical duration: 2-4 weeks</p>
              </div>
              <div className="flex items-center justify-center z-10 bg-white">
                <div className="w-12 h-12 rounded-full bg-[#394016] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  4
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <div className="md:bg-gray-50 md:p-6 md:rounded-lg md:shadow-sm mt-6 md:mt-0">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Code modifications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Content adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Design enhancements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Accessibility widget installation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Implementation progress tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Testing & Ongoing Support</h3>
                <p className="text-gray-600">
                  We verify that all accessibility issues have been resolved and provide ongoing support to maintain compliance.
                </p>
                <p className="text-sm text-gray-500 mt-2">Typical duration: 1 week + ongoing</p>
              </div>
              <div className="flex items-center justify-center z-10 bg-white">
                <div className="w-12 h-12 rounded-full bg-[#394016] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  5
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="md:bg-gray-50 md:p-6 md:rounded-lg md:shadow-sm mt-6 md:mt-0">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Post-implementation testing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Compliance verification</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Documentation delivery</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Staff training</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#394016] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Ongoing maintenance plan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Button 
              className="bg-[#394016] hover:bg-[#1A1A1A] text-white px-8 py-3"
              onClick={() => navigateToContact('ada-implementation')}
            >
              Start Your ADA Compliance Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#4B5320]">Our ADA Compliance Services</span>
            </h2>
            <div className="h-1 w-24 bg-[#4B5320] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Comprehensive Solutions to Make Your Website Accessible and Compliant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#4B5320]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#4B5320]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4B5320] mb-4">ADA Compliance Audit</h3>
              <p className="text-gray-700 mb-4">
                Our comprehensive audit assesses your website against WCAG 2.1 AA guidelines, identifying accessibility issues across all pages. We provide a detailed report with specific recommendations for remediation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated and manual testing
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed compliance report
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prioritized remediation plan
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#4B5320]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#4B5320]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4B5320] mb-4">ADA Remediation Services</h3>
              <p className="text-gray-700 mb-4">
                Our expert developers implement necessary changes to make your website fully accessible. We address all major compliance issues, from keyboard navigation to screen reader compatibility and color contrast.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  HTML structure modifications
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Alternative text implementation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Form and navigation fixes
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#4B5320]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#4B5320]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4B5320] mb-4">ADA Compliance Monitoring</h3>
              <p className="text-gray-700 mb-4">
                We provide ongoing monitoring and maintenance to ensure your website remains compliant as new content is added. Regular audits and updates keep your site accessible and protected from legal risks.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quarterly compliance scans
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  New content accessibility checks
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4B5320] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  WCAG updates implementation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
