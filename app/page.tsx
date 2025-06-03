"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, useInView } from "framer-motion"
import { Play, ArrowRight, Check, UserPlus, Laptop, TrendingUp, ShoppingCart, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { taglineGenerator } from "./utils/markov" // Removed as tagline was unused
import Counter from "@/components/ui/counter"


export default function Home() {
  const router = useRouter()
  // const [tagline, setTagline] = useState("") // Removed as tagline was unused

  // Refs for scroll animations
  const servicesRef = useRef(null)
  // const servicesRef2 = useRef(null) // Removed as unused
  const inView = useInView(servicesRef, { once: true, margin: "0px 0px -20% 0px" })
  // const inView2 = useInView(servicesRef2, { once: true, margin: "0px 0px -20% 0px" }) // Removed as unused

  // Navigation functions
  const navigateToContact = (serviceType: string): void => {
    router.push(`/contact?type=${serviceType}`)
  }

  useEffect(() => {
    // Add keyframes for floating animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // useEffect(() => { // Removed as tagline was unused
  //   // Generate new tagline on mount
  //   setTagline(taglineGenerator.generate(6, 8))
  // }, [])

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
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-white md:py-32 bg-gradient-to-r from-[#1A1A1A] to-[#2DD8D4]">
        {/* Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Elements */}
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#2DD8D4]/30 to-[#2DD8D4]/10 -top-10 -left-10 blur-3xl"
          style={{ animation: "float 15s infinite ease-in-out" }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#2DD8D4]/30 to-[#2DD8D4]/10 bottom-20 right-10 blur-3xl"
          style={{ animation: "float 20s infinite ease-in-out reverse" }}
        ></div>

        <div className="container relative z-10 px-4 mx-auto max-w-7xl"> {/* Adjusted max-w-10xl to max-w-7xl for a more standard container width, can be reverted if 10xl is a custom defined size */}
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            <motion.h1
              className="mb-2 text-3xl font-bold leading-snug tracking-tight text-white md:text-4xl lg:text-6xl"
              variants={fadeInUp}
            >
              Driving your <span className="text-gradient font-bold">Growth</span> with
            </motion.h1>

            <motion.h2
              className="mb-6 text-3xl font-semibold text-white md:text-4xl lg:text-6xl"
              variants={fadeInUp}
            >
              Seamless Solutions
            </motion.h2>

            <motion.p 
              className="mb-8 text-lg font-semibold text-white/90 md:text-xl"
              variants={fadeInUp}
            >
              across E-commerce, Marketing, Website, Design, Telecommunication and BPO.
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-4" variants={fadeInUp}>
              <div className="relative w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="peer w-full px-5 py-3 text-base md:text-lg text-gray-900 placeholder-transparent bg-white backdrop-blur-xl rounded-2xl shadow-lg outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-[#215E5C] focus:border-[#215E5C] transition-all duration-300"
                />
                <label
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-base text-gray-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-[#215E5C] bg-transparent px-1"
                >
                  Enter your email
                </label>
              </div>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full shadow-lg text-white/80 bg-transparent backdrop-blur-sm border-white/20 hover:bg-white/10 transition-transform duration-300"
                >
                  <Play className="w-4 h-4" /> Get my free Pro
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="max-w-4xl p-6 mx-auto mt-16 bg-white/10 backdrop-blur-md rounded-2xl"
              variants={fadeInUp}
            >
              <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <Counter to={500} suffix="+" className="text-3xl font-bold text-white" />
                  <p className="text-white/70">Happy Clients</p>
                </div>
                <div className="text-center">
                  <Counter to={98} suffix="%" className="text-3xl font-bold text-white" />
                  <p className="text-white/70">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <Counter to={1500} suffix="+" className="text-3xl font-bold text-white" />
                  <p className="text-white/70">Projects Done</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full">
              Our Purpose
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Company Mission</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              At Markov International, we're committed to empowering businesses with innovative solutions
              that drive growth and enhance operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-gray-50 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-teal-700">Our Vision</h3>
                <p className="mb-6 text-gray-600">
                  To be the global leader in providing cutting-edge business solutions that transform industries
                  and create lasting value for our clients, employees, and society.
                </p>

                <h3 className="mb-4 text-xl font-bold text-orange-600">Our Mission</h3>
                <p className="mb-6 text-gray-600">
                  We strive to deliver exceptional business services and technological innovations that help
                  our clients achieve their goals, optimize operations, and thrive in a rapidly changing digital landscape.
                </p>

                <h3 className="mb-4 text-xl font-bold text-indigo-600">Quality Policy</h3>
                <p className="text-gray-600">
                  Excellence in every interaction, reliability in every solution, and continuous improvement
                  in everything we do – that's our commitment to quality at Markov International.
                </p>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-teal-700 rounded-3xl opacity-30 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src="/company_mission.jpg"
                    alt="Digital Business Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="p-3 mb-4 text-white bg-orange-500 rounded-lg w-max">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Outcome-focused</h3>
                  <p className="text-sm text-gray-600">
                    We prioritize measurable results and tangible business outcomes for our clients.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="p-3 mb-4 text-white bg-teal-600 rounded-lg w-max">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Boost conversion rate</h3>
                  <p className="text-sm text-gray-600">
                    Our strategies help increase engagement and drive higher conversion rates.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full">
              What We Offer
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Core Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide comprehensive solutions tailored to your business needs, helping you thrive in today's competitive landscape.
            </p>
          </div>

          {/* Service Grid */}
          <div ref={servicesRef} className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
            {/* BPO Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-xl group hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-[#E6F7F6] rounded-2xl group-hover:bg-[#2DD8D4] group-hover:rotate-6">
                  <UserPlus className="w-8 h-8 text-teal-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold">BPO Services</h3>
                <p className="mb-6 text-gray-600">
                  Streamline your operations with our comprehensive business process outsourcing solutions.
                </p>
                <div
                  className="flex items-center text-teal-600 transition-colors hover:text-teal-700 cursor-pointer"
                  onClick={() => navigateToContact("bpo")}
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

            {/* IT Solutions Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-xl group hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-[#E5ECF9] rounded-2xl group-hover:bg-[#4285F4] group-hover:rotate-6">
                  <Laptop className="w-8 h-8 text-blue-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold">IT Solutions</h3>
                <p className="mb-6 text-gray-600">
                  Leverage cutting-edge technology to drive innovation and efficiency in your business.
                </p>
                <div
                  className="flex items-center text-blue-600 transition-colors hover:text-blue-700 cursor-pointer"
                  onClick={() => navigateToContact("it-solutions")}
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

            {/* Telecommunication Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-xl group hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-[#FEF0E6] rounded-2xl group-hover:bg-[#FF7A22] group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600 transition-colors group-hover:text-white"
                  >
                    <path d="M8 9h.01"></path>
                    <path d="M16 9h.01"></path>
                    <path d="M12 2a5 5 0 0 1 5 5v3h-3v-3a2 2 0 0 0-3.679-1.084 4 4 0 0 0-6.199 2.984l-.1.1A4 4 0 0 0 10 15h4a4 4 0 0 0 6.206-3.32l-.006-.01A3.99 3.99 0 0 0 22 8a2 2 0 1 0-4 0v3h-3V7a5 5 0 0 1 5-5"></path>
                    <path d="M12 21v-3"></path>
                    <path d="M12 18a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold">Telecommunication</h3>
                <p className="mb-6 text-gray-600">
                  Connect and communicate effectively with advanced telecommunication services.
                </p>
                <div
                  className="flex items-center text-orange-600 transition-colors hover:text-orange-700 cursor-pointer"
                  onClick={() => navigateToContact("telecommunication")}
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

            {/* Digital Marketing Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-xl group hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-[#F1E8FE] rounded-2xl group-hover:bg-[#9C51E0] group-hover:rotate-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Digital Marketing</h3>
                <p className="mb-6 text-gray-600">
                  Boost your online presence and reach your target audience with data-driven marketing strategies.
                </p>
                <div
                  className="flex items-center text-purple-600 transition-colors hover:text-purple-700 cursor-pointer"
                  onClick={() => navigateToContact("digital-marketing")}
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

            {/* E-Commerce Management Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-xl group hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-[#E6F7EF] rounded-2xl group-hover:bg-[#10B981] group-hover:rotate-6">
                  <ShoppingCart className="w-8 h-8 text-emerald-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold">E-Commerce Management</h3>
                <p className="mb-6 text-gray-600">
                  Optimize your online store and maximize sales with our comprehensive e-commerce solutions.
                </p>
                <div
                  className="flex items-center text-emerald-600 transition-colors hover:text-emerald-700 cursor-pointer"
                  onClick={() => navigateToContact("ecommerce")}
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

            {/* Call Center Solutions Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-xl group hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-[#E6EDFA] rounded-2xl group-hover:bg-[#3B82F6] group-hover:rotate-6">
                  <Headphones className="w-8 h-8 text-blue-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Call Center Solutions</h3>
                <p className="mb-6 text-gray-600">
                  Enhance customer experience with professional and efficient call center services.
                </p>
                <div
                  className="flex items-center text-blue-600 transition-colors hover:text-blue-700 cursor-pointer"
                  onClick={() => navigateToContact("call-center")}
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full shadow-lg bg-gradient-to-r from-[#205655] to-[#2DD8D4] hover:from-[#2DD8D4] hover:to-[#205655] text-white"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full">
              Industry Expertise
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Tailored Solutions</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We deliver customized solutions designed to address the unique challenges and requirements of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* BPO Tailored Solutions Card */}
            <motion.div
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 transition-all duration-300 bg-gray-50 rounded-xl shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-xl bg-gradient-to-br from-teal-500 to-teal-700">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Tailored solutions for your business</h3>
              <h4 className="mb-4 text-lg font-semibold text-teal-600">BPO Services</h4>
              <p className="text-gray-600">
                Custom-designed business process outsourcing solutions that adapt to your company's specific workflows, culture, and objectives.
              </p>
            </motion.div>

            {/* Digital Tailored Solutions Card */}
            <motion.div
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 transition-all duration-300 bg-gray-50 rounded-xl shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-xl bg-gradient-to-br from-purple-500 to-purple-700">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Result-driven strategies</h3>
              <h4 className="mb-4 text-lg font-semibold text-purple-600">Digital Marketing</h4>
              <p className="text-gray-600">
                Data-informed marketing approaches tailored to your target audience, leveraging the right channels to maximize your ROI and brand impact.
              </p>
            </motion.div>

            {/* Telecom Tailored Solutions Card */}
            <motion.div
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 transition-all duration-300 bg-gray-50 rounded-xl shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-xl bg-gradient-to-br from-orange-500 to-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 9h.01"></path>
                  <path d="M16 9h.01"></path>
                  <path d="M12 2a5 5 0 0 1 5 5v3h-3v-3a2 2 0 0 0-3.679-1.084 4 4 0 0 0-6.199 2.984l-.1.1A4 4 0 0 0 10 15h4a4 4 0 0 0 6.206-3.32l-.006-.01A3.99 3.99 0 0 0 22 8a2 2 0 1 0-4 0v3h-3V7a5 5 0 0 1 5-5"></path>
                  <path d="M12 21v-3"></path>
                  <path d="M12 18a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Enterprise connectivity</h3>
              <h4 className="mb-4 text-lg font-semibold text-orange-600">Telecommunication</h4>
              <p className="text-gray-600">
                Reliable and secure telecommunication solutions designed to support your operations with scalable infrastructure that grows with your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-700 uppercase bg-purple-100 rounded-full">
                Our Expertise
              </span>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Digital Marketing Skills</h2>
              <p className="mb-10 text-gray-600">
                Our team of marketing experts combines creativity with data-driven strategies to deliver exceptional results for your business across all digital channels.
              </p>

              <div className="space-y-6">
                {/* Designing Skill */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Designing</h3>
                    <span className="text-sm font-medium text-purple-600">92%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700" style={{ width: '92%' }}></div>
                  </div>
                </div>

                {/* Customer Experience Skill */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Customer Experience</h3>
                    <span className="text-sm font-medium text-teal-600">89%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-700" style={{ width: '89%' }}></div>
                  </div>
                </div>

                {/* Web Development Skill */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Web Development</h3>
                    <span className="text-sm font-medium text-orange-600">95%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-700" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full">
                <div className="relative z-10 h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-2xl">
                  <Image
                    src="/digital_marketing.jpg"
                    alt="Digital Marketing Skills"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-transparent"></div>
                </div>
                <div className="absolute z-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full -bottom-4 -right-4 blur-lg opacity-80"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 text-white bg-gradient-to-r from-[#1A1A1A] to-[#2A4747]">
        {/* Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Success Stories
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Case Studies</h2>
            <p className="max-w-2xl mx-auto text-white/80">
              Explore how we've helped businesses across industries overcome challenges and achieve remarkable results.
            </p>
          </div>

          <motion.div
            className="mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* BPO Case Study Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="overflow-hidden group"
              >
                <div className="relative overflow-hidden bg-teal-800/50 backdrop-blur-sm rounded-2xl h-full">
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <Image
                      src="/medical1.jpeg"
                      alt="BPO Case Study"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute px-3 py-1 font-semibold text-white rounded bg-orange-500 top-4 left-4">
                      BPO
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">Healthcare Provider Streamlines Patient Support</h3>
                    <p className="mb-6 text-white/80">
                      How we helped a healthcare organization improve response times by 45% and reduce operational costs by 30%.
                    </p>
                    <Link
                      href="/contact"
                      className="flex items-center text-teal-300 transition-colors hover:text-teal-200"
                    >
                      View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* E-commerce Case Study Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="overflow-hidden group"
              >
                <div className="relative overflow-hidden bg-teal-800/50 backdrop-blur-sm rounded-2xl h-full">
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <Image
                      src="/fashion.jpg"
                      alt="E-commerce Case Study"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute px-3 py-1 font-semibold text-white rounded bg-orange-500 top-4 left-4">
                      E-COMMERCE
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">Fashion Retailer Boosts Online Sales</h3>
                    <p className="mb-6 text-white/80">
                      How our e-commerce management solutions helped increase conversion rates by 85% and expand market reach.
                    </p>
                    <Link
                      href="/contact"
                      className="flex items-center text-teal-300 transition-colors hover:text-teal-200"
                    >
                      View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Marketing Case Study Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="overflow-hidden group"
              >
                <div className="relative overflow-hidden bg-teal-800/50 backdrop-blur-sm rounded-2xl h-full">
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <Image
                      src="/tech.jpg"
                      alt="Marketing Case Study"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute px-3 py-1 font-semibold text-white rounded bg-orange-500 top-4 left-4">
                      MARKETING
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">Tech Startup Increases Leads by 200%</h3>
                    <p className="mb-6 text-white/80">
                      How our digital marketing strategies transformed an emerging tech company's online presence and lead generation.
                    </p>
                    <Link
                      href="/contact"
                      className="flex items-center text-teal-300 transition-colors hover:text-teal-200"
                    >
                      View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full shadow-lg bg-white text-[#205655] hover:bg-white/90"
              >
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Increase Traffic CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="overflow-hidden shadow-xl rounded-2xl bg-gradient-to-r from-[#1A1A1A] to-[#2DD8D4]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
                  Increase More Traffic to Your Business
                </h2>
                <p className="mb-8 text-lg text-white/80">
                  Boost your online presence, attract more customers, and grow your business with our comprehensive marketing and digital solutions.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full shadow-lg bg-gradient-to-r from-[#205655] to-[#2DD8D4] hover:from-[#2DD8D4] hover:to-[#205655] text-white"
                  >
                    CONTACT US
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/bussiness.jpg"
                  alt="Increase Business Traffic"
                  fill
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full">
                Join Our Team
              </span>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Careers</h2>
              <p className="mb-10 text-gray-600">
                We're looking for passionate professionals who want to make a difference. Join our team and help shape the future of business services.
              </p>

              <div className="space-y-6">
                {/* IT Specialist Job Card */}
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-xl font-bold">IT Specialist</h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-teal-600" />
                      <span>5+ years of experience in IT solutions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-teal-600" />
                      <span>Cloud infrastructure expertise</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-teal-600" />
                      <span>Strong problem-solving skills</span>
                    </li>
                  </ul>
                </div>

                {/* Telecommunication Engineer Job Card */}
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Telecommunication Engineer</h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-teal-600" />
                      <span>Network design and implementation experience</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-teal-600" />
                      <span>VoIP and unified communications knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-teal-600" />
                      <span>Relevant certifications</span>
                    </li>
                  </ul>
                </div>

                <Link href="/contact?type=careers">
                  <Button
                    size="lg"
                    className="mt-8 rounded-full shadow-lg bg-gradient-to-r from-[#205655] to-[#2DD8D4] hover:from-[#2DD8D4] hover:to-[#205655] text-white"
                  >
                    View Jobs
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 space-y-6">
                {/* Call Center Rep Job Card */}
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Call Center Representative</h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-amber-500" />
                      <span>Excellent communication skills</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-amber-500" />
                      <span>Customer service orientation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-amber-500" />
                      <span>Ability to work in a fast-paced environment</span>
                    </li>
                  </ul>
                </div>

                {/* Business Analyst Job Card */}
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Business Analyst</h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-amber-500" />
                      <span>Strong analytical and problem-solving skills</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-amber-500" />
                      <span>Experience with data visualization tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-amber-500" />
                      <span>Excellent communication abilities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl opacity-30 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src="/software_carrer.jpg"
                    alt="Join Our Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full">
              Client Feedback
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Testimonials</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Hear from our satisfied clients about their experience working with Markov International.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* First Testimonial */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 mr-4 overflow-hidden rounded-full">
                  <Image
                    src="/testinomial_2.png"
                    alt="John Doe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-sm text-gray-600">CEO, Tech Innovations</p>
                </div>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-700">
                "Markov International transformed our customer service operations. Their BPO solutions improved our efficiency by 40% and significantly enhanced customer satisfaction. We've been working with them for three years now and couldn't be happier."
              </p>
            </motion.div>

            {/* Second Testimonial */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 mr-4 overflow-hidden rounded-full">
                  <Image
                    src="/testinomial.png"
                    alt="Jane Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Jane Smith</h3>
                  <p className="text-sm text-gray-600">Marketing Director, Fashion Retail</p>
                </div>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-700">
                "The digital marketing team at Markov is exceptional. They revamped our online presence and implemented strategies that doubled our conversion rates within just six months. Their data-driven approach and creative solutions set them apart."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}