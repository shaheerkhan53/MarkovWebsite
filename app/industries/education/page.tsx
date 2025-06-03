'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  TrendingUp, // Could represent enrollment growth or performance improvement
  ShieldCheck, // Security, data privacy
  BookOpen,     // Represents Education/Learning - replaces Landmark
  GraduationCap,// Represents Students/Academia - replaces CreditCard
  Users,        // Represents Community/Collaboration - replaces LineChart
  Wifi,         // Represents Connectivity/Digital Learning - replaces BarChart4
  ClipboardList,// Represents Admin/Compliance - replaces BadgeDollarSign
  Lock,         // Data Security
  Server,       // IT Infrastructure
  Megaphone,    // Digital Marketing/Communication
  Phone,        // Telecommunication
  FileLock      // Specific for Data Privacy Compliance (like FERPA)
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// Rename component to reflect its purpose
export default function EducationIndustryPage() {
  // Animation variants (remain the same)
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section - Updated for Education */}
      <section className="relative py-20 bg-[#D1FAF5] text-emerald-900 overflow-hidden"> {/* Changed background, adjusted text color for contrast */}

        {/* Grid pattern remains, adjust stroke if needed */}
        <div className="absolute inset-0 opacity-20"> {/* Slightly increased opacity */}
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#065f46" strokeWidth="0.5" /> {/* Darker stroke */}
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              {/* Updated Badge */}
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-emerald-700 text-white">
                Education Sector
              </span>
              {/* Updated Headline */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-950"> {/* Darker text */}
                Tailored Solutions for the <br/> Education Sector
              </h1>
              {/* Updated Description */}
              <p className="text-lg text-emerald-800 mb-8 max-w-xl"> {/* Adjusted text color */}
                We empower educational institutions with secure, reliable solutions that enhance administrative efficiency, enrich learning experiences, and support compliance with academic standards.
              </p>
              {/* Buttons remain similar, styling might need adjustment */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-700 text-white hover:bg-emerald-800">
                  Explore Solutions
                </Button>
                <Button variant="outline" className="text-emerald-800 border-emerald-800 hover:bg-emerald-700/10 hover:text-emerald-900">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="hidden lg:block">
              <div className="relative">
                {/* Adjusted gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-xl transform rotate-3"></div>
                {/* Updated Image and Alt Text */}
                <Image
                  src="/educationalGoal.png" // Use an education-relevant image
                  alt="Students using technology in a classroom"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-xl shadow-xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges Section - Updated for Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Sector Challenges
            </span>
            {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Navigating Education Sector Complexities
            </h2>
            <p className="text-gray-600">
              The education sector faces unique challenges requiring specialized solutions.
              At Markov International, we understand these complexities and offer tailored services to address them.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Challenge 1: Data Privacy & Compliance */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-red-100 rounded-lg mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Data Privacy & Compliance</h3>
              </div>
              <p className="text-gray-600">
                Adhering to regulations like FERPA, GDPR, and state-specific laws while managing sensitive student and staff data securely.
              </p>
            </motion.div>

            {/* Challenge 2: Cybersecurity Threats */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-orange-100 rounded-lg mr-4">
                  <Lock className="w-6 h-6 text-orange-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Cybersecurity Threats</h3>
              </div>
              <p className="text-gray-600">
                Protecting against ransomware, phishing, and data breaches targeting educational networks and sensitive information.
              </p>
            </motion.div>

            {/* Challenge 3: Digital Transformation & Integration */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-teal-100 rounded-lg mr-4">
                   <Wifi className="w-6 h-6 text-teal-600" /> {/* Changed Icon */}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Digital Transformation</h3>
              </div>
              <p className="text-gray-600">
                Integrating various learning platforms (LMS, SIS), managing online learning environments, and updating legacy systems.
              </p>
            </motion.div>

            {/* Challenge 4: Budget Constraints */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-green-100 rounded-lg mr-4">
                  <ClipboardList className="w-6 h-6 text-green-600" /> {/* Changed Icon */}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Budget Constraints</h3>
              </div>
              <p className="text-gray-600">
                Balancing limited budgets with the increasing need for modern technology, resources, and skilled personnel.
              </p>
            </motion.div>

             {/* Challenge 5: Student Engagement & Retention */}
             <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-purple-100 rounded-lg mr-4">
                   <Users className="w-6 h-6 text-purple-600" /> {/* Changed Icon */}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Student Engagement</h3>
              </div>
              <p className="text-gray-600">
                Keeping students engaged in diverse learning environments (in-person, hybrid, online) and supporting retention efforts.
              </p>
            </motion.div>

            {/* Challenge 6: Evolving Expectations */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-blue-100 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" /> {/* Changed Icon */}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Evolving Expectations</h3>
              </div>
              <p className="text-gray-600">
                Meeting the demands of students, parents, and faculty for personalized learning, seamless communication, and accessible support.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Section - Updated for Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Tailored Solutions
            </span>
             {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Markov Empowers Educational Institutions
            </h2>
            <p className="text-gray-600">
              Our specialized services address the unique challenges of the education sector,
              helping you enhance security, improve administrative efficiency, and deliver exceptional learning experiences.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Solution 1: BPO for Education */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" /> {/* Changed Icon */}
                  </div>
                  {/* Updated Title and Description */}
                  <CardTitle>BPO for Education Services</CardTitle>
                  <CardDescription>Streamlined administrative and student support operations</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Admissions processing and enrollment support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Student helpdesk and technical support (LMS, portals)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Transcript requests and records management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Back-office administrative tasks (data entry, scheduling)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/bpo" // Keep generic or specify /services/bpo-education
                    className="text-green-600 hover:text-green-800 flex items-center font-medium"
                  >
                    Learn about our BPO Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Solution 2: IT Solutions for Education */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mb-4">
                    <Server className="w-6 h-6 text-white" /> {/* Changed Icon */}
                  </div>
                  {/* Updated Title and Description */}
                  <CardTitle>IT Solutions for Education</CardTitle>
                  <CardDescription>Secure and reliable technology infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                   {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Learning Management System (LMS) implementation and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Student Information System (SIS) integration and management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Campus network security and Wi-Fi solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Cloud services migration and management for educational tools</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/it-solutions" // Keep generic or specify /services/it-solutions-education
                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                  >
                    Learn about our IT Solutions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Solution 3: Digital Marketing for Education */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mb-4">
                    <Megaphone className="w-6 h-6 text-white" /> {/* Changed Icon */}
                  </div>
                  {/* Updated Title and Description */}
                  <CardTitle>Digital Outreach for Education</CardTitle>
                  <CardDescription>Student recruitment and institutional branding</CardDescription>
                </CardHeader>
                <CardContent>
                   {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Targeted digital advertising for student recruitment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Website design and content strategy for schools/universities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Social media management and community engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Alumni relations and fundraising campaign support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/digital-marketing" // Keep generic or specify /services/digital-marketing-education
                    className="text-purple-600 hover:text-purple-800 flex items-center font-medium"
                  >
                    Learn about our Digital Marketing Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Solution 4: Telecommunications for Education */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" /> {/* Changed Icon */}
                  </div>
                   {/* Updated Title and Description */}
                  <CardTitle>Communications for Education</CardTitle>
                  <CardDescription>Reliable connectivity for learning and administration</CardDescription>
                </CardHeader>
                <CardContent>
                   {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Campus-wide VoIP and unified communication systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Infrastructure for distance learning and video conferencing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Emergency notification and mass communication systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Secure network solutions for administrative offices</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/telecommunication" // Keep generic or specify /services/telecom-education
                    className="text-amber-600 hover:text-amber-800 flex items-center font-medium"
                  >
                    Learn about our Telecommunication Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section - Updated for Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Data Privacy & Security
            </span>
             {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ensuring Compliance and Security
            </h2>
            <p className="text-gray-600">
              Our solutions prioritize student data privacy and meet rigorous compliance standards essential for the education sector.
            </p>
          </div>

          {/* Updated Compliance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: FERPA Compliance */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <FileLock className="w-8 h-8 text-green-600" /> {/* Changed Icon */}
              </div>
               {/* Updated Title and Description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">FERPA Compliance Ready</h3>
              <p className="text-gray-600 text-sm">
                Systems and processes designed to support compliance with the Family Educational Rights and Privacy Act.
              </p>
            </div>

             {/* Card 2: Secure Data Handling */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
               {/* Updated Title and Description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Data Handling</h3>
              <p className="text-gray-600 text-sm">
                Advanced encryption and access controls to protect sensitive student and institutional data at rest and in transit.
              </p>
            </div>

            {/* Card 3: Secure Payment Processing (if applicable) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
             
              </div>
               {/* Updated Title and Description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Payment Processing</h3>
              <p className="text-gray-600 text-sm">
                PCI-DSS compliant solutions for secure handling of tuition fees, donations, and other payments.
              </p>
            </div>

            {/* Card 4: Audit & Reporting */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Using original icon, suitable for audits */}
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Audit Trails & Reporting</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive logging and reporting tools to support compliance audits and ensure accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated for Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Client Success
            </span>
             {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted by Educational Institutions
            </h2>
            <p className="text-gray-600">
              See how educational institutions partner with Markov International to enhance their operations and learning environments.
            </p>
          </div>

          {/* Updated Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Testimonial 1 */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-bold">LU</span> {/* Example Initials */}
                </div>
                <div>
                   {/* Example Client */}
                  <h4 className="text-lg font-semibold">Lakeside University</h4>
                  <p className="text-sm text-gray-500">Higher Education Institution</p>
                </div>
              </div>
               {/* Example Quote */}
              <p className="text-gray-700 italic mb-4">
                "Markov International's IT solutions modernized our campus network and LMS integration. Their BPO team provides excellent student support, freeing up our staff to focus on academics. Security and FERPA compliance were top priorities, and they delivered."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">PS</span> {/* Example Initials */}
                </div>
                <div>
                   {/* Example Client */}
                  <h4 className="text-lg font-semibold">Pinecrest School District</h4>
                  <p className="text-sm text-gray-500">K-12 School System</p>
                </div>
              </div>
               {/* Example Quote */}
              <p className="text-gray-700 italic mb-4">
                "Partnering with Markov for telecommunications and IT support has improved connectivity across our schools. Their understanding of K-12 needs and budget constraints was crucial. The secure communication platform has enhanced parent engagement."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Updated for Education */}
      <section className="py-20 text-emerald-900 bg-[#D1FAF5] relative overflow-hidden"> {/* Matched Hero background */}

        {/* Grid pattern remains */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid3" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#065f46" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid3)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
             {/* Updated Badge Text */}
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-emerald-700/80 text-white border border-emerald-600">
              Ready to Enhance Your Learning Environment?
            </span>
             {/* Updated Headline and Description */}
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-emerald-950"> {/* Darker Text */}
              Empower Your Institution Today
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-emerald-800 text-lg leading-relaxed"> {/* Adjusted text color */}
              Contact us today to discover how our tailored solutions can help your educational institution enhance security, streamline operations, support compliance, and deliver exceptional learning experiences.
            </p>
            {/* Updated Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-8 py-3 text-lg font-medium text-white rounded-md bg-emerald-700 hover:bg-emerald-800 shadow-lg hover:shadow-xl transition-all">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg font-medium bg-transparent border-emerald-800 text-emerald-800 hover:bg-emerald-700/10 hover:text-emerald-900 transition-all"
              >
                View Education Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}