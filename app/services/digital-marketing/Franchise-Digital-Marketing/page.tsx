"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FranchiseDigitalMarketingPage() {
  const router = useRouter();
  
  // Function to navigate to contact page with specific parameters
  const navigateToContact = (serviceType: string = 'franchise-strategy') => {
    router.push(`/contact?type=digital-marketing&service=${serviceType}`);
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
    <div className="bg-white">
      {/* Hero Section with Free Proposal */}
      <section className="relative bg-white overflow-hidden py-16">
        {/* Background Pattern */}
       
        {/* Main Content */}
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Title */}
          <motion.h1 
            className="text-4xl font-bold text-gray-800 mb-3"
            variants={fadeInUp}
          >
            Franchise Digital Marketing
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg text-blue-700 mb-8"
            variants={fadeInUp}
          >
            Unify Your Brand Presence and Maximize Revenue at Every Location
          </motion.p>

          {/* Input and Button */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center bg-[#F8FBF6] p-2 rounded-lg shadow-md max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <div className="relative w-full mb-2 md:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter Website Address"
                className="pl-10 pr-4 py-2 bg-[#F8FBF6] text-sm border border-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 w-full"
              />
            </div>

            <Button
              className="w-full md:w-auto md:ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition"
              onClick={() => navigateToContact('franchise-strategy')}
            >
              GET MY FREE STRATEGY
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Banner */}
      <motion.div 
        className="bg-blue-700 text-white text-center py-3 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold tracking-wide">STREAMLINE YOUR FRANCHISE MARKETING EFFORTS</h2>
      </motion.div>

      {/* Features Section */}
      <section className="py-16 bg-[#F8FBF6]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Franchise Digital Marketing Benefits
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Enhanced Reach */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Reach</h3>
              <p className="text-gray-600">
                Franchises span multiple locations – each with its unique visibility challenges. Our solutions give you creative strategies to reach new customers in each area through targeted marketing research.
              </p>
            </motion.div>

            {/* Increased Customer Satisfaction */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Increased Customer Satisfaction</h3>
              <p className="text-gray-600">
                Franchise lead generation channels like social media, email and digital advertising allow brands to engage in two-way communication, gaining insights into customer preferences and behavior.
              </p>
            </motion.div>

            {/* Cost-Effective Marketing */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Cost-Effective Marketing</h3>
              <p className="text-gray-600">
                Unlike traditional marketing methods, franchise digital marketing services are significantly more affordable, allowing for targeted advertising to specific demographics without wasting resources.
              </p>
            </motion.div>

            {/* Location-Based Franchise Advertising */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Location-Based Franchise Advertising</h3>
              </div>
              <p className="text-gray-600">
                Leveraging geolocation technologies and local data, franchise advertising targets potential customers within a certain radius of your brand. This allows you to deliver personalized marketing messages based on demographics, consumer behavior and even weather patterns. The result? Increased foot traffic and sales.
              </p>
            </motion.div>

            {/* Remarkable Flexibility */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Remarkable Flexibility</h3>
              </div>
              <p className="text-gray-600">
                The digital landscape is ever-changing, and so are consumer behaviors. Digital marketing is adaptable, allowing franchises to adjust their strategies promptly in response to industry changes, consumer trends and business needs. This dynamic approach ensures your brand remains relevant and competitive in your industry.
              </p>
            </motion.div>

            {/* Robust Analytics */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Robust Analytics</h3>
              </div>
              <p className="text-gray-600">
                Track and measure the effectiveness of your multi-location marketing efforts with advanced analytics tools like Google Analytics. With critical data like website traffic, conversion rates and customer behavior at your fingertips, you can make informed decisions and allocate resources where necessary.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Amazing Client Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Amazing Client Results</h2>
            <p className="text-lg text-blue-600 mb-8">Scale Your Digital Marketing Efforts With Ease</p>
          </motion.div>
          
          <motion.div 
            className="text-center mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700">
              Embrace multi-location marketing and transform your franchise's marketing strategy from generic to genuinely local. See what Thrive's franchise digital marketing agency has done for countless clients in the U.S. and beyond.
            </p>
          </motion.div>
          
          {/* Case Studies Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Case Study 1 */}
            <motion.div 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="/therapy.jpg" 
                  alt="ABA Therapy Center" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute text-white bottom-0 left-0 right-0 bg-blue-700 text-center py-3">
                  <h3 className="text-sm text-white font-bold uppercase">MULTI-LOCATION</h3>
                  <p className="text-sm font-semibold">ABA THERAPY CENTER</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-around mb-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">+627</p>
                    <p className="text-xs text-gray-600">New Leads</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">+1,300%</p>
                    <p className="text-xs text-gray-600">Form Fill</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  The client teamed up to enhance their lead acquisition strategy across multiple centers in three states. Through social media paid advertising, video production and franchise PPC, the client increased web visitors by 12,551 and gained over 20 times more leads in just six months.
                </p>
              </div>
            </motion.div>
            
            {/* Case Study 2 */}
            <motion.div 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="/CareClinic.avif" 
                  alt="Private Wound Care Clinic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-700 text-center py-3">
                  <h3 className="text-sm text-white font-bold uppercase">MULTI-LOCATION PRIVATE WOUND</h3>
                  <p className="text-sm text-white font-semibold">CARE CLINIC</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-around mb-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">+343%</p>
                    <p className="text-xs text-gray-600">Conversion</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">+236%</p>
                    <p className="text-xs text-gray-600">New Appointments</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  The client approached Thrive to run strategic pay-per-click (PPC) advertising campaigns across their five locations. By November 2019, we had successfully increased conversions by up to 343% for all accounts and services while maintaining a similar daily spend.
                </p>
              </div>
            </motion.div>
            
            {/* Case Study 3 */}
            <motion.div 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="/reconstruction.png" 
                  alt="Restoration and Reconstruction Firm" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-700 text-center py-3">
                  <h3 className="text-sm  text-white font-bold uppercase">MULTI-LOCATION RESTORATION</h3>
                  <p className="text-sm text-white font-semibold">AND RECONSTRUCTION FIRM</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-around mb-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">+20M</p>
                    <p className="text-xs text-gray-600">Impressions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">+93%</p>
                    <p className="text-xs text-gray-600">Organic Search Traffic Year Over Year</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  The goal was to enhance brand recognition, leads and local rankings for the client's 22 locations. With franchise search engine optimization (SEO) and PPC, we were able to drive total traffic of 60,183 in October 2020, hit top 5 keyword rankings in December 2020 and 681 inquiries in February 2021.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-8">
              Our systematic approach ensures profitable results for your online marketing efforts. Leverage Thrive's franchise lead generation and internet marketing services to boost customer acquisition and retention for your enterprise.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
              onClick={() => navigateToContact('franchise-partners')}
            >
              JOIN OUR SUCCESSFUL FRANCHISE PARTNERS
            </Button>
          </div>
        </div>
      </section>
      
      {/* What's Included in Your Franchise Marketing Strategy Section */}
      <section className="py-16 bg-[#F8FBF6]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              What's Included in Your Franchise Marketing Strategy?
            </h2>
            <p className="text-lg text-gray-600">Fast, effective and localized digital marketing created just for franchise businesses</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <p className="text-gray-700 mb-4">
              Thrive's franchise marketing agency offers a comprehensive plan that outlines a clear path to your goal. This includes an executive summary and a roadmap for your team to execute.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Thrive Score</h3>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Franchise Marketing Solutions and Plan</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-sm text-gray-700">Comprehensive marketing roadmap</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-sm text-gray-700">Customized strategy for each location</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-sm text-gray-700">Brand consistency guidelines</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Workload and Investment</h3>
                <div className="flex justify-center">
                  <div className="w-24 h-24 relative">
                    <div className="w-full h-full rounded-full border-8 border-blue-200"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-blue-600" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800">Section 1: Thrive Score (Results and Recommendations)</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-blue-700">Multi-Location Audit</span>
                  <p className="text-gray-600 text-sm">Complete location-by-location analysis of your franchise digital presence</p>
                </div>
              </div>
              
              <div className="ml-6 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Brand and Business:</h4>
                  <p className="text-gray-700">Evaluate your online presence, competitiveness and customer relationship management.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Content Marketing:</h4>
                  <p className="text-gray-700">Assess your strengths in copywriting, social media content, outreach email campaigns and SEO tactics.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">External Team or Partners:</h4>
                  <p className="text-gray-700">Gauge your ability to generate marketing ideas and execute with sustainable processes.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Technology and Software Integration:</h4>
                  <p className="text-gray-700">Identify challenges in tracking campaign performance and automating franchise marketing processes.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Lead Sources:</h4>
                  <p className="text-gray-700">Identify primary traffic sources and evaluate the availability of crucial marketing channels.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Success Measurement:</h4>
                  <p className="text-gray-700">Evaluate campaign performance using best metrics, customer lifetime value and website traffic.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg">•</span>
                <p className="text-gray-700">An assessment of your online marketing performance, offering benchmarks data to guide your industry position, growth phase and geographic location.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800">Section 2: Franchise Marketing Solutions and Plan</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg">•</span>
                <p className="text-gray-700">Proposed franchise marketing solutions</p>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg">•</span>
                <p className="text-gray-700">Action plan for implementing the solutions</p>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg">•</span>
                <p className="text-gray-700">Suggested phases are designed for implementation</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800">Section 3: Workload and Investment</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg">•</span>
                <p className="text-gray-700">Comprehensive worksheet outlining the recommended marketing strategy and the impact of each channel on goal achievement</p>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg">•</span>
                <p className="text-gray-700">Concise strategic summary</p>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg">•</span>
                <p className="text-gray-700">Investment required to execute the plan</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-[#205A59] hover:bg-[#153735] text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                navigateToContact('franchise-consultation');
              }}
            >
              SCHEDULE YOUR FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
      
      {/* Thrive's Franchise Digital Marketing Services */}
      <section className="py-16 bg-[#F8FBF6]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Thrive's Franchise Digital Marketing Services</h2>
          <p className="text-lg text-blue-600 mb-8">Unify Your Customer Journeys Across the Board</p>
          
          <p className="text-gray-700 mb-8">
            Are you tired of wasting your hard-earned profits on ineffective marketing strategies that don't drive franchise growth? Thrive's franchise digital marketing company gets your enterprise in front of the right people at the right time, using the right strategy – without breaking the bank!
          </p>
          
          <p className="text-gray-700 mb-8">
            Our franchise marketing services include:
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Franchise Marketing Services
          </h2>
          
          <div className="space-y-10">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Multi-Location SEO Strategies</h3>
                <p className="text-gray-600">We develop customized SEO strategies for each franchise location, optimizing for local search terms and ensuring consistent brand messaging across all locations while accommodating regional differences.</p>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Local Social Media Management</h3>
                <p className="text-gray-600">Our team creates and manages social media profiles for each franchise location, developing content that appeals to local audiences while maintaining brand consistency.</p>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Franchise Email Marketing</h3>
                <p className="text-gray-600">We design email campaigns that can be customized for each location while maintaining your brand identity, promoting local offers and events to drive foot traffic to specific franchise locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              Client Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Franchise Clients Say
            </h2>
            <p className="text-gray-600">
              Hear from franchise businesses that have transformed their digital presence and growth through our specialized marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">RF</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">RapidFit Gym</h4>
                  <p className="text-sm text-gray-500">National Fitness Franchise</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Since implementing the multi-location marketing strategy developed by MarkovWeb, we've seen a 43% increase in lead generation across all our franchise locations. Their ability to balance brand consistency with local relevance has been game-changing for our business."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">TC</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">TastyCrust Pizzeria</h4>
                  <p className="text-sm text-gray-500">Restaurant Franchise Chain</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "MarkovWeb's location-based digital marketing strategies increased our online orders by 67% within just three months. Their team created customized campaigns for each of our 15 locations while maintaining our brand identity. The ROI has been exceptional."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get answers to common questions about franchise digital marketing strategies and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#205A59]">
                    What makes franchise digital marketing different from standard digital marketing?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Franchise digital marketing requires balancing brand consistency across all locations while customizing strategies to address local market needs. It involves coordinating campaigns across multiple locations, ensuring brand guidelines are maintained, while allowing for location-specific promotions and messaging that resonates with local audiences.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#205A59]">
                    How do you maintain brand consistency across multiple franchise locations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We create comprehensive brand guidelines and templates that all franchise locations can use. Our centralized content management systems ensure that approved assets, messaging, and campaigns are accessible to all locations. We implement approval workflows for location-specific content to ensure it adheres to brand standards before publication.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#205A59]">
                    How do you measure success for franchise marketing campaigns?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We track both network-wide and location-specific KPIs including website traffic, conversion rates, lead generation, cost per acquisition, and ROI. Our analytics dashboard provides both corporate and individual franchise owners with insights into performance. We conduct regular comparative analysis across locations to identify top performers and opportunities for improvement.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#205A59]">
                    Can you support both corporate marketing and individual franchise owner needs?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, our franchise marketing services are designed to support both corporate marketing teams and individual franchise owners. We develop overarching strategies at the corporate level while providing customizable campaigns and support for individual locations. Our platform allows for corporate oversight while giving franchise owners the flexibility to implement location-specific initiatives.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#205A59]">
                    How do you handle local SEO for multiple franchise locations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We optimize each location's online presence with location-specific keywords, Google My Business listings, local citations, and locally relevant content. Our strategy ensures that each franchise location appears in local search results while maintaining brand consistency. We also implement a review management system to build location-specific social proof and improve local SEO rankings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Grow Your Franchise Network?</h2>
          <p className="text-lg text-gray-600 mb-8">Let our experts develop a customized digital marketing strategy for your franchise business.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#205A59] hover:bg-[#153735] text-white font-semibold px-6 py-3 rounded-md transition"
              onClick={() => navigateToContact('franchise-proposal')}
            >
              GET MY FREE PROPOSAL
            </Button>
            
            <Button 
              className="bg-[#1E3A8A] hover:bg-[#152A61] text-white font-semibold px-6 py-3 rounded-md transition"
              onClick={() => navigateToContact('franchise-consultation')}
            >
              REQUEST A CONSULTATION
            </Button>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-[#153735] hover:text-white hover:border-[#153735] font-semibold px-6 py-3 rounded-md transition"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToContact('franchise-contact');
                }}
              >
                CONTACT OUR TEAM
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional features and content */}
      
      {/* AI Strategy Simulator Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden relative">
        {/* Neural Network Background Animation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-white">Franchise AI Strategy Simulator</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 mb-6">Visualize Multi-Location Marketing Success</p>
            
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-white/90">
                MarkovWeb's exclusive Franchise AI Strategy Simulator leverages advanced machine learning algorithms to predict and visualize marketing outcomes across all your locations. Our predictive models analyze location-specific data to forecast performance for individual franchisees while maintaining brand consistency.
              </p>
            </div>
          </motion.div>

          {/* AI Simulator Visual */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:w-1/2">
              <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 shadow-lg relative">
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full">
                  Franchise Exclusive
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Location-Based Intelligence</h3>
                <p className="text-white/80 mb-4">
                  Our simulator runs thousands of location-specific marketing scenarios, providing clear visibility into how different strategies will perform across all franchise locations, considering local demographics and competition.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-blue-700/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">96%</div>
                    <div className="text-xs text-blue-200">Location Accuracy</div>
                  </div>
                  <div className="bg-blue-700/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">3.5x</div>
                    <div className="text-xs text-blue-200">Location ROI</div>
                  </div>
                  <div className="bg-blue-700/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">45%</div>
                    <div className="text-xs text-blue-200">Budget Efficiency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="mb-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                  <div className="text-sm text-white/90">Multi-Location Dashboard</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">Local SEO Performance</span>
                      <span className="text-white font-medium text-sm">+156%</span>
                    </div>
                    <div className="w-full bg-blue-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">Franchise Location Conversions</span>
                      <span className="text-white font-medium text-sm">+72%</span>
                    </div>
                    <div className="w-full bg-blue-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">Local Customer Acquisition</span>
                      <span className="text-white font-medium text-sm">-34%</span>
                    </div>
                    <div className="w-full bg-blue-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full" style={{ width: '34%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-blue-500/20">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Location Balancing</h3>
              <p className="text-white/70 text-sm">Balance marketing budget allocation across all franchise locations to optimize system-wide performance while addressing individual location needs.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-blue-500/20">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Local Market Advantage</h3>
              <p className="text-white/70 text-sm">Identify location-specific opportunities that competitors miss with our AI-powered local pattern recognition technology.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-blue-500/20">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Launch Acceleration</h3>
              <p className="text-white/70 text-sm">Reduce new location ramp-up time by 65% with pre-optimized marketing strategies based on performance data from your existing locations.</p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              className="bg-white hover:bg-[#153735] hover:text-white text-blue-800 font-semibold px-8 py-3 rounded-md transition"
              onClick={() => navigateToContact('franchise-simulator')}
            >
              EXPERIENCE THE SIMULATOR
            </Button>
            <p className="text-blue-300 text-sm mt-4">Available for franchisors and multi-location businesses</p>
          </motion.div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Franchise Success Stories</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-blue-600 mb-4">Real Franchise Clients, Real Growth</p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our franchise digital marketing strategies have transformed businesses across multiple locations. See how our tailored approaches have helped these franchise organizations achieve remarkable growth at scale.
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-3 bg-blue-600 w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">David Thompson</h3>
                    <p className="text-sm text-gray-600">Director of Marketing, FastFood Chain</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "MarkovWeb's franchise marketing approach unified our brand message across 87 locations while optimizing for local performance. Their location-specific strategies increased foot traffic by 35% system-wide and delivered a consistent brand experience for our customers."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">+176% Location ROI</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-3 bg-blue-600 w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Lisa Martinez</h3>
                    <p className="text-sm text-gray-600">Franchise Owner, Fitness Brand</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "As a franchise owner, I was struggling with local marketing. MarkovWeb created a location-specific strategy that still adhered to our brand guidelines. My location saw membership increase 45% in just three months while our corporate team was thrilled with the brand consistency."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">45% Location Growth</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-3 bg-blue-600 w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">James Wilson</h3>
                    <p className="text-sm text-gray-600">CEO, Auto Service Franchise</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Our franchise system was struggling with inconsistent marketing performance across locations. MarkovWeb developed a unified strategy that respected local market differences. We've seen a 28% increase in system-wide revenue with some locations up 45%."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">28% System Revenue</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-700 mb-2">300+</div>
              <div className="text-gray-700">Franchise Systems</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-700 mb-2">94%</div>
              <div className="text-gray-700">Client Retention</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-700 mb-2">$85M+</div>
              <div className="text-gray-700">Revenue Generated</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-700 mb-2">2,500+</div>
              <div className="text-gray-700">Locations Served</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Assessment Tool */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full -mt-20 -mr-20 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full -mb-40 -ml-40 opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Text */}
              <motion.div 
                className="p-8 lg:p-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Transform Your Franchise Digital Marketing</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                
                <p className="text-gray-700 mb-6">
                  Get a personalized multi-location strategy assessment that identifies your biggest growth opportunities at each franchise location while maintaining brand consistency.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Multi-Location Audit</span>
                      <p className="text-gray-600 text-sm">Complete location-by-location analysis of your franchise digital presence</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Location Growth Roadmap</span>
                      <p className="text-gray-600 text-sm">Tailored strategy for each franchise with actionable next steps</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Brand Compliance Analysis</span>
                      <p className="text-gray-600 text-sm">Assessment of location marketing alignment with franchise brand guidelines</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Location-Specific ROI Projections</span>
                      <p className="text-gray-600 text-sm">See potential results for each franchise location based on local market conditions</p>
                    </div>
                  </li>
                </ul>
                
                <div className="inline-block bg-blue-600 text-white text-xl font-bold px-6 py-3 rounded-lg transform transition hover:scale-105 hover:bg-[#153735]"
                  onClick={() => navigateToContact('franchise-assessment')}>
                  Schedule Your Franchise Assessment Call
                </div>
              </motion.div>
              
              {/* Right Column - Form */}
              <motion.div 
                className="bg-blue-600 p-8 lg:p-12 text-white"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Get Your Franchise Strategy Plan</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Franchise Brand Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-800 focus:outline-none" placeholder="Your Franchise Brand" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Corporate Website</label>
                    <input type="url" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-800 focus:outline-none" placeholder="yourfranchise.com" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-800 focus:outline-none" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input type="email" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-800 focus:outline-none" placeholder="john@yourfranchise.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Role</label>
                    <select className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-800 focus:outline-none">
                      <option>Franchisor (Corporate)</option>
                      <option>Franchisee (Location Owner)</option>
                      <option>Marketing Director</option>
                      <option>Operations Manager</option>
                      <option>Other (please specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Number of Locations</label>
                    <select className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-800 focus:outline-none">
                      <option>1-5 locations</option>
                      <option>6-20 locations</option>
                      <option>21-50 locations</option>
                      <option>51-100 locations</option>
                      <option>100+ locations</option>
                    </select>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-white hover:bg-[#204051] hover:text-white text-[#205A59] font-bold py-3 rounded-md transition"
                      onClick={() => navigateToContact('franchise-assessment')}
                    >
                      GET MY FRANCHISE ASSESSMENT
                    </Button>
                    <p className="text-sm text-blue-200 mt-3 text-center">System-wide and location-specific strategies included</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
