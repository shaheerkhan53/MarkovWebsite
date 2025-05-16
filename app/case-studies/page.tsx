'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function CaseStudiesPage() {
  // Animation variants
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

  // State for filters
  const [serviceFilter, setServiceFilter] = useState('all')
  const [industryFilter, setIndustryFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Mock case study data
  const caseStudies = [
    {
      id: 1,
      title: 'BPO Solutions for Global Healthcare Provider',
      summary: 'We implemented a comprehensive BPO solution for a leading healthcare provider, resulting in 40% cost reduction and improved customer satisfaction.',
      image: '/BPO.jpg',
      category: 'BPO',
      industry: 'Healthcare',
      slug: 'bpo-healthcare-provider'
    },
    {
      id: 2,
      title: 'E-Commerce Management for Retail Giant',
      summary: 'Our e-commerce management services helped a retail company increase online sales by 75% and streamline their order processing system.',
      image: '/ecommercemanagement.jpg',
      category: 'E-commerce',
      industry: 'Retail',
      slug: 'ecommerce-retail-giant'
    },
    {
      id: 3,
      title: 'Digital Marketing Campaign for Entertainment Brand',
      summary: 'We developed and executed a digital marketing strategy that increased brand engagement by 120% and drove a 45% increase in conversions.',
      image: '/digitalmarketing.jpg',
      category: 'Digital Marketing',
      industry: 'Entertainment',
      slug: 'digital-marketing-entertainment'
    },
    {
      id: 4,
      title: 'IT Infrastructure Upgrade for Finance Institution',
      summary: 'Our team implemented a secure and scalable IT infrastructure solution that improved system reliability and reduced downtime by 95%.',
      image: '/infrastructure.jpg',
      category: 'IT Solutions',
      industry: 'Finance',
      slug: 'it-solutions-finance'
    },
    {
      id: 5,
      title: 'Call Center Implementation for Educational Institute',
      summary: 'We established a multi-channel call center solution that enhanced student support services and increased response rates by 60%.',
      image: '/callcenter.jpg',
      category: 'Call Center',
      industry: 'Education',
      slug: 'call-center-education'
    },
    {
      id: 6,
      title: 'Telecommunication Network for Healthcare System',
      summary: 'Our team designed and deployed a reliable telecommunication network that connected multiple healthcare facilities and improved patient care coordination.',
      image: '/telecommunication.jpg',
      category: 'Telecommunication',
      industry: 'Healthcare',
      slug: 'telecommunication-healthcare'
    },
    {
      id: 7,
      title: 'E-Commerce Platform for Fashion Retailer',
      summary: 'We developed a customized e-commerce platform that increased mobile conversions by 85% and enhanced the overall shopping experience.',
      image: '/ecommerceplatform.jpg',
      category: 'E-commerce',
      industry: 'Retail',
      slug: 'ecommerce-fashion-retailer'
    },
    {
      id: 8,
      title: 'BPO Services for Financial Institution',
      summary: 'Our BPO services streamlined back-office operations, resulting in 35% cost savings and improved processing times for a leading financial institution.',
      image: '/bposervice.jpg',
      category: 'BPO',
      industry: 'Finance',
      slug: 'bpo-financial-institution'
    },
    {
      id: 9,
      title: 'Digital Marketing for E-learning Platform',
      summary: 'We implemented a comprehensive digital marketing strategy that increased student enrollments by 90% and enhanced brand visibility in the education sector.',
      image: '/digimar-elearningplat.jpg',
      category: 'Digital Marketing',
      industry: 'Education',
      slug: 'digital-marketing-elearning'
    }
  ]

  // Filter case studies based on selected filters
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesService = serviceFilter === 'all' || study.category === serviceFilter
    const matchesIndustry = industryFilter === 'all' || study.industry === industryFilter
    return matchesService && matchesIndustry
  })

  // Paginate the filtered case studies
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedCaseStudies = filteredCaseStudies.slice(startIndex, startIndex + itemsPerPage)

  // Unique services and industries for filters
  const services = [...new Set(caseStudies.map(study => study.category))]
  const industries = [...new Set(caseStudies.map(study => study.industry))]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero/Intro Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-teal-600/10 text-teal-600">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Case Studies</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our portfolio of successful client projects and discover how Markov International
              has helped businesses across various industries achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtering/Sorting Controls Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-medium">
              Showing <span className="text-teal-600 font-semibold">{filteredCaseStudies.length}</span> case studies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="service-filter" className="text-sm font-medium text-gray-700">Service:</label>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-[180px]" id="service-filter">
                    <SelectValue placeholder="All Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    {services.map(service => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <label htmlFor="industry-filter" className="text-sm font-medium text-gray-700">Industry:</label>
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger className="w-[180px]" id="industry-filter">
                    <SelectValue placeholder="All Industries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredCaseStudies.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {displayedCaseStudies.map(study => (
                <motion.div 
                  key={study.id} 
                  variants={fadeInUp}
                  className="overflow-hidden rounded-xl shadow-md border border-gray-100 group hover:shadow-xl transition-shadow"
                >
                  <Link href={`/case-studies/${study.slug}`}>
                    <div className="relative">
                      <Image
                        src={study.image}
                        alt={study.title}
                        width={600}
                        height={300}
                        className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {study.category}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="mb-6 text-gray-600 line-clamp-3">
                        {study.summary}
                      </p>
                      <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No case studies found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setServiceFilter('all')
                  setIndustryFilter('all')
                  setCurrentPage(1)
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredCaseStudies.length > itemsPerPage && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        onClick={() => setCurrentPage(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 