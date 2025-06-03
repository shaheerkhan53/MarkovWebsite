'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Building, Tag, User, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CaseStudyPage({ params }: { params: any }) {
  // This would normally be fetched from an API or database
  // For now, we're using a simple object to simulate fetched data
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
        <p className="mb-8">The case study you are looking for could not be found.</p>
        <Button asChild>
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
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority // For LCP optimization
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
                  {caseStudy.results.map((result: string, index: number) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>

                {caseStudy.testimonial && (
                  <div className="bg-gray-50 border-l-4 border-teal-500 p-6 my-8 rounded-r-md">
                    <p className="italic text-gray-700 mb-4">"{caseStudy.testimonial.quote}"</p>
                    <div className="flex items-center">
                      {caseStudy.testimonial.image && (
                         <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                            <Image
                                src={caseStudy.testimonial.image}
                                alt={caseStudy.testimonial.name}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                         </div>
                      )}
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
              <div className="bg-gray-50 p-6 rounded-xl sticky top-24 shadow">
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
                      {caseStudy.services.map((service: string, index: number) => (
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.relatedCaseStudies.map((study: any, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={`/case-studies/${study.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-teal-600 transition-colors">{study.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{study.summary}</p>
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none px-8 py-3 text-lg">
                Get Started
              </Button>
              <Button asChild className="border-white text-white hover:bg-white/10 border px-8 py-3 text-lg">
                <Link href="/case-studies">View More Case Studies</Link>
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
  const allCaseStudiesList = [
    {
      slug: 'bpo-healthcare-provider',
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
        image: '/BPO_healthcare.png' // Assuming this is a picture of Dr. Johnson or related to the company.
      },
    },
    {
      slug: 'ecommerce-retail-giant',
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
      image: '/ecommercemanagement.jpg',
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
    },
    {
      slug: 'digital-marketing-entertainment',
      title: 'Digital Marketing Campaign for Entertainment Brand',
      client: 'Star Media Group',
      summary: 'We developed and executed a digital marketing strategy that increased brand engagement by 120% and drove a 45% increase in conversions.',
      overview: 'Star Media Group, a prominent entertainment brand, aimed to boost its online presence and audience interaction for its new streaming service. They needed a dynamic digital marketing strategy to reach a wider audience and convert viewers into subscribers.',
      challenge: 'The primary challenge was to cut through the noise in a highly competitive entertainment market, increase brand visibility, and effectively target diverse audience segments to drive subscriptions and engagement.',
      solution: 'Our team devised a multi-channel digital marketing campaign encompassing social media marketing, influencer collaborations, content marketing, SEO optimization, and targeted PPC advertising. We focused on creating engaging video content and interactive campaigns.',
      results: [
        '120% increase in overall brand engagement across digital platforms',
        '45% increase in subscription conversions',
        'Reached over 5 million unique users through targeted campaigns',
        'Significant growth in social media followers and organic search traffic'
      ],
      image: '/digimar.jpg',
      category: 'Digital Marketing',
      industry: 'Entertainment',
      date: 'May 2023',
      duration: '6 months',
      services: ['Social Media Marketing', 'Content Creation', 'SEO', 'PPC Advertising', 'Influencer Marketing'],
      testimonial: {
        quote: "Markov's digital marketing prowess gave our new service the launchpad it needed. The engagement and conversion rates speak for themselves!",
        name: 'Linda Ray',
        position: 'Marketing Director',
        company: 'Star Media Group',
        image: '/placeholder.svg?height=48&width=48&text=LR'
      },
    },
    {
      slug: 'it-solutions-finance',
      title: 'IT Infrastructure Upgrade for Finance Institution',
      client: 'SecureBank Corp.',
      summary: 'Our team implemented a secure and scalable IT infrastructure solution that improved system reliability and reduced downtime by 95%.',
      overview: 'SecureBank Corp., a mid-sized financial institution, was grappling with an aging IT infrastructure that led to frequent downtimes, security vulnerabilities, and inefficiencies in operations.',
      challenge: 'The main challenges were to upgrade the existing IT systems without disrupting daily operations, enhance data security to meet stringent financial regulations, improve system performance, and ensure scalability for future growth.',
      solution: 'We designed and implemented a robust, cloud-hybrid IT infrastructure. This included migrating key services to a secure private cloud, upgrading network hardware, implementing advanced cybersecurity measures, and establishing a comprehensive disaster recovery plan.',
      results: [
        'System downtime reduced by 95%',
        'Enhanced data security and full compliance with financial regulations',
        'Improved transaction processing speed by 60%',
        'Scalable infrastructure ready to support 50% business growth'
      ],
      image: '/infrastructure.jpg',
      category: 'IT Solutions',
      industry: 'Finance',
      date: 'July 2023',
      duration: '9 months',
      services: ['Cloud Migration', 'Network Upgrade', 'Cybersecurity', 'Disaster Recovery Planning', 'IT Support'],
      testimonial: {
        quote: 'The infrastructure upgrade by Markov International has been a game-changer. Our systems are now faster, more reliable, and incredibly secure.',
        name: 'David Lee',
        position: 'CTO',
        company: 'SecureBank Corp.',
        image: '/placeholder.svg?height=48&width=48&text=DL'
      },
    },
    {
      slug: 'call-center-education',
      title: 'Call Center Implementation for Educational Institute',
      client: 'Global Learning Academy',
      summary: 'We established a multi-channel call center solution that enhanced student support services and increased response rates by 60%.',
      overview: 'Global Learning Academy, a large online educational institution, needed to improve its student support services to handle increasing enrollment and inquiries effectively.',
      challenge: 'The institute faced challenges with long wait times for student queries, inconsistent support quality across different channels, and a lack of integrated communication tools, leading to student dissatisfaction.',
      solution: 'We implemented a state-of-the-art multi-channel call center solution. This included setting up an integrated system for calls, emails, and live chat, training support staff, and implementing a CRM for better tracking and management of student interactions.',
      results: [
        'Student query response rates increased by 60%',
        'Average student satisfaction scores improved by 30%',
        'First call resolution rate increased to 85%',
        'Streamlined support operations with a unified communication platform'
      ],
      image: '/callcenter.jpg',
      category: 'Call Center',
      industry: 'Education',
      date: 'September 2023',
      duration: '5 months',
      services: ['Call Center Setup', 'CRM Integration', 'Staff Training', 'Multi-channel Support Strategy'],
      testimonial: {
        quote: "Markov's call center solution transformed our student support. We can now provide timely and effective assistance, which has greatly benefited our students.",
        name: 'Dr. Emily Carter',
        position: 'Dean of Student Affairs',
        company: 'Global Learning Academy',
        image: '/placeholder.svg?height=48&width=48&text=EC'
      },
    },
    {
      slug: 'telecommunication-healthcare',
      title: 'Telecommunication Network for Healthcare System',
      client: 'Unity Health Network',
      summary: 'Our team designed and deployed a reliable telecommunication network that connected multiple healthcare facilities and improved patient care coordination.',
      overview: 'Unity Health Network, a consortium of hospitals and clinics, required a robust and secure telecommunication network to connect its disparate facilities, enabling seamless data sharing and communication for better patient care.',
      challenge: 'The existing network infrastructure was fragmented, unreliable, and lacked the capacity to handle growing data demands from EMR systems, telehealth services, and inter-facility communication, impacting patient care coordination.',
      solution: 'We designed and deployed a high-availability, secure fiber-optic network connecting all facilities. The solution included network redundancy, enhanced cybersecurity protocols, and QoS for critical healthcare applications.',
      results: [
        '99.99% network uptime achieved across all connected facilities',
        'Improved speed and reliability of EMR access and data sharing',
        'Enabled expansion of telehealth services by 200%',
        'Enhanced communication and collaboration among medical staff'
      ],
      image: '/telecommunication.jpg',
      category: 'Telecommunication',
      industry: 'Healthcare',
      date: 'November 2023',
      duration: '10 months',
      services: ['Network Design & Deployment', 'Fiber Optic Installation', 'Cybersecurity', 'Telehealth Infrastructure'],
      testimonial: {
        quote: "The new telecommunication network by Markov is the backbone of our integrated healthcare system. It's fast, reliable, and secure, truly enhancing our ability to care for patients.",
        name: 'Mark Roberts',
        position: 'CIO',
        company: 'Unity Health Network',
        image: '/placeholder.svg?height=48&width=48&text=MR'
      },
    },
    {
      slug: 'ecommerce-fashion-retailer',
      title: 'E-Commerce Platform for Fashion Retailer',
      client: 'Chic Threads Boutique',
      summary: 'We developed a customized e-commerce platform that increased mobile conversions by 85% and enhanced the overall shopping experience.',
      overview: 'Chic Threads Boutique, a growing online fashion retailer, needed a new e-commerce platform to improve user experience, especially on mobile devices, and to support its expanding product line and customer base.',
      challenge: 'Their previous platform was not mobile-friendly, had a cumbersome checkout process, and lacked features for personalized shopping experiences, leading to high cart abandonment rates and slow growth.',
      solution: 'We developed a custom, responsive e-commerce platform built on modern technology. Key features included a streamlined mobile-first design, personalized product recommendations, an intuitive user interface, and a simplified one-page checkout process.',
      results: [
        'Mobile conversion rates increased by 85%',
        'Overall online sales grew by 60% within the first year',
        'Cart abandonment rate reduced by 30%',
        'Average order value increased by 15% due to better upselling and cross-selling features'
      ],
      image: '/ecommerceplatform.jpg',
      category: 'E-commerce',
      industry: 'Retail',
      date: 'February 2024',
      duration: '7 months',
      services: ['Custom E-commerce Development', 'Mobile-First Design', 'UX/UI Design', 'Payment Gateway Integration', 'Personalization Engine'],
      testimonial: {
        quote: 'Markov International built us a stunning and highly functional e-commerce site. Our mobile sales have skyrocketed, and customers love the new shopping experience!',
        name: 'Sophia Lorenza',
        position: 'Founder & CEO',
        company: 'Chic Threads Boutique',
        image: '/placeholder.svg?height=48&width=48&text=SL'
      },
    },
    {
      slug: 'bpo-financial-institution',
      title: 'BPO Services for Financial Institution',
      client: 'Apex Financial Group',
      summary: 'Our BPO services streamlined back-office operations, resulting in 35% cost savings and improved processing times for a leading financial institution.',
      overview: 'Apex Financial Group, a well-established financial services provider, was looking to optimize its back-office operations, including loan processing and customer account management, to reduce costs and improve efficiency.',
      challenge: 'The institution was struggling with high operational costs due to manual processes, long processing times for financial applications, and maintaining compliance with evolving financial regulations.',
      solution: 'We provided comprehensive BPO services, automating key back-office tasks, implementing a digital workflow for loan processing, and setting up a dedicated team for customer account services, all while ensuring strict adherence to compliance standards.',
      results: [
        'Achieved 35% cost savings in back-office operations',
        'Loan application processing time reduced by 50%',
        'Improved accuracy in data entry and processing to 99.8%',
        'Enhanced customer satisfaction due to faster service delivery'
      ],
      image: '/bpo.jpg',
      category: 'BPO',
      industry: 'Finance',
      date: 'April 2024',
      duration: '10 months',
      services: ['Loan Processing Outsourcing', 'Customer Account Management', 'Data Entry & Processing', 'Compliance Support'],
      testimonial: {
        quote: "Markov's BPO solutions have significantly improved our efficiency and bottom line. Their expertise in financial services is evident in the results.",
        name: 'James Wilson',
        position: 'COO',
        company: 'Apex Financial Group',
        image: '/placeholder.svg?height=48&width=48&text=JW'
      },
    },
    {
      slug: 'digital-marketing-elearning',
      title: 'Digital Marketing for E-learning Platform',
      client: 'LearnFast Online',
      summary: 'We implemented a comprehensive digital marketing strategy that increased student enrollments by 90% and enhanced brand visibility in the education sector.',
      overview: 'LearnFast Online, an innovative e-learning platform, sought to expand its user base and establish itself as a leader in the competitive online education market. They needed a robust digital marketing strategy to drive student acquisition.',
      challenge: 'The main challenges were to effectively reach and engage potential students in a crowded market, optimize marketing spend for maximum ROI, and build a strong brand presence to foster trust and credibility.',
      solution: 'Our team developed and executed a data-driven digital marketing strategy. This included targeted content marketing, SEO for educational keywords, social media campaigns focused on student communities, and performance marketing (PPC) to drive enrollments.',
      results: [
        'Student enrollments increased by 90% in one year',
        'Organic website traffic grew by 150% through SEO efforts',
        'Cost per acquisition (CPA) for new students reduced by 25%',
        'Significant improvement in brand visibility and engagement on social media'
      ],
      image: '/digimar-elearningplat.jpg',
      category: 'Digital Marketing',
      industry: 'Education',
      date: 'June 2024',
      duration: '12 months',
      services: ['Content Marketing', 'SEO Strategy', 'Social Media Marketing', 'PPC Campaign Management', 'Analytics & Reporting'],
      testimonial: {
        quote: 'The digital marketing strategy from Markov has been phenomenal. Our student numbers have grown beyond our expectations, and our brand is now much more recognized.',
        name: 'Anita Sharma',
        position: 'CEO',
        company: 'LearnFast Online',
        image: '/placeholder.svg?height=48&width=48&text=AS'
      },
    }
  ];

  const caseStudiesData: { [key: string]: any } = {};
  allCaseStudiesList.forEach(cs => {
    caseStudiesData[cs.slug] = {
      ...cs,
      // Dynamically generate relatedCaseStudies for each study
      // This ensures each study has 3 *other* related studies
      relatedCaseStudies: allCaseStudiesList
        .filter(otherCs => otherCs.slug !== cs.slug) // Exclude self
        .sort(() => 0.5 - Math.random()) // Shuffle to get varied related studies
        .slice(0, 3) // Take the first 3
        .map(related => ({
          title: related.title,
          summary: related.summary,
          image: related.image,
          slug: related.slug,
        })),
    };
  });
  
  // Correction for `ecommerce-retail-giant` related studies as per original example, if needed, or rely on dynamic generation.
  // The dynamic generation above is generally more robust for maintenance.
  // If specific related studies are required, they can be hardcoded like this:
  /*
  if (caseStudiesData['bpo-healthcare-provider']) {
    caseStudiesData['bpo-healthcare-provider'].relatedCaseStudies = [
      { title: caseStudiesData['call-center-education'].title, summary: caseStudiesData['call-center-education'].summary, image: caseStudiesData['call-center-education'].image, slug: 'call-center-education'},
      { title: caseStudiesData['bpo-financial-institution'].title, summary: caseStudiesData['bpo-financial-institution'].summary, image: caseStudiesData['bpo-financial-institution'].image, slug: 'bpo-financial-institution'},
      { title: caseStudiesData['telecommunication-healthcare'].title, summary: caseStudiesData['telecommunication-healthcare'].summary, image: caseStudiesData['telecommunication-healthcare'].image, slug: 'telecommunication-healthcare'}
    ];
  }
  if (caseStudiesData['ecommerce-retail-giant']) {
    caseStudiesData['ecommerce-retail-giant'].relatedCaseStudies = [
      { title: caseStudiesData['digital-marketing-entertainment'].title, summary: caseStudiesData['digital-marketing-entertainment'].summary, image: caseStudiesData['digital-marketing-entertainment'].image, slug: 'digital-marketing-entertainment'},
      { title: caseStudiesData['ecommerce-fashion-retailer'].title, summary: caseStudiesData['ecommerce-fashion-retailer'].summary, image: caseStudiesData['ecommerce-fashion-retailer'].image, slug: 'ecommerce-fashion-retailer'},
      { title: caseStudiesData['it-solutions-finance'].title, summary: caseStudiesData['it-solutions-finance'].summary, image: caseStudiesData['it-solutions-finance'].image, slug: 'it-solutions-finance'}
    ];
  }
  */
  // The dynamic approach is preferred for scalability, so the above manual override is commented out.

  return caseStudiesData[slug];
}