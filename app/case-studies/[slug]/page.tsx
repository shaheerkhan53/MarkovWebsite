'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Building, Tag, User, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // This would normally be fetched from an API or database
  // For now, we're using a simple object to simulate fetched data
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
        <p className="mb-8">The case study you are looking for could not be found.</p>
        <Button>
          <Link href="/case-studies">Return to Case Studies</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center mb-6 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all case studies
          </Link>
          <h1 className="text-4xl font-bold mb-3">{caseStudy.title}</h1>
          <p className="text-lg text-gray-300">{caseStudy.client}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center text-gray-300">
              <Building className="w-4 h-4 mr-2" />
              <span>{caseStudy.industry}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Tag className="w-4 h-4 mr-2" />
              <span>{caseStudy.category}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{caseStudy.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-10 rounded-xl overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Project Overview</h2>
                <p>{caseStudy.overview}</p>

                <h2>Challenge</h2>
                <p>{caseStudy.challenge}</p>

                <h2>Solution</h2>
                <p>{caseStudy.solution}</p>

                <h2>Results</h2>
                <ul>
                  {caseStudy.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>

                {caseStudy.testimonial && (
                  <div className="bg-gray-50 border-l-4 border-teal-500 p-6 my-8 rounded-r-md">
                    <p className="italic text-gray-700 mb-4">"{caseStudy.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                        {caseStudy.testimonial.image && (
                          <Image
                            src={caseStudy.testimonial.image}
                            alt={caseStudy.testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{caseStudy.testimonial.name}</p>
                        <p className="text-sm text-gray-500">{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Client</p>
                    <p className="font-semibold">{caseStudy.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Industry</p>
                    <p className="font-semibold">{caseStudy.industry}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Services Provided</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.services.map((service, index) => (
                        <span 
                          key={index}
                          className="inline-block px-3 py-1 text-xs bg-teal-100 text-teal-800 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Project Duration</p>
                    <p className="font-semibold">{caseStudy.duration}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4">Interested in similar results?</h4>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Request a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.relatedCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/case-studies/${study.slug}`}>
                  <div className="relative h-48">
                    <Image 
                      src={study.image} 
                      alt={study.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition-colors">{study.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{study.summary}</p>
                    <div className="flex items-center text-teal-600 font-medium hover:text-teal-700">
                      View Case Study <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                Get Started
              </Button>
              <Button className="border-white text-white hover:bg-white/10 border">
                View More Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Helper function to fetch case study data
function getCaseStudyBySlug(slug: string) {
  // Mock data - in a real app, this would come from an API or database
  const caseStudies = {
    'bpo-healthcare-provider': {
      title: 'BPO Solutions for Global Healthcare Provider',
      client: 'HealthCare International',
      summary: 'We implemented a comprehensive BPO solution for a leading healthcare provider, resulting in 40% cost reduction and improved customer satisfaction.',
      overview: 'HealthCare International, a leading global healthcare provider, was struggling with inefficient back-office operations and high customer service costs. They approached Markov International to streamline their operations and reduce costs while maintaining high quality standards.',
      challenge: 'The client faced multiple challenges including high operational costs, inconsistent customer service quality, inefficient data management, and difficulty scaling operations during peak times. They needed a solution that could address all these issues while ensuring compliance with healthcare regulations.',
      solution: 'We implemented a comprehensive BPO solution that included dedicated customer support teams, medical billing services, claims processing, and data management. Our solution involved setting up a specialized healthcare team, implementing advanced CRM systems, establishing clear quality metrics, and developing custom workflows.',
      results: [
        '40% reduction in operational costs within first 12 months',
        'Customer satisfaction score improved from 72% to 91%',
        'Average call handling time reduced by 35%',
        'Claims processing time reduced by 50%',
        'Successful scaling during seasonal peaks without quality degradation'
      ],
      image: '/BPO_healthcare.png',
      category: 'BPO',
      industry: 'Healthcare',
      date: 'January 2023',
      duration: '8 months',
      services: ['Customer Support', 'Medical Billing', 'Claims Processing', 'Data Management'],
      testimonial: {
        quote: 'The Markov team delivered exceptional results that exceeded our expectations. Their healthcare expertise and process efficiency improvements have transformed our operations.',
        name: 'Dr. Sarah Johnson',
        position: 'Chief Operations Officer',
        company: 'HealthCare International',
        image: '/BPO_healthcare.png'
      },
      relatedCaseStudies: [
        {
          title: 'Call Center Implementation for Educational Institute',
          summary: 'We established a multi-channel call center solution that enhanced student support services and increased response rates by 60%.',
          image: '/placeholder.svg?height=200&width=300&text=Education+Call+Center',
          slug: 'call-center-education'
        },
        {
          title: 'BPO Services for Financial Institution',
          summary: 'Our BPO services streamlined back-office operations, resulting in 35% cost savings and improved processing times for a leading financial institution.',
          image: '/placeholder.svg?height=200&width=300&text=BPO+Finance',
          slug: 'bpo-financial-institution'
        },
        {
          title: 'Telecommunication Network for Healthcare System',
          summary: 'Our team designed and deployed a reliable telecommunication network that connected multiple healthcare facilities and improved patient care coordination.',
          image: '/placeholder.svg?height=200&width=300&text=Healthcare+Telecom',
          slug: 'telecommunication-healthcare'
        }
      ]
    },
    'ecommerce-retail-giant': {
      title: 'E-Commerce Management for Retail Giant',
      client: 'Global Retail Co.',
      summary: 'Our e-commerce management services helped a retail company increase online sales by 75% and streamline their order processing system.',
      overview: 'Global Retail Co., a major retail chain with over 200 physical stores, wanted to expand their online presence and improve their e-commerce operations to meet growing customer demand for online shopping.',
      challenge: 'The client had an outdated e-commerce platform with poor user experience, inefficient inventory management, slow order processing, and limited integration with their physical stores. They needed a comprehensive solution to revamp their entire online retail operation.',
      solution: 'We implemented a complete e-commerce management solution including platform migration to a modern architecture, inventory synchronization across channels, streamlined order fulfillment processes, and an integrated omnichannel approach connecting online and offline experiences.',
      results: [
        '75% increase in online sales within 6 months',
        'Order processing time reduced from 48 hours to 4 hours',
        'Cart abandonment rate decreased by 45%',
        'Mobile conversions increased by 120%',
        'Successful implementation of click-and-collect service across all store locations'
      ],
      image: '/placeholder.svg?height=450&width=800&text=E-commerce+Retail+Case+Study',
      category: 'E-commerce',
      industry: 'Retail',
      date: 'March 2023',
      duration: '12 months',
      services: ['Platform Migration', 'Inventory Management', 'Order Processing', 'Omnichannel Integration'],
      testimonial: {
        quote: 'Markov International transformed our digital retail experience. Their expertise in e-commerce and innovative approach has been instrumental in our online growth.',
        name: 'Michael Chen',
        position: 'VP of Digital Commerce',
        company: 'Global Retail Co.',
        image: '/placeholder.svg?height=48&width=48&text=MC'
      },
      relatedCaseStudies: [
        {
          title: 'Digital Marketing Campaign for Entertainment Brand',
          summary: 'We developed and executed a digital marketing strategy that increased brand engagement by 120% and drove a 45% increase in conversions.',
          image: '/placeholder.svg?height=200&width=300&text=Digital+Marketing',
          slug: 'digital-marketing-entertainment'
        },
        {
          title: 'E-Commerce Platform for Fashion Retailer',
          summary: 'We developed a customized e-commerce platform that increased mobile conversions by 85% and enhanced the overall shopping experience.',
          image: '/placeholder.svg?height=200&width=300&text=Fashion+E-commerce',
          slug: 'ecommerce-fashion-retailer'
        },
        {
          title: 'IT Infrastructure Upgrade for Finance Institution',
          summary: 'Our team implemented a secure and scalable IT infrastructure solution that improved system reliability and reduced downtime by 95%.',
          image: '/placeholder.svg?height=200&width=300&text=Finance+IT',
          slug: 'it-solutions-finance'
        }
      ]
    },
    // Add more case studies as needed
  }

  return caseStudies[slug as keyof typeof caseStudies]
} 