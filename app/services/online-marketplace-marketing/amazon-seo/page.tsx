"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AmazonSEOServicesPage() {
  const router = useRouter();

  const navigateToContact = (service: string) => {
    router.push(`/contact?service=${encodeURIComponent(service)}`);
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
      {/* Header */}
    

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
            Amazon SEO Services
          </motion.h1>

          <motion.p 
            className="text-xl text-[#374548] mb-8 font-medium"
            variants={fadeInUp}
          >
            Providing Amazon Listing Optimization to Increase Your Online Sales
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
              className="w-full md:w-auto md:ml-2 bg-yellow-500 hover:bg-[#e68317] text-white text-sm font-semibold px-6 py-3 rounded-md transition transform hover:scale-105"
              onClick={() => navigateToContact("Amazon SEO Free Analysis")}
            >
              GET MY FREE ANALYSIS
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Amazon's Growing Online Marketplace Section */}
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
                Take Advantage of Amazon's Growing<br />
                <span className="text-[#374548]">Online Marketplace</span>
              </h2>
              
              <p className="text-gray-700 mb-4">
                As an e-commerce retailer with Amazon presence, achieving top product rankings in Amazon's search results is essential. Similar to Google SEO for your website, Amazon SEO is crucial for your target audience to find you among millions of products on your target category. To rise above competitors, improved listing for Amazon SEO is critical. They must include product-based keywords that reflect consumer search intent, so it's easier for customers to find you.
              </p>

              <p className="text-gray-700 mb-4">
                The benefits of SEO on Amazon are many, including ranking for premium buying positions on the online marketplace giant. At MarkovWeb, we provide Amazon SEO services that enable brands to increase sales in a cost-efficient and sustainable way.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/amazon1.jpg"
                  alt="Amazon Coverage Map"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="py-10 bg-[#F2C525] text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl mb-1">Google</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-black-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm mt-1">150+ REVIEWS</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl mb-1">Clutch</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-black-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm mt-1">50+ REVIEWS</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl mb-1">UpCity</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-black-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm mt-1">80+ REVIEWS</div>
            </div>
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
              <span className="text-[#374548]">Amazon SEO Services</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              From Seller to Optimization, Our Suite of SEO Analytics Helps Entrepreneurs
            </p>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4">
              When you connect with Thrive as Amazon Marketing Agency, to manage and optimize your Amazon listings, you can expect the following:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service cards and remaining content... */}
            {/* Seller Account Setup */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#374548] mb-4">Seller Account Setup</h3>
              <p className="text-gray-700">
                Our Amazon SEO company will walk you through opening your Amazon Seller Account. We'll help you navigate complex account setup procedures. This will ensure that nothing is left to chance when you set up your Amazon account, install necessary plugins and start accessing a store to start generating.
              </p>
            </motion.div>

            {/* Seller Brand Setup */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#374548] mb-4">Seller Brand Setup</h3>
              <p className="text-gray-700">
                We'll support you while working with the Amazon Brand Registry, handling all of the complex registration and other procedures to get you registered for Amazon's Services. Additionally setup information you can use as guidelines.
              </p>
            </motion.div>

            {/* Amazon Account Audit */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#374548] mb-4">Amazon Account Audit</h3>
              <p className="text-gray-700">
                Our Amazon SEO Company will evaluate your Amazon account configuration, checking every metric from order value to add-to-cart rates. We audit your ranking, evaluate the validity of monitoring tools your competitor use to protect your organic rank on Amazon, improve your daily limits and address your ranking to outperform your competitors.
              </p>
            </motion.div>

            {/* Competitor Research */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#374548] mb-4">Competitor Research</h3>
              <p className="text-gray-700">
                Competition research is critical to an SEO campaign. Thrive's Amazon SEO agency will identify your key competitors and make note of their sales rank, pricing, reviews and the level of customer service they provide. We'll be helped by strong SEO tools that reveal the search terms customers use to find product similar to yours.
              </p>
            </motion.div>

            {/* Amazon Listing Optimization */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#374548] mb-4">Amazon Listing Optimization</h3>
              <p className="text-gray-700">
                Our Amazon SEO agency will optimize your product listings, collecting data and create the information that leads to increased sales. We incorporate relevant keywords to help your product placement relationship by optimizing product title, bullet points, images, and back-end search terms. We also provide guidance to increase the click-through rate that allows more customers to discover your full description, driving interest in your product.
              </p>
            </motion.div>

            {/* Amazon Review Strategies */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md h-full"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#374548] mb-4">Amazon Review Strategies</h3>
              <p className="text-gray-700">
                Strategic review campaigns help boost your listings in Amazon's review criteria. That's why we'll create automated emails via Amazon Seller Central that invite customers to leave their reviews. We'll help you respond strategically and swiftly to any reviews you get, an important rating and ranking essential for success in this marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amazon SEO Strategies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">Amazon SEO Strategies</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Understanding Amazon's A9 Algorithm and Product Ranking Factors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#374548] mb-3">Amazon's A9 Algorithm</h3>
                <p className="text-gray-700">
                  Amazon's search algorithm, known as A9, determines how products rank in search results. Unlike Google, Amazon's algorithm focuses primarily on sales performance and relevance metrics. The algorithm analyzes multiple factors to rank products, including sales velocity, conversion rates, and relevance to search terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#374548] mb-3">Backend Keywords Optimization</h3>
                <p className="text-gray-700">
                  Backend keywords are search terms invisible to customers but used by Amazon's algorithm to index your products. Our experts optimize these hidden keywords to capture additional search traffic without cluttering your visible listing content. We strategically select high-value search terms that complement your primary keywords.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#374548] mb-3">Listing Title Optimization</h3>
                <p className="text-gray-700">
                  Your product title is the most important on-page element for Amazon SEO. We craft titles that include primary keywords while maintaining readability and brand positioning. Our approach balances keyword optimization with conversion psychology to maximize both visibility and click-through rates.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#374548] mb-3">Bullet Points & Description Optimization</h3>
                <p className="text-gray-700">
                  Amazon's bullet points and product description are crucial for both SEO and conversion. Our team develops compelling content that incorporates secondary keywords while addressing customer pain points and highlighting product benefits. We structure information to improve readability and scanning for better user experience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#374548] mb-3">Image Optimization for Amazon</h3>
                <p className="text-gray-700">
                  Product images significantly impact conversion rates on Amazon. We optimize image quality, size, and content to meet Amazon's requirements and enhance customer experience. Our approach includes properly named image files, high-resolution zooming capabilities, and multiple angles to showcase product features.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#374548] mb-3">Performance Metrics & Ongoing Optimization</h3>
                <p className="text-gray-700">
                  Amazon SEO requires continuous monitoring and refinement. Our team tracks key performance indicators including click-through rates, conversion rates, bounce rates, and overall sales performance. We implement data-driven adjustments to maintain and improve your product rankings over time.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-tr-full"></div>
            
            <h3 className="text-2xl font-bold text-[#374548] mb-4">Amazon Ranking Factors You Should Know</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sales Performance</h4>
                  <p className="text-gray-600">Products with higher sales volumes tend to rank better in search results</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Conversion Rate</h4>
                  <p className="text-gray-600">Higher conversion rates signal product relevance to Amazon's algorithm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Keyword Relevance</h4>
                  <p className="text-gray-600">Strategic placement of relevant keywords throughout your listing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Customer Reviews</h4>
                  <p className="text-gray-600">Quality and quantity of reviews influence rankings and buyer decisions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Answered Questions</h4>
                  <p className="text-gray-600">Responding to customer questions shows engagement and improves SEO</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Image Quality</h4>
                  <p className="text-gray-600">High-quality images with zoom functionality improve conversion rates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">Amazon SEO Packages</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Tailored Solutions for Every Amazon Seller
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md relative h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ translateY: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="bg-gray-50 p-8 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-[#374548] mb-1">Starter Package</h3>
                <p className="text-gray-600 mb-4">For new Amazon sellers</p>
                <div className="text-4xl font-bold text-gray-800 mb-1">$999<span className="text-base font-normal text-gray-500">/mo</span></div>
                <p className="text-gray-500 text-sm">3-month minimum commitment</p>
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Initial Listing Optimization (up to 5 products)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Keyword Research & Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Backend Search Term Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Monthly Performance Reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Email Support</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 border-t border-gray-200">
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
                  onClick={() => navigateToContact("Amazon SEO Starter Package")}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Standard Package */}
            <motion.div
              className="bg-white border-2 border-yellow-500 rounded-xl overflow-hidden shadow-xl relative h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ translateY: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-7 translate-y-5 shadow-md">
                  POPULAR
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-[#374548] mb-1">Growth Package</h3>
                <p className="text-gray-600 mb-4">For established Amazon sellers</p>
                <div className="text-4xl font-bold text-gray-800 mb-1">$1,899<span className="text-base font-normal text-gray-500">/mo</span></div>
                <p className="text-gray-500 text-sm">3-month minimum commitment</p>
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Full Listing Optimization (up to 15 products)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Advanced Keyword Research & Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Competitor Analysis & Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Enhanced Content Creation (A+ Content)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Bi-weekly Performance Reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Review Management Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Priority Email & Phone Support</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 border-t border-gray-200">
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
                  onClick={() => navigateToContact("Amazon SEO Growth Package")}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md relative h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ translateY: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="bg-gray-50 p-8 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-[#374548] mb-1">Enterprise Package</h3>
                <p className="text-gray-600 mb-4">For high-volume Amazon sellers</p>
                <div className="text-4xl font-bold text-gray-800 mb-1">$3,499<span className="text-base font-normal text-gray-500">/mo</span></div>
                <p className="text-gray-500 text-sm">3-month minimum commitment</p>
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Complete Listing Optimization (up to 30 products)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Market & Category Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Amazon Store Design & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Premium A+ Content Creation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Weekly Performance & Strategy Calls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Amazon PPC Management Integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Dedicated Account Manager</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 border-t border-gray-200">
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
                  onClick={() => navigateToContact("Amazon SEO Enterprise Package")}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Need a custom solution? We create tailored packages for specific business needs.</p>
            <Button 
              variant="outline" 
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-800 font-medium px-6 py-3 rounded-lg"
              onClick={() => navigateToContact("Amazon SEO Custom Quote")}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Industry-Specific Approach Section */}
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
              <span className="text-[#374548]">Industry-Specific Amazon SEO</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Specialized Optimization Strategies for Different Product Categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health & Beauty */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                <span className="text-4xl text-pink-500">💄</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Health & Beauty</h3>
                <p className="text-gray-600 mb-4">
                  In the competitive Health & Beauty category, we focus on ingredient-focused keyword optimization, lifestyle imagery, and customer education. We emphasize review generation and A+ content that builds trust in your formulations and showcases results.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Typical Conversion Improvement:</span>
                    <span className="text-sm font-bold text-pink-600">65-140%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Key Focus Areas:</span>
                    <span className="text-sm text-gray-800">Ingredients, Benefits, Results</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Home & Kitchen */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                <span className="text-4xl text-blue-500">🏠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Home & Kitchen</h3>
                <p className="text-gray-600 mb-4">
                  For Home & Kitchen products, we implement solution-oriented listing strategies that focus on functionality, durability, and ease of use. Our approach highlights product dimensions, compatibility, and practical applications in everyday life.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Typical Conversion Improvement:</span>
                    <span className="text-sm font-bold text-blue-600">50-110%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Key Focus Areas:</span>
                    <span className="text-sm text-gray-800">Functionality, Dimensions, Materials</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Electronics */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                <span className="text-4xl text-purple-500">🔌</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Electronics</h3>
                <p className="text-gray-600 mb-4">
                  Our Electronics category approach emphasizes technical specifications, compatibility, and feature-based keywords. We create detailed comparison tables in A+ Content and optimize bullet points to address common technical questions.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Typical Conversion Improvement:</span>
                    <span className="text-sm font-bold text-purple-600">40-95%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Key Focus Areas:</span>
                    <span className="text-sm text-gray-800">Specifications, Compatibility, Features</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sports & Outdoors */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                <span className="text-4xl text-green-500">🏄‍♂️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sports & Outdoors</h3>
                <p className="text-gray-600 mb-4">
                  For Sports & Outdoors products, we emphasize performance benefits, durability, and activity-specific features. Our strategy includes action imagery and lifestyle-focused content that resonates with enthusiasts in your specific sport or activity.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Typical Conversion Improvement:</span>
                    <span className="text-sm font-bold text-green-600">55-125%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Key Focus Areas:</span>
                    <span className="text-sm text-gray-800">Performance, Durability, Activity-Specific</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Toys & Games */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                <span className="text-4xl text-red-500">🧸</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Toys & Games</h3>
                <p className="text-gray-600 mb-4">
                  Our Toys & Games strategy focuses on age-appropriate targeting, educational or entertainment value, and safety features. We optimize listings to capture both gift-givers and direct purchasers through strategic keyword placement.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Typical Conversion Improvement:</span>
                    <span className="text-sm font-bold text-red-600">60-130%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Key Focus Areas:</span>
                    <span className="text-sm text-gray-800">Age Range, Educational Value, Safety</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Food & Grocery */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                <span className="text-4xl text-yellow-500">🥑</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Food & Grocery</h3>
                <p className="text-gray-600 mb-4">
                  For Food & Grocery items, we implement taste-oriented descriptions, dietary specification keywords, and ingredient highlighting. Our approach emphasizes nutrition information, special diets (keto, paleo, vegan), and culinary applications.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Typical Conversion Improvement:</span>
                    <span className="text-sm font-bold text-yellow-600">45-100%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">Key Focus Areas:</span>
                    <span className="text-sm text-gray-800">Ingredients, Dietary Needs, Flavor Profile</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-16 bg-yellow-500 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-700">
                  How is Amazon SEO different from regular SEO?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                  Amazon SEO differs from traditional SEO in several key ways. While Google focuses on content relevance, backlinks, and user experience, Amazon's algorithm prioritizes sales performance, conversion rates, and product relevance. Amazon SEO is specifically designed to optimize product listings within the Amazon marketplace ecosystem, focusing on keywords in titles, bullet points, descriptions, and backend search terms, along with sales metrics and customer reviews.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-700">
                  How long does it take to see results from Amazon SEO?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                  Timeline for Amazon SEO results varies based on factors like marketplace competition, product category, and current listing quality. Initial improvements can often be seen within 2-4 weeks as Amazon indexes updated content. More significant ranking improvements typically occur within 2-3 months as sales velocity and conversion metrics improve. Our ongoing optimization ensures continuous improvement over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-700">
                  Do I need Amazon PPC advertising along with SEO?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                  While Amazon SEO is effective on its own, combining it with Amazon PPC (Pay-Per-Click) advertising creates a powerful synergy. PPC campaigns can boost initial sales velocity, which positively impacts organic rankings. Additionally, PPC data provides valuable keyword insights that can inform your SEO strategy. We generally recommend a combined approach for maximum marketplace visibility and sales growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-700">
                  How do customer reviews affect Amazon SEO?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                  Customer reviews significantly impact Amazon SEO in multiple ways. Products with more positive reviews tend to rank higher in search results as they signal quality and relevance to Amazon's algorithm. Reviews also contain valuable keywords that Amazon indexes. Additionally, higher review counts and ratings improve conversion rates, which further enhances SEO performance. Our strategy includes ethical review generation techniques that comply with Amazon's terms of service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-700">
                  Can you optimize existing Amazon listings or only new ones?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                  We optimize both existing and new Amazon listings. For existing listings, we conduct comprehensive audits to identify optimization opportunities while preserving elements that are already performing well. This approach minimizes disruption to current sales while enhancing overall performance. For new listings, we implement best practices from the start, establishing a strong foundation for sustained marketplace success.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">Success Stories</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Real Results for Real Amazon Sellers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                <span className="text-6xl text-white">+137%</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Home Goods Brand</h3>
                <p className="text-gray-600 mb-4">Kitchen accessories seller saw a 137% increase in organic Amazon sales after 3 months of our comprehensive listing optimization and keyword strategy.</p>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">HG</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">Michael T.</p>
                    <p className="text-xs text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                <span className="text-6xl text-white">5x</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sports Equipment Retailer</h3>
                <p className="text-gray-600 mb-4">Achieved 5x increase in conversion rate and top 3 positions for 27 high-value keywords through our Amazon listing optimization and backend keyword strategy.</p>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">SR</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">Jennifer K.</p>
                    <p className="text-xs text-gray-500">eCommerce Director</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                <span className="text-6xl text-white">+214%</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Beauty Brand</h3>
                <p className="text-gray-600 mb-4">New beauty brand achieved 214% growth in monthly revenue and secured Amazon's Choice badge for their flagship product within 6 months of our optimization services.</p>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">BB</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">Sarah L.</p>
                    <p className="text-xs text-gray-500">Founder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
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
              <span className="text-[#374548]">Our Amazon SEO Process</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              A Strategic Approach to Amazon Marketplace Success
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-2xl font-bold text-[#374548] mb-3">Initial Audit & Analysis</h3>
                    <p className="text-gray-600">We conduct a comprehensive analysis of your current Amazon presence, examining keyword rankings, competitor positioning, listing quality, and sales performance to establish baselines and identify opportunities.</p>
                  </div>
                  
                  <div className="mx-auto md:mx-0 my-6 md:my-0 relative">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl font-bold z-10 relative">1</div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1"></div>
                  
                  <div className="mx-auto md:mx-0 my-6 md:my-0 relative order-2">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl font-bold z-10 relative">2</div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                    <h3 className="text-2xl font-bold text-[#374548] mb-3">Keyword Research & Strategy</h3>
                    <p className="text-gray-600">Our team conducts in-depth Amazon-specific keyword research to identify high-value search terms with the right balance of search volume and competition, creating a comprehensive keyword strategy tailored to your products.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-2xl font-bold text-[#374548] mb-3">Listing Optimization</h3>
                    <p className="text-gray-600">We optimize all elements of your Amazon listings including titles, bullet points, descriptions, and backend search terms, balancing keyword optimization with compelling sales copy to maximize both visibility and conversion.</p>
                  </div>
                  
                  <div className="mx-auto md:mx-0 my-6 md:my-0 relative">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl font-bold z-10 relative">3</div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1"></div>
                  
                  <div className="mx-auto md:mx-0 my-6 md:my-0 relative order-2">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl font-bold z-10 relative">4</div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                    <h3 className="text-2xl font-bold text-[#374548] mb-3">Enhanced Content Development</h3>
                    <p className="text-gray-600">We create or optimize A+ Content (Enhanced Brand Content) to showcase your brand story, demonstrate product features, and address customer pain points, significantly improving conversion rates and customer trust.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 5 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-2xl font-bold text-[#374548] mb-3">Performance Monitoring & Refinement</h3>
                    <p className="text-gray-600">Our team continuously monitors key performance metrics, analyzes customer behavior, and refines your Amazon SEO strategy based on data-driven insights, ensuring ongoing improvement and adaptation to marketplace changes.</p>
                  </div>
                  
                  <div className="mx-auto md:mx-0 my-6 md:my-0 relative">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl font-bold z-10 relative">5</div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Dominate Amazon Search Results?</h2>
            <Button 
              className="bg-yellow-500 hover:bg-[#e68317] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
              onClick={() => navigateToContact("Amazon SEO Services")}
            >
              GET STARTED WITH AMAZON SEO
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tools We Use Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">Amazon SEO Tools We Use</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Enterprise-Grade Technology for Maximum Results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool 1 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Helium 10</h3>
              <p className="text-gray-600 mb-4">
                We leverage Helium 10's comprehensive suite of tools for advanced keyword research, competitor analysis, and listing optimization. This platform helps us identify high-volume, low-competition keywords specific to Amazon's marketplace.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Keyword Research</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Listing Optimization</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Index Checker</span>
              </div>
            </motion.div>

            {/* Tool 2 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Jungle Scout</h3>
              <p className="text-gray-600 mb-4">
                We use Jungle Scout's powerful analytics tools to track product performance, monitor market trends, and identify growth opportunities. Their database of Amazon products helps us benchmark your listings against top competitors in your category.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Market Analysis</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Sales Tracking</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Opportunity Finder</span>
              </div>
            </motion.div>

            {/* Tool 3 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">DataHawk</h3>
              <p className="text-gray-600 mb-4">
                DataHawk's AI-powered analytics platform helps us track keyword rankings, monitor Buy Box performance, and analyze pricing strategies. We utilize their insights to make data-driven optimizations for continuous improvement.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Keyword Tracking</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Buy Box Monitoring</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Price Intelligence</span>
              </div>
            </motion.div>

            {/* Tool 4 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AMZScout</h3>
              <p className="text-gray-600 mb-4">
                We utilize AMZScout for in-depth competitor research, review analysis, and market trend forecasting. Their tools help us identify seasonal patterns and capitalize on emerging opportunities in your product category.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Competitor Analysis</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Review Monitoring</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Trend Analysis</span>
              </div>
            </motion.div>

            {/* Tool 5 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">SellerApp</h3>
              <p className="text-gray-600 mb-4">
                SellerApp provides us with comprehensive product research capabilities, PPC analytics, and inventory management insights. We leverage their platform to identify high-potential keywords and optimize advertising campaigns.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">PPC Optimization</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Profit Analytics</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Listing Quality</span>
              </div>
            </motion.div>

            {/* Tool 6 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sellics</h3>
              <p className="text-gray-600 mb-4">
                Sellics offers an all-in-one solution for Amazon SEO, PPC management, and performance analytics. We use their platform to create integrated marketing strategies that align organic optimization with paid advertising efforts.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Integrated Analytics</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Performance Dashboard</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">PPC Integration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
} 